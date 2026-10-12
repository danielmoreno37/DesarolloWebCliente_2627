let data = [
    {name: "Nacho",     telephone: "966112233",     age: 40},
    {name: "Ana",       telephone: "911223344",     age: 35},
    {name: "Mario",     telephone: "611998877",     age: 15},
    {name: "Laura",     telephone: "633663366",     age: 17}
];

function imprimirArray(arrayDatos, idHtml, enunciado){    
    textoHtml = "";
    textoHtml = textoHtml + "<h2>" + enunciado + "</h2>";
    textoHtml = textoHtml + 
        "<table>" + 
            "<thead>" +
                "<th>Nombre</th> <th>Telefono</th> <th>Edad</th>" +
            "</thead> <tbody>"
    ;

    for (let i = 0; i < data.length; i++){
        textoHtml = textoHtml + "<tr>" + "<td>" + arrayDatos[i].name + "</td>" + "<td>" + arrayDatos[i].telephone + "</td>" + "<td>" + arrayDatos[i].age + "</td>" + "</tr>";
    }

    textoHtml = textoHtml + "</tbody></table>";

    document.getElementById(idHtml).innerHTML = textoHtml;
}