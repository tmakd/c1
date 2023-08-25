// Ejercicio: Calculadora de Ahorro
/*
Requisitos:
Para este ejercicio, conviene ya saber los ciclos o iteraciones For.

Crea una calculadora de ahorro que tome un monto inicial y calcule el ahorro acumulado durante varios meses, 
considerando un interés mensual fijo. 
Utiliza operadores de asignación y un contador para realizar el cálculo.
*/

const montoInicial = 1000; // Monto inicial en dólares
const tasaInteresMensual = 0.05; // Tasa de interés mensual (5%)
const meses = 12; // Duración en meses

let ahorroTotal = montoInicial;

for(let i = 0 ; i < meses; i++) {
    ahorroTotal += ahorroTotal * tasaInteresMensual;
}

console.log(`Después de ${meses} meses, tu ahorro total será: $${ahorroTotal.toFixed(2)}`);
// Respuesta correcta: Después de 12 meses, tu ahorro total será: $1795.85