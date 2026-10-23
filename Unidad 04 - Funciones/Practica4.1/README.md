# Practica 4.1
---

## 1. Ejercicios Sencillos:
#### 1.1 Crea una función tradicional que reciba un número y retorne su cuadrado. Luego, usa esa función para mostrar el cuadrado de 5 en la consola

```js
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
```
