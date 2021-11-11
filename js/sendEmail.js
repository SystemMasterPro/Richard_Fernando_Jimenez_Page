const send = document.getElementById("sendEmail");
send.addEventListener('click', function () {
    event.preventDefault();
    Swal.fire({
        icon: 'warning',
        title: 'Tranquilo...',
        text: 'Estamos trabajando en ello! De momento puedes conectar conmigo por las otras opciones disponibles'
    });
});