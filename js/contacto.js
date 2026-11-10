// Demostración local: valida campos sin enviar ni almacenar datos personales.
const formulario = document.querySelector('#formulario-contacto');
const estado = document.querySelector('#estado');
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    estado.textContent = 'Formulario validado. Esta es una demostración académica: el mensaje no se ha enviado.';
});
