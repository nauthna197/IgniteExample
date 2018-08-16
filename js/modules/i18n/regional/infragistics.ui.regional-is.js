/* Iceland +*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};
    $.ig.regional = $.ig.regional || {};
	if ($.datepicker && $.datepicker.regional) {
	    $.datepicker.regional['is'] = {
			closeText: 'Loka',
			prevText: '&#x3C; Fyrri',
			nextText: 'Nasti &#x3E;',
			currentText: 'I dag',
			monthNames: ['Januar','Februar','Mars','April','Mai','Juni',
			'Juli','Agust','September','Oktober','November','Desember'],
			monthNamesShort: ['Jan','Feb','Mar','Apr','Mai','Jun',
			'Jul','Agu','Sep','Okt','Nov','Des'],
			dayNames: ['Sunnudagur','Manudagur','Tridjudagur','Midvikudagur','Fimmtudagur','Fostudagur','Laugardagur'],
			dayNamesShort: ['Sun','Man','Tri','Mid','Fim','Fos','Lau'],
			dayNamesMin: ['Su','Ma','Tr','Mi','Fi','Fo','La'],
			weekHeader: 'Vika',
			dateFormat: 'dd.mm.yy',
			firstDay: 0,
			isRTL: false,
			showMonthAfterYear: false,
			yearSuffix: ''
		};
    }
    $.ig.regional.is = {
	    monthNames: ['Januar', 'Februar', 'Mars', 'April', 'Mae', 'Juni', 'Juli', 'Agust', 'September', 'Oktober', 'November', 'Desember'],
	    monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
	    dayNames: ['Sunnudagur', 'Manudagur', 'Tridjudagur', 'Midvikudagur', 'Fimmtudagur', 'Fostudagur', 'Laugardagur'],
	    dayNamesShort: ['Sun', 'Man', 'Tri', 'Mid', 'Fim', 'Fos', 'Lau'],
	    datePattern: 'd.M.yyyy',
	    dateLongPattern: 'd. MMMM yyyy',
	    dateTimePattern: 'd.M.yyyy HH:mm',
	    timePattern: 'HH:mm',
	    timeLongPattern: 'HH:mm:ss',
	    //
	    numericNegativePattern: '-n$',
	    numericDecimalSeparator: ',',
	    numericGroupSeparator: '.',
	    numericMaxDecimals: 2,
	    currencyPositivePattern: 'n $',
	    currencyNegativePattern: '-n $',
	    currencySymbol: 'kr.',
	    currencyDecimalSeparator: ',',
	    currencyGroupSeparator: '.',
	    percentDecimalSeparator: ',',
	    percentGroupSeparator: '.'
    };
    if ($.ig.setRegionalDefault) {
	    $.ig.setRegionalDefault('is');
    }
})(jQuery);