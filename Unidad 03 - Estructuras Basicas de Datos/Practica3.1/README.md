# UNIDAD 3 - Practica 1

`Ejercicio 1`
---
- ##### Crea el siguiente array
```js
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
```

- ##### Añade dos elementos al final
```js
function añadirElemento(nom, tlf, edad){
    let nuevaPersona = {
        name: nom,
        telephone: tlf,
        age: edad
    }
    data.push(nuevaPersona);
}
```
![alt text](Ejercicio01/img/2elemfinal.png)
---

- ##### Comprueba con Console Log que se ha añadido
![alt text](Ejercicio01/img/arrayAñadido.png)
---


- ##### Ordena el vector por edad y comprueba el resultado
```js
data.sort((a, b) => b.age - a.age);
```
![alt text](Ejercicio01/img/edad.png)
---

- ##### Ordena el vector por nombre y comprueba el resultado
```js
data.sort((a, b) => a.name.localeCompare(b.name));
```
![alt text](Ejercicio01/img/nom.png)
---

- ##### Crea y muestra un nuevo vector que contenga los mayores de 30
```js
function mayores30(arrayBase){
    let edad30 = [];

    for (let i = 0; i < arrayBase.length; i++){
        if (arrayBase[i].age > 30){
            edad30.push(arrayBase[i]);
        }
            
    }

    return edad30;
}
```
![alt text](Ejercicio01/img/mayores30.png)
---

