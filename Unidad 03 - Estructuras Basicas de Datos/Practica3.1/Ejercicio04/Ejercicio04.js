let lot= [];

function rellenarLoteria (array){
    for (let i = 0; i < 50; i++){
        let combinacion = [];
        while (combinacion.length < 6){
            let numero = Math.floor(Math.random()*49)+1;
            if(!combinacion.includes(numero)){
                combinacion.push(numero);
            }
        }
        array.push(combinacion);
    }
    return array;
}

lot = rellenarLoteria(lot);

console.log(lot)