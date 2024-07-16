sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("masterclass.ui5.controller.Main", {

            onInit: function() {
                var oData = new JSONModel("./data/Products.json");
                this.getView().setModel(oData);
            }
            
        });
    });