function convierteCadena(){
    //Obtener el valor del user
    let texto = document.getElementById("textoOriginal").value;

    // Del Revés
    let inverso = texto.split('').reverse().join('');
    document.getElementById("inverso").value = inverso;

    let mayusculas = texto.toUpperCase();
    document.getElementById("mayusculas").value = mayusculas;

    let repetido = texto.repeat(5);
    document.getElementById("repetido").value = repetido;

    let inversoMay = texto.split('').reverse().join('').toUpperCase();
    document.getElementById("inversoMay").value = inversoMay;
}