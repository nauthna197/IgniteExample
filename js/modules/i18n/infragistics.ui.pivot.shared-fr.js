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
                invalidDataSource: "La source de donnees specifiee est nulle ou n'est pas prise en charge.",
                measureList: "Mesures",
                ok: "OK",
                cancel: "Annuler",
                addToMeasures: "Ajouter aux Mesures",
                addToFilters: "Ajouter aux Filtres",
                addToColumns: "Ajouter aux Colonnes",
                addToRows: "Ajouter aux Lignes"
            }
        });
    }
})(jQuery);