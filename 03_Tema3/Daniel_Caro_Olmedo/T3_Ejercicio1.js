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

function obtenerLetraDni(number) {
    if (number < 0 || number > 99999999) return null;
    let resto = number % 23;
    return letras[resto]
}

console.log("50487965" + obtenerLetraDni(50487965));
console.log(obtenerLetraDni(-1));
console.log(obtenerLetraDni(100000000));


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
function esPar(number) {
    if (number%2 == 0) return true;
    else return false;
}

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
function formatStr(str) {
    str = str.replaceAll(" ", "");
    let arr = [];
    str.split('').forEach(l => {
        if (l.match(/[^aeiou]/)) arr.push(l.toUpperCase());
        else arr.push(l)
    });
    return arr.join('');
}

console.log(formatStr("Esto es un Ejemplo"))

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

function esPalindromo(str) {
    str = str.toLowerCase().replaceAll(" ", "");
    let reverseStr = str.split('').reverse().join('');
    return str == reverseStr;
}

console.log(esPalindromo("Dabale arroz a la zorra el abad"))
console.log(esPalindromo("Hola"))
