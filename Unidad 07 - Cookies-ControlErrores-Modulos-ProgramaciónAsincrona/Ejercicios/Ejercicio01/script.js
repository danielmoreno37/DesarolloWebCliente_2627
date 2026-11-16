window.addEventListener("DOMContentLoaded", iniciar);

function iniciar() {
    const nombreGuardado = obtenerCookie("usuario");

    if (nombreGuardado !== "") {
        mostrarBienvenida(nombreGuardado);
    } else {
        mostrarFormulario();
    }
}

function mostrarFormulario() {
    const contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = `
        <label for="nombre">Introduce tu nombre:</label>
        <input type="text" id="nombre" placeholder="Tu nombre">
        <button id="btnGuardar">Guardar</button>
    `;

    const btnGuardar = document.getElementById("btnGuardar");
    btnGuardar.addEventListener("click", function () {
        const inputNombre = document.getElementById("nombre");
        const nombre = inputNombre.value.trim();

        if (nombre !== "") {
            guardarCookie("usuario", nombre, 7);
            mostrarBienvenida(nombre);
        }
    });
}

function mostrarBienvenida(nombre) {
    const contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = `<h1>Bienvenido de nuevo, ${nombre}</h1>`;
}

function guardarCookie(clave, valor, dias) {
    const fecha = new Date();
    fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
    const expiracion = "expires=" + fecha.toUTCString();
    document.cookie = clave + "=" + encodeURIComponent(valor) + ";" + expiracion + ";path=/";
}

function obtenerCookie(claveBuscada) {
    const nombreClave = claveBuscada + "=";
    const cookiesDecodificadas = decodeURIComponent(document.cookie);
    const listaCookies = cookiesDecodificadas.split(";");

    for (let i = 0; i < listaCookies.length; i++) {
        let cookie = listaCookies[i];
        while (cookie.charAt(0) === " ") {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(nombreClave) === 0) {
            return cookie.substring(nombreClave.length, cookie.length);
        }
    }
    return "";
}