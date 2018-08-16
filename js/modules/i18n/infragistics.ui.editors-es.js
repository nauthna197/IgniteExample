/*!@license
* Infragistics.Web.ClientUI Editors localization resources 15.2.20152.2235
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.Editor) {
	    $.ig.Editor = {
		    locale: {
			    spinUpperTitle: 'Incrementar',
			    spinLowerTitle: 'Reducir',
			    buttonTitle: 'Mostrar lista',
			    clearTitle: 'Borrar valor',
			    ariaTextEditorFieldLabel: 'Editor de texto',
			    ariaNumericEditorFieldLabel: 'Editor numerico',
			    ariaCurrencyEditorFieldLabel: 'Editor de moneda',
			    ariaPercentEditorFieldLabel: 'Editor de porcentaje',
			    ariaMaskEditorFieldLabel: 'Editor de mascara',
			    ariaDateEditorFieldLabel: 'Editor de fecha',
			    ariaDatePickerFieldLabel: 'Selector de fecha',
			    ariaSpinUpButton: 'Incrementar',
			    ariaSpinDownButton: 'Reducir',
			    ariaDropDownButton: 'Desplegar',
			    ariaClearButton: 'Borrar',
			    ariaCalendarButton: 'Calendario',
			    datePickerButtonTitle: 'Mostrar calendario',
			    updateModeUnsupportedValue: 'La opcion updateMode admite dos valores posibles: "onChange" e "immediate"',
			    updateModeNotSupported: 'La propiedad updateMode solo es compatible con el modo "onchange" para las extensiones igMaskEditor, igDateEditor y igDatePicker',
			    renderErrMsg: "No se puede instalar un editor de base directamente. Intentelo con un editor de texto, numerico, de fecha u otro editor.",
			    multilineErrMsg: 'textArea requiere una configuracion diferente. textMode deberia ajustarse a "multiline".',
			    targetNotSupported: "Este elemento de origen no se admite.",
			    placeHolderNotSupported: "Su navegador no admite el atributo de campo de comodin.",
			    allowedValuesMsg: "Elija un valor de la lista desplegable.",
			    maxLengthErrMsg: "La entrada es demasiado larga y se ha acortado en {0} simbolos.",
			    maxLengthWarningMsg: "La entrada ha llegado a la longitud maxima de {0} para este campo",
			    minLengthErrMsg: "Deben introducirse al menos {0} caracteres.",
			    maxValErrMsg: "La entrada ha alcanzado el valor maximo de {0} para este campo.",
			    minValErrMsg: "La entrada ha alcanzado el valor minimo de {0} para este campo.",
			    maxValExceedRevertErrMsg: "La entrada ha superado el valor maximo de {0} y se ha vuelto a la anterior.",
			    minValExceedRevertErrMsg: "La entrada es inferior al valor minimo de {0} y ha vuelto al valor anterior",
			    maxValExceedSetErrMsg: "Entry exceeded the maximum value of {0} and was set to the maximum value",
			    minValExceedSetErrMsg: "Entry exceeded the minimum value of {0} and was set to the minimum value",
			    maxValExceededWrappedAroundErrMsg: "La entrada ha superado el valor maximo de {0} y se ha ajustado al minimo permitido.",
			    minValExceededWrappedAroundErrMsg: "La entrada es inferior al valor minimo de {0} y se ha ajustado en el valor maximo permitido",
			    btnValueNotSupported: 'Se requiere un valor de boton diferente. Elija un valor entre "dropdown", "clear" y "spin".',
			    scientificFormatErrMsg: 'Se requiere un scientificFormat diferente. Elija un valor entre "E", "e", "E+" y "e+".',
			    spinDeltaIsOfTypeNumber: "Se requiere un tipo de spinDelta diferente. Debe introducirse un numero positivo.",
			    spinDeltaCouldntBeNegative: "La opcion spinDelta no puede ser negativa. Debe introducirse un numero positivo.",
			    spinDeltaContainsExceedsMaxDecimals: "El numero de fracciones maximo permitido para spinDelta esta establecido en {0}. Cambie MaxDecimals o bien intente reducir su valor.",
			    spinDeltaIncorrectFloatingPoint: 'Un punto flotante spinDelta requiere una configuracion diferente. Configure dataMode del editor a "double" o "float" o configure spinDelta a un valor entero.',
			    notEditableOptionByInit: "Esta opcion no puede editarse tras la inicializacion. Su valor debe establecerse durante la inicializacion.",
			    numericEditorNoSuchMethod: "El editor numerico no admite este metodo.",
			    numericEditorNoSuchOption: "El editor numerico no es compatible con esta opcion.",
			    displayFactorIsOfTypeNumber: "displayFactor requiere un valor diferente. Su valor debe establecerse con un numero entre 1 o 100.",
			    displayFactorAllowedValue: "displayFactor requiere un valor diferente. Su valor debe establecerse con un numero entre 1 o 100.",
			    instantiateCheckBoxErrMsg: "igCheckboxEditor requiere un elemento diferente. Utilice los elementos INPUT, SPAN o DIV.",
			    cannotParseNonBoolValue: "igCheckboxEditor requiere un valor diferente. Debe proporcionarse un valor booleano.",
			    cannotSetNonBoolValue: "igCheckboxEditor requiere un valor diferente. Debe proporcionarse un valor booleano.",
			    maskEditorNoSuchMethod: "El editor de mascaras no admite este metodo.",
			    datePickerEditorNoSuchMethod: "El editor de fechas no admite este metodo.",
			    datePickerNoSuchMethodDropDownContainer: "El editor de fechas no admite este metodo. En su lugar, utilice 'getCalendar' uno.",
			    buttonTypeIsDropDownOnly: "Datepicker solo admite valores de desplegar menu y de borrar para la opcion buttonType.",
			    dateEditorMinValue: "La opcion MinValue no puede establecer un tiempo de ejecucion.",
			    dateEditorMaxValue: "La opcion MaxValue no puede establecer un tiempo de ejecucion.",
			    cannotSetRuntime: "Esta opcion no puede establecer un tiempo de ejecucion",
			    invalidDate: "Fecha no valida",
			    maskMessage: 'Deben rellenarse todas las posiciones requeridas.',
			    dateMessage: 'Debe introducirse una fecha valida',
			    centuryThresholdValidValues: "La propiedad centuryThreshold deberia estar entre 0 y 99. Se ha devuelto este valor a su ajuste predeterminado.",
			    noListItemsNoButton: "No se representa ningun boton desplegable o de control de numero porque no hay elementos de lista."
		    }
	    };
    }
})(jQuery);
