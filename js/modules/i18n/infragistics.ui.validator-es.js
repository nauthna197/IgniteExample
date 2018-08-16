/*!@license
* Infragistics.Web.ClientUI Validator localization resources 15.2.20152.2235
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.Validator) {
	    $.ig.Validator = {
		    locale: {
			    defaultMessage: 'Corrija este campo',
			    selectMessage: 'Seleccione un valor',
			    rangeSelectMessage: 'Seleccione un numero de elementos entre {0} como maximo y {1} como minimo',
			    minSelectMessage: 'Seleccione {0} elementos como minimo',
			    maxSelectMessage: 'No seleccione mas de {0} elementos',
			    rangeLengthMessage: 'Escriba un valor de entre {0} y {1} caracteres',
			    minLengthMessage: 'Escriba {0} caracteres como minimo',
			    maxLengthMessage: 'No escriba mas de {0} caracteres',
			    requiredMessage: 'Este campo es obligatorio',
			    patternMessage: 'La entrada no coincide con el patron necesario.',
			    maskMessage: 'Rellene todas las posiciones obligatorias',
			    dateFieldsMessage: 'Rellene los campos de fecha',
			    invalidDayMessage: 'Dia del mes no valido. Escriba el dia correcto',
			    dateMessage: 'Escriba una fecha valida',
			    numberMessage: 'Escriba un numero valido',
		        rangeValueMessage: 'Escriba un valor entre {0} y {1}',
		        minValueMessage: 'Escriba un valor mayor o igual a {0}',
		        maxValueMessage: 'Escriba un valor menor o igual a {0}',
		        emailMessage: 'Debe introducirse una direccion de correo electronico valida.',
		        equalToMessage: 'Los dos valores no coinciden',
		        optionalString: '(opcional)'
		    }
	    };
    }
})(jQuery);