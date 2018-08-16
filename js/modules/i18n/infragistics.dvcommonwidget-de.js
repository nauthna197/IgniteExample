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
