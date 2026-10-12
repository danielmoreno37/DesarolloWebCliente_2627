let edadPersonas = new Map ([["Dani", 21]]);

edadPersonas.set("Diego", 18);
edadPersonas.set("Narcis", 20);
edadPersonas.set("Xavi", 27);

console.log("Edades de personas original")
console.log(edadPersonas);

let nom = "Diego";
if (edadPersonas.has(nom)){
    edadPersonas.set(nom, 19);
    console.log("La edad de " + nom + "ha sido actualizada.");
} else {console.log("No se ha encontrado a " + nom + " en el mapa.");}

console.log("Edades de personas actualizado");
console.log(edadPersonas);


function imprimeMapa(mapa, titulo, idHtml){
    let edades = Array.from(mapa.entries());
    let textoHtml = "";
    textoHtml = textoHtml + 
        " <p> <table border = '1' cellspacing='0' style='border-color: black'>" + 
            "<thead> " +
                "<tr> <th colspan = " + edades.length + ">" + titulo +"</th> </tr>" +
            "</thead>" +
            "<tbody> <tr>";
      
    
    for (let i = 0; i < edades.length; i ++){
        let nom = edades[i][0];
        let edad = edades[i][1];

        textoHtml = textoHtml + "<tr><td>" + nom + "</td>" + "<td>" + edad + "</td></tr>";
    }

    textoHtml = textoHtml + "</tbody> </table> </p>";
    document.getElementById(idHtml).innerHTML = textoHtml;
}

imprimeMapa (edadPersonas, "Edad de las personas", "mapa");






