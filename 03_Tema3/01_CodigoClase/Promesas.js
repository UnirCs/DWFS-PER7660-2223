/**
 * Las promesas son una forma distinta de llamar a funciones  callback. 
 * En ese sentido, no añaden ninguna funcionalidad  especial, pero simplifican el proceso asíncrono.
 * Un objeto promesa espera hasta que termina una ejecución  asíncrona. 
 * La función puede devolver éxito o fracaso si la  ejecución asíncrona falla.
 * 
 * El objeto promesa espera dos funciones:
 *      La función resolved
 *      La función reject (opcional)
 * 
 * Se usa then para asignar las funciones
 *      Then devuelve una promesa, por lo que podemos encadenar promesas.
 * 
 * Usamos setTimeout para ejecutar el codigo despues de X ms.
 */

let numero = 0;
let promesa1 = new Promise(function (resolve, reject) {

    setTimeout(function () {


        if (numero % 2 == 0) {
            resolve("Promesa terminada. Numero par");
        } else {
            reject("Promesa terminada. Numero impar");
        }
    }, 100);
})

let callbackResolve = (value) => console.log("OK " + value);
let callbackReject = (value) => console.log("KO " + value);

promesa1.then(callbackResolve, callbackReject);
console.log("haciendo cosas...");
console.log("haciendo cosas...");
console.log("haciendo cosas...");


/**
 * Es muy habitual usar Promesas con peticiones HTTP con alguna libreria
 * que permita hacerlas como por ejemplo:
 * API Fetch
 * Axios
 * 
 * Usamos de prueba https://catfact.ninja/
 */

let setOfFacts = new Set();
let url = "https://catfact.ninja/fact"

for (let i = 0; i < 10; i++) {
    fetch(url)
        .then(response => response.json())
        .then(json => setOfFacts.add(json.fact));
}
console.log("Cat Facts: " + Array.from(setOfFacts.values()));

console.log("haciendo cosas...");
console.log("haciendo cosas...");
console.log("haciendo cosas...");

setTimeout(() => console.log("Cat Facts: " + Array.from(setOfFacts.values())), 5000);


/**
 * Async y Await
 * 
 * Funciones precedidas por la palabra clave async. 
 * Esto quiere decir que la función siempre devolverá una promesa
 *  (Si no devuelve nada, devuelve undefined)
 * 
 * Await, que debe usarse con async, marca una llamada que devuelve una promesa como síncrona dentro de la invocación de la función asíncrona.
 *  El valor de retorno de await es la promesa, asignable a una variable.
 * 
 * Las siguientes líneas de código no se ejecutan hasta que las promesas se resuelven.
 */

async function fetchSincrono() {
    let fetchResponse = await fetch(url);
    let json = await fetchResponse.json();
    let fact = json.fact;
    console.log("Fact sincrono: " + fact);
    return fact;
}

console.log("Ejecutando funcion fetchSincrono");

(async () => {
    let factSincrono = await fetchSincrono();
    console.log(factSincrono)
})();
