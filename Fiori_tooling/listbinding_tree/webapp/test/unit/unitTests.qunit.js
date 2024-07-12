/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"masterclassui5/listbinding_tree/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
