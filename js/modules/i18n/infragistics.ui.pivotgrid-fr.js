/*!@license
* Infragistics.Web.ClientUI Pivot Grid localization resources 15.2.20152.2235
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.PivotGrid) {
        $.ig.PivotGrid = {};

        $.extend($.ig.PivotGrid, {
            locale: {
                filtersHeader: "Placer les champs de filtre ici",
                measuresHeader: "Placer les elements de donnees ici",
                rowsHeader: "Placer les champs de ligne ici",
                columnsHeader: "Placer les champs de colonne ici",
                disabledFiltersHeader: "Champs de filtre",
                disabledMeasuresHeader: "Elements de donnees",
                disabledRowsHeader: "Champs de ligne",
                disabledColumnsHeader: "Champs de colonne",
                noSuchAxis: "Aucun axe de ce type"
            }
        });
    }
})(jQuery);