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


function obtenerLetrasDni(dni) {
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    let valor;
    if (dni>0 && dni <99999999){
        valor= dni % 23;
        return dni+letras[valor]
    }
    else
        return null;

}

const dni = 5048796;
console.log(dni+"->"+obtenerLetrasDni(dni));

//
// const menus = new Map();
//
// menus.set('lunes', ['sopa']);
//
// for (let [clave, valor] of menus) {
//     console.log( clave +"="+valor)
// }

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
    if (numero%2 == 0)
        return true;
    else
        return false;
}
const numero = 4;
console.log("esPar (4)"+esPar(numero))


/**
 * Funcion 3
 *
 * Cadenas de texto
 *
 * Se pide:
 * Crear una funcion formatStr que elimine todos los espacios de una cadena recibida como argumento y que muestre en
 * mayuscula las consonantes de la cadena (cualquier otro caracter se queda como esta)
 * El argumento es una cadena (String)
 *
 * Ejemplo: formatStr("Esto es un Ejemplo") -> "eSToeSuNEJeMPLo"
 */


function formatStr(cadena) {
   let blancos= cadena.replace(/\s+/g,'');
    const vocales = new Set(['a', 'e', 'i', 'o', 'u']);
    let str ="";
    for (let i = 0; i < blancos.length; i++) {
        const char = blancos[i];
        if (vocales.has(char)||vocales.has(char.toLowerCase())) {
            str += char.toLowerCase();
        } else {
            str += char.toUpperCase();
        }
    }
   return str;
}
const cadena = "Esto es un Ejemplo";
console.log("Esto es un Ejemplo ->"+formatStr(cadena))


/**
 * Funcion 4
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

function esPalindromo(cadenaP) {
    let cadena= cadenaP.replace(/\s+/g,'');
    cadena=cadena.toLowerCase();
    if (typeof cadena === 'string'){
        let cadenaInvertida = cadena.split('').reverse().join('');
        return cadenaInvertida === cadena;
    }else{
        return false;
    }
}
const cadenaPalindromo= "Dabale arroz a la zorra el abad";
console.log("Es palindromo: "+esPalindromo(cadenaPalindromo))