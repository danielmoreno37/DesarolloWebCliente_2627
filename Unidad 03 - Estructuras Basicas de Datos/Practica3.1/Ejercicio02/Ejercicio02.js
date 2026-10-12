let valores =  [ 10, 20, 30, 40, 20, 50, 60, 70, 10, 30, 50, 80, 100, 100, 90];

function sinDuplicados (vDuplicados){
    let vUnicos = Array.from(new Set (vDuplicados));
    return vUnicos;
}

function imprimirHtml (array, idHtml, titulo){
    let textoHtml = "";
    textoHtml = textoHtml + 
        " <p> <table border = '1' cellspacing='0' style='border-color: black'>" + 
            "<thead> " +
                "<tr> <th colspan = " + array.length + ">" + titulo +"</th> </tr>" +
            "</thead>" +
            "<tbody> <tr>";
            
    for(let i = 0; i < array.length; i ++){
        textoHtml = textoHtml + "<td>" + array[i] + "</td>";
    }

    textoHtml = textoHtml + "</tr> </tbody> </table> </p>";
    document.getElementById(idHtml).innerHTML = textoHtml;
}

imprimirHtml(valores, "arrayOriginal", "Array original")
imprimirHtml(sinDuplicados(valores), "arrayMod", "Array sin Duplicados");


