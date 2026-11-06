const capa1 = document.getElementById('capa1');
const capa2 = document.getElementById('capa2');

// 1. Eventos de arrastre en la Capa 1
capa1.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
    // Opacidad del 50% durante el arrastre
    setTimeout(() => {
        capa1.style.opacity = '0.5';
    }, 0);
});

capa1.addEventListener('dragend', () => {
    capa1.style.opacity = '1';
});

// 2. Eventos en la Capa 2 (Destino)
capa2.addEventListener('dragover', (e) => {
    e.preventDefault(); // Necesario para permitir soltar
    capa2.style.backgroundColor = 'red'; // Cambia a fondo rojo al pasar por encima
});

capa2.addEventListener('dragleave', () => {
    capa2.style.backgroundColor = 'white'; // Vuelve a blanco si el ratón sale
});

capa2.addEventListener('drop', (e) => {
    e.preventDefault();
    
    // Ocultar / eliminar la primera capa
    capa1.style.display = 'none';
    
    // Cambiar texto en el destino
    capa2.textContent = 'Lo has logrado';
    capa2.style.backgroundColor = 'white'; // Opcional: restablecer o dejar en rojo según preferencia
});