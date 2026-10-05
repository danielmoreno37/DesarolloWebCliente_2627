let cadena = [];

function convierteArray(){
    let palabra = document.getElementById("texto").value;
    
    cadena = palabra.toUpperCase().split('');

    let tablaHtml = "<table border=1><tr>";

    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === ' ') {
            tablaHtml = tablaHtml + "<td>" + "&nbsp;" + "</td>";
        } else { 
            tablaHtml = tablaHtml + "<td>" + cadena[i] + "</td>";
        }

    }

    tablaHtml = tablaHtml + "</tr></table>";

    document.getElementById("tabla").innerHTML = tablaHtml;
    
}

