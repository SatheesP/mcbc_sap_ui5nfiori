sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
    "sap/ui/model/json/JSONModel"
],
    function (Controller, Filter, FilterOperator, JSONModel) {
        "use strict";

        return Controller.extend("masterclass.ui5.listbindingfeatures.controller.Main", {
            onInit: function () {
                var oModel = new JSONModel("./model/products.json");
                this.getView().setModel(oModel);
            },

            onSearch: function (oEvent) {
                // add filter for kind of full text search
                var aFilters = [];
                var sQuery = oEvent.getSource().getValue();
                if (sQuery && sQuery.length > 0) {
                    var filter = new Filter({path: "name", operator: FilterOperator.Contains, value1: sQuery, caseSensitive: false});
                    aFilters.push(filter);
                    var filter = new Filter({path: "description", operator: FilterOperator.Contains, value1: sQuery, caseSensitive: false});
                    aFilters.push(filter);
                    var filter = new Filter({path: "productCategory", operator: FilterOperator.Contains, value1: sQuery, caseSensitive: false});
                    aFilters.push(filter);
                }

                // update the list binding
                var oTable = this.byId("tblProducts");
                var oBinding = oTable.getBinding("items");
                // Search text is blank then empty array passed to binding to remove any filters pre-exists
                // Otherwise concatenate set of filters with condition as OR
                oBinding.filter(aFilters.length === 0 ? [] : new Filter( {filters: aFilters, and: false} ), "Application");
            }
        });
    });
