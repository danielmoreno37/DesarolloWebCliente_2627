function comprobarEdad(){
    let fNac = new Date (document.getElementById("fNac").value);
    let fAct = new Date();

    let añosDif = fAct - fNac;
    let añoMiliseg = 1000*60*60*24*365;

    let años = Math.floor(añosDif / añoMiliseg);

    alert ("Tienes " + años + " años!!!");
    //document.getElementById("card").innerHTML = "Tienes " + años + " años!!!";
}