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

    for (let i = 0; i < arrayDatos.length; i++){
        textoHtml = textoHtml + "<tr>" + 
            "<td>" + arrayDatos[i].name + "</td>" + 
            "<td>" + arrayDatos[i].telephone + "</td>" + 
            "<td>" + arrayDatos[i].age + "</td>" + 
        "</tr>";
    }

    textoHtml = textoHtml + "</tbody></table>";

    document.getElementById(idHtml).innerHTML = textoHtml;
}

function añadirElemento(nom, tlf, edad){
    let nuevaPersona = {
        name: nom,
        telephone: tlf,
        age: edad
    }
    data.push(nuevaPersona);
}

function mayores30(arrayBase){
    let edad30 = [];

    for (let i = 0; i < arrayBase.length; i++){
        if (arrayBase[i].age > 30){
            edad30.push(arrayBase[i]);
        }
            
    }

    return edad30;
}


// Array Original
imprimirArray(data,"ArrayOrigianl", "Array Original");

// Agregar dos elementos al final
añadirElemento("Padro", "611944444", 25);
añadirElemento("Julia","633232323", 37);

console.log(data);

imprimirArray(data, "Array2Añadidos" , "Añade 2 elementos al final");

// Ordenar el vector por edad y comprobar resultado 
data.sort((a, b) => b.age - a.age);
imprimirArray(data, "ArrayOrdenadoEdad", "Ordenado por edad");

// Ordena el vector por nombre
data.sort((a, b) => a.name.localeCompare(b.name));
imprimirArray(data, "ArrayOrdenadoNom", "Ordenado por nombre");

// Crea y ordena un nuevo vector que contenga solo los mayores de 30
imprimirArray(mayores30(data), "ArrayMayor30", "Crea y muestra un array con los mayores de 30");






