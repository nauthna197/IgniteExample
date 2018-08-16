/*!@license
* Infragistics.Web.ClientUI Tree Grid localization resources 15.2.20152.2235
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.TreeGrid) {
        $.ig.TreeGrid = {};

        $.extend($.ig.TreeGrid, {
            locale: {
                fixedVirtualizationNotSupported: 'RowVirtualization erfordert eine andere virtualizationMode-Konfiguration. Der virtualizationMode sollte auf "continuous" eingestellt sein.'
            }
        });

        $.ig.TreeGridPaging = $.ig.TreeGridPaging || {};

        $.extend($.ig.TreeGridPaging, {
            locale: {
                contextRowLoadingText: "Ladevorgang lauft...",
                contextRowRootText: "Stamm",
                columnFixingWithContextRowNotSupported: 'ColumnFixing erfordert eine andere contextRowMode-Konfiguration. contextRowMode sollte auf "none" gestellt werden, um ColumnFixing zu aktivieren.'
            }
        });

        $.ig.TreeGridFiltering = $.ig.TreeGridFiltering || {};

        $.extend($.ig.TreeGridFiltering, {
            locale: {
                filterSummaryInPagerTemplate: "${currentPageMatches} von ${totalMatches} ubereinstimmenden Datensatzen"
            }
        });

        $.ig.TreeGridRowSelectors = $.ig.TreeGridRowSelectors || {};

        $.extend($.ig.TreeGridRowSelectors, {
        	locale: {
        	    multipleSelectionWithTriStateCheckboxesNotSupported: "Multiples Auswahlen erfordert eine andere checkBoxMode-Konfiguration. checkBoxMode sollte auf biState gestellt werden, um multiples Auswahlen zu aktivieren."
        	}
        });
    }
})(jQuery);