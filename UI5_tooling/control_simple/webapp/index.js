sap.ui.define([
    "sap/m/Panel",
    "sap/m/Label",
    "sap/m/Input",
    "sap/m/Button",
    "sap/m/MessageToast"
], (Panel, Label, Input, Button, MessageToast) => {
    "use strict";

    new Panel({ 
        headerText: "Simple Controls",
        content: [
            new Label("lbl_fullname", { text: "Full Name", shoshowColon: true, labelFor: "inp_fullname" }),
            new Input("inp_fullname", { value: "Sathees Kumar P.", required: true }),
            new Button({
                text: "Submit", icon: "sap-icon://paper-plane", type: "Emphasized",
                press: function () {
                    // Deprecated API 'sap.ui.getCore().byId(<ID>)'
                    let sName =  sap.ui.getCore().byId("inp_fullname").getValue();
                    MessageToast.show("Entered name: " + sName);
                }
            })
        ]
    }
    ).placeAt("content");
});
