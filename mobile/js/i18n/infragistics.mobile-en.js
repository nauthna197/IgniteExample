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

/*!@license
* Infragistics.Web.ClientUI data source localization resources 15.2.20152.2235
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {

    $.ig = $.ig || {};

    if (!$.ig.DataSourceLocale) {
	    $.ig.DataSourceLocale = {};

	    $.extend($.ig.DataSourceLocale, {

		    locale: {
			    invalidDataSource: "The supplied data source is invalid. It happens to be a scalar.",
			    unknownDataSource: "Cannot determine the data source type. Please specify if it is JSON or XML data.",
			    errorParsingArrays: "There was an error parsing the array data and applying the defined data schema: ",
			    errorParsingJson: "There was an error parsing the JSON data and applying the defined data schema: ",
			    errorParsingXml: "There was an error parsing the XML data and applying the defined data schema: ",
			    errorParsingHtmlTable: "There was an error extracting the data from the HTML Table and applying the schema : ",
			    errorExpectedTbodyParameter: "Expected a tbody or a table as a parameter.",
			    errorTableWithIdNotFound: "The HTML Table with the following ID was not found: ",
			    errorParsingHtmlTableNoSchema: "There was an error parsing the Table DOM: ",
			    errorParsingJsonNoSchema: "There was an error parsing/evaluating the JSON string: ",
			    errorParsingXmlNoSchema: "There was an error parsing the XML string: ",
			    errorXmlSourceWithoutSchema: "The supplied data source is an xml document, but there is no defined data schema ($.IgDataSchema) ",
			    errorUnrecognizedFilterCondition: " The filter condition that was passed was not recognized: ",
			    errorRemoteRequest: "The remote request to fetch data has failed: ",
			    errorSchemaMismatch: "The input data doesn't match the schema, the following field couldn't be mapped: ",
			    errorSchemaFieldCountMismatch: "The input data doesn't match the schema in terms of number of fields. ",
			    errorUnrecognizedResponseType: "The response type was either not set correctly, or it was not possible to detect it automatically. Please set settings.responseDataType and/or settings.responseContentType.",
			    hierarchicalTablesNotSupported: "Tables are not supported for HierarchicalSchema",
			    cannotBuildTemplate: "The jQuery template could not be built. There are no records present in the data source, and no columns defined.",
			    unrecognizedCondition: "Unrecognized filtering condition in the following expression: ",
			    fieldMismatch: "The following expression contains an invalid field or filtering condition: ",
			    noSortingFields: "There are no fields specified. You need to specify at least one field to sort by, when calling sort().",
			    filteringNoSchema: "There is no schema / fields specified. You need to specify a schema with field definitions and types to be able to filter the data source.",
			    noSaveChanges: "Saving changes was not successful. Server did not return Success object or returned Success:false.",
			    errorUnexpectedCustomFilterFunction: "An unexpected value was provided for a custom filtering function. A function or string is expected."
		    }
	    });

    }
})(jQuery);
/*!@license
* Infragistics.Web.ClientUI common DV widget localization resources 15.2.20152.2235
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.Chart) {
	    $.ig.Chart = {};

	    $.extend($.ig.Chart, {

		    locale: {
			    seriesName: "must specify series name option when setting options.",
			    axisName: "must specify axis name option when setting options.",
			    invalidLabelBinding: "There is no such value for the labels to bind.",
			    invalidSeriesAxisCombination: "Invalid combination of series and axis types: ",
			    close: "Close",
			    overview: "Overview",
			    zoomOut: "Zoom Out",
			    zoomIn: "Zoom In",
			    resetZoom: "Reset Zoom",
			    seriesUnsupportedOption: "the current series type does not support the option: ",
			    seriesTypeNotLoaded: "the JavaScript file containing the requested series type has not been loaded or the series type is invalid: ",
			    axisTypeNotLoaded: "the JavaScript file containing the requested axis type has not been loaded or the axis type is invalid: ",
			    axisUnsupportedOption: "the current axis type does not support the option: "
		    }
	    });

    }
})(jQuery);

/*!@license
* Infragistics.Web.ClientUI templating localization resources 15.2.20152.2235
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.Templating) {
	    $.ig.Templating = {};

	    $.extend($.ig.Templating, {
		    locale: {
			    undefinedArgument: 'An error has occurred while trying to retrieve data source property: '
		    }
	    });
    }
})(jQuery);

