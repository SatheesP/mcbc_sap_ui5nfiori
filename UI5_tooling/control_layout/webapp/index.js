sap.ui.define([
    "sap/ui/core/mvc/XMLView"
], (XMLView) => {
    "use strict";

    XMLView.create({
		viewName: "masterclass.ui5.view.Main"
	}).then((oView) => oView.placeAt("content"));

});
