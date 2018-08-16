/*!@license
* Infragistics.Web.MobileUI ListView localization resources 15.2.20152.2235
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
		noSuchWidget: "No such widget loaded: ",
		optionChangeNotSupported: "Changing the following option after the igListView has been created is not supported:",
		emptyListText: "There are no list items!",
		goBackLabel: "Go back",
		detailsLabel: "Details",
		searchTrayExpandLabel: "Sort/Filter",
		searchTrayCollapseLabel: "Collapse"
	};
	$.ig.mobileListViewFiltering.locale = {
		keywordSearchLabel: "",
		keywordAllStateText: "All Fields",
		filterPresetsLabel: "Filter Presets:",
		searchBarPlaceHolder: "Filter Items...",
		filterAllStateText: "All",
		showLabel: "Show ",
		cancelButtonLabel: "Cancel",
		clearSearchButtonText: "Clear Text"
	};
	$.ig.mobileListViewLoadOnDemand.locale = {
		loadMoreItemsLabel: "Load more items",
		noMoreItemsLabel: "No items left to load"
	};
	$.ig.mobileListViewSorting.locale = {
		sortPresetsLabel: "Sort Presets:",
		sortDefaultStateText: "Default",
		sortByLabel: "Sort by ",
		expandedCueText: "Click to collapse {0}",
		collapsedCueText: "Click to expand {0}"
	};

}
