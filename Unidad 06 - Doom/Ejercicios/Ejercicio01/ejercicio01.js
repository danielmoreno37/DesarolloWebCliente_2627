const btnNuevo = document.getElementById('btnNuevo');
const listaNumeros = document.getElementById('listaNumeros');

btnNuevo.addEventListener('click', () => {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = numeroAleatorio;
    listaNumeros.appendChild(nuevoElemento);
});