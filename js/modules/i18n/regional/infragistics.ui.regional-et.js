/* Estonia +*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};
    $.ig.regional = $.ig.regional || {};
	if ($.datepicker && $.datepicker.regional) {
	    $.datepicker.regional['et'] = {
			closeText: 'Sulge',
			prevText: 'Eelnev',
			nextText: 'Jargnev',
			currentText: 'Tana',
			monthNames: ['Jaanuar','Veebruar','Marts','Aprill','Mai','Juuni',
			'Juuli','August','September','Oktoober','November','Detsember'],
			monthNamesShort: ['Jaan', 'Veebr', 'Marts', 'Apr', 'Mai', 'Juuni',
			'Juuli', 'Aug', 'Sept', 'Okt', 'Nov', 'Dets'],
			dayNames: ['Puhapaev', 'Esmaspaev', 'Teisipaev', 'Kolmapaev', 'Neljapaev', 'Reede', 'Laupaev'],
			dayNamesShort: ['Puhap', 'Esmasp', 'Teisip', 'Kolmap', 'Neljap', 'Reede', 'Laup'],
			dayNamesMin: ['P','E','T','K','N','R','L'],
			weekHeader: 'nad',
			dateFormat: 'dd.mm.yy',
			firstDay: 1,
			isRTL: false,
			showMonthAfterYear: false,
			yearSuffix: ''
	    };
    }
    $.ig.regional.et = {
	    monthNames: ['Jaanuar', 'Veebruar', 'Marts', 'Aprill', 'Mai', 'Juuni', 'Juuli', 'August', 'September', 'Oktoober', 'November', 'Detsember'],
	    monthNamesShort: ['Jaan', 'Veebr', 'Marts', 'Apr', 'Mai', 'Juuni', 'Juuli', 'Aug', 'Sept', 'Okt', 'Nov', 'Dets'],
	    dayNames: ['Puhapaev', 'Esmaspaev', 'Teisipaev', 'Kolmapaev', 'Neljapaev', 'Reede', 'Laupaev'],
	    dayNamesShort: ['Puhap', 'Esmasp', 'Teisip', 'Kolmap', 'Neljap', 'Reede', 'Laup'],
	    datePattern: 'd.MM.yyyy',
	    dateLongPattern: 'd. MMMM yyyy. a.',
	    dateTimePattern: 'd.MM.yyyy HH:mm',
	    timePattern: 'HH:mm',
	    timeLongPattern: 'HH:mm:ss',
	    //
	    numericNegativePattern: '-n$',
	    numericDecimalSeparator: ',',
	    numericGroupSeparator: ' ',
	    numericMaxDecimals: 2,
	    currencyPositivePattern: 'n $',
	    currencyNegativePattern: '-n $',
	    currencySymbol: 'kr',
	    currencyDecimalSeparator: ',',
	    currencyGroupSeparator: ' ',
	    percentDecimalSeparator: ',',
	    percentGroupSeparator: ' '
    };
    if ($.ig.setRegionalDefault) {
	    $.ig.setRegionalDefault('et');
    }
})(jQuery);