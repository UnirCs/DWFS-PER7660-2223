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
    return Number(dni) > 0 && dni < Number(99999999) ? dni + letras[Number(dni) % 23] : null;

}

console.log("funcion 1 ----")
console.log(obtenerLetraDni(50487965));
console.log(obtenerLetraDni(12345678));
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

function esPar(num) {
    return Math.round(num) % 2 == 0 ? true : false;
}
console.log("funcion 2 ----")
console.log(esPar(4));
console.log(esPar(3));


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

function formatStr(text) {
    return (Array.from(text.replace(/\s+/g, "")).map(element =>
        element.match(/[^aeiou]/) ? element.toUpperCase() : element))
        .join("");
}

console.log("funcion 3 ----")
console.log(formatStr("Esto es un Ejemplo"));
console.log(formatStr("OTRO Ejemplo"));


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


function esPalindromo(text) {
    // le quitamos los espacios en blanco
    // lo transformamos en array y luego lo invertimos el orden 
    return text.replace(/\s+/g, "").toLowerCase() === text.replace(/\s+/g, "").toLowerCase().split('').reverse().join('');
}

console.log("funcion 4 ----")
console.log(esPalindromo("Dabale arroz a la zorra el abad"));
console.log(esPalindromo("Dabale arrrz a la zorra el abad"));