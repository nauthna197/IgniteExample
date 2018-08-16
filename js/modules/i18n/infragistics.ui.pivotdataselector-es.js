/*!@license
* Infragistics.Web.ClientUI Pivot Data Selector localization resources 15.2.20152.2235
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.PivotDataSelector) {
        $.ig.PivotDataSelector = {};

        $.extend($.ig.PivotDataSelector, {
            locale: {
                invalidBaseElement: " no se admite como elemento base. Use DIV en su lugar.",
                catalog: "Catalogo",
                cube: "Cubo",
                measureGroup: "Medir grupo",
                measureGroupAll: "(Todo)",
                rows: "Filas",
                columns: "Columnas",
                measures: "Medidas",
                filters: "Filtros",
                deferUpdate: "Aplazar actualizacion",
                updateLayout: "Actualizar diseno",
                selectAll: "Seleccionar todo"
            }
        });
    }
})(jQuery);