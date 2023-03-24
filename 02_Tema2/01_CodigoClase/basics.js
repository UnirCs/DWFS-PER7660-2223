//Hola Mundo en JavaScript--------------------------------
console.log("Hola mundo!");
//Podemos ejecutar desde terminal con 'node ./basics.js'

//Declaracion de variables--------------------------------
//Usamos let, var y const, su diferencia es el ambito y modificacion
//Los ambitos se delimitan por corchetes curly { }

var i = "global";
function funcion() {
    i = "Local";
    console.log(i);
}

funcion();
console.log(i);

//VAR - Si la declaramos dentro de una funcion, su ambito es el de la funcion
var i2 = "global";
function funcion2() {
    var i2 = "Local";
    console.log(i2);
}

funcion2();
console.log(i2);


//VAR - Si la declaramos dentro de una funcion, su ambito es el de la funcion y fuera da error
function funcion3() {
    var i3 = "Local";
    console.log(i3);
}

funcion3();
//console.log(i3); //ReferenceError


//VAR - Se permite el hoisting (referenciar variables que aun no estan definidas)
console.log(i4);//Undefined
var i4 = "hola";


//LET - El ambito es exclusivamente de bloque
//console.log(i5); //ReferenceError
let i5 = "adios";

if(true) {
    let ab = "ab";
}
//console.log(ab);//ReferenceError


//CONST - Constantes
const constante = 0;
//constante = 1; //TypeError: Assignment to constant variable.

//La asignacion por valor ocurre con tipos simples
//La asignacion por referencia ocurre con objetos

let obj = {a: 1, b: 2};
let objRef = obj;
obj.a = 4;
console.log(objRef.a);

let sx = "hola";
let sy = sx;
sx = "adios";
console.log(sy);



//Tipos Basicos--------------------------------
//Las variables siempre tienen un tipo, pero en JS tenemos un tipado dinamico...
//String, Number, Boolean


//Strings--------------------------------
let s1 = "stringg1";
let s2 = String("string2");
let sObjeto = new String("string3");

console.log(typeof(s1));
console.log(typeof(s2));
console.log(typeof(sObjeto));
console.log(s1.length);

//Comparacion lexicografica
if(s1 < s2) {
    console.log(s1 + " es menor que " + s2);
} else {
    console.log(s1 + " es mayor que " + s2);
}

//Mas metodos...
s1 = s1.toUpperCase();
s1 = s1.toLowerCase();
s1.startsWith('s');
s1.includes('a');
s1.endsWith('b');
s1 = s1.trim();
s1.charAt(0);
s1 = s1.replace('n', 'h');
s1 = s1.replaceAll('g', 'b');
console.log(s1);

//Number
let n = 1;
let x = 2.5;
let y = 1e5;

//NaN o Infinity cuando el resultado de la operacion no es un numero o no se puede calcular
let a = 2 / 0;
console.log(a);
a = 2 * "hola";
console.log(a);

