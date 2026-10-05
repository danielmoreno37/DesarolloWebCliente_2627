let cadena = prompt("Introduce una cadena de texto");
let i;
let letraA = 0;
for (i = 0; i < cadena.length; i++){
    if(cadena.charAt(i) === "a") letraA++;
}
alert ("La cadena tiene un total de " + i + " caracteres y " + letraA + " a");