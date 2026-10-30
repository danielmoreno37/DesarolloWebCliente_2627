const miContador = (
    function () {
        let contador = 0;

        return function(){
            contador ++;
            return contador;
        };
    }
)();

console.log(miContador());
console.log(miContador());
console.log(miContador());
console.log(miContador());
console.log(miContador());

console.log(miContador);