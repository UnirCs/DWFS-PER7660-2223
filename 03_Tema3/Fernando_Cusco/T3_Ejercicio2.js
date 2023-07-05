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
const x = [1, 2, 3, 4, 5, 6];
function duplicador(valores) {
    let abc = [];
    valores.forEach(x => {
        if (x % 2 == 0) abc.push(x * 2);
    });
    return abc;
}
console.log(duplicador(x));


/**
 * Funcion 2
 * 
 * Media
 * 
 * Se pide: Mediante funciones de primer orden, crear una funcion media que recibe como argumento un array de numeros y devuelve la media de sus elementos
 * 
 * Ejemplo: media([1,2,3,4]) -> 2.5
 */
const valores = [1, 2, 3, 4];
function media(array) {
    let media = 0;
    array.forEach(v => media += v);
    return media / array.length;
}
console.log(media(valores));


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
const duplicados = [5,1,2,1,3,3,4,5];
function eliminarDuplicados(array) {
    const unicos = [];
    array.forEach(v => {
        const filtro = array.filter(a => a == v);
        if (filtro.length == 1) unicos.push(filtro[0]);
    });
    return unicos;
}
console.log(eliminarDuplicados(duplicados));

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
function nCharConsec(caracter, veces, cadena) {
    let posicion = null;
    let consecutivas = '';
    const frase = cadena.split('');
    frase.forEach((value, index) => {
        if (value == caracter && posicion == null) {
            posicion = index;
        }
        if (posicion >= 0) {
            if (value == caracter) {
                consecutivas += value;
            } else if (consecutivas.length == veces) {
                return;
            } else {
                posicion = -1;
                consecutivas = '';
            }
        }
        if (posicion == -1) posicion = null;
    });
    return consecutivas.length == veces;
}
console.log(nCharConsec('*', 5, 'Est*** **** es un ***** ejemplo'));

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
function generarNumeros(n) {
    const aleatorios = [];
    for(let i = 0; i < n; i++) {
        aleatorios.push(Math.floor(Math.random() * n));
    }
    console.log('Arreglo aleatorios:', aleatorios);
    // eliminar los ceros
    const no_ceros = aleatorios.filter(v => v != 0);
    console.log('Arreglos sin ceros:', no_ceros);
    // no repetidos
    const no_repetidos = [];
    no_ceros.forEach(v => {
        const value = no_repetidos.filter(r => r == v);
        if (value.length == 0) {
            no_repetidos.push(v);
        }
    });
    console.log('Arreglo unicos:', no_repetidos);
    const map = new Map();
    let suma = 0;
    let contador = 2;
    let cadena_suma = '';
    // const no_repetidos = [2, 6, 7, 1];
    no_repetidos.forEach((v, i) => {
        suma += v;
        cadena_suma += `${v} + `;
        if (i == 0) {
            map.set(v, `(${suma} / ${v} = ${suma/v})`);
        } else {
            let cadena = `(${cadena_suma.substring(0, cadena_suma.length - 2)} / ${contador} = ${suma/contador})`;
            map.set(v, cadena);
            contador++;
        }
    });
    return map;
}
console.log('Arreglo unicos:', generarNumeros(20));