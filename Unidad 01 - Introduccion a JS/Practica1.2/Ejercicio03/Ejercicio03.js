let cadena = prompt("Introduce una cadena de texto");
let i;
let letra_a = 0;
let letra_A = 0;
let letra_Atotal = 0;
for (i = 0; i < cadena.length; i++){
    if(cadena.charAt(i) === "a") letra_a++;
    if(cadena.charAt(i) === "A") letra_A++;
    if(cadena.charAt(i) === "A" || cadena.charAt(i) === "a") letra_Atotal ++;
}

alert ("La cadena tiene un total de " + i + " caracteres y " + letra_Atotal + " as y " + letra_a + " a  y " + letra_A + " A");