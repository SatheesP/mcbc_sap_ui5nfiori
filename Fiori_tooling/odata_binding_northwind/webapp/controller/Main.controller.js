sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/base/Log"
],
function (Controller, MessageToast, Log) {
    "use strict";

    return Controller.extend("masterclass.ui5.odata.bindingnorthwind.controller.Main", {
        onInit: function () {

            var oPnl = this.getView().byId("_IDGenPanel2"),
                that = this;

//            oPnl.bindElement("/Customers('ANTON')", {select: "CustomerID,CompanyName"});
            oPnl.bindElement({
                path: "/Customers('CENTC')",
                events: {
                    dataRequested: function(oEvt) {
                        that.getView().setBusy(true);
                        Log.info("data requested...");
                    },
                    dataReceived: function(oEvt) {
                        that.getView().setBusy(false);
                        Log.info("data received.");
                    }
                }
            });

//          OR

/* in XML view
            <Panel id="_IDGenPanel1" headerText="OData Binding" binding="{/Customers('ANTON')}"></Panel>
*/
//          OR

/*          Component's model(s) from manifest.json is not yet propagted to view.
            Here calling this.getView.getModel() will return undefined.
            NavContainer fires events (beforeShow, beforeFirstShow, beforeHide, afterShow, afterHide)
            on direct child control in this case our view(page). 
            To subscribe these events use addEventDelegate method of view.
            Calling model's read method brings the entity(s) into client-side.
*/
            /* this.getView().addEventDelegate({
                onBeforeFirstShow: function() {
                    var oModel = that.getView().getModel();

                    oModel.read("/Customers('ANTON')", {
                        success: function() {
                            MessageToast.show("Successfully red - Customers('ANTON')");
                        },
    
                        error: function() {
    
                        }
                    });
                }
            }); */

        },
        
        onDataRequested: function(oEvt) {
            this.getView().setBusy(true);
        },

        onDataReceived: function(oEvt) {
            this.getView().setBusy(false);
        }
    });
});
