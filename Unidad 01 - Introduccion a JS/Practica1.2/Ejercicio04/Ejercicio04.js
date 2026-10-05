let colores = prompt("Selecciona un color de fondo (R) rojo, (A) azul, (V) verde");

switch(colores.toLowerCase().charAt(0)){
    case "r" : document.body.style.backgroundColor = '#FF2C2C'; break;
    case "a" : document.body.style.backgroundColor = '#0077ff'; break;
    case "v" : document.body.style.backgroundColor = '#15ff00'; break;
    default: alert("Campo incorrecto");
}