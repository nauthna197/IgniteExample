/*!@license
* Infragistics.Web.ClientUI Barcode localization resources 15.2.20152.2235
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
$.ig = $.ig || {};

if (!$.ig.Barcode) {
	$.ig.Barcode = {
		locale: {
		    aILength: "El identificador de aplicaciones (AI) debe tener al menos 2 digitos.",
		    badFormedUCCValue: "Los datos del codigo de barras UCC no estan bien formados. Deben tener la estructura (AI)GTIN.",
		    code39_NonNumericError: "El caracter '{0}' no es valido para los datos CODE39. Los caracteres validos son: {1}",
		    countryError: "Error al convertir el codigo de pais. Debe ser un valor numerico.",
		    emptyValueMsg: "El valor de datos esta vacio.",
		    encodingError: "Error de conversion. Consulte la documentacion para conocer cuales son los valores validos para las propiedades.",
		    errorMessageText: "Valor no valido. Consulte la documentacion para conocer cual es la estructura de datos valida de los codigos de barras.",
		    gS1ExMaxAlphanumNumber: "La familia del GS1 DataBar ampliado puede codificar hasta 41 caracteres alfanumericos.",
		    gS1ExMaxNumericNumber: "La familia del GS1 DataBar ampliado puede codificar hasta 74 caracteres numericos.",
		    gS1Length: "El codigo de barras GS1 DataBar se utiliza para los codigos de barras GTIN 8, 12, 13, 14 y su longitud debe ser 7, 11, 12 o 13. El ultimo digito se reserva para una suma de comprobacion.",
		    gS1LimitedFirstChar: "El codigo del GS1 DataBar limitado debe tener 0 o 1 como primer digito. Cuando se codifican estructuras de datos GTIN-14 con un valor de indicador superior a 1, es preciso utilizar el tipo de codigo de barras Omnidirectional, Stacked, Stacked Omnidirectional o Truncated.",
		    i25Length: "El codigo de barras Interleaved2of5 debe tener un numero par de digitos. Si se trata de un numero impar, puede poner un 0 delante.",
		    intelligentMailLength: "La longitud del valor de datos en el codigo de barras Intelligent Mail debe ser de 20, 25, 29 o 31 caracteres: codigo de rastreo de 20 digitos (2 para el identificador del codigo de barras, 3 para el identificador del tipo de servicio, 6 o 9 para el identificador de mailer y 9 o 6 para el numero de serie) y 0, 5, 9 o 11 simbolos de codigo postal.",
		    intelligentMailSecondDigit: "El segundo digito debe encontrarse en el intervalo comprendido entre 0 y 4.",
		    invalidAI: "Cadenas no validas en el elemento del identificador de aplicaciones. Asegurese de que la cadena del identificador de aplicaciones de los datos este bien formada.",
		    invalidCharacter: "El caracter '{0}'no es valido para el tipo de codigo de barras actual. Los caracteres validos son: {1}",
		    invalidDimension: "Las dimensiones del codigo de barras no pueden determinarse porque se ha producido una combinacion incorrecta de los valores de las propiedades Stretch, BarsFillMode y XDimension.",
		    invalidHeight: "Las lineas de cuadricula del codigo de barras (numero {0}) no puede adaptarse a esta altura ({1} pixeles).",
		    invalidLength: "El valor de datos del codigo de barras debe tener un numero {0} de digitos.",
		    invalidPostalCode: "Valor PostalCode no valido: El modo 2 codifica codigos postales de hasta 9 digitos (codigo postal de EE.UU.), mientras que el modo 3 codifica codigos alfanumericos de hasta 6 caracteres.",
		    invalidPropertyValue: "El valor de propiedad {0} debe encontrarse en un intervalo comprendido entre {1} y {2}.",
		    invalidVersion: "El numero SizeVersion no genera celdas suficientes para codificar los datos con el modo de codificacion y el nivel de correccion de errores actuales.",
		    invalidWidth: "Las columnas de cuadricula del codigo de barras (numero {0}) no puede adaptarse a esta anchura ({1} pixeles). Chequear el valor de la propiedad XDimension y/o el de WidthToHeightRatio.",
		    invalidXDimensionValue: "El valor XDimension de debe encontrarse en un intervalo comprendido entre {0} y {1} para el tipo de codigo de barras actual.",
		    maxLength: "La longitud {0} del texto supera el maximo codificable para el tipo actual de codigos de barras. Puede codificar como maximo {1} caracteres.",
		    notSupportedEncoding: "La codificacion correspondiente bajo {0} {1} no se admite.",
		    pDF417InvalidRowsColumnsCombination: "Las palabras de codigo (correccion de datos y errores) son mas de las que pueden codificarse en simbolos con una matriz {0}x{1}.",
		    primaryMessageError: "No se puede extraer el mensaje principal del valor de datos. Consulte la documentacion para conocer la estructura.",
		    serviceClassError: "Error al convertir la clase de servicio. Debe ser un valor numerico.",
		    smallSize: "No es posible ajustar la cuadricula en Size({0}, {1}) con la configuracion Stretch definida.",
		    unencodableCharacter: "El caracter '{0}' no puede codificarse.",
		    uPCEFirstDigit: "De manera predeterminada, el primer digito UPCE debe ser siempre cero.",
		    warningString: "Advertencia Barcode: ",
		    wrongCompactionMode: "El mensaje de datos no puede compactarse con el modo {0}.",
		    notLoadedEncoding: "La codificacion {0} no se ha cargado."
		}
	};
}
})(jQuery);