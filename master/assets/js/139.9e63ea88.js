(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{659:function(l,d,a){"use strict";a.r(d);var c=a(1),e=Object(c.a)({},(function(){var l=this,d=l.$createElement,a=l._self._c||d;return a("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[a("h1",{attrs:{id:"module-simulation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module-simulation"}},[l._v("#")]),l._v(" Module Simulation")]),l._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[l._v("#")]),l._v(" Prerequisites")]),l._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/using-the-sdk/simulation.html"}},[l._v("Cosmos Blockchain Simulator")])],1)]),l._v(" "),a("h2",{attrs:{id:"synopsis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#synopsis"}},[l._v("#")]),l._v(" Synopsis")]),l._v(" "),a("p",[l._v("This document details how to define each module simulation functions to be\nintegrated with the application "),a("code",[l._v("SimulationManager")]),l._v(".")]),l._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#simulation-package"}},[l._v("Simulation package")]),l._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#store-decoders"}},[l._v("Store decoders")])]),l._v(" "),a("li",[a("a",{attrs:{href:"#randomized-genesis"}},[l._v("Randomized genesis")])]),l._v(" "),a("li",[a("a",{attrs:{href:"#randomized-parameter-changes"}},[l._v("Randomized parameter changes")])]),l._v(" "),a("li",[a("a",{attrs:{href:"#random-weighted-operations"}},[l._v("Random weighted operations")])]),l._v(" "),a("li",[a("a",{attrs:{href:"#random-proposal-contents"}},[l._v("Random proposal contents")])])])]),l._v(" "),a("li",[a("a",{attrs:{href:"#registering-simulation-functions"}},[l._v("Registering simulation functions")])]),l._v(" "),a("li",[a("a",{attrs:{href:"#app-simulator-manager"}},[l._v("App Simulator manager")])])]),l._v(" "),a("h2",{attrs:{id:"simulation-package"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simulation-package"}},[l._v("#")]),l._v(" Simulation package")]),l._v(" "),a("p",[l._v("Every module that implements the Cosmos SDK simulator needs to have a "),a("code",[l._v("x/<module>/simulation")]),l._v("\npackage which contains the primary functions required by the fuzz tests: store\ndecoders, randomized genesis state and parameters, weighted operations and proposal\ncontents.")]),l._v(" "),a("h3",{attrs:{id:"store-decoders"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#store-decoders"}},[l._v("#")]),l._v(" Store decoders")]),l._v(" "),a("p",[l._v("Registering the store decoders is required for the "),a("code",[l._v("AppImportExport")]),l._v(". This allows\nfor the key-value pairs from the stores to be decoded ("),a("em",[l._v("i.e")]),l._v(" unmarshalled)\nto their corresponding types. In particular, it matches the key to a concrete type\nand then unmarshals the value from the "),a("code",[l._v("KVPair")]),l._v(" to the type provided.")]),l._v(" "),a("p",[l._v("You can use the example "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.46.0/x/distribution/simulation/decoder.go",target:"_blank",rel:"noopener noreferrer"}},[l._v("here"),a("OutboundLink")],1),l._v(" from the distribution module to implement your store decoders.")]),l._v(" "),a("h3",{attrs:{id:"randomized-genesis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#randomized-genesis"}},[l._v("#")]),l._v(" Randomized genesis")]),l._v(" "),a("p",[l._v("The simulator tests different scenarios and values for genesis parameters\nin order to fully test the edge cases of specific modules. The "),a("code",[l._v("simulator")]),l._v(" package from each module must expose a "),a("code",[l._v("RandomizedGenState")]),l._v(" function to generate the initial random "),a("code",[l._v("GenesisState")]),l._v(" from a given seed.")]),l._v(" "),a("p",[l._v("Once the module genesis parameter are generated randomly (or with the key and\nvalues defined in a "),a("code",[l._v("params")]),l._v(" file), they are marshaled to JSON format and added\nto the app genesis JSON to use it on the simulations.")]),l._v(" "),a("p",[l._v("You can check an example on how to create the randomized genesis "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.46.0/x/staking/simulation/genesis.go",target:"_blank",rel:"noopener noreferrer"}},[l._v("here"),a("OutboundLink")],1),l._v(".")]),l._v(" "),a("h3",{attrs:{id:"randomized-parameter-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#randomized-parameter-changes"}},[l._v("#")]),l._v(" Randomized parameter changes")]),l._v(" "),a("p",[l._v("The simulator is able to test parameter changes at random. The simulator package from each module must contain a "),a("code",[l._v("RandomizedParams")]),l._v(" func that will simulate parameter changes of the module throughout the simulations lifespan.")]),l._v(" "),a("p",[l._v("You can see how an example of what is needed to fully test parameter changes "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.46.0/x/staking/simulation/params.go",target:"_blank",rel:"noopener noreferrer"}},[l._v("here"),a("OutboundLink")],1)]),l._v(" "),a("h3",{attrs:{id:"random-weighted-operations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#random-weighted-operations"}},[l._v("#")]),l._v(" Random weighted operations")]),l._v(" "),a("p",[l._v("Operations are one of the crucial parts of the Cosmos SDK simulation. They are the transactions\n("),a("code",[l._v("Msg")]),l._v(") that are simulated with random field values. The sender of the operation\nis also assigned randomly.")]),l._v(" "),a("p",[l._v("Operations on the simulation are simulated using the full "),a("RouterLink",{attrs:{to:"/core/transactions.html"}},[l._v("transaction cycle")]),l._v(" of a\n"),a("code",[l._v("ABCI")]),l._v(" application that exposes the "),a("code",[l._v("BaseApp")]),l._v(".")],1),l._v(" "),a("p",[l._v("Shown below is how weights are set:")]),l._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gU2ltdWxhdGlvbiBvcGVyYXRpb24gd2VpZ2h0cyBjb25zdGFudHMKY29uc3QgKAoJT3BXZWlnaHRNc2dDcmVhdGVWYWxpZGF0b3IgICAgICAgICAgID0gJnF1b3Q7b3Bfd2VpZ2h0X21zZ19jcmVhdGVfdmFsaWRhdG9yJnF1b3Q7CglPcFdlaWdodE1zZ0VkaXRWYWxpZGF0b3IgICAgICAgICAgICAgPSAmcXVvdDtvcF93ZWlnaHRfbXNnX2VkaXRfdmFsaWRhdG9yJnF1b3Q7CglPcFdlaWdodE1zZ0RlbGVnYXRlICAgICAgICAgICAgICAgICAgPSAmcXVvdDtvcF93ZWlnaHRfbXNnX2RlbGVnYXRlJnF1b3Q7CglPcFdlaWdodE1zZ1VuZGVsZWdhdGUgICAgICAgICAgICAgICAgPSAmcXVvdDtvcF93ZWlnaHRfbXNnX3VuZGVsZWdhdGUmcXVvdDsKCU9wV2VpZ2h0TXNnQmVnaW5SZWRlbGVnYXRlICAgICAgICAgICA9ICZxdW90O29wX3dlaWdodF9tc2dfYmVnaW5fcmVkZWxlZ2F0ZSZxdW90OwoJT3BXZWlnaHRNc2dDYW5jZWxVbmJvbmRpbmdEZWxlZ2F0aW9uID0gJnF1b3Q7b3Bfd2VpZ2h0X21zZ19jYW5jZWxfdW5ib25kaW5nX2RlbGVnYXRpb24mcXVvdDsKKQoKLy8gV2VpZ2h0ZWRPcGVyYXRpb25zIHJldHVybnMgYWxsIHRoZSBvcGVyYXRpb25zIGZyb20gdGhlIG1vZHVsZSB3aXRoIHRoZWlyIHJlc3BlY3RpdmUgd2VpZ2h0cwpmdW5jIFdlaWdodGVkT3BlcmF0aW9ucygKCWFwcFBhcmFtcyBzaW10eXBlcy5BcHBQYXJhbXMsIGNkYyBjb2RlYy5KU09OQ29kZWMsIGFrIHR5cGVzLkFjY291bnRLZWVwZXIsCgliayB0eXBlcy5CYW5rS2VlcGVyLCBrIGtlZXBlci5LZWVwZXIsCikgc2ltdWxhdGlvbi5XZWlnaHRlZE9wZXJhdGlvbnMgewoJdmFyICgKCQl3ZWlnaHRNc2dDcmVhdGVWYWxpZGF0b3IgICAgICAgICAgIGludAoJCXdlaWdodE1zZ0VkaXRWYWxpZGF0b3IgICAgICAgICAgICAgaW50CgkJd2VpZ2h0TXNnRGVsZWdhdGUgICAgICAgICAgICAgICAgICBpbnQKCQl3ZWlnaHRNc2dVbmRlbGVnYXRlICAgICAgICAgICAgICAgIGludAoJCXdlaWdodE1zZ0JlZ2luUmVkZWxlZ2F0ZSAgICAgICAgICAgaW50CgkJd2VpZ2h0TXNnQ2FuY2VsVW5ib25kaW5nRGVsZWdhdGlvbiBpbnQKCSkKCglhcHBQYXJhbXMuR2V0T3JHZW5lcmF0ZShjZGMsIE9wV2VpZ2h0TXNnQ3JlYXRlVmFsaWRhdG9yLCAmYW1wO3dlaWdodE1zZ0NyZWF0ZVZhbGlkYXRvciwgbmlsLAoJCWZ1bmMoXyAqcmFuZC5SYW5kKSB7CgkJCXdlaWdodE1zZ0NyZWF0ZVZhbGlkYXRvciA9IHNpbWFwcHBhcmFtcy5EZWZhdWx0V2VpZ2h0TXNnQ3JlYXRlVmFsaWRhdG9yCgkJfSwKCSkKCglhcHBQYXJhbXMuR2V0T3JHZW5lcmF0ZShjZGMsIE9wV2VpZ2h0TXNnRWRpdFZhbGlkYXRvciwgJmFtcDt3ZWlnaHRNc2dFZGl0VmFsaWRhdG9yLCBuaWwsCgkJZnVuYyhfICpyYW5kLlJhbmQpIHsKCQkJd2VpZ2h0TXNnRWRpdFZhbGlkYXRvciA9IHNpbWFwcHBhcmFtcy5EZWZhdWx0V2VpZ2h0TXNnRWRpdFZhbGlkYXRvcgoJCX0sCgkpCgoJYXBwUGFyYW1zLkdldE9yR2VuZXJhdGUoY2RjLCBPcFdlaWdodE1zZ0RlbGVnYXRlLCAmYW1wO3dlaWdodE1zZ0RlbGVnYXRlLCBuaWwsCgkJZnVuYyhfICpyYW5kLlJhbmQpIHsKCQkJd2VpZ2h0TXNnRGVsZWdhdGUgPSBzaW1hcHBwYXJhbXMuRGVmYXVsdFdlaWdodE1zZ0RlbGVnYXRlCgkJfSwKCSkKCglhcHBQYXJhbXMuR2V0T3JHZW5lcmF0ZShjZGMsIE9wV2VpZ2h0TXNnVW5kZWxlZ2F0ZSwgJmFtcDt3ZWlnaHRNc2dVbmRlbGVnYXRlLCBuaWwsCgkJZnVuYyhfICpyYW5kLlJhbmQpIHsKCQkJd2VpZ2h0TXNnVW5kZWxlZ2F0ZSA9IHNpbWFwcHBhcmFtcy5EZWZhdWx0V2VpZ2h0TXNnVW5kZWxlZ2F0ZQoJCX0sCgkpCgoJYXBwUGFyYW1zLkdldE9yR2VuZXJhdGUoY2RjLCBPcFdlaWdodE1zZ0JlZ2luUmVkZWxlZ2F0ZSwgJmFtcDt3ZWlnaHRNc2dCZWdpblJlZGVsZWdhdGUsIG5pbCwKCQlmdW5jKF8gKnJhbmQuUmFuZCkgewoJCQl3ZWlnaHRNc2dCZWdpblJlZGVsZWdhdGUgPSBzaW1hcHBwYXJhbXMuRGVmYXVsdFdlaWdodE1zZ0JlZ2luUmVkZWxlZ2F0ZQoJCX0sCgkpCgoJYXBwUGFyYW1zLkdldE9yR2VuZXJhdGUoY2RjLCBPcFdlaWdodE1zZ0NhbmNlbFVuYm9uZGluZ0RlbGVnYXRpb24sICZhbXA7d2VpZ2h0TXNnQ2FuY2VsVW5ib25kaW5nRGVsZWdhdGlvbiwgbmlsLAoJCWZ1bmMoXyAqcmFuZC5SYW5kKSB7CgkJCXdlaWdodE1zZ0NhbmNlbFVuYm9uZGluZ0RlbGVnYXRpb24gPSBzaW1hcHBwYXJhbXMuRGVmYXVsdFdlaWdodE1zZ0NhbmNlbFVuYm9uZGluZ0RlbGVnYXRpb24KCQl9LAoJKQ=="}})],1),l._v(" "),a("p",[l._v("As you can see, the weights are predefined in this case. Options exist to override this behavior with different weights. One option is to use "),a("code",[l._v("*rand.Rand")]),l._v(" to define a random weight for the operation, or you can inject your own predefined weights.")]),l._v(" "),a("p",[l._v("Here is how one can override the above package "),a("code",[l._v("simappparams")]),l._v(".")]),l._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"CUBlY2hvICZxdW90O1J1bm5pbmcgbm9uLWRldGVybWluaXNtIHRlc3QuLi4mcXVvdDsKCUBnbyB0ZXN0IC1tb2Q9cmVhZG9ubHkgJChTSU1BUFApIC1ydW4gVGVzdEFwcFN0YXRlRGV0ZXJtaW5pc20gLUVuYWJsZWQ9dHJ1ZSBcCgkJLU51bUJsb2Nrcz0xMDAgLUJsb2NrU2l6ZT0yMDAgLUNvbW1pdD10cnVlIC1QZXJpb2Q9MCAtdiAtdGltZW91dCAyNGgKCnRlc3Qtc2ltLWN1c3RvbS1nZW5lc2lzLWZhc3Q6CglAZWNobyAmcXVvdDtSdW5uaW5nIGN1c3RvbSBnZW5lc2lzIHNpbXVsYXRpb24uLi4mcXVvdDsKCUBlY2hvICZxdW90O0J5IGRlZmF1bHQsICR7SE9NRX0vLmdhaWEvY29uZmlnL2dlbmVzaXMuanNvbiB3aWxsIGJlIHVzZWQuJnF1b3Q7CglAZ28gdGVzdCAtbW9kPXJlYWRvbmx5ICQoU0lNQVBQKSAtcnVuIFRlc3RGdWxsQXBwU2ltdWxhdGlvbiAtR2VuZXNpcz0ke0hPTUV9Ly5nYWlhL2NvbmZpZy9nZW5lc2lzLmpzb24gXAoJCS1FbmFibGVkPXRydWUgLU51bUJsb2Nrcz0xMDAgLUJsb2NrU2l6ZT0yMDAgLUNvbW1pdD10cnVlIC1TZWVkPTk5IC1QZXJpb2Q9NSAtdiAtdGltZW91dCAyNGgKCnRlc3Qtc2ltLWltcG9ydC1leHBvcnQ6IHJ1bnNpbQoJQGVjaG8gJnF1b3Q7UnVubmluZyBhcHBsaWNhdGlvbiBpbXBvcnQvZXhwb3J0IHNpbXVsYXRpb24uIFRoaXMgbWF5IHRha2Ugc2V2ZXJhbCBtaW51dGVzLi4uJnF1b3Q7CglAJChCSU5ESVIpL3J1bnNpbSAtSm9icz00IC1TaW1BcHBQa2c9JChTSU1BUFApIC1FeGl0T25GYWlsIDUwIDUgVGVzdEFwcEltcG9ydEV4cG9ydAo="}})],1),l._v(" "),a("p",[l._v("For the last test a tool called runsim  "),l._v(" is used, this is used to parallelize go test instances, provide info to Github and slack integrations to provide information to your team on how the simulations are running.")]),l._v(" "),a("h3",{attrs:{id:"random-proposal-contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#random-proposal-contents"}},[l._v("#")]),l._v(" Random proposal contents")]),l._v(" "),a("p",[l._v("Randomized governance proposals are also supported on the Cosmos SDK simulator. Each\nmodule must define the governance proposal "),a("code",[l._v("Content")]),l._v("s that they expose and register\nthem to be used on the parameters.")]),l._v(" "),a("h2",{attrs:{id:"registering-simulation-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#registering-simulation-functions"}},[l._v("#")]),l._v(" Registering simulation functions")]),l._v(" "),a("p",[l._v("Now that all the required functions are defined, we need to integrate them into the module pattern within the "),a("code",[l._v("module.go")]),l._v(":")]),l._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBkaXN0cmlidXRpb24KCmltcG9ydCAoCgkmcXVvdDtjb250ZXh0JnF1b3Q7CgkmcXVvdDtlbmNvZGluZy9qc29uJnF1b3Q7CgkmcXVvdDtmbXQmcXVvdDsKCSZxdW90O21hdGgvcmFuZCZxdW90OwoKCSZxdW90O2dpdGh1Yi5jb20vZ3JwYy1lY29zeXN0ZW0vZ3JwYy1nYXRld2F5L3J1bnRpbWUmcXVvdDsKCSZxdW90O2dpdGh1Yi5jb20vc3BmMTMvY29icmEmcXVvdDsKCWFiY2kgJnF1b3Q7Z2l0aHViLmNvbS90ZW5kZXJtaW50L3RlbmRlcm1pbnQvYWJjaS90eXBlcyZxdW90OwoKCXNka2NsaWVudCAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL2NsaWVudCZxdW90OwoJJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay9jb2RlYyZxdW90OwoJY2RjdHlwZXMgJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay9jb2RlYy90eXBlcyZxdW90OwoJc2RrICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMmcXVvdDsKCSZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMvbW9kdWxlJnF1b3Q7CglzaW10eXBlcyAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzL3NpbXVsYXRpb24mcXVvdDsKCSZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsveC9kaXN0cmlidXRpb24vY2xpZW50L2NsaSZxdW90OwoJJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay94L2Rpc3RyaWJ1dGlvbi9rZWVwZXImcXVvdDsKCSZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsveC9kaXN0cmlidXRpb24vc2ltdWxhdGlvbiZxdW90OwoJJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay94L2Rpc3RyaWJ1dGlvbi90eXBlcyZxdW90OwopCgp2YXIgKAoJXyBtb2R1bGUuQXBwTW9kdWxlICAgICAgICAgICA9IEFwcE1vZHVsZXt9CglfIG1vZHVsZS5BcHBNb2R1bGVCYXNpYyAgICAgID0gQXBwTW9kdWxlQmFzaWN7fQoJXyBtb2R1bGUuQXBwTW9kdWxlU2ltdWxhdGlvbiA9IEFwcE1vZHVsZXt9CikKCi8vIEFwcE1vZHVsZUJhc2ljIGRlZmluZXMgdGhlIGJhc2ljIGFwcGxpY2F0aW9uIG1vZHVsZSB1c2VkIGJ5IHRoZSBkaXN0cmlidXRpb24gbW9kdWxlLgp0eXBlIEFwcE1vZHVsZUJhc2ljIHN0cnVjdCB7CgljZGMgY29kZWMuQ29kZWMKfQoKLy8gTmFtZSByZXR1cm5zIHRoZSBkaXN0cmlidXRpb24gbW9kdWxlJ3MgbmFtZS4KZnVuYyAoQXBwTW9kdWxlQmFzaWMpIE5hbWUoKSBzdHJpbmcgewoJcmV0dXJuIHR5cGVzLk1vZHVsZU5hbWUKfQoKLy8gUmVnaXN0ZXJMZWdhY3lBbWlub0NvZGVjIHJlZ2lzdGVycyB0aGUgZGlzdHJpYnV0aW9uIG1vZHVsZSdzIHR5cGVzIGZvciB0aGUgZ2l2ZW4gY29kZWMuCmZ1bmMgKEFwcE1vZHVsZUJhc2ljKSBSZWdpc3RlckxlZ2FjeUFtaW5vQ29kZWMoY2RjICpjb2RlYy5MZWdhY3lBbWlubykgewoJdHlwZXMuUmVnaXN0ZXJMZWdhY3lBbWlub0NvZGVjKGNkYykKfQoKLy8gRGVmYXVsdEdlbmVzaXMgcmV0dXJucyBkZWZhdWx0IGdlbmVzaXMgc3RhdGUgYXMgcmF3IGJ5dGVzIGZvciB0aGUgZGlzdHJpYnV0aW9uCi8vIG1vZHVsZS4KZnVuYyAoQXBwTW9kdWxlQmFzaWMpIERlZmF1bHRHZW5lc2lzKGNkYyBjb2RlYy5KU09OQ29kZWMpIGpzb24uUmF3TWVzc2FnZSB7CglyZXR1cm4gY2RjLk11c3RNYXJzaGFsSlNPTih0eXBlcy5EZWZhdWx0R2VuZXNpc1N0YXRlKCkpCn0KCi8vIFZhbGlkYXRlR2VuZXNpcyBwZXJmb3JtcyBnZW5lc2lzIHN0YXRlIHZhbGlkYXRpb24gZm9yIHRoZSBkaXN0cmlidXRpb24gbW9kdWxlLgpmdW5jIChBcHBNb2R1bGVCYXNpYykgVmFsaWRhdGVHZW5lc2lzKGNkYyBjb2RlYy5KU09OQ29kZWMsIGNvbmZpZyBzZGtjbGllbnQuVHhFbmNvZGluZ0NvbmZpZywgYnoganNvbi5SYXdNZXNzYWdlKSBlcnJvciB7Cgl2YXIgZGF0YSB0eXBlcy5HZW5lc2lzU3RhdGUKCWlmIGVyciA6PSBjZGMuVW5tYXJzaGFsSlNPTihieiwgJmFtcDtkYXRhKTsgZXJyICE9IG5pbCB7CgkJcmV0dXJuIGZtdC5FcnJvcmYoJnF1b3Q7ZmFpbGVkIHRvIHVubWFyc2hhbCAlcyBnZW5lc2lzIHN0YXRlOiAldyZxdW90OywgdHlwZXMuTW9kdWxlTmFtZSwgZXJyKQoJfQoKCXJldHVybiB0eXBlcy5WYWxpZGF0ZUdlbmVzaXMoJmFtcDtkYXRhKQp9CgovLyBSZWdpc3RlckdSUENHYXRld2F5Um91dGVzIHJlZ2lzdGVycyB0aGUgZ1JQQyBHYXRld2F5IHJvdXRlcyBmb3IgdGhlIGRpc3RyaWJ1dGlvbiBtb2R1bGUuCmZ1bmMgKEFwcE1vZHVsZUJhc2ljKSBSZWdpc3RlckdSUENHYXRld2F5Um91dGVzKGNsaWVudEN0eCBzZGtjbGllbnQuQ29udGV4dCwgbXV4ICpydW50aW1lLlNlcnZlTXV4KSB7CglpZiBlcnIgOj0gdHlwZXMuUmVnaXN0ZXJRdWVyeUhhbmRsZXJDbGllbnQoY29udGV4dC5CYWNrZ3JvdW5kKCksIG11eCwgdHlwZXMuTmV3UXVlcnlDbGllbnQoY2xpZW50Q3R4KSk7IGVyciAhPSBuaWwgewoJCXBhbmljKGVycikKCX0KfQoKLy8gR2V0VHhDbWQgcmV0dXJucyB0aGUgcm9vdCB0eCBjb21tYW5kIGZvciB0aGUgZGlzdHJpYnV0aW9uIG1vZHVsZS4KZnVuYyAoQXBwTW9kdWxlQmFzaWMpIEdldFR4Q21kKCkgKmNvYnJhLkNvbW1hbmQgewoJcmV0dXJuIGNsaS5OZXdUeENtZCgpCn0KCi8vIEdldFF1ZXJ5Q21kIHJldHVybnMgdGhlIHJvb3QgcXVlcnkgY29tbWFuZCBmb3IgdGhlIGRpc3RyaWJ1dGlvbiBtb2R1bGUuCmZ1bmMgKEFwcE1vZHVsZUJhc2ljKSBHZXRRdWVyeUNtZCgpICpjb2JyYS5Db21tYW5kIHsKCXJldHVybiBjbGkuR2V0UXVlcnlDbWQoKQp9CgovLyBSZWdpc3RlckludGVyZmFjZXMgaW1wbGVtZW50cyBJbnRlcmZhY2VNb2R1bGUKZnVuYyAoYiBBcHBNb2R1bGVCYXNpYykgUmVnaXN0ZXJJbnRlcmZhY2VzKHJlZ2lzdHJ5IGNkY3R5cGVzLkludGVyZmFjZVJlZ2lzdHJ5KSB7Cgl0eXBlcy5SZWdpc3RlckludGVyZmFjZXMocmVnaXN0cnkpCn0KCi8vIEFwcE1vZHVsZSBpbXBsZW1lbnRzIGFuIGFwcGxpY2F0aW9uIG1vZHVsZSBmb3IgdGhlIGRpc3RyaWJ1dGlvbiBtb2R1bGUuCnR5cGUgQXBwTW9kdWxlIHN0cnVjdCB7CglBcHBNb2R1bGVCYXNpYwoKCWtlZXBlciAgICAgICAga2VlcGVyLktlZXBlcgoJYWNjb3VudEtlZXBlciB0eXBlcy5BY2NvdW50S2VlcGVyCgliYW5rS2VlcGVyICAgIHR5cGVzLkJhbmtLZWVwZXIKCXN0YWtpbmdLZWVwZXIgdHlwZXMuU3Rha2luZ0tlZXBlcgp9CgovLyBOZXdBcHBNb2R1bGUgY3JlYXRlcyBhIG5ldyBBcHBNb2R1bGUgb2JqZWN0CmZ1bmMgTmV3QXBwTW9kdWxlKAoJY2RjIGNvZGVjLkNvZGVjLCBrZWVwZXIga2VlcGVyLktlZXBlciwgYWNjb3VudEtlZXBlciB0eXBlcy5BY2NvdW50S2VlcGVyLAoJYmFua0tlZXBlciB0eXBlcy5CYW5rS2VlcGVyLCBzdGFraW5nS2VlcGVyIHR5cGVzLlN0YWtpbmdLZWVwZXIsCikgQXBwTW9kdWxlIHsKCXJldHVybiBBcHBNb2R1bGV7CgkJQXBwTW9kdWxlQmFzaWM6IEFwcE1vZHVsZUJhc2lje2NkYzogY2RjfSwKCQlrZWVwZXI6ICAgICAgICAga2VlcGVyLAoJCWFjY291bnRLZWVwZXI6ICBhY2NvdW50S2VlcGVyLAoJCWJhbmtLZWVwZXI6ICAgICBiYW5rS2VlcGVyLAoJCXN0YWtpbmdLZWVwZXI6ICBzdGFraW5nS2VlcGVyLAoJfQp9CgovLyBOYW1lIHJldHVybnMgdGhlIGRpc3RyaWJ1dGlvbiBtb2R1bGUncyBuYW1lLgpmdW5jIChBcHBNb2R1bGUpIE5hbWUoKSBzdHJpbmcgewoJcmV0dXJuIHR5cGVzLk1vZHVsZU5hbWUKfQoKLy8gUmVnaXN0ZXJJbnZhcmlhbnRzIHJlZ2lzdGVycyB0aGUgZGlzdHJpYnV0aW9uIG1vZHVsZSBpbnZhcmlhbnRzLgpmdW5jIChhbSBBcHBNb2R1bGUpIFJlZ2lzdGVySW52YXJpYW50cyhpciBzZGsuSW52YXJpYW50UmVnaXN0cnkpIHsKCWtlZXBlci5SZWdpc3RlckludmFyaWFudHMoaXIsIGFtLmtlZXBlcikKfQoKLy8gRGVwcmVjYXRlZDogUm91dGUgcmV0dXJucyB0aGUgbWVzc2FnZSByb3V0aW5nIGtleSBmb3IgdGhlIGRpc3RyaWJ1dGlvbiBtb2R1bGUuCmZ1bmMgKGFtIEFwcE1vZHVsZSkgUm91dGUoKSBzZGsuUm91dGUgewoJcmV0dXJuIHNkay5Sb3V0ZXt9Cn0KCi8vIFF1ZXJpZXJSb3V0ZSByZXR1cm5zIHRoZSBkaXN0cmlidXRpb24gbW9kdWxlJ3MgcXVlcmllciByb3V0ZSBuYW1lLgpmdW5jIChBcHBNb2R1bGUpIFF1ZXJpZXJSb3V0ZSgpIHN0cmluZyB7CglyZXR1cm4gdHlwZXMuUXVlcmllclJvdXRlCn0KCi8vIExlZ2FjeVF1ZXJpZXJIYW5kbGVyIHJldHVybnMgdGhlIGRpc3RyaWJ1dGlvbiBtb2R1bGUgc2RrLlF1ZXJpZXIuCmZ1bmMgKGFtIEFwcE1vZHVsZSkgTGVnYWN5UXVlcmllckhhbmRsZXIobGVnYWN5UXVlcmllckNkYyAqY29kZWMuTGVnYWN5QW1pbm8pIHNkay5RdWVyaWVyIHsKCXJldHVybiBrZWVwZXIuTmV3UXVlcmllcihhbS5rZWVwZXIsIGxlZ2FjeVF1ZXJpZXJDZGMpCn0KCi8vIFJlZ2lzdGVyU2VydmljZXMgcmVnaXN0ZXJzIG1vZHVsZSBzZXJ2aWNlcy4KZnVuYyAoYW0gQXBwTW9kdWxlKSBSZWdpc3RlclNlcnZpY2VzKGNmZyBtb2R1bGUuQ29uZmlndXJhdG9yKSB7Cgl0eXBlcy5SZWdpc3Rlck1zZ1NlcnZlcihjZmcuTXNnU2VydmVyKCksIGtlZXBlci5OZXdNc2dTZXJ2ZXJJbXBsKGFtLmtlZXBlcikpCgl0eXBlcy5SZWdpc3RlclF1ZXJ5U2VydmVyKGNmZy5RdWVyeVNlcnZlcigpLCBhbS5rZWVwZXIpCgoJbSA6PSBrZWVwZXIuTmV3TWlncmF0b3IoYW0ua2VlcGVyKQoJY2ZnLlJlZ2lzdGVyTWlncmF0aW9uKHR5cGVzLk1vZHVsZU5hbWUsIDEsIG0uTWlncmF0ZTF0bzIpCn0KCi8vIEluaXRHZW5lc2lzIHBlcmZvcm1zIGdlbmVzaXMgaW5pdGlhbGl6YXRpb24gZm9yIHRoZSBkaXN0cmlidXRpb24gbW9kdWxlLiBJdCByZXR1cm5zCi8vIG5vIHZhbGlkYXRvciB1cGRhdGVzLgpmdW5jIChhbSBBcHBNb2R1bGUpIEluaXRHZW5lc2lzKGN0eCBzZGsuQ29udGV4dCwgY2RjIGNvZGVjLkpTT05Db2RlYywgZGF0YSBqc29uLlJhd01lc3NhZ2UpIFtdYWJjaS5WYWxpZGF0b3JVcGRhdGUgewoJdmFyIGdlbmVzaXNTdGF0ZSB0eXBlcy5HZW5lc2lzU3RhdGUKCWNkYy5NdXN0VW5tYXJzaGFsSlNPTihkYXRhLCAmYW1wO2dlbmVzaXNTdGF0ZSkKCWFtLmtlZXBlci5Jbml0R2VuZXNpcyhjdHgsIGdlbmVzaXNTdGF0ZSkKCXJldHVybiBbXWFiY2kuVmFsaWRhdG9yVXBkYXRle30KfQoKLy8gRXhwb3J0R2VuZXNpcyByZXR1cm5zIHRoZSBleHBvcnRlZCBnZW5lc2lzIHN0YXRlIGFzIHJhdyBieXRlcyBmb3IgdGhlIGRpc3RyaWJ1dGlvbgovLyBtb2R1bGUuCmZ1bmMgKGFtIEFwcE1vZHVsZSkgRXhwb3J0R2VuZXNpcyhjdHggc2RrLkNvbnRleHQsIGNkYyBjb2RlYy5KU09OQ29kZWMpIGpzb24uUmF3TWVzc2FnZSB7CglncyA6PSBhbS5rZWVwZXIuRXhwb3J0R2VuZXNpcyhjdHgpCglyZXR1cm4gY2RjLk11c3RNYXJzaGFsSlNPTihncykKfQoKLy8gQ29uc2Vuc3VzVmVyc2lvbiBpbXBsZW1lbnRzIEFwcE1vZHVsZS9Db25zZW5zdXNWZXJzaW9uLgpmdW5jIChBcHBNb2R1bGUpIENvbnNlbnN1c1ZlcnNpb24oKSB1aW50NjQgeyByZXR1cm4gMiB9CgovLyBCZWdpbkJsb2NrIHJldHVybnMgdGhlIGJlZ2luIGJsb2NrZXIgZm9yIHRoZSBkaXN0cmlidXRpb24gbW9kdWxlLgpmdW5jIChhbSBBcHBNb2R1bGUpIEJlZ2luQmxvY2soY3R4IHNkay5Db250ZXh0LCByZXEgYWJjaS5SZXF1ZXN0QmVnaW5CbG9jaykgewoJQmVnaW5CbG9ja2VyKGN0eCwgcmVxLCBhbS5rZWVwZXIpCn0KCi8vIEFwcE1vZHVsZVNpbXVsYXRpb24gZnVuY3Rpb25zCgovLyBHZW5lcmF0ZUdlbmVzaXNTdGF0ZSBjcmVhdGVzIGEgcmFuZG9taXplZCBHZW5TdGF0ZSBvZiB0aGUgZGlzdHJpYnV0aW9uIG1vZHVsZS4KZnVuYyAoQXBwTW9kdWxlKSBHZW5lcmF0ZUdlbmVzaXNTdGF0ZShzaW1TdGF0ZSAqbW9kdWxlLlNpbXVsYXRpb25TdGF0ZSkgewoJc2ltdWxhdGlvbi5SYW5kb21pemVkR2VuU3RhdGUoc2ltU3RhdGUpCn0KCi8vIFByb3Bvc2FsQ29udGVudHMgcmV0dXJucyBhbGwgdGhlIGRpc3RyaWJ1dGlvbiBjb250ZW50IGZ1bmN0aW9ucyB1c2VkIHRvCi8vIHNpbXVsYXRlIGdvdmVybmFuY2UgcHJvcG9zYWxzLgpmdW5jIChhbSBBcHBNb2R1bGUpIFByb3Bvc2FsQ29udGVudHMoc2ltU3RhdGUgbW9kdWxlLlNpbXVsYXRpb25TdGF0ZSkgW11zaW10eXBlcy5XZWlnaHRlZFByb3Bvc2FsQ29udGVudCB7CglyZXR1cm4gc2ltdWxhdGlvbi5Qcm9wb3NhbENvbnRlbnRzKGFtLmtlZXBlcikKfQoKLy8gUmFuZG9taXplZFBhcmFtcyBjcmVhdGVzIHJhbmRvbWl6ZWQgZGlzdHJpYnV0aW9uIHBhcmFtIGNoYW5nZXMgZm9yIHRoZSBzaW11bGF0b3IuCmZ1bmMgKEFwcE1vZHVsZSkgUmFuZG9taXplZFBhcmFtcyhyICpyYW5kLlJhbmQpIFtdc2ltdHlwZXMuUGFyYW1DaGFuZ2UgewoJcmV0dXJuIHNpbXVsYXRpb24uUGFyYW1DaGFuZ2VzKHIpCn0KCi8vIFJlZ2lzdGVyU3RvcmVEZWNvZGVyIHJlZ2lzdGVycyBhIGRlY29kZXIgZm9yIGRpc3RyaWJ1dGlvbiBtb2R1bGUncyB0eXBlcwpmdW5jIChhbSBBcHBNb2R1bGUpIFJlZ2lzdGVyU3RvcmVEZWNvZGVyKHNkciBzZGsuU3RvcmVEZWNvZGVyUmVnaXN0cnkpIHsKCXNkclt0eXBlcy5TdG9yZUtleV0gPSBzaW11bGF0aW9uLk5ld0RlY29kZVN0b3JlKGFtLmNkYykKfQoKLy8gV2VpZ2h0ZWRPcGVyYXRpb25zIHJldHVybnMgdGhlIGFsbCB0aGUgZ292IG1vZHVsZSBvcGVyYXRpb25zIHdpdGggdGhlaXIgcmVzcGVjdGl2ZSB3ZWlnaHRzLgpmdW5jIChhbSBBcHBNb2R1bGUpIFdlaWdodGVkT3BlcmF0aW9ucyhzaW1TdGF0ZSBtb2R1bGUuU2ltdWxhdGlvblN0YXRlKSBbXXNpbXR5cGVzLldlaWdodGVkT3BlcmF0aW9uIHsKCXJldHVybiBzaW11bGF0aW9uLldlaWdodGVkT3BlcmF0aW9ucygKCQlzaW1TdGF0ZS5BcHBQYXJhbXMsIHNpbVN0YXRlLkNkYywgYW0uYWNjb3VudEtlZXBlciwgYW0uYmFua0tlZXBlciwgYW0ua2VlcGVyLCBhbS5zdGFraW5nS2VlcGVyLAoJKQp9Cg=="}})],1),l._v(" "),a("h2",{attrs:{id:"app-simulator-manager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#app-simulator-manager"}},[l._v("#")]),l._v(" App Simulator manager")]),l._v(" "),a("p",[l._v("The following step is setting up the "),a("code",[l._v("SimulatorManager")]),l._v(" at the app level. This\nis required for the simulation test files on the next step.")]),l._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBDdXN0b21BcHAgc3RydWN0IHsKICAuLi4KICBzbSAqbW9kdWxlLlNpbXVsYXRpb25NYW5hZ2VyCn0K"}}),l._v(" "),a("p",[l._v("Then at the instantiation of the application, we create the "),a("code",[l._v("SimulationManager")]),l._v("\ninstance in the same way we create the "),a("code",[l._v("ModuleManager")]),l._v(" but this time we only pass\nthe modules that implement the simulation functions from the "),a("code",[l._v("AppModuleSimulation")]),l._v("\ninterface described above.")]),l._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBOZXdDdXN0b21BcHAoLi4uKSB7CiAgLy8gY3JlYXRlIHRoZSBzaW11bGF0aW9uIG1hbmFnZXIgYW5kIGRlZmluZSB0aGUgb3JkZXIgb2YgdGhlIG1vZHVsZXMgZm9yIGRldGVybWluaXN0aWMgc2ltdWxhdGlvbnMKICBhcHAuc20gPSBtb2R1bGUuTmV3U2ltdWxhdGlvbk1hbmFnZXIoCiAgICBhdXRoLk5ld0FwcE1vZHVsZShhcHAuYWNjb3VudEtlZXBlciksCiAgICBiYW5rLk5ld0FwcE1vZHVsZShhcHAuYmFua0tlZXBlciwgYXBwLmFjY291bnRLZWVwZXIpLAogICAgc3VwcGx5Lk5ld0FwcE1vZHVsZShhcHAuc3VwcGx5S2VlcGVyLCBhcHAuYWNjb3VudEtlZXBlciksCiAgICBvdi5OZXdBcHBNb2R1bGUoYXBwLmdvdktlZXBlciwgYXBwLmFjY291bnRLZWVwZXIsIGFwcC5zdXBwbHlLZWVwZXIpLAogICAgbWludC5OZXdBcHBNb2R1bGUoYXBwLm1pbnRLZWVwZXIpLAogICAgZGlzdHIuTmV3QXBwTW9kdWxlKGFwcC5kaXN0cktlZXBlciwgYXBwLmFjY291bnRLZWVwZXIsIGFwcC5zdXBwbHlLZWVwZXIsIGFwcC5zdGFraW5nS2VlcGVyKSwKICAgIHN0YWtpbmcuTmV3QXBwTW9kdWxlKGFwcC5zdGFraW5nS2VlcGVyLCBhcHAuYWNjb3VudEtlZXBlciwgYXBwLnN1cHBseUtlZXBlciksCiAgICBzbGFzaGluZy5OZXdBcHBNb2R1bGUoYXBwLnNsYXNoaW5nS2VlcGVyLCBhcHAuYWNjb3VudEtlZXBlciwgYXBwLnN0YWtpbmdLZWVwZXIpLAogICkKCiAgLy8gcmVnaXN0ZXIgdGhlIHN0b3JlIGRlY29kZXJzIGZvciBzaW11bGF0aW9uIHRlc3RzCiAgYXBwLnNtLlJlZ2lzdGVyU3RvcmVEZWNvZGVycygpCiAgLi4uCn0K"}})],1)}),[],!1,null,null,null);d.default=e.exports}}]);