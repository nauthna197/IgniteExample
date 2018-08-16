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
			    defaultMessage: 'Veuillez reparer ce champ',
			    selectMessage: 'Veuillez selectionner une valeur',
			    rangeSelectMessage: 'Veuillez selectionner au maximum {0} et au minimum {1} elements',
			    minSelectMessage: 'Veuillez selectionner au moins {0} elements',
			    maxSelectMessage: 'Veuillez selectionner au maximum {0} elements',
			    rangeLengthMessage: 'Veuillez entrer une valeur contenant {0} a {1} caracteres',
			    minLengthMessage: 'Veuillez entrer au moins {0} caracteres',
			    maxLengthMessage: 'Veuillez selectionner au maximum {0} caracteres',
			    requiredMessage: 'Ce champ est obligatoire',
			    patternMessage: 'La valeur entree ne correspond pas au schema requis',
			    maskMessage: 'Veuillez remplir tous les postes requis',
			    dateFieldsMessage: 'Veuillez entrer des valeurs dans les champs de dates',
			    invalidDayMessage: 'Jour du mois invalide. Veuillez entrer un jour correct',
			    dateMessage: 'Veuillez entrer une date valide',
			    numberMessage: 'Veuillez entrer un nombre valide',
                rangeValueMessage: 'Veuillez entrer une valeur entre {0} et {1}',
		        minValueMessage: 'Veuillez entrer une valeur superieure ou egale a {0}',
		        maxValueMessage: 'Veuillez entrer une valeur inferieure ou egale a {0}',
		        emailMessage: 'Une adresse e-mail valide doit etre saisie',
		        equalToMessage: 'Les deux valeurs ne correspondent pas',
		        optionalString: '(facultatif)'
		    }
	    };
    }
})(jQuery);