const send = document.getElementById("sendEmail");
const form = document.getElementById("MyFormEmail");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

send.addEventListener('click', function () {
    event.preventDefault();
    if (name.value === "" || email.value === "" || message.value === "") {
        Swal.fire({
            icon: 'warning',
            title: 'Upss...',
            text: 'Se requiere llenar todos los campos!!!'
        });
    } else {
        emailjs.sendForm('gmailMessage', 'template_ysv8ybn', 'form', 'user_ji7M3KpHpxSg2fvS2O20z')
            .then(function (response) {
                Swal.fire({
                    icon: 'success',
                    title: 'CORREO ENVIADO CON EXITO!',
                    text: 'Su correo ha sido entregado de manera satisfactoria, nos pondremos en contacto de inmediato.'
                });
                name.value = "";
                email.value = "";
                message.value = "";
            }, function (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Upss!',
                    text: 'Hemos tenido problemas al enviar su correo, verifique su conexion y vuelva a intentarlo.'
                });
            });
    }
});