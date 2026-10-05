/*

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");

let numMayor;

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", mayor());

function mayor (event) {
    event.preventDefault();
    if( num1 > num2 && num1 > num3 ) numMayor = num1;
    if( num2 > num1 && num2 > num3 ) numMayor = num2;
    if( num3 > num1 && num3 > num2 ) numMayor = num3;
    
    alert("El numero mayor es " + numMayor)
}


*/







let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", mayor);

function mayor (event){
    event.preventDefault();

    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let n3 = parseFloat(document.getElementById("num3").value);

    let numMayor;

    if (n1 > n2 && n1 > n3) numMayor = n1;
    if (n2 > n1 && n2 > n3) numMayor = n2;
    if (n3 > n1 && n3 > n2) numMayor = n3;

    alert ("El numero mayor es " + numMayor);

}