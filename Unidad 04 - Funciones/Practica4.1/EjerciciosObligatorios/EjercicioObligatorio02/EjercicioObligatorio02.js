let palabras = [];
let palabra;

do {
    palabra = prompt("Introduce una palabra:");

    if (palabra !== null && palabra !== "") {
        palabras.push(palabra);
    }

} while (palabra !== null && palabra !== "");

function contarPalabras(array) {
    let mapa = new Map();

    array.forEach(palabra => {
        if (mapa.has(palabra)) {
            mapa.set(palabra, mapa.get(palabra) + 1);
        } else {
            mapa.set(palabra, 1);
        }
    });

    return mapa;
}

let resultado = contarPalabras(palabras);

console.log("Recuento de palabras: ");

resultado.forEach((cantidad, palabra) => {
    console.log(palabra + ": " + cantidad );
});