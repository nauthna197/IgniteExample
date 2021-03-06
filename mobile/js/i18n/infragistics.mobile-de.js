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
			    invalidDataSource: "Die angegebene Datenquelle ist ungultig. Es kann ein Skalar sein.",
			    unknownDataSource: "Der Datenquellentyp kann nicht bestimmt werden. Bitte angeben, ob es sich um JSON- oder XML-Daten handelt.",
			    errorParsingArrays: "Bei der Analyse der Arraydaten und der Anwendung des definierten Datenschemas ist ein Fehler aufgetreten: ",
			    errorParsingJson: "Bei der Analyse der JSON-Daten und der Anwendung des definierten Datenschemas ist ein Fehler aufgetreten: ",
			    errorParsingXml: "Bei der Analyse der XML-Daten und der Anwendung des definierten Datenschemas ist ein Fehler aufgetreten: ",
			    errorParsingHtmlTable: "Beim Extrahieren der Daten aus der HTML-Tabelle und der Anwendung des Schemas ist ein Fehler aufgetreten: ",
			    errorExpectedTbodyParameter: "tbody oder table wurde als Parameter erwartet.",
			    errorTableWithIdNotFound: "Die HTML-Tabelle mit der folgenden ID wurde nicht gefunden: ",
			    errorParsingHtmlTableNoSchema: "Bei der Analyse der Tabelle DOM ist ein Fehler aufgetreten: ",
			    errorParsingJsonNoSchema: "Bei der Analyse/Auswertung der JSON-Zeichenfolge ist ein Fehler aufgetreten: ",
			    errorParsingXmlNoSchema: "Bei der Analyse der XML-Zeichenfolge ist ein Fehler aufgetreten: ",
			    errorXmlSourceWithoutSchema: "Die angegebene Datenquelle ist ein XML-Dokument, aber es gibt kein definiertes Datenschema ($.IgDataSchema). ",
			    errorUnrecognizedFilterCondition: " Die angegebene Filterbedingung wurde nicht erkannt: ",
			    errorRemoteRequest: "Die Remoteanforderung zum Abrufen von Daten ist fehlgeschlagen: ",
			    errorSchemaMismatch: "Die Eingabedaten stimmen nicht mit dem Schema uberein, das folgende Feld konnte nicht zugeordnet werden: ",
			    errorSchemaFieldCountMismatch: "Die Eingabedaten stimmen in Bezug auf die Anzahl Felder nicht mit dem Schema uberein. ",
			    errorUnrecognizedResponseType: "Der Antworttyp wurde entweder nicht korrekt eingestellt oder konnte nicht automatisch erkannt werden. Bitte settings.responseDataType und/oder settings.responseContentType einstellen.",
			    hierarchicalTablesNotSupported: "Tabellen werden nicht fur HierarchicalSchema unterstutzt.",
			    cannotBuildTemplate: "Die jQuery-Vorlage konnte nicht erstellt werden. Es gibt keine Datensatze in der Datenquelle und keine definierten Spalten.",
			    unrecognizedCondition: "Nicht erkannte Filterbedingung im folgenden Ausdruck: ",
			    fieldMismatch: "Der folgende Ausdruck enthalt ein ungultiges Feld oder eine ungultige Filterbedingung: ",
			    noSortingFields: "Es wurden keine Felder angegeben. Beim Aufrufen von sort() muss mindestens ein Feld zum Sortieren angegeben werden.",
			    filteringNoSchema: "Es wurden kein Schema / Felder angegeben. Es muss ein Schema mit Felddefinitionen und Feldtypen angegeben werden, um die Datenquelle filtern zu konnen.",
			    noSaveChanges: "Speichern der Anderungen war nicht erfolgreich. Server hat Success-Objekt nicht zuruckgegeben oder Success:false zuruckgegeben.",
			    errorUnexpectedCustomFilterFunction: "Fur eine kundenspezifische Filterfunktion wurde ein unerwarteter Wert angegeben. Eine Funktion oder Zeichenfolge wird erwartet."
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
			    seriesName: "muss beim Einstellen von Optionen die Option Datenreihenname angeben.",
			    axisName: "muss beim Einstellen von Optionen die Option Achsenname angeben.",
			    invalidLabelBinding: "Es gibt keinen solchen Wert fur die zu bindenden Bezeichnungen.",
			    invalidSeriesAxisCombination: "Ungultige Kombination aus Reihen- und Achsentypen: ",
			    close: "Schliesen",
			    overview: "Ubersicht",
			    zoomOut: "Verkleinern",
			    zoomIn: "Vergrosern",
			    resetZoom: "Zoom zurucksetzen",
			    seriesUnsupportedOption: "der aktuelle Reihentyp unterstutzt nicht die Option: ",
			    seriesTypeNotLoaded: "die den geforderten Reihentyp enthaltende JavaScript-Datei wurde nicht geladen oder der Reihentyp ist ungultig: ",
			    axisTypeNotLoaded: "die den geforderten Achsentyp enthaltende JavaScript-Datei wurde nicht geladen oder der Achsentyp ist ungultig: ",
			    axisUnsupportedOption: "der aktuelle Achsentyp unterstutzt nicht die Option: "
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
			    undefinedArgument: 'Beim Abrufen der Datenquellen-Eigenschaft ist ein Fehler aufgetreten: '
		    }
	    });
    }
})(jQuery);

