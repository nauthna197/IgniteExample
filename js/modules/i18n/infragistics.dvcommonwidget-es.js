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
			    seriesName: "debe especificar la opcion de nombre de la serie al establecer las opciones.",
			    axisName: "debe especificar la opcion de nombre del eje al establecer las opciones.",
			    invalidLabelBinding: "No existe ningun valor para las etiquetas de enlace.",
			    invalidSeriesAxisCombination: "Combinacion no valida de los tipos de serie y de ejes: ",
			    close: "Cerrar",
			    overview: "Informacion general",
			    zoomOut: "Alejar",
			    zoomIn: "Acercar",
			    resetZoom: "Restablecer zoom",
			    seriesUnsupportedOption: "el tipo de serie actual no es compatible con la opcion: ",
			    seriesTypeNotLoaded: "el archivo JavaScript que contiene el tipo de serie solicitado no se ha cargado o el tipo de serie no es valido: ",
			    axisTypeNotLoaded: "el archivo JavaScript que contiene el tipo de eje solicitado no se ha cargado o el tipo de eje no es valido:",
			    axisUnsupportedOption: "el tipo de eje actual no es compatible con la opcion: "
		    }
	    });

    }
})(jQuery);
