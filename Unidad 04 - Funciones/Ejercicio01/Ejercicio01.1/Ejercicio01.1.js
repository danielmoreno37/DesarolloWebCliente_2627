let num = cuadrado( recogidaNumero() );
console.log(num);

function recogidaNumero (){
    let entrada;
    let num;
    do{
        entrada = prompt ("Introduce un numer para elevar al cuadrado: ");

        if(entrada == null || entrada.trim() == "" || isNaN(Number(entrada))){
            alert("No es un numero valido, intentelo de nuevo.");
            num = NaN;
        } else {
            num = Number(entrada);
        }

    }while (isNaN(num));
    return num
}

function cuadrado(num){
    let result = num ** 2;
    return result;
}

