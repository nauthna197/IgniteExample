/*!@license
* Infragistics.Web.ClientUI Upload localization resources 15.2.20152.2235
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.Upload) {
	    $.ig.Upload = {};

	    $.extend($.ig.Upload, {

		    locale: {
			    labelUploadButton: "Datei hochladen",
			    labelAddButton: "Hinzufugen",
			    labelClearAllButton: "Hochgeladene loschen",
			    // M.H. 13 May 2011 - fix bug 75042
			    labelSummaryTemplate: "{0} von {1} hochgeladenen",
			    labelSummaryProgressBarTemplate: "{0}/{1}",
			    labelShowDetails: "Details anzeigen",
			    labelHideDetails: "Details ausblenden",
			    labelSummaryProgressButtonCancel: "Abbrechen",
			    // M.H. 1 June 2011 Fix bug #77532
			    labelSummaryProgressButtonContinue: "Hochladen",
			    labelSummaryProgressButtonDone: "Fertig",
			    labelProgressBarFileNameContinue: "...",

			    //error messages
			    errorMessageFileSizeExceeded: "Max. Dateigrose uberschritten",
			    errorMessageGetFileStatus: "Ihr aktueller Dateistatus konnte nicht erfasst werden! Wahrscheinlich ist Verbindung abgebrochen.",
			    errorMessageCancelUpload: "Befehl zum Abbrechen des Upload-Vorgangs konnte nicht an Server gesendet werden! Wahrscheinlich ist Verbindung abgebrochen.",
			    errorMessageNoSuchFile: "Die angeforderte Datei konnte nicht gefunden werden. Wahrscheinlich ist diese Datei zu gros.",
			    errorMessageOther: "Beim Hochladen der Datei ist ein interner Fehler aufgetreten. Fehlercode: {0}.",
			    errorMessageValidatingFileExtension: "Uberprufung der Datenerweiterung ist fehlgeschlagen.",
			    errorMessageAJAXRequestFileSize: "Beim Erfassen der Dateigrose ist ein AJAX-Fehler aufgetreten.",
			    errorMessageMaxUploadedFiles: "Die maximale Anzahl von hochladbaren Dateien wurde uberschritten.",
			    errorMessageMaxSimultaneousFiles: "Der Wert von maxSimultaneousFilesUploads ist falsch. Er muss mehr als 0 oder Null lauten.",
			    errorMessageTryToRemoveNonExistingFile: "Sie versuchen, eine nicht vorhandene Datei mit ID {0} zu entfernen.",
			    errorMessageTryToStartNonExistingFile: "Sie versuchen, eine nicht vorhandene Datei mit ID {0} zu starten.",
			    errorMessageDropMultipleFilesWhenSingleModel: "Es ist nicht erlaubt, im Einfachmodus mehr als 1 Datei abzulegen",

			    // M.H. 12 May 2011 - fix bug 74763: add title to all buttons
			    // title attributes            
			    titleUploadFileButtonInit: "Datei hochladen",
			    titleAddFileButton: "Hinzufugen",
			    titleCancelUploadButton: "Abbrechen",
			    // M.H. 1 June 2011 Fix bug #77532
			    titleSummaryProgressButtonContinue: "Hochladen",
			    titleClearUploaded: "Hochgeladene loschen",
			    titleShowDetailsButton: "Details anzeigen",
			    titleHideDetailsButton: "Details ausblenden",
			    titleSummaryProgressButtonCancel: "Abbrechen",
			    titleSummaryProgressButtonDone: "Fertig",
			    // M.H. 1 June 2011 Fix bug #77532
			    titleSingleUploadButtonContinue: "Hochladen",
			    titleClearAllButton: "Hochgeladene loschen"
		    }
	    });

    }
})(jQuery);