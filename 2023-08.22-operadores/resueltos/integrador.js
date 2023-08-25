/*
Ejercicio: Calculadora de Gastos Mensuales con Descuento

En este ejercicio, vamos a crear una calculadora que nos ayudará a entender cómo manejamos gastos mensuales y 
aplicamos un descuento si gastamos más de cierta cantidad.

Tenemos diferentes gastos mensuales, como alquiler, comida, transporte y entretenimiento.

Queremos calcular cuánto gastamos en total antes de aplicar cualquier descuento.

Si gastamos más de un cierto umbral (digamos $300), aplicaremos un descuento del 10% a ese gasto total.

Después de aplicar el descuento (si corresponde), calcularemos cuánto gastamos en total.

Finalmente, calcularemos el promedio mensual de nuestros gastos durante un período de tiempo (por ejemplo, 3 meses).

En resumen, esta calculadora nos ayudará a entender cuánto gastamos en total, cuánto ahorramos con el descuento y cuál es nuestro 
promedio de gastos cada mes. 
Utilizaremos operadores aritméticos, de comparación, lógicos y de asignación para realizar estos cálculos y
 tomar decisiones basadas en nuestros gastos mensuales.


*/
let meses = 3;
let alquiler = 800; // Gasto de alquiler en dólares
let comida = 250;   // Gasto de comida en dólares
let transporte = 100; // Gasto de transporte en dólares
let entretenimiento = 510; // Gasto de entretenimiento en dólares

let descuento = 0.1; // Porcentaje de descuento en gastos (10%)
let umbralDescuento = 300; // Umbral para aplicar descuento si el gasto es mayor

// Calcular el gasto total
let gastoTotal = alquiler + comida + transporte + entretenimiento;

// Calcular el descuento solo si el gasto total es mayor al umbral
let ahorro = gastoTotal > umbralDescuento? gastoTotal * descuento: 0;
let gastoDespuesDescuento = gastoTotal - ahorro;

let promedioMensual = gastoDespuesDescuento / meses;

console.log(`Gasto total sin descuento: $${gastoTotal}`);
console.log(`Descuento aplicado: $${ahorro.toFixed(2)}`);
console.log(`Gasto total después del descuento: $${gastoDespuesDescuento.toFixed(2)}`);
console.log(`Promedio mensual de gastos: $${promedioMensual.toFixed(2)}`);