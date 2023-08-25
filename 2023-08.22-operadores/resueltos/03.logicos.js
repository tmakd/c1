// Ejercicio 3: Operadores Lógicos

/*
Con este ejercicio buscamos entender como funcionan
los operadores logicos en javascript.

Vamos a ir a la playa, si esta soleado y tenemos dinero.
Vamos a ir al cine si tenemos dinero o si esta soleado
Vamos a quedarnos en casa unicamente si no vamos a la playa.

Tener en cuenta los valores booleanos de las constantes 
ya inicializadas.
*/


const tieneDinero = true;
const estaSoleado = false;

let irAPlaya;
let irAlCine;
let quedarseEnCasa;

irAPlaya = estaSoleado && tieneDinero;
irAlCine = estaSoleado || tieneDinero;
quedarseEnCasa = !irAPlaya;

console.log("¿Ir a la playa?", irAPlaya);
console.log("¿Ir al cine?", irAlCine);
console.log("¿Quedarse en casa?", quedarseEnCasa);