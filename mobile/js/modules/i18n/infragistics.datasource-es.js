/*!@license
* Infragistics.Web.ClientUI data source localization resources 15.2.20152.2235
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {

    $.ig = $.ig || {};

    if (!$.ig.DataSourceLocale) {
	    $.ig.DataSourceLocale = {};

	    $.extend($.ig.DataSourceLocale, {

		    locale: {
			    invalidDataSource: "El origen de datos proporcionado no es valido. Es de tipo escalar.",
			    unknownDataSource: "No se puede determinar el tipo de origen de datos. Especifique si son datos JSON o XML.",
			    errorParsingArrays: "Se ha producido un error al analizar los datos de matriz y aplicar el esquema de datos definido: ",
			    errorParsingJson: "Se ha producido un error al analizar los datos JSON y aplicar el esquema de datos definido: ",
			    errorParsingXml: "Se ha producido un error al analizar los datos XML y aplicar el esquema de datos definido: ",
			    errorParsingHtmlTable: "Se ha producido un error al extraer datos de la tabla HTML y aplicar el esquema: ",
			    errorExpectedTbodyParameter: "Se esperaba un tbody o una tabla como parametro.",
			    errorTableWithIdNotFound: "No se ha encontrado la tabla HTML con el siguiente Id.: ",
			    errorParsingHtmlTableNoSchema: "Se ha producido un error al analizar el DOM de la tabla: ",
			    errorParsingJsonNoSchema: "Se ha producido un error al analizar/evaluar la cadena JSON: ",
			    errorParsingXmlNoSchema: "Se ha producido un error al analizar la cadena XML: ",
			    errorXmlSourceWithoutSchema: "El origen de datos proporcionado es un documento xml, pero no hay un esquema de datos definido ($.IgDataSchema) ",
			    errorUnrecognizedFilterCondition: " La condicion de filtro especificada no ha sido reconocida: ",
			    errorRemoteRequest: "Error en la solicitud remota de recuperacion de datos: ",
			    errorSchemaMismatch: "Los datos de entrada no coinciden con el esquema, no se ha podido asignar el siguiente campo: ",
			    errorSchemaFieldCountMismatch: "Los datos de entrada no coinciden con el esquema en terminos de numero de campos. ",
			    errorUnrecognizedResponseType: "El tipo de respuesta no se ha establecido correctamente o no ha sido posible detectarlo automaticamente. Establezca settings.responseDataType y/o settings.responseContentType.",
			    hierarchicalTablesNotSupported: "Tablas no admitidas para HierarchicalSchema",
			    cannotBuildTemplate: "No se ha podido generar la plantilla jQuery. No hay registros presentes en el origen de datos y no hay columnas definidas.",
			    unrecognizedCondition: "Condicion de filtro no reconocida en la siguiente expresion: ",
			    fieldMismatch: "La siguiente expresion contiene un campo o una condicion de filtro no validos: ",
			    noSortingFields: "No se ha especificado ningun campo. Debe especificar al menos un campo de ordenacion al llamar a sort().",
			    filteringNoSchema: "No se ha especificado ningun esquema / campo. Debe especificar un esquema con definiciones y tipos de campo para poder filtrar el origen de datos.",
			    noSaveChanges: "No se han guardado los cambios correctamente. El servidor no ha devuelto el objeto Success, o ha devuelto Success:false.",
			    errorUnexpectedCustomFilterFunction: "Se ha proporcionado un valor inesperado para una funcion de filtrado personalizado. Se esperaba una funcion o cadena."
		    }
	    });

    }
})(jQuery);