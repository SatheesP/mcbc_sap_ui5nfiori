sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("contextbindingsports.controller.Main", {
        onInit: function () {

            var oModel = new JSONModel("./model/daySports.json");
            this.getView().setModel(oModel);
        },

        // After child(list builted) items are bound
        onUpdateFinished: function(oEvt) {
            var oListDays = this.getView().byId("tblListWeekdays");
            var aItems = oListDays.getItems();

            //  Default select 1st row of weekdays i.e. Monday
            if (oEvt.getParameter('reason') == "Change" && aItems[0]) {
                oListDays.setSelectedItem(aItems[0]);

                // Instead of firing below event for detail table
                // using list binding table attribute set 'binding="{/weekdays/0}"'
                oListDays.fireSelectionChange();    // fire<EventName> of control
            }
        },

        onSelChgWeekDay: function(oEvt) {
            // Get the binding context of selected list-item
            var oContext = oEvt.getSource().getSelectedItem().getBindingContext();

            // Get the context binding path of selected list-item
            var sContextPath = oContext.getPath();

            // Bind elements to detail table
            this.getView().byId("tblDetailSports").bindElement(sContextPath);
        }
    });
});
