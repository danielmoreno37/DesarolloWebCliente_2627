const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorEmail = document.getElementById('errorEmail');
const errorPassword = document.getElementById('errorPassword');
const btnEnviar = document.getElementById('btnEnviar');

// Expresión regular básica para el formato xxxx@yyyy.zzzz
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validarFormularioTotal() {
    const emailValido = regexEmail.test(emailInput.value);
    const passValido = passwordInput.value.length >= 8 && passwordInput.value.length <= 10;

    if (emailValido && passValido) {
        btnEnviar.disabled = false;
        btnEnviar.style.backgroundColor = '';
        btnEnviar.style.cursor = 'pointer';
    } else {
        btnEnviar.disabled = true;
        btnEnviar.style.backgroundColor = 'lightgray';
        btnEnviar.style.cursor = 'not-allowed';
    }
}

// Evento blur para Email
emailInput.addEventListener('blur', () => {
    if (!regexEmail.test(emailInput.value)) {
        errorEmail.textContent = 'Formato esperado: xxxx@yyyy.zzzz';
    }
    validarFormularioTotal();
});

// Limpiar error al volver a entrar en email
emailInput.addEventListener('focus', () => {
    errorEmail.textContent = '';
});

// Evento blur para Password
passwordInput.addEventListener('blur', () => {
    const len = passwordInput.value.length;
    if (len < 8 || len > 10) {
        errorPassword.textContent = 'El password debe tener entre 8 y 10 caracteres.';
    }
    validarFormularioTotal();
});

// Limpiar error al volver a entrar en password
passwordInput.addEventListener('focus', () => {
    errorPassword.textContent = '';
});

// Prevenir envío si no es válido
btnEnviar.addEventListener('click', (e) => {
    if (btnEnviar.disabled) {
        e.preventDefault();
    } else {
        alert('Formulario enviado con éxito');
    }
});