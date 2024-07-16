sap.ui.define([
    "sap/ui/core/mvc/View",
    "sap/m/Table",
    "sap/m/Column",
    "sap/m/ColumnListItem",
    "sap/m/Text",
    "sap/m/ObjectIdentifier",
    "sap/ui/core/library"
], function (View, Table, Column, ColumnListItem, Text, ObjectIdentifier, lib) {
    return View.extend("masterclass.ui5.view.Main", {

        getControllerName: function () {
            return "masterclass.ui5.controller.Main";
        },

        getAutoPrefixId: function () {
            return true;
        },

        createContent: function (oController) {

            const { VerticalAlign } = lib;
            var oTable = new Table({
                headerText: "Table control with JSON Model binding",
                columns: [
                    new Column({ header: new Text({ text: "Product Name" }) }),
                    new Column({ header: new Text({ text: "Quantity per Unit" }) }),
                    new Column({ header: new Text({ text: "Unit Price" }) }),
                    new Column({ header: new Text({ text: "Stock Qty" }) })
                ],
                items: {
                    path: '/Products',
                    template: new ColumnListItem({
                        vAlign: VerticalAlign.Middle,
                        cells: [
                            new ObjectIdentifier({ title: "{ProductName}", text: "{ProductID}" }),
                            new Text({ text: "{QuantityPerUnit}" }),
                            new Text({ text: "{UnitPrice}" }),
                            new Text({ text: "{UnitsInStock}" })
                        ]
                    })
                }
            })
            return oTable;
        }
    });
});