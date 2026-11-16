window.addEventListener("DOMContentLoaded", iniciar);

function iniciar() {
    const contenedor = document.getElementById("contenedor");
    const cookieVisitas = obtenerCookie("visitas");
    let visitas = 0;

    if (cookieVisitas !== "") {
        visitas = parseInt(cookieVisitas, 10);
    }

    visitas++;

    if (visitas > 10) {
        visitas = 0;
        borrarCookie("visitas");
        contenedor.innerHTML = `<p>Has superado las 10 visitas. Contador reiniciado a: ${visitas}</p>`;
    } else {
        guardarCookie("visitas", visitas, 30);
        contenedor.innerHTML = `<p>Número de visitas: ${visitas}</p>`;
    }
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

function borrarCookie(clave) {
    document.cookie = clave + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}