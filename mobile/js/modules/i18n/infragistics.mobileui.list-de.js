/*!@license
* Infragistics.Web.ClientUI ListView localization resources 15.2.20152.2235
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
$.ig = $.ig || {};

if (!$.ig.mobileListView) {
	$.ig.mobileListView = {};
	$.ig.mobileListViewFiltering = {};
	$.ig.mobileListViewLoadOnDemand = {};
	$.ig.mobileListViewSorting = {};

	$.ig.mobileListView.locale = {
		noSuchWidget: "Kein solches Widget geladen: ",
		optionChangeNotSupported: "Die Anderung der folgenden Option nach der Erstellung von igListView wird nicht unterstutzt:",
		emptyListText: "Es gibt keine Listenelemente!",
		goBackLabel: "Zuruck",
		detailsLabel: "Details",
		searchTrayExpandLabel: "Sortieren/Filtern",
		searchTrayCollapseLabel: "Reduzieren"
	};
	$.ig.mobileListViewFiltering.locale = {
		keywordSearchLabel: "",
		keywordAllStateText: "Alle Felder",
		filterPresetsLabel: "Filtervoreinstellungen:",
		searchBarPlaceHolder: "Filterelemente...",
		filterAllStateText: "Alle",
		showLabel: "Anzeigen ",
		cancelButtonLabel: "Abbrechen",
		clearSearchButtonText: "Text loschen"
	};
	$.ig.mobileListViewLoadOnDemand.locale = {
		loadMoreItemsLabel: "Mehr Elemente laden",
		noMoreItemsLabel: "Es gibt keine zu ladenden Elemente mehr"
	};
	$.ig.mobileListViewSorting.locale = {
		sortPresetsLabel: "Voreinstellungen sortieren:",
		sortDefaultStateText: "Standard",
		sortByLabel: "Sortieren nach ",
		expandedCueText: "Klicken, um {0} zu reduzieren",
		collapsedCueText: "Klicken, um {0} zu erweitern"
	};

}
