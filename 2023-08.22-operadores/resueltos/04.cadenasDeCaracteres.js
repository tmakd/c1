// Ejercicio 4: Operadores de Cadena
/*
Dado mis nombres y mi apellido en dos constantes separadas
obtener en 1 variable, mi nombre completo.
Tambien se pide calcular la longitud (total de caracteres)
del nombre completo.

Ayudin: el espacio es un caracter :) 
*/

const nombre = "Tomas Agustin";
const apellido = "Ramirez";

let nombreCompleto;
let longitudNombre;

nombreCompleto = nombre + ' ' + apellido;
longitudNombre = nombreCompleto.length;


console.log("Nombre completo:", nombreCompleto);
console.log("Longitud del nombre completo:", longitudNombre);