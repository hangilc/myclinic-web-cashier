"use strict";

var web = require("myclinic-web");

var subs = [
	{
		name: "cashier",
		module: require("myclinic-cashier"),
		configKey: "cashier"
	}
];

web.cmd.runFromCommand(subs, {
	port: 9003,
	usePrinter: true
});
