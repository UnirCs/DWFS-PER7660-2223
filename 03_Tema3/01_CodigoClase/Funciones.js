
/**
 * Las funciones en JS se definen de varias formas...
 * Una de ellas es con la palabra reservada function
 *  Se indica el nombre de la funcion
 *  Se indican los argumentos
 *  Dentro del cuerpo de la funcion se incluye la logica
 *  La clausula return es opcional. Si no se incluye, el retorno es 'undefined'
 * 
 *  Puede haber argumentos por defecto
 */
function suma(n1=9, n2) {
    console.log("Operador 1: " + n1);
    console.log("Operador 2: " + n2);
    let resultado = n1 + n2;
    console.log(resultado);
}
console.log(suma(1,2));

/**
 * A diferencia de otros lenguajes, no es necesario incluir todos los argumentos.
 * Si alguno no se incluye, su valor es 'undefined'
 */
console.log(suma(2));

/** Esto es una funcion flecha
 *  Si ocupan una línea, no es necesario indicar el 'return' ni las llaves.
 *  Si ocupan más de una línea, sí es necesario.
 *  Es la forma más habitual de definir funciones, sobretodo en React.
 */
const sumaDos = (n1,n2) => n1 + n2;

const sumaTres = (n1, n2, n3) => {
    let n1n2 = sumaDos(n1, n2);
    return n1n2 + n3;
}

let sumaTresOtraForma = (n1, n2, n3) => {
    let n1n2 = sumaDos(n1, n2);
    return n1n2 + n3;
}


/**
 * Callbacks
 * 
 * Un callback es algo tan simple como pasar como argumento a una función otra función
 * Esto puede parecer una locura en algunos lenguajes de programacion
 * En JS las funciones SON OBJETOS.
 */
const isPar = (n, parCallBack, imparCallback) => {
    if (n%2 === 0) {
        parCallBack();
    } else {
        imparCallback();
    }
}
isPar(4, () => console.log("El numero es par"));

const parCallBack = () => console.log("El numero es par");
const imparCallBack = () => console.log("El numero es impar");

isPar(6, parCallBack, imparCallBack);
isPar(7, parCallBack, imparCallBack);
