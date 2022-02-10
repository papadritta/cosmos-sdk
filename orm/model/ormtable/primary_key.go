package ormtable

import (
	"context"

	"github.com/cosmos/cosmos-sdk/orm/types/ormerrors"

	"github.com/cosmos/cosmos-sdk/orm/internal/fieldnames"

	"github.com/cosmos/cosmos-sdk/orm/model/ormlist"

	"github.com/cosmos/cosmos-sdk/orm/encoding/encodeutil"

	"google.golang.org/protobuf/proto"
	"google.golang.org/protobuf/reflect/protoreflect"

	"github.com/cosmos/cosmos-sdk/orm/encoding/ormkv"
)

// primaryKeyIndex defines an UniqueIndex for the primary key.
type primaryKeyIndex struct {
	*ormkv.PrimaryKeyCodec
	fields         fieldnames.FieldNames
	indexers       []indexer
	getBackend     func(context.Context) (Backend, error)
	getReadBackend func(context.Context) (ReadBackend, error)
}

func (p primaryKeyIndex) List(ctx context.Context, prefixKey []interface{}, options ...ormlist.Option) (Iterator, error) {
	backend, err := p.getReadBackend(ctx)
	if err != nil {
		return nil, err
	}

	return prefixIterator(backend.CommitmentStoreReader(), backend, p, p.KeyCodec, prefixKey, options)
}

func (p primaryKeyIndex) ListRange(ctx context.Context, from, to []interface{}, options ...ormlist.Option) (Iterator, error) {
	backend, err := p.getReadBackend(ctx)
	if err != nil {
		return nil, err
	}

	return rangeIterator(backend.CommitmentStoreReader(), backend, p, p.KeyCodec, from, to, options)
}

func (p primaryKeyIndex) doNotImplement() {}

func (p primaryKeyIndex) Has(ctx context.Context, key ...interface{}) (found bool, err error) {
	backend, err := p.getReadBackend(ctx)
	if err != nil {
		return false, err
	}

	return p.has(backend, encodeutil.ValuesOf(key...))
}

func (p primaryKeyIndex) has(backend ReadBackend, values []protoreflect.Value) (found bool, err error) {
	keyBz, err := p.EncodeKey(values)
	if err != nil {
		return false, err
	}

	return backend.CommitmentStoreReader().Has(keyBz)
}

func (p primaryKeyIndex) Get(ctx context.Context, message proto.Message, values ...interface{}) (found bool, err error) {
	backend, err := p.getReadBackend(ctx)
	if err != nil {
		return false, err
	}

	return p.get(backend, message, encodeutil.ValuesOf(values...))
}

func (p primaryKeyIndex) get(backend ReadBackend, message proto.Message, values []protoreflect.Value) (found bool, err error) {
	key, err := p.EncodeKey(values)
	if err != nil {
		return false, err
	}

	return p.getByKeyBytes(backend, key, values, message)
}

func (p primaryKeyIndex) DeleteBy(ctx context.Context, primaryKeyValues ...interface{}) error {
	if len(primaryKeyValues) == len(p.GetFieldNames()) {
		return p.doDelete(ctx, encodeutil.ValuesOf(primaryKeyValues...))
	}

	it, err := p.List(ctx, primaryKeyValues)
	if err != nil {
		return err
	}

	return p.deleteByIterator(ctx, it)
}

func (p primaryKeyIndex) DeleteRange(ctx context.Context, from, to []interface{}) error {
	it, err := p.ListRange(ctx, from, to)
	if err != nil {
		return err
	}

	return p.deleteByIterator(ctx, it)
}

func (p primaryKeyIndex) doDelete(ctx context.Context, primaryKeyValues []protoreflect.Value) error {
	backend, err := p.getBackend(ctx)
	if err != nil {
		return err
	}

	// delete object
	writer := newBatchIndexCommitmentWriter(backend)
	defer writer.Close()

	pk, err := p.EncodeKey(primaryKeyValues)
	if err != nil {
		return err
	}

	msg := p.MessageType().New().Interface()
	found, err := p.getByKeyBytes(backend, pk, primaryKeyValues, msg)
	if err != nil {
		return err
	}

	if !found {
		return nil
	}

	err = p.doDeleteWithWriteBatch(writer, pk, msg)
	if err != nil {
		return err
	}

	return writer.Write()
}

func (p primaryKeyIndex) doDeleteWithWriteBatch(writer *batchIndexCommitmentWriter, primaryKeyBz []byte, message proto.Message) error {
	if hooks := writer.Hooks(); hooks != nil {
		err := hooks.OnDelete(message)
		if err != nil {
			return err
		}
	}

	// delete object
	err := writer.CommitmentStore().Delete(primaryKeyBz)
	if err != nil {
		return err
	}

	// clear indexes
	mref := message.ProtoReflect()
	indexStoreWriter := writer.IndexStore()
	for _, idx := range p.indexers {
		err := idx.onDelete(indexStoreWriter, mref)
		if err != nil {
			return err
		}
	}

	return nil
}

func (p primaryKeyIndex) getByKeyBytes(store ReadBackend, key []byte, keyValues []protoreflect.Value, message proto.Message) (found bool, err error) {
	bz, err := store.CommitmentStoreReader().Get(key)
	if err != nil {
		return false, err
	}

	if bz == nil {
		return false, nil
	}

	return true, p.Unmarshal(keyValues, bz, message)
}

func (p primaryKeyIndex) readValueFromIndexKey(_ ReadBackend, primaryKey []protoreflect.Value, value []byte, message proto.Message) error {
	return p.Unmarshal(primaryKey, value, message)
}

func (p primaryKeyIndex) Fields() string {
	return p.fields.String()
}

func (p primaryKeyIndex) deleteByIterator(ctx context.Context, it Iterator) error {
	backend, err := p.getBackend(ctx)
	if err != nil {
		return err
	}

	// we batch writes while the iterator is still open
	writer := newBatchIndexCommitmentWriter(backend)
	defer writer.Close()

	for it.Next() {
		_, pk, err := it.Keys()
		if err != nil {
			return err
		}

		msg, err := it.GetMessage()
		if err != nil {
			return err
		}

		pkBz, err := p.EncodeKey(pk)
		if err != nil {
			return err
		}

		err = p.doDeleteWithWriteBatch(writer, pkBz, msg)
		if err != nil {
			return err
		}
	}

	// close iterator
	it.Close()
	// then write batch
	return writer.Write()
}

func (t primaryKeyIndex) doSave(writer *batchIndexCommitmentWriter, message proto.Message, mode saveMode) error {
	mref := message.ProtoReflect()
	pkValues, pk, err := t.EncodeKeyFromMessage(mref)
	if err != nil {
		return err
	}

	existing := mref.New().Interface()
	haveExisting, err := t.getByKeyBytes(writer, pk, pkValues, existing)
	if err != nil {
		return err
	}

	if !haveExisting {
		existing = nil
	}

	err = t.doUpdateWithWriteBatch(writer, pkValues, pk, existing, message, mode)
	if err != nil {
		return err
	}

	return writer.Write()
}

func (p primaryKeyIndex) doUpdateWithWriteBatch(writer *batchIndexCommitmentWriter, pkValues []protoreflect.Value, pkBz []byte, existing, new protoreflect.ProtoMessage, mode saveMode) error {
	mref := new.ProtoReflect()
	if existing != nil {
		if mode == saveModeInsert {
			return ormerrors.PrimaryKeyConstraintViolation.Wrapf("%q:%+v", mref.Descriptor().FullName(), pkValues)
		}

		if hooks := writer.Hooks(); hooks != nil {
			err := hooks.OnUpdate(existing, new)
			if err != nil {
				return err
			}
		}
	} else {
		if mode == saveModeUpdate {
			return ormerrors.NotFoundOnUpdate.Wrapf("%q", mref.Descriptor().FullName())
		}

		if hooks := writer.Hooks(); hooks != nil {
			err := hooks.OnInsert(new)
			if err != nil {
				return err
			}
		}
	}

	// temporarily clear primary key
	p.ClearValues(mref)

	// store object
	bz, err := proto.MarshalOptions{Deterministic: true}.Marshal(new)
	err = writer.CommitmentStore().Set(pkBz, bz)
	if err != nil {
		return err
	}

	// set primary key again
	p.SetKeyValues(mref, pkValues)

	// set indexes
	indexStoreWriter := writer.IndexStore()
	if existing == nil {
		for _, idx := range p.indexers {
			err = idx.onInsert(indexStoreWriter, mref)
			if err != nil {
				return err
			}

		}
	} else {
		existingMref := existing.ProtoReflect()
		for _, idx := range p.indexers {
			err = idx.onUpdate(indexStoreWriter, mref, existingMref)
			if err != nil {
				return err
			}
		}
	}

	return nil
}

func (p primaryKeyIndex) addPendingDelete(writer *batchIndexCommitmentWriter, primaryKey []protoreflect.Value, existingBz []byte) error {
	pkBz, err := p.EncodeKey(primaryKey)
	if err != nil {
		return err
	}

	msg := p.MessageType().New().Interface()
	err = p.Unmarshal(primaryKey, existingBz, msg)
	if err != nil {
		return err
	}

	return p.doDeleteWithWriteBatch(writer, pkBz, msg)
}

func (p primaryKeyIndex) addPendingUpdate(writer *batchIndexCommitmentWriter, primaryKey []protoreflect.Value, existingBz []byte, new proto.Message) error {
	newPk := p.GetKeyValues(new.ProtoReflect())
	if p.CompareKeys(primaryKey, newPk) != 0 {
		return ormerrors.InvalidIteratorUpdate
	}

	pkBz, err := p.EncodeKey(primaryKey)
	if err != nil {
		return err
	}

	existing := p.MessageType().New().Interface()
	err = p.Unmarshal(primaryKey, existingBz, existing)
	if err != nil {
		return err
	}

	return p.doUpdateWithWriteBatch(writer, primaryKey, pkBz, existing, new, saveModeUpdate)
}

var _ UniqueIndex = &primaryKeyIndex{}
