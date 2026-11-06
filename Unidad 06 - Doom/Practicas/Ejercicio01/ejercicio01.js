document.addEventListener('keydown', (e) => {
    // Detectamos si se pulsa la tecla 'b' (o 'B') junto con la tecla Ctrl
    // Si quieres probar con ALT+F12, puedes cambiar a: (e.altKey && e.key === 'F12')
    if (e.ctrlKey && e.key.toLowerCase() === 'b') {
        e.preventDefault(); // Evita comportamientos por defecto del navegador (como poner en negrita)
        
        const contenedor = document.getElementById('imagen');
        
        // Usamos Picsum con un parámetro de timestamp o número aleatorio para forzar que cargue una nueva imagen
        const randomId = Math.floor(Math.random() * 1000);
        contenedor.style.backgroundImage = `url('https://picsum.photos/1920/1080?random=${randomId}')`;
    }
});