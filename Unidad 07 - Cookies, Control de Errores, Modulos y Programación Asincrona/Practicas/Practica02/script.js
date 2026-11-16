window.addEventListener("DOMContentLoaded", iniciar);

function iniciar() {
    const contenedorResultado = document.getElementById("resultado");
    contenedorResultado.textContent = "Esperando 5 segundos...";

    temporizador(5000)
        .then(function (mensaje) {
            contenedorResultado.textContent = mensaje;
        })
        .catch(function (error) {
            contenedorResultado.textContent = error;
        });
}

function temporizador(ms) {
    return new Promise(function (resolve, reject) {
        const tempError = setTimeout(function () {
            clearTimeout(tempExito);
            reject("El tiempo no va bien");
        }, ms * 2);

        const tempExito = setTimeout(function () {
            clearTimeout(tempError);
            resolve("Tiempo concluido");
        }, ms);
    });
}