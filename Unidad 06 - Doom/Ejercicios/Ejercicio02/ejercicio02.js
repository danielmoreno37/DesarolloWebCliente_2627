const visorPosicion = document.getElementById('posicion');

document.addEventListener('mousemove', (e) => {
    visorPosicion.textContent = `Posición del ratón: X = ${e.clientX}px | Y = ${e.clientY}px`;
});