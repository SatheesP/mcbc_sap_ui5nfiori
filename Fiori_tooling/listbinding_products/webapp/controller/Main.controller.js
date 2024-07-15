sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("masterclass.ui5.listbindingproducts.controller.Main", {
            onInit: function () {
                var oModel = new JSONModel("./model/products.json");
                this.getView().setModel(oModel);
            }
        });
    });
