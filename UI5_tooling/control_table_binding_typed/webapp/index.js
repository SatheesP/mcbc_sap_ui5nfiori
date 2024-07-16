sap.ui.define([
    "sap/ui/core/mvc/View"
], (View) => {
    "use strict";

    View.create({
        viewName: "module:masterclass/ui5/view/Main.view"
	}).then((oView) => oView.placeAt("content"));

});
