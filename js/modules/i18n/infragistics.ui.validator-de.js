/*!@license
* Infragistics.Web.ClientUI Validator localization resources 15.2.20152.2235
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.Validator) {
	    $.ig.Validator = {
		    locale: {
			    defaultMessage: 'Bitte korrigieren Sie dieses Feld',
			    selectMessage: 'Bitte wahlen Sie einen Wert aus',
			    rangeSelectMessage: 'Bitte wahlen Sie nicht mehr als {0} und nicht weniger als {1} Elemente',
			    minSelectMessage: 'Bitte wahlen Sie mindestens {0} Elemente',
			    maxSelectMessage: 'Bitte wahlen Sie nicht mehr als {0} Elemente',
			    rangeLengthMessage: 'Bitte geben Sie einen Wert zwischen {0} und {1} Zeichen ein',
			    minLengthMessage: 'Bitte geben Sie mindestens {0} Zeichen ein',
			    maxLengthMessage: 'Bitte geben Sie nicht mehr als {0} Zeichen ein',
			    requiredMessage: 'Dieses Feld ist erforderlich',
			    patternMessage: 'Eintrag entspricht nicht dem erforderlichen Muster',
			    maskMessage: 'Bitte fullen Sie alle erforderlichen Positionen aus',
			    dateFieldsMessage: 'Bitte geben Sie Werte in Datumsfelder ein',
			    invalidDayMessage: 'Ungultiger Tag des Monats Bitte geben Sie einen korrekten Tag ein',
			    dateMessage: 'Bitte geben Sie ein gultiges Datum ein',
			    numberMessage: 'Bitte geben Sie eine gultige Nummer ein',
                rangeValueMessage: 'Bitte geben Sie einen Wert zwischen {0} und {1} ein',
		        minValueMessage: 'Bitte geben Sie einen Wert groser oder gleich {0} ein',
		        maxValueMessage: 'Bitte geben Sie einen Wert kleiner oder gleich {0} ein',
		        emailMessage: 'Eine gultige E-Mail-Adresse sollte eingegeben werden',
		        equalToMessage: 'Die zwei Werte stimmen nicht uberein',
		        optionalString: '(optional)'
		    }
	    };
    }
})(jQuery);