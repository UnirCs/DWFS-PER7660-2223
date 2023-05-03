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
 * Se pide: Mediante funciones de primer orden, crear una funcion duplicador que recibe como argumento un array de numeros y devuelve otro array duplicando aquellos que sean pares
 * El tamaño del array resultado, por tanto, podra ser distinto del tamaño del array original
 *
 * Ejemplo: duplicador([1,2,3,4]) -> [4,8]
 */
function duplicador(array) {
    return array.filter(value => value % 2 === 0).map(value => value * 2)
}

//console.log(duplicador([1, 2, 3, 4]))

/**
 * Funcion 2
 *
 * Media
 *
 * Se pide: Mediante funciones de primer orden, crear una funcion media que recibe como argumento un array de numeros y devuelve la media de sus elementos
 *
 * Ejemplo: media([1,2,3,4]) -> 2.5
 */
function media(array) {
    return array.reduce((sum, next) => sum + next, 0) / array.length;
}

//console.log(media([1, 2, 3, 4]))

/**
 * Funcion 3
 *
 * Eliminar duplicados
 *
 * Se pide: Mediante funciones de primer orden, crear una funcion eliminarDuplicados que recibe como argumento un array de numeros con duplicados y devuelve otro cuyos elementos son unicos
 * Se valoraran especialmente soluciones donde sea necesario recorrer el array pasado como argumento una unica vez (de una pasada)
 *
 * Ejemplo: eliminarDuplicados([5,1,2,1,3,3,4,5]) -> [2,4]
 */
function eliminarDuplicados(array) {
    return array.filter((letter, index) => array.indexOf(letter) === array.lastIndexOf(letter));
}

//console.log(eliminarDuplicados([5, 1, 2, 1, 3, 3, 4, 5]))

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
 * Se valoraran especialmente soluciones donde sea necesario recorrer la cadena pasada como argumento una unica vez (de una pasada) sin bucles anidados
 *
 * Ejemplo: nCharConsec(*, 4, "Est* *** es un ejemplo") -> false (tenemos en cuenta los espacios)
 * Ejemplo: nCharConsec(*, 4, "Est**** es un ejemplo") -> true
 * Ejemplo: nCharConsec(*, 4, "Est** e* un ej**plo") -> false
 * Ejemplo: nCharConsec(*, 4, "Est** e**** un ej**plo") -> false
 *
 */
function nCharConsec(char, repeat, text) {
    let cont = 0;
    let isFind = false;

    text.split("").forEach(value => {
        if (value === char) cont++; else cont = 0;
        if (cont === repeat) {
            isFind = true;
        }
    });

    return isFind
}

//console.log(nCharConsec("*", 4, "Est** e**** un ej**plo"))

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
 * - Los valores seran la media de todos los elementos del array filtrado previos anteriores a cada componente del array filtrado, incluyendo el valor del componente actual del array filtrado que se esta utilizando
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
function generador(size) {
    let sum = 0;
    let aleatoryArray = Array.from({length: size}, () => Math.floor(Math.random() * 10));
    aleatoryArray = aleatoryArray.filter((number, index) => aleatoryArray.indexOf(number) === index);
    let mapValues = aleatoryArray.map((value, index) => {
        sum += value;

        return sum / (index + 1);
    })

    return new Map(aleatoryArray.map((x, index) => [x, mapValues[index]]));
}

//console.log(generador(6))
