diasTranscurridos();

function diasTranscurridos(){
    let fnac;
    let fact = new Date();

    do{
        fnac = new Date(prompt ("Que día naciste? YYYY/MM/DD"));

        if (isNaN(fnac.getTime())){ //El NaN actua tanto si esta vacío como si está incorrecto por lo que si se pone mal actua
            alert ("Fecha incorrecta. Ponla correctamente yyyy/mm/dd con barras incluidas");
        }
    }while(isNaN(fnac.getTime()));


    let diasDif = fact - fnac;
    let diaMiliseg = 1000*60*60*24; //JS calcula date en ms por lo que lo convertimos a un dia

    let dias = Math.floor(diasDif / diaMiliseg);

    alert ("Han pasado " + dias + " desde tu nacimiento.");

}