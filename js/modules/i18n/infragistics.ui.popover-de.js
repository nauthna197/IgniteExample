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
			popoverOptionChangeNotSupported: "Die Anderung der folgenden Option nach der Initialisierung von igPopover wird nicht unterstutzt:",
			popoverShowMethodWithoutTarget: "Der Target-Parameter der Show-Funktion ist obligatorisch, wenn die Selectors-Option verwendet wird"
		}
	});

}
})(jQuery);