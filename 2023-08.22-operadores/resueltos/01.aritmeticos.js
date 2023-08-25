// Ejercicio 1: Operadores Aritméticos

/*
Dados dos numeros, se busca poder realizar:
 la suma, 
 la resta, 
 la multiplicacion, 
 la division y 
 el modulo 
de los mismos.

*/
const num1 = 10;
const num2 = 3;

let suma;
let resta;
let multiplicacion;
let division;
let modulo;

suma = num1 + num2;
resta = num1 - num2;
multiplicacion = num1 * num2;
division = num1 / num2;
modulo = num1 % num2;

console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("División:", division);
console.log("Módulo:", modulo);

let numDec = num1;
console.log('numDec: ', numDec);
numDec--;
console.log('numDec decrementando en 1 ', numDec);