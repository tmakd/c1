// Ejercicio 2: Operadores de Comparación

/*
Dados dos numeros, se busca poder realizar y devolver 
un valor booleano (true/false) comparando los dos numeros dados.
 igual;
 diferente;
 mayor;
 menor;
 mayorIgual;
 menorIgual;
de los mismos.

*/

const num1 = 8;
const num2 = 8;

let igual;
let diferente;
let mayor;
let menor;
let mayorIgual;
let menorIgual;

igual = num1 === num2;
diferente = num1 !== num2;
mayor = num1 > num2;
menor = num1 < num2;
mayorIgual = num1 >= num2;
menorIgual = num1 <= num2;


console.log("Igual:", igual);
console.log("Diferente:", diferente);
console.log("Mayor:", mayor);
console.log("Menor:", menor);
console.log("Mayor o igual:", mayorIgual);
console.log("Menor o igual:", menorIgual);