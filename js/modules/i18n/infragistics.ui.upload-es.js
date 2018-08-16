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
			    labelUploadButton: "Cargar archivo",
			    labelAddButton: "Agregar",
			    labelClearAllButton: "Borrar cargados",
			    // M.H. 13 May 2011 - fix bug 75042
			    labelSummaryTemplate: "{0} de {1} cargados",
			    labelSummaryProgressBarTemplate: "{0}/{1}",
			    labelShowDetails: "Mostrar detalles",
			    labelHideDetails: "Ocultar detalles",
			    labelSummaryProgressButtonCancel: "Cancelar",
			    // M.H. 1 June 2011 Fix bug #77532
			    labelSummaryProgressButtonContinue: "Cargar",
			    labelSummaryProgressButtonDone: "Terminado",
			    labelProgressBarFileNameContinue: "...",

			    //error messages
			    errorMessageFileSizeExceeded: "Se ha excedido el tamano maximo de archivo.",
			    errorMessageGetFileStatus: "!Imposible obtener el estado de archivo actual! Probablemente se ha cortado la conexion.",
			    errorMessageCancelUpload: "!Imposible enviar comando al servidor para cancelar la carga! Probablemente se ha cortado la conexion.",
			    errorMessageNoSuchFile: "No se ha encontrado el archivo que ha solicitado. Probablemente el archivo es demasiado grande.",
			    errorMessageOther: "Error interno al cargar el archivo. Codigo de error: {0}.",
			    errorMessageValidatingFileExtension: "Error en la validacion de extension del archivo.",
			    errorMessageAJAXRequestFileSize: "Error de AJAX al intentar obtener el tamano del archivo.",
			    errorMessageMaxUploadedFiles: "Se ha superado el numero maximo de archivos que pueden cargarse.",
			    errorMessageMaxSimultaneousFiles: "El valor de maxSimultaneousFilesUploads es incorrecto. Debe ser superior a 0 o nulo.",
			    errorMessageTryToRemoveNonExistingFile: "Esta intentando eliminar un archivo no existente con el Id. {0}.",
			    errorMessageTryToStartNonExistingFile: "Esta intentando ejecutar un archivo no existente con el Id. {0}.",
			    errorMessageDropMultipleFilesWhenSingleModel: "No se permite soltar mas de 1 archivo en el modo unico",

			    // M.H. 12 May 2011 - fix bug 74763: add title to all buttons
			    // title attributes            
			    titleUploadFileButtonInit: "Cargar archivo",
			    titleAddFileButton: "Agregar",
			    titleCancelUploadButton: "Cancelar",
			    // M.H. 1 June 2011 Fix bug #77532
			    titleSummaryProgressButtonContinue: "Cargar",
			    titleClearUploaded: "Borrar cargados",
			    titleShowDetailsButton: "Mostrar detalles",
			    titleHideDetailsButton: "Ocultar detalles",
			    titleSummaryProgressButtonCancel: "Cancelar",
			    titleSummaryProgressButtonDone: "Terminado",
			    // M.H. 1 June 2011 Fix bug #77532
			    titleSingleUploadButtonContinue: "Cargar",
			    titleClearAllButton: "Borrar cargados"
		    }
	    });

    }
})(jQuery);