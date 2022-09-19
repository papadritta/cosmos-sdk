(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{662:function(e,a,r){"use strict";r.r(a);var t=r(1),o=Object(t.a)({},(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"runtx-recovery-middleware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#runtx-recovery-middleware"}},[e._v("#")]),e._v(" RunTx recovery middleware")]),e._v(" "),r("p",[r("code",[e._v("BaseApp.runTx()")]),e._v(" function handles Golang panics that might occur during transactions execution, for example, keeper has faced an invalid state and paniced.\nDepending on the panic type different handler is used, for instance the default one prints an error log message.\nRecovery middleware is used to add custom panic recovery for Cosmos SDK application developers.")]),e._v(" "),r("p",[e._v("More context could be found in the corresponding "),r("RouterLink",{attrs:{to:"/architecture/adr-022-custom-panic-handling.html"}},[e._v("ADR-022")]),e._v(".")],1),e._v(" "),r("p",[e._v("Implementation could be found in the "),r("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/v0.46.0-alpha2/x/auth/middleware/recovery.go",target:"_blank",rel:"noopener noreferrer"}},[e._v("recovery.go"),r("OutboundLink")],1),e._v(" file.")]),e._v(" "),r("h2",{attrs:{id:"interface"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#interface"}},[e._v("#")]),e._v(" Interface")]),e._v(" "),r("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBSZWNvdmVyeUhhbmR0cmVlL3YwLjQ2LjAtYWxwaGEyCg=="}}),e._v(" "),r("p",[r("code",[e._v("recoveryObj")]),e._v(" is a return value for "),r("code",[e._v("recover()")]),e._v(" function from the "),r("code",[e._v("buildin")]),e._v(" Golang package.")]),e._v(" "),r("p",[r("strong",[e._v("Contract:")])]),e._v(" "),r("ul",[r("li",[e._v("RecoveryHandler returns "),r("code",[e._v("nil")]),e._v(" if "),r("code",[e._v("recoveryObj")]),e._v(" wasn't handled and should be passed to the next recovery middleware;")]),e._v(" "),r("li",[e._v("RecoveryHandler returns a non-nil "),r("code",[e._v("error")]),e._v(" if "),r("code",[e._v("recoveryObj")]),e._v(" was handled;")])]),e._v(" "),r("h2",{attrs:{id:"custom-recoveryhandler-register"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#custom-recoveryhandler-register"}},[e._v("#")]),e._v(" Custom RecoveryHandler register")]),e._v(" "),r("p",[r("code",[e._v("BaseApp.AddRunTxRecoveryHandler(handlers ...RecoveryHandler)")])]),e._v(" "),r("p",[e._v("BaseApp method adds recovery middleware to the default recovery chain.")]),e._v(" "),r("h2",{attrs:{id:"example"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),r("p",[e._v('Lets assume we want to emit the "Consensus failure" chain state if some particular error occurred.')]),e._v(" "),r("p",[e._v("We have a module keeper that panics:")]),e._v(" "),r("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoayBGb29LZWVwZXIpIERvKG9iaiBpbnRlcmZhY2V7fSkgewogICAgaWYgb2JqID09IG5pbCB7CiAgICAgICAgLy8gdGhhdCBzaG91bGRuJ3QgaGFwcGVuLCB3ZSBuZWVkIHRvIGNyYXNoIHRoZSBhcHAKICAgICAgICBlcnIgOj0gc2RrRXJyb3JzLldyYXAoZm9vVHlwZXMuSW50ZXJuYWxFcnJvciwgJnF1b3Q7b2JqIGlzIG5pbCZxdW90OykKICAgICAgICBwYW5pYyhlcnIpCiAgICB9Cn0K"}}),e._v(" "),r("p",[e._v("By default that panic would be recovered and an error message will be printed to log. To override that behaviour we should register a custom RecoveryHandler:")]),e._v(" "),r("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQ29zbW9zIFNESyBhcHBsaWNhdGlvbiBjb25zdHJ1Y3RvcgpjdXN0b21IYW5kbGVyIDo9IGZ1bmMocmVjb3ZlcnlPYmogaW50ZXJmYWNle30pIGVycm9yIHsKICAgIGVyciwgb2sgOj0gcmVjb3ZlcnlPYmouKGVycm9yKQogICAgaWYgIW9rIHsKICAgICAgICByZXR1cm4gbmlsCiAgICB9CgogICAgaWYgZm9vVHlwZXMuSW50ZXJuYWxFcnJvci5JcyhlcnIpIHsKICAgICAgICBwYW5pYyhmbXQuRXJyb3JmKCZxdW90O0Zvb0tlZXBlciBkaWQgcGFuaWMgd2l0aCBlcnJvcjogJXcmcXVvdDssIGVycikpCiAgICB9CgogICAgcmV0dXJuIG5pbAp9CgpiYXNlQXBwIDo9IGJhc2VhcHAuTmV3QmFzZUFwcCguLi4pCmJhc2VBcHAuQWRkUnVuVHhSZWNvdmVyeUhhbmRsZXIoY3VzdG9tSGFuZGxlcikK"}}),e._v(" "),r("h2",{attrs:{hide:"",id:"next"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),r("p",{attrs:{hide:""}},[e._v("Learn about the "),r("RouterLink",{attrs:{to:"/ibc/"}},[e._v("IBC")]),e._v(" protocol")],1)],1)}),[],!1,null,null,null);a.default=o.exports}}]);