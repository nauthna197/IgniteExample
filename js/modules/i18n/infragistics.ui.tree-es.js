/*!@license
* Infragistics.Web.ClientUI Tree localization resources 15.2.20152.2235
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.Tree) {
	    $.ig.Tree = {};

	    $.extend($.ig.Tree, {
		    locale: {
			    invalidArgumentType: 'El tipo de argumento proporcionado no es valido.',
			    errorOnRequest: 'Se ha producido un error al recuperar los datos: ',
			    noDataSourceUrl: 'El control igTree requiere que se proporcione una dataSourceUrl para iniciar una solicitud de datos en esa direccion URL.',
			    incorrectPath: 'No se ha encontrado un nodo en la ruta proporcionada: ',
			    incorrectNodeObject: 'El argumento proporcionado no es un elemento nodo de jQuery.',
			    setOptionError: 'Los cambios en el tiempo de ejecucion no estan permitidos para la siguiente opcion: ',
			    moveTo: '<strong>Mover a</strong> {0}',
			    moveBetween: '<strong>Mover entre</strong> {0} y {1}',
			    moveAfter: '<strong>Mover despues de</strong> {0}',
			    moveBefore: '<strong>Mover antes de</strong> {0}',
			    copyTo: '<strong>Copiar en</strong> {0}',
			    copyBetween: '<strong>Copiar entre</strong> {0} y {1}',
			    copyAfter: '<strong>Copiar despues de</strong> {0}',
			    copyBefore: '<strong>Copiar antes de</strong> {0}',
			    and: 'y'
		    }
	    });

    }
})(jQuery);