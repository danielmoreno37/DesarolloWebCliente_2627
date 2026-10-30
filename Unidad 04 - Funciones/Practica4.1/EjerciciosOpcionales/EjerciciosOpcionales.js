function filtro(array, callback) {
    for (let i = 0; i < array.length; i++) {
        array[i] = callback(array[i]);
    }

    return array;
}

let numeros = [1, 2, 3, 4];

filtro(numeros, numero => numero * 2);

console.log(numeros);

let palabras = ["hola", "javascript", "programacion"];

filtro(palabras, palabra => palabra.toUpperCase());

console.log(palabras);

let num = [3, 4, 5];

function factorial(num) {
    let resultado = 1;

    for (let i = 1; i <= num; i++) {
        resultado *= i;
    }

    return resultado;
}

filtro(num, num => factorial(num));

console.log(num);