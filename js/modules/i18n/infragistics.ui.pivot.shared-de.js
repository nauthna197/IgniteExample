/*!@license
* Infragistics.Web.ClientUI Pivot Shared localization resources 15.2.20152.2235
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.PivotShared) {
        $.ig.PivotShared = {};

        $.extend($.ig.PivotShared, {
            locale: {
                invalidDataSource: "Die angegebene Datenquelle ist entweder Null oder wird nicht unterstutzt.",
                measureList: "Measures",
                ok: "OK",
                cancel: "Abbrechen",
                addToMeasures: "Zu Measures hinzufugen",
                addToFilters: "Zu Filtern hinzufugen",
                addToColumns: "Zu Spalten hinzufugen",
                addToRows: "Zu Zeilen hinzufugen"
            }
        });
    }
})(jQuery);