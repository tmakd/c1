const persona = {
    nombre: "Renzo",
}


let miMapa = new Map();
miMapa.set(persona);
miMapa.set(2, "valor2");
console.log(miMapa.get(persona)); // Accediendo al valor mediante la clave

