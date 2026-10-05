function comprobar(){
    let fecha = document.getElementById("fecha").value;

    let regex = /^\d{1,2}\/\d{1,2}\/(\d{2}|\d{4})$/;

    if (regex.test(fecha)){
        alert ("Formato correcto!");
    }else{
        alert ("Formato incorrecto");
    }
}