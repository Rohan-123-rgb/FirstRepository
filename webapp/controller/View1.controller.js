sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("GITDemo.GITDemo.controller.View1", {
		onValueHelp: function (oEvent) {
			var oDialog = new sap.ui.xmlfragment("GITDemo.GITDemo.fragments.SelectDialogue", this);
            this.getView().addDependent(oDialog);
            oDialog.bindAggregation("items",{
            	path:"city>/City",
            	template: new sap.m.StandardListItem({
            		title: "{City>cityName}"
            	})
            });	
            oDialog.open();

		}
	});
});