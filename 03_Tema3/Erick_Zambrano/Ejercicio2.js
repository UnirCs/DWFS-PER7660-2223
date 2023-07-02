/**
 * En estos ejercicios es obligatorio uso de funciones de primer orden y callbacks sobre estructuras de datos
 * Sera necesario utilizar estructuras de datos diferentes a arrays (tambien arrays)
 * No se permite el uso de bucles for(;;) ni while, se debe usar funciones de primer orden (forEach, filter, map, reduce...)
 */

/**
 * Funcion 1
 *
 * Duplicador
 *
 * Se pide: Mediante funciones de primer orden, crear una funcion duplicador que recibe como argumento
 * un array de numeros y devuelve otro array duplicando aquellos que sean pares
 * El tamaño del array resultado, por tanto, podra ser distinto del tamaño del array original
 *
 * Ejemplo: duplicador([1,2,3,4]) -> [4,8]
 */

const duplicadorArray = new Set([1, 2, 3, 4]);
let finalArray = new Set();

function duplicador(array) {
    array.forEach(elem => {
        if (elem % 2 === 0) {
            finalArray.add(elem * 2);
        }
    });
    return finalArray;
}

console.log(duplicador(duplicadorArray))


const dupFuncFle = (array1) => array1.filter((elem) => elem % 2 === 0).map((elem1) => elem1 * 2);
// const myArray = [1, 2, 3, 4];
// const duplicatedArray = dupFuncFle(myArray);
// console.log(duplicatedArray);
console.log(dupFuncFle([1, 2, 3, 4]));

/**
 * Funcion 2
 *
 * Media
 *
 * Se pide: Mediante funciones de primer orden, crear una funcion media que recibe como argumento un
 * array de numeros y devuelve la media de sus elementos
 *
 * Ejemplo: media([1,2,3,4]) -> 2.5
 */

const functionmedia = (array) => {
    return array.reduce((elemA, elemB) => {
        return (elemA + elemB);}, 0)
        / array.length;
}
console.log("funcMedia: " + functionmedia([1, 2, 3, 4]))

/**
 * Funcion 3
 *
 * Eliminar duplicados
 *
 * Se pide: Mediante funciones de primer orden, crear una funcion eliminarDuplicados que recibe como argumento
 * un array de numeros con duplicados y devuelve otro cuyos elementos son unicos
 * Se valoraran especialmente soluciones donde sea necesario recorrer el array pasado como argumento
 * una unica vez (de una pasada)
 *
 * Ejemplo: eliminarDuplicados([5,1,2,1,3,3,4,5]) -> [2,4]
 */
// let data = [5,1,2,1,3,3,4,5];
// const dataArr = new Set(data);
// let result = [...dataArr];
//  console.log(result);

let data1 = [5,1,2,1,3,3,4,5];
let result1 = data1.filter((item)=>{
    return data1.indexOf(item) === data1.lastIndexOf(item);
})
console.log("eliminar Duplicados: "+result1);

// const eliminarDuplicados = arr => arr.filter(el => arr.indexOf(el) == arr.lastIndexOf(el));
// console.log("el:"+eliminarDuplicados([5,1,2,1,3,3,4,5]))

/**
 * Funcion 4
 *
 * Caracteres consecutivos
 *
 * Se pide: Mediante funciones de primer orden, crear una funcion nCharConsec que recibe 3 argumentos:
 * - El caracter por el que se quiere buscar
 * - El numero de repeticiones consecutivas que se desea buscar
 * - La cadena (string) donde buscar
 * Devuelve 'true' si hay N repeticiones del caracter especificado en la cadena, 'false' en caso contrario.
 * Se valoraran especialmente soluciones donde sea necesario recorrer la cadena pasada como argumento
 * una unica vez (de una pasada) sin bucles anidados
 *
 * Ejemplo: nCharConsec(*, 4, "Est* *** es un ejemplo") -> false (tenemos en cuenta los espacios)
 * Ejemplo: nCharConsec(*, 4, "Est**** es un ejemplo") -> true
 * Ejemplo: nCharConsec(*, 4, "Est** e* un ej**plo") -> false
 * Ejemplo: nCharConsec(*, 4, "Est** e**** un ej**plo") -> true
 *
 */

const nCharConsec = (char, num, str) => str.match(new RegExp(`[${char}]{${num}}`)) != null;
console.log("Caracteres Consecutivos:" + nCharConsec("*",4,"Est** e**** un ej**plo"));

const nCharConsec1 = (char, num, str) =>
    str.split('').some((c, i) => str.slice(i, i + num) === char.repeat(num));

console.log("char: "+nCharConsec1("*",4,"Est** e*** un ej**plo"))

const csLewisQuote = 'We are what we believe we are.';
const regex1 = /are/;
const regex2 = /eat/;
const found = csLewisQuote.match(regex1);
console.log(found); // ["are", index: 3, input: "We are what we believe we are.", groups: undefined]

console.log(csLewisQuote.match(regex2));

/**
 * Funcion 5
 *
 * Generador de numeros aleatorios
 *
 * Se pide: Mediante funciones de primer orden, crear una funcion generador que recibe 1 argumento:
 * - N: El tamaño del mapa a devolver
 *
 * Este metodo creara en primer lugar un array de numeros aleatorios no repetidos, de tamaño N.
 * Despues filtrara el array para eliminar los 0 y los duplicados, si hay alguno.
 * Despues, creara un mapa donde:
 * - Las claves seran los valores de cada una de las coordenadas del array creado
 * - Los valores seran la media de todos los elementos del array filtrado previos anteriores a cada componente
 * del array filtrado, incluyendo el valor del componente actual del array filtrado que se esta utilizando
 *
 * Ejemplo: generador(6) -> Map()
 * Genera un array aleatorio de numeros, supongamos [2,2,6,7,1,0]
 * Se filtra el array -> [2,6,7,1]
 * Genera y devuelve un mapa conforme a la especificacion, con las siguientes entradas:
 * [2, 2] (2 /2 = 1)
 * [6, 4] (2+6 /2 = 4)
 * [7, 5] (2+6+7 /3 = 5)
 * [1, 4] (2+6+7+1 /4 = 4)
 */
const media = (array) => Math.round(array.reduce((acumulador, elemento) => acumulador + elemento) / array.length * 100) / 100;
const generador = (n) => {
    //Generamos un array de numeros aleatorios no repetidos
    let arrayAleatorio = new Set([ ...Array(n) ].map(() => Math.floor(Math.random() * 10)));

    console.log(arrayAleatorio);

    //Filtramos el array para eliminar los 0
    const arrayFiltrado = Array.from(arrayAleatorio).filter((elemento) => elemento !== 0);

    console.log(arrayFiltrado);

    //Generamos el mapa
    let mapa = new Map();

    arrayFiltrado.forEach((elemento, indice) => {
        mapa.set(elemento, media(arrayFiltrado.slice(0, indice + 1)));
    });

    return mapa;
}

console.table(generador(6));
