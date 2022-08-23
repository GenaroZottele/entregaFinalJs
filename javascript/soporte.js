const botonEnviar = document.getElementById('enviar')
// const contenedorModal = document.getElementById('contenedor-modal')

botonEnviar.addEventListener('click', () => {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    // const contenedorModal = document.getElementById('contenedor-modal')

    if (nombre.length > 0 && apellido.length > 0) {
        Toastify({
            text: "Gracias " + nombre + " en breve nos comuincaremos con usted",
            duration: 3000,
            gravity: 'top',
            position: 'right',
            style: {
                background: 'linear-gradient(to right, violet, lightblue)'
            }
        }).showToast();
        console.log(nombre);
        console.log(apellido);
    }
    
})