/**
 * Funcion 1
 * 
 * Calculo de la letra del DNI (documento de identidad) español
 * 
 * La letra del DNI se obtiene mediante la siguiente funcion matematica
 * - Obtener el resto de la division entera del numero de DNI y el numero 23. 
 * - El resto de esa division se asocia con una letra concreta, segun un array de letras.
 * 
 * Se pide:
 * Crear una funcion obtenerLetraDni que reciba como argumento el numero del DNI y devuelva el numero con su letra asociada.
 * Debe comprobar que el numero recibido sea mayor que 0 y menor y menor que 99999999. Si no es asi, se devuelve 'null'
 * Puedes usar el siguiente array de letras
 * 
 * Ejemplo: obtenerLetraDni(50487965) -> 50487965K
 */
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

function obtenerLetraDni(dni) {
    return dni >= 0 && dni < 99999999 ? dni + letras[dni % 23] : null;
}
console.log(obtenerLetraDni(15487264));

/**
 * Funcion 2
 * 
 * Numeros pares e impares
 * 
 * Se pide:
 * Crear una funcion esPar que devuelva 'true' si el numero recibido es par o 'false' en caso contrario.
 * El argumento es un numero entero
 * 
 * Ejemplo: esPar(4) -> true
 */
function esPar(numero) {
    return numero % 2 == 0;
}
console.log(esPar(8));

/**
 * Funcion 3
 * 
 * Cadenas de texto
 * 
 * Se pide:
 * Crear una funcion formatStr que elimine todos los espacios de una cadena recibida como argumento y que muestre en mayuscula las consonantes de la cadena (cualquier otro caracter se queda como esta)
 * El argumento es una cadena (String)
 * 
 * Ejemplo: formatStr("Esto es un Ejemplo") -> "ESToeSuNEJeMPLo"
 */


function formatStr(cadena) {
    var vocales = ['a', 'e', 'i', 'o', ' u']
    array = cadena.split(' ');
    let texto = '';
    let nuevoTexto = '';
    for (let i = 0; i < array.length; i++) {
        texto = texto + array[i];
    }
    for (let j = 0; j < texto.length; j++) {

        if (!vocales.includes(texto[j])) {

            nuevoTexto = nuevoTexto + texto[j].toUpperCase();
        } else {
            nuevoTexto = nuevoTexto + texto[j];
        }
    }
    console.log(nuevoTexto);
    return texto;
}
formatStr("Hola Michi michi gato");



/**
 * Funcion 3
 * 
 * Palindromos
 * 
 * Se pide:
 * Crear una funcion esPalindromo que devuelva 'true' si la cadena pasada como argumento es palindroma, 'false' en caso contrario
 * Una cadena es palindroma si se lee igual de derecha a izquierda y de izquierda a derecha, sin tener en cuenta los espacios.
 * El argumento es una cadena (String)
 * 
 * Ejemplo: esPalindromo("Dabale arroz a la zorra el abad") -> true
 */

function esPalindromo(array) {

    array = array.split(' ');
    let cadena = '';
    for (let i = 0; i < array.length; i++) {
        cadena = cadena + array[i];
    }
    let esPalindromo = false;
    for (let i = 0; i < cadena.length; i++) {

        if (cadena[i] == cadena[cadena.length - i - 1]) {
            esPalindromo = true;
        } else {
            esPalindromo = false;
            break;
        }
    }
    return esPalindromo;
}
console.log(esPalindromo("anita lava la tina"));