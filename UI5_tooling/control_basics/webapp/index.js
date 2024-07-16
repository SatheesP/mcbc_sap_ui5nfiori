sap.ui.define([
    "sap/m/Text",
    "sap/m/Label",
    "sap/m/Input",
    "sap/m/Carousel",
    "sap/m/Button",
    "sap/m/library",
    "sap/m/MessageToast"
], (Text, Label, Input, Carousel, Button, lib, MessageToast) => {
    "use strict";

    const { ButtonType } = lib;

    new Carousel({
        pages: [
            new Label({ text: "Welcome to 🎓Master Class | UI5 & Fiori - BOOTCAMP 🚀" })
                .addStyleClass("sapUiLargeMarginBeginEnd")
                .addStyleClass("sapUiLargeMarginTopBottom"),
            new Input({ value: "Sathees Kumar P.", description: "Full Name" })
                .addStyleClass("sapUiLargeMarginBeginEnd")
                .addStyleClass("sapUiLargeMarginTopBottom"),
            new Text({ text: "🪫 Change is inevitable - Accept the change & Accelerate the learning!!! 🔋" })
                .addStyleClass("sapUiLargeMarginBeginEnd")
                .addStyleClass("sapUiLargeMarginTopBottom"),
            new Button({
                text: "Click Me", icon: "sap-icon://keyboard-and-mouse", type: ButtonType.Emphasized,
                press: function () {
                    MessageToast.show("You successfully clicked me!!!");
                }
            }).addStyleClass("sapUiLargeMargin")
        ]
    }
    ).placeAt("content");
});
