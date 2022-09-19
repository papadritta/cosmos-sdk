(window.webpackJsonp=window.webpackJsonp||[]).push([[253],{777:function(a,d,s){"use strict";s.r(d);var l=s(1),e=Object(l.a)({},(function(){var a=this,d=a.$createElement,s=a._self._c||d;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"messages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#messages"}},[a._v("#")]),a._v(" Messages")]),a._v(" "),s("p",[a._v("In this section we describe the processing of messages for the "),s("code",[a._v("slashing")]),a._v(" module.")]),a._v(" "),s("h2",{attrs:{id:"unjail"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unjail"}},[a._v("#")]),a._v(" Unjail")]),a._v(" "),s("p",[a._v("If a validator was automatically unbonded due to downtime and wishes to come back online &\npossibly rejoin the bonded set, it must send "),s("code",[a._v("MsgUnjail")]),a._v(":")]),a._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"Ly8gTXNnVW5qYWlsIGlzIGFuIHNkay5Nc2cgdXNlZCBmb3IgdW5qYWlsaW5nIGEgamFpbGVkIHZhbGlkYXRvciwgdGh1cyByZXR1cm5pbmcKLy8gdGhlbSBpbnRvIHRoZSBib25kZWQgdmFsaWRhdG9yIHNldCwgc28gdGhleSBjYW4gYmVnaW4gcmVjZWl2aW5nIHByb3Zpc2lvbnMKLy8gYW5kIHJld2FyZHMgYWdhaW4uCm1lc3NhZ2UgTXNnVW5qYWlsIHsKICBzdHJpbmcgdmFsaWRhdG9yX2FkZHIgPSAxOwp9Cg=="}}),a._v(" "),s("p",[a._v("Below is a pseudocode of the "),s("code",[a._v("MsgSrv/Unjail")]),a._v(" RPC:")]),a._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dW5qYWlsKHR4IE1zZ1VuamFpbCkKICAgIHZhbGlkYXRvciA9IGdldFZhbGlkYXRvcih0eC5WYWxpZGF0b3JBZGRyKQogICAgaWYgdmFsaWRhdG9yID09IG5pbAogICAgICBmYWlsIHdpdGggJnF1b3Q7Tm8gdmFsaWRhdG9yIGZvdW5kJnF1b3Q7CgogICAgaWYgZ2V0U2VsZkRlbGVnYXRpb24odmFsaWRhdG9yKSA9PSAwCiAgICAgIGZhaWwgd2l0aCAmcXVvdDt2YWxpZGF0b3IgbXVzdCBzZWxmIGRlbGVnYXRlIGJlZm9yZSB1bmphaWxpbmcmcXVvdDsKCiAgICBpZiAhdmFsaWRhdG9yLkphaWxlZAogICAgICBmYWlsIHdpdGggJnF1b3Q7VmFsaWRhdG9yIG5vdCBqYWlsZWQsIGNhbm5vdCB1bmphaWwmcXVvdDsKCiAgICBpbmZvID0gR2V0VmFsaWRhdG9yU2lnbmluZ0luZm8ob3BlcmF0b3IpCiAgICBpZiBpbmZvLlRvbWJzdG9uZWQKICAgICAgZmFpbCB3aXRoICZxdW90O1RvbWJzdG9uZWQgdmFsaWRhdG9yIGNhbm5vdCBiZSB1bmphaWxlZCZxdW90OwogICAgaWYgYmxvY2sgdGltZSAmbHQ7IGluZm8uSmFpbGVkVW50aWwKICAgICAgZmFpbCB3aXRoICZxdW90O1ZhbGlkYXRvciBzdGlsbCBqYWlsZWQsIGNhbm5vdCB1bmphaWwgdW50aWwgcGVyaW9kIGhhcyBleHBpcmVkJnF1b3Q7CgogICAgdmFsaWRhdG9yLkphaWxlZCA9IGZhbHNlCiAgICBzZXRWYWxpZGF0b3IodmFsaWRhdG9yKQoKICAgIHJldHVybgo="}}),a._v(" "),s("p",[a._v("If the validator has enough stake to be in the top "),s("code",[a._v("n = MaximumBondedValidators")]),a._v(", it will be automatically rebonded,\nand all delegators still delegated to the validator will be rebonded and begin to again collect\nprovisions and rewards.")])],1)}),[],!1,null,null,null);d.default=e.exports}}]);