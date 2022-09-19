(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{674:function(e,t,a){"use strict";a.r(t);var o=a(1),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"cosmos-blockchain-simulator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cosmos-blockchain-simulator"}},[e._v("#")]),e._v(" Cosmos Blockchain Simulator")]),e._v(" "),a("p",[e._v("The Cosmos SDK offers a full fledged simulation framework to fuzz test every\nmessage defined by a module.")]),e._v(" "),a("p",[e._v("On the Cosmos SDK, this functionality is provided by the"),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.46.0/simapp/app.go",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("SimApp")]),a("OutboundLink")],1),e._v(", which is a\n"),a("code",[e._v("Baseapp")]),e._v(" application that is used for running the "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.46.0/x/simulation",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("simulation")]),a("OutboundLink")],1),e._v(" module.\nThis module defines all the simulation logic as well as the operations for\nrandomized parameters like accounts, balances etc.")]),e._v(" "),a("h2",{attrs:{id:"goals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#goals"}},[e._v("#")]),e._v(" Goals")]),e._v(" "),a("p",[e._v("The blockchain simulator tests how the blockchain application would behave under\nreal life circumstances by generating and sending randomized messages.\nThe goal of this is to detect and debug failures that could halt a live chain,\nby providing logs and statistics about the operations run by the simulator as\nwell as exporting the latest application state when a failure was found.")]),e._v(" "),a("p",[e._v("Its main difference with integration testing is that the simulator app allows\nyou to pass parameters to customize the chain that's being simulated.\nThis comes in handy when trying to reproduce bugs that were generated in the\nprovided operations (randomized or not).")]),e._v(" "),a("h2",{attrs:{id:"simulation-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simulation-commands"}},[e._v("#")]),e._v(" Simulation commands")]),e._v(" "),a("p",[e._v("The simulation app has different commands, each of which tests a different\nfailure type:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("AppImportExport")]),e._v(": The simulator exports the initial app state and then it\ncreates a new app with the exported "),a("code",[e._v("genesis.json")]),e._v(" as an input, checking for\ninconsistencies between the stores.")]),e._v(" "),a("li",[a("code",[e._v("AppSimulationAfterImport")]),e._v(": Queues two simulations together. The first one provides the app state ("),a("em",[e._v("i.e")]),e._v(" genesis) to the second. Useful to test software upgrades or hard-forks from a live chain.")]),e._v(" "),a("li",[a("code",[e._v("AppStateDeterminism")]),e._v(": Checks that all the nodes return the same values, in the same order.")]),e._v(" "),a("li",[a("code",[e._v("BenchmarkInvariants")]),e._v(": Analysis of the performance of running all modules' invariants ("),a("em",[e._v("i.e")]),e._v(" sequentially runs a "),a("a",{attrs:{href:"https://pkg.go.dev/testing/#hdr-Benchmarks",target:"_blank",rel:"noopener noreferrer"}},[e._v("benchmark"),a("OutboundLink")],1),e._v(" test). An invariant checks for\ndifferences between the values that are on the store and the passive tracker. Eg: total coins held by accounts vs total supply tracker.")]),e._v(" "),a("li",[a("code",[e._v("FullAppSimulation")]),e._v(": General simulation mode. Runs the chain and the specified operations for a given number of blocks. Tests that there're no "),a("code",[e._v("panics")]),e._v(" on the simulation. It does also run invariant checks on every "),a("code",[e._v("Period")]),e._v(" but they are not benchmarked.")])]),e._v(" "),a("p",[e._v("Each simulation must receive a set of inputs ("),a("em",[e._v("i.e")]),e._v(" flags) such as the number of\nblocks that the simulation is run, seed, block size, etc.\nCheck the full list of flags "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.46.0/simapp/config.go#L32-L55",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"simulator-modes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simulator-modes"}},[e._v("#")]),e._v(" Simulator Modes")]),e._v(" "),a("p",[e._v("In addition to the various inputs and commands, the simulator runs in three modes:")]),e._v(" "),a("ol",[a("li",[e._v("Completely random where the initial state, module parameters and simulation\nparameters are "),a("strong",[e._v("pseudo-randomly generated")]),e._v(".")]),e._v(" "),a("li",[e._v("From a "),a("code",[e._v("genesis.json")]),e._v(" file where the initial state and the module parameters are defined.\nThis mode is helpful for running simulations on a known state such as a live network export where a new (mostly likely breaking) version of the application needs to be tested.")]),e._v(" "),a("li",[e._v("From a "),a("code",[e._v("params.json")]),e._v(" file where the initial state is pseudo-randomly generated but the module and simulation parameters can be provided manually.\nThis allows for a more controlled and deterministic simulation setup while allowing the state space to still be pseudo-randomly simulated.\nThe list of available parameters are listed "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.46.0/simapp/config.go#L33-L57",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[e._v("These modes are not mutually exclusive. So you can for example run a randomly\ngenerated genesis state ("),a("code",[e._v("1")]),e._v(") with manually generated simulation params ("),a("code",[e._v("3")]),e._v(").")])]),e._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("p",[e._v("This is a general example of how simulations are run. For more specific examples\ncheck the Cosmos SDK "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.46.0/Makefile#L263-L299",target:"_blank",rel:"noopener noreferrer"}},[e._v("Makefile"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ICQgZ28gdGVzdCAtbW9kPXJlYWRvbmx5IGdpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvc2ltYXBwIFwKICAtcnVuPVRlc3RBcHAmbHQ7c2ltdWxhdGlvbl9jb21tYW5kJmd0OyBcCiAgLi4uJmx0O2ZsYWdzJmd0OwogIC12IC10aW1lb3V0IDI0aAo="}}),e._v(" "),a("h2",{attrs:{id:"debugging-tips"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#debugging-tips"}},[e._v("#")]),e._v(" Debugging Tips")]),e._v(" "),a("p",[e._v("Here are some suggestions when encountering a simulation failure:")]),e._v(" "),a("ul",[a("li",[e._v("Export the app state at the height where the failure was found. You can do this\nby passing the "),a("code",[e._v("-ExportStatePath")]),e._v(" flag to the simulator.")]),e._v(" "),a("li",[e._v("Use "),a("code",[e._v("-Verbose")]),e._v(" logs. They could give you a better hint on all the operations\ninvolved.")]),e._v(" "),a("li",[e._v("Reduce the simulation "),a("code",[e._v("-Period")]),e._v(". This will run the invariants checks more\nfrequently.")]),e._v(" "),a("li",[e._v("Print all the failed invariants at once with "),a("code",[e._v("-PrintAllInvariants")]),e._v(".")]),e._v(" "),a("li",[e._v("Try using another "),a("code",[e._v("-Seed")]),e._v(". If it can reproduce the same error and if it fails\nsooner, you will spend less time running the simulations.")]),e._v(" "),a("li",[e._v("Reduce the "),a("code",[e._v("-NumBlocks")]),e._v(" . How's the app state at the height previous to the\nfailure?")]),e._v(" "),a("li",[e._v("Run invariants on every operation with "),a("code",[e._v("-SimulateEveryOperation")]),e._v(". "),a("em",[e._v("Note")]),e._v(": this\nwill slow down your simulation "),a("strong",[e._v("a lot")]),e._v(".")]),e._v(" "),a("li",[e._v("Try adding logs to operations that are not logged. You will have to define a\n"),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.46.0/x/staking/keeper/keeper.go#L60-L63",target:"_blank",rel:"noopener noreferrer"}},[e._v("Logger"),a("OutboundLink")],1),e._v(" on your "),a("code",[e._v("Keeper")]),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"use-simulation-in-your-cosmos-sdk-based-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-simulation-in-your-cosmos-sdk-based-application"}},[e._v("#")]),e._v(" Use simulation in your Cosmos SDK-based application")]),e._v(" "),a("p",[e._v("Learn how you can integrate the simulation into your Cosmos SDK-based application:")]),e._v(" "),a("ul",[a("li",[e._v("Application Simulation Manager")]),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/building-modules/simulator.html"}},[e._v("Building modules: Simulator")])],1),e._v(" "),a("li",[e._v("Simulator tests")])])],1)}),[],!1,null,null,null);t.default=s.exports}}]);