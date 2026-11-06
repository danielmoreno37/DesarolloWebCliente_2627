const cajas = document.querySelectorAll('.caja');
const btnReaparecer = document.getElementById('btnReaparecer');

cajas.forEach((caja) => {
    // Clic izquierdo: Ocultar (sin eliminar del DOM)
    caja.addEventListener('click', () => {
        caja.classList.add('oculto');
    });

    // Clic derecho: Eliminar por completo del DOM
    caja.addEventListener('contextmenu', (e) => {
        e.preventDefault(); // Evita que se abra el menú contextual del navegador
        caja.remove();
    });
});

// Reaparecer solo las cajas ocultas que sigan existiendo en el DOM
btnReaparecer.addEventListener('click', () => {
    const ocultas = document.querySelectorAll('.caja.oculto');
    ocultas.forEach((caja) => {
        caja.classList.remove('oculto');
    });
});