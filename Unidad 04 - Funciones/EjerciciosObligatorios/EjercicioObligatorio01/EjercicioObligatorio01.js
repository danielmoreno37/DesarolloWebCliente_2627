let palabras = [];
let palabra;

do {
    palabra = prompt("Introduce una palabra:");

    if (palabra !== null && palabra !== "") {
        palabras.push(palabra);
    }

} while (palabra !== null && palabra !== "");

// Eliminar palabras repetidas
let palabrasUnicas = [...new Set(palabras)];

// Ordenar de Z a A
palabrasUnicas.sort((a, b) => b.localeCompare(a, "es"));

console.log("Palabras ordenadas: ");

palabrasUnicas.forEach(palabra => {
    console.log(palabra);
});