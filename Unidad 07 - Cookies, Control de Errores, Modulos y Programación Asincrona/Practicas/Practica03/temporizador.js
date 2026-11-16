export function temporizador(ms) {
    return new Promise(function (resolve, reject) {
        const tempError = setTimeout(function () {
            clearTimeout(tempExito);
            reject("Tiempo concluido");
        }, ms * 2);

        const tempExito = setTimeout(function () {
            clearTimeout(tempError);
            resolve("Tiempo concluido");
        }, ms);
    });
}

export async function cuenta(inicio, elemento = document.body, intervalo = 1000, callback) {
    for (let i = inicio; i >= 0; i--) {
        elemento.textContent = i;
        if (i > 0) {
            await temporizador(intervalo);
        }
    }

    if (typeof callback === "function") {
        callback();
    }
}