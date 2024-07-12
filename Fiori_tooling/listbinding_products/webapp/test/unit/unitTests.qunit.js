/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"masterclassui5/listbinding_products/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
