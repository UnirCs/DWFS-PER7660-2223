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
let numbers= [1,2,3,4]
const pares = numbers => numbers.filter(number => number%2 == 0).map(number => number*2)

//Prueba
console.log("Numeros pares: ", pares(numbers))



/**
 * Funcion 2
 * 
 * Media
 * 
 * Se pide: Mediante funciones de primer orden, crear una funcion media que recibe como argumento un array de numeros y devuelve la media de sus elementos
 * 
 * Ejemplo: media([1,2,3,4]) -> 2.5
 */
const media = (arr) => Math.round(arr.reduce((ac, elem) => ac + elem) / arr.length * 100) / 100;

//Prueba

console.log("Valor de la media: ", media([1,2,3,4]))


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
const eliminarDuplicados= arr => arr.filter(el => arr.indexOf(el) == arr.lastIndexOf(el));

//Prueba
console.log(eliminarDuplicados([5,1,2,1,3,3,4,5]))

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

//Regex: [char] -> cadena de caracteres y/o caracter a buscar
//       [num] -> numero de veces que debe aparecer el caracter/caracteres en la cadena "str"

const nCharConsec = (char,num,str) => str.match(new RegExp(`[${char}]{${num}}`))!=null;

//Prueba
nCharConsec("t", 4, "Est* *** es un ejemplo"); 

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

function generador (N)
{
    let miArray = Array.from({length: N}, () => Math.floor(Math.random() * N));

    // miarray.forEach(function(item,index,arr){
    // console.log("El array tiene: ", item);
    // });
    console.log("El array(1) tiene: ", miArray);

    miArray=eliminarDuplicados(miArray);

    var miArrayFilter= miArray.filter(num=> num!=0);

    console.log("El array tiene: ", miArrayFilter);

    var valueMap= new Map(); 

    for(let i=0; i< miArrayFilter.length; i++)
    {   
        // A la hora de tomar i+1 no ocurre error ya que el bucle está protegido para salir cuando la i>miArrayFilter.lenght
        valueMap.set(miArrayFilter[i], media(miArrayFilter.slice(0,i+1)))
        console.log("Para la key" , miArrayFilter[i], "de la casilla del mapa, el value es: ", valueMap.get(miArrayFilter[i]));
    }

}                                           

//Prueba
generador(10)