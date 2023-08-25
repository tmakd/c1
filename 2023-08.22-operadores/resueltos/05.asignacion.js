// Ejercicio5: Descuento en Compra
let precioOriginal = 100; // Precio original del artículo en dólares
let cuponDescuento = 0.15; // Porcentaje de descuento (15%)

// Calcular el descuento y el precio final
let descuento;
let precioFinal;

descuento = precioOriginal * cuponDescuento;
precioFinal = precioOriginal - descuento;

console.log(`El precio original del artículo es: $${precioOriginal}`);
console.log(`Descuento aplicado: $${descuento.toFixed(2)}`);
console.log(`Precio final después del descuento: $${precioFinal.toFixed(2)}`);

/*
Resultado esperado
El precio original del artículo es: $100
Descuento aplicado: $15.00
Precio final después del descuento: $85.00

*/