sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/GroupHeaderListItem"
],
function (Controller, GroupHeaderListItem) {
    "use strict";

    return Controller.extend("masterclass.ui5.odata.bindingnwcustgrp.controller.Main", {
        onInit: function () {

        },

        getGroupKey: function(oContext) {
            return {
                key: oContext.getProperty("Category/CategoryName"),
                hdrText: oContext.getProperty("Category/CategoryName") + ' - ' + oContext.getProperty("Category/Description")
            };
        },

        getGroupHeader: function(oGroup) {
            return new GroupHeaderListItem({
                title: oGroup.hdrText
            });
        }
    });
});
