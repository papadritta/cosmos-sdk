(window.webpackJsonp=window.webpackJsonp||[]).push([[252],{776:function(e,t,n){"use strict";n.r(t);var a=n(1),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"staking-tombstone"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#staking-tombstone"}},[e._v("#")]),e._v(" Staking Tombstone")]),e._v(" "),n("h2",{attrs:{id:"abstract"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),n("p",[e._v("In the current implementation of the "),n("code",[e._v("slashing")]),e._v(' module, when the consensus engine\ninforms the state machine of a validator\'s consensus fault, the validator is\npartially slashed, and put into a "jail period", a period of time in which they\nare not allowed to rejoin the validator set. However, because of the nature of\nconsensus faults and ABCI, there can be a delay between an infraction occurring,\nand evidence of the infraction reaching the state machine (this is one of the\nprimary reasons for the existence of the unbonding period).')]),e._v(" "),n("blockquote",[n("p",[e._v("Note: The tombstone concept, only applies to faults that have a delay between\nthe infraction occurring and evidence reaching the state machine. For example,\nevidence of a validator double signing may take a while to reach the state machine\ndue to unpredictable evidence gossip layer delays and the ability of validators to\nselectively reveal double-signatures (e.g. to infrequently-online light clients).\nLiveness slashing, on the other hand, is detected immediately as soon as the\ninfraction occurs, and therefore no slashing period is needed. A validator is\nimmediately put into jail period, and they cannot commit another liveness fault\nuntil they unjail. In the future, there may be other types of byzantine faults\nthat have delays (for example, submitting evidence of an invalid proposal as a transaction).\nWhen implemented, it will have to be decided whether these future types of\nbyzantine faults will result in a tombstoning (and if not, the slash amounts\nwill not be capped by a slashing period).")])]),e._v(" "),n("p",[e._v("In the current system design, once a validator is put in the jail for a consensus\nfault, after the "),n("code",[e._v("JailPeriod")]),e._v(" they are allowed to send a transaction to "),n("code",[e._v("unjail")]),e._v("\nthemselves, and thus rejoin the validator set.")]),e._v(" "),n("p",[e._v('One of the "design desires" of the '),n("code",[e._v("slashing")]),e._v(" module is that if multiple\ninfractions occur before evidence is executed (and a validator is put in jail),\nthey should only be punished for single worst infraction, but not cumulatively.\nFor example, if the sequence of events is:")]),e._v(" "),n("ol",[n("li",[e._v("Validator A commits Infraction 1 (worth 30% slash)")]),e._v(" "),n("li",[e._v("Validator A commits Infraction 2 (worth 40% slash)")]),e._v(" "),n("li",[e._v("Validator A commits Infraction 3 (worth 35% slash)")]),e._v(" "),n("li",[e._v("Evidence for Infraction 1 reaches state machine (and validator is put in jail)")]),e._v(" "),n("li",[e._v("Evidence for Infraction 2 reaches state machine")]),e._v(" "),n("li",[e._v("Evidence for Infraction 3 reaches state machine")])]),e._v(" "),n("p",[e._v("Only Infraction 2 should have its slash take effect, as it is the highest. This\nis done, so that in the case of the compromise of a validator's consensus key,\nthey will only be punished once, even if the hacker double-signs many blocks.\nBecause, the unjailing has to be done with the validator's operator key, they\nhave a chance to re-secure their consensus key, and then signal that they are\nready using their operator key. We call this period during which we track only\nthe max infraction, the \"slashing period\".")]),e._v(" "),n("p",[e._v("Once, a validator rejoins by unjailing themselves, we begin a new slashing period;\nif they commit a new infraction after unjailing, it gets slashed cumulatively on\ntop of the worst infraction from the previous slashing period.")]),e._v(" "),n("p",[e._v("However, while infractions are grouped based off of the slashing periods, because\nevidence can be submitted up to an "),n("code",[e._v("unbondingPeriod")]),e._v(" after the infraction, we\nstill have to allow for evidence to be submitted for previous slashing periods.\nFor example, if the sequence of events is:")]),e._v(" "),n("ol",[n("li",[e._v("Validator A commits Infraction 1 (worth 30% slash)")]),e._v(" "),n("li",[e._v("Validator A commits Infraction 2 (worth 40% slash)")]),e._v(" "),n("li",[e._v("Evidence for Infraction 1 reaches state machine (and Validator A is put in jail)")]),e._v(" "),n("li",[e._v("Validator A unjails")])]),e._v(" "),n("p",[e._v("We are now in a new slashing period, however we still have to keep the door open\nfor the previous infraction, as the evidence for Infraction 2 may still come in.\nAs the number of slashing periods increase, it creates more complexity as we have\nto keep track of the highest infraction amount for every single slashing period.")]),e._v(" "),n("blockquote",[n("p",[e._v("Note: Currently, according to the "),n("code",[e._v("slashing")]),e._v(" module spec, a new slashing period\nis created every time a validator is unbonded then rebonded. This should probably\nbe changed to jailed/unjailed. See issue "),n("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/3205",target:"_blank",rel:"noopener noreferrer"}},[e._v("#3205"),n("OutboundLink")],1),e._v("\nfor further details. For the remainder of this, I will assume that we only start\na new slashing period when a validator gets unjailed.")])]),e._v(" "),n("p",[e._v("The maximum number of slashing periods is the "),n("code",[e._v("len(UnbondingPeriod) / len(JailPeriod)")]),e._v(".\nThe current defaults in Gaia for the "),n("code",[e._v("UnbondingPeriod")]),e._v(" and "),n("code",[e._v("JailPeriod")]),e._v(" are 3 weeks\nand 2 days, respectively. This means there could potentially be up to 11 slashing\nperiods concurrently being tracked per validator. If we set the "),n("code",[e._v("JailPeriod >= UnbondingPeriod")]),e._v(",\nwe only have to track 1 slashing period (i.e not have to track slashing periods).")]),e._v(" "),n("p",[e._v('Currently, in the jail period implementation, once a validator unjails, all of\ntheir delegators who are delegated to them (haven\'t unbonded / redelegated away),\nstay with them. Given that consensus safety faults are so egregious\n(way more so than liveness faults), it is probably prudent to have delegators not\n"auto-rebond" to the validator.')]),e._v(" "),n("h3",{attrs:{id:"proposal-infinite-jail"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#proposal-infinite-jail"}},[e._v("#")]),e._v(" Proposal: infinite jail")]),e._v(" "),n("p",[e._v('We propose setting the "jail time" for a\nvalidator who commits a consensus safety fault, to '),n("code",[e._v("infinite")]),e._v(' (i.e. a tombstone state).\nThis essentially kicks the validator out of the validator set and does not allow\nthem to re-enter the validator set. All of their delegators (including the operator themselves)\nhave to either unbond or redelegate away. The validator operator can create a new\nvalidator if they would like, with a new operator key and consensus key, but they\nhave to "re-earn" their delegations back.')]),e._v(" "),n("p",[e._v("Implementing the tombstone system and getting rid of the slashing period tracking\nwill make the "),n("code",[e._v("slashing")]),e._v(" module way simpler, especially because we can remove all\nof the hooks defined in the "),n("code",[e._v("slashing")]),e._v(" module consumed by the "),n("code",[e._v("staking")]),e._v(" module\n(the "),n("code",[e._v("slashing")]),e._v(" module still consumes hooks defined in "),n("code",[e._v("staking")]),e._v(").")]),e._v(" "),n("h3",{attrs:{id:"single-slashing-amount"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#single-slashing-amount"}},[e._v("#")]),e._v(" Single slashing amount")]),e._v(" "),n("p",[e._v("Another optimization that can be made is that if we assume that all ABCI faults\nfor Tendermint consensus are slashed at the same level, we don't have to keep\ntrack of \"max slash\". Once an ABCI fault happens, we don't have to worry about\ncomparing potential future ones to find the max.")]),e._v(" "),n("p",[e._v("Currently the only Tendermint ABCI fault is:")]),e._v(" "),n("ul",[n("li",[e._v("Unjustified precommits (double signs)")])]),e._v(" "),n("p",[e._v("It is currently planned to include the following fault in the near future:")]),e._v(" "),n("ul",[n("li",[e._v("Signing a precommit when you're in unbonding phase (needed to make light client bisection safe)")])]),e._v(" "),n("p",[e._v("Given that these faults are both attributable byzantine faults, we will likely\nwant to slash them equally, and thus we can enact the above change.")]),e._v(" "),n("blockquote",[n("p",[e._v("Note: This change may make sense for current Tendermint consensus, but maybe\nnot for a different consensus algorithm or future versions of Tendermint that\nmay want to punish at different levels (for example, partial slashing).")])])])}),[],!1,null,null,null);t.default=i.exports}}]);