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

const obtenerLetraDni = (numeroDni) => {
    let letraDni = null;
    let resto = numeroDni % 23;

    console.log("Resto:", resto);

    if(numeroDni > 0 && numeroDni < 99999999){
        console.log("El DNI cumple la condición indicada")
        letraDni = numeroDni + letras[resto];
    }else{
        console.log("El DNI no cumple la condición indicada")
    }

    return letraDni;
}

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

const esPar = (numero) => {
    let paridad = false;

    if(numero % 2 == 0){
        paridad = true;  
        console.log("El número ", numero, " es par");
    }else{
        console.log("El número ", numero, " es impar");
    }

    return paridad;
}

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

const formatStr = (cadena) => {
    let consonantes = ['a','e','i','o','u'];
    let cadenaFinal = [];

    console.log("Cadena inicial:", cadena);

    for(let i=0; i<cadena.length; i++){
        if(cadena[i] != " "){
            if(!consonantes.includes(cadena[i].toLowerCase())){
                cadenaFinal.push(cadena[i].toUpperCase());
            }else{
                cadenaFinal.push(cadena[i]);
            }
        }
    }
    cadenaFinal = cadenaFinal.join('');
    
    console.log("Cadena final:", cadenaFinal)
}

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

const esPalindromo = (cadena) => {
    let cadenaOriginal = cadena.replace(/ /g,'').toLowerCase();
    let palindromo = false;

    let cadenaInversa = cadenaOriginal.split("").reverse().join("");

    if(cadenaOriginal == cadenaInversa){
        palindromo = true;
    }

    return palindromo;
}

console.log("Desarrollo ejercicio 1");
console.log("---------------------------");

//Ejemplo que cumple la condición
letraDni = obtenerLetraDni(53232048);
console.log("LetraDni:", letraDni);

//Ejemplo que no cumple la condición
letraDni = obtenerLetraDni(15454545454545);
console.log("LetraDni:", letraDni);

console.log("---------------------------");

//Ejemplo número par
par = esPar(18);
console.log("Paridad:", par);

//Ejemplo número impar
par = esPar(17);
console.log("Paridad:", par);

console.log("---------------------------");

//Ejemplo cadena con consonantes
formatStr("hola mundo");

console.log("---------------------------");
let cadena;

//Ejemplo cadena no palindroma
cadena = "hola";
palindromo = esPalindromo(cadena);
console.log(cadena,"es palindromo:", palindromo);

//Ejemplo cadena palindroma
cadena = "Dabale arroz a la zorra el abad";
palindromo =  esPalindromo(cadena);
console.log(cadena,"es palindromo:", palindromo);
