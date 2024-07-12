sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("masterclass.ui5.listbindingtree.controller.Main", {
        onInit: function () {

            var oModel = new JSONModel("./model/daySports.json");
            // Defining Named model then binding starts "{tree>/...}"
            this.getView().setModel(oModel, "tree");
        }
    });
});
