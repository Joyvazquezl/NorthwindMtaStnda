/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"ns/productsmtastnda/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});