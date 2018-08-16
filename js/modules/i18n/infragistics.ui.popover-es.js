/*!@license
* Infragistics.Web.ClientUI Popover localization resources 15.2.20152.2235
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
$.ig = $.ig || {};

if (!$.ig.Popover) {
	$.ig.Popover = {};

	$.extend( $.ig.Popover, {
		locale: {
			popoverOptionChangeNotSupported: "No se admite el cambio de la siguiente opcion despues de inicializar igPopover:",
			popoverShowMethodWithoutTarget: "El parametro target de la funcion show es obligatorio cuando se utiliza la opcion selectors"
		}
	});

}
})(jQuery);