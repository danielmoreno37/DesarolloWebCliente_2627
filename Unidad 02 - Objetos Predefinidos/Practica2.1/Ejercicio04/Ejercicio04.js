function conversor() {

    let numero = Number(document.getElementById("numero").value);

    let binario = numero.toString(2);
    let octal = numero.toString(8);
    let hexadecimal = numero.toString(16);

    let tablaHtml = "<table>";

    for (let i = 0; i < 3 ; i++){
        tablaHtml = tablaHtml + "<tr>";
        switch (i) {
            case 0 : 
                tablaHtml = tablaHtml + "<td>Binario</td>" + "<td>"+ binario +"</td>";
                break;
            case 1 :
                tablaHtml = tablaHtml + "<td>Octal</td>" + "<td>"+ octal +"</td>";
                break;
            case 2 :
                tablaHtml = tablaHtml + "<td>hexadecimal</td>" + "<td>"+ hexadecimal +"</td>";
                break;
            default : tablaHtml = tablaHtml;
        }
        tablaHtml = tablaHtml + "</tr>";
    }
    tablaHtml = tablaHtml + "</table>";

    document.getElementById("tabla").innerHTML = tablaHtml;
}