function elegirMayor(){
    let array = [];

    for (let i = 1; i <= 9; i++){
        let idhtml = Number (document.getElementById("num" + i).value);
        array.push (idhtml);
    }

    let mayor = 0;
    for (let i = 0; i < array.length; i++ ){
        if (array[i] > mayor){mayor = array[i];}
    }

    document.getElementById("card").innerHTML = "El numero mayor es " + mayor;
}