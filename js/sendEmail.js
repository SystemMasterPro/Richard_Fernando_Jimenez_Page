const send = document.getElementById("sendEmail");
const form = document.getElementById("MyFormEmail");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

var regularEmail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/

send.addEventListener('click', function () {
    event.preventDefault();
    if (name.value === "" || email.value === "" || message.value === "") {
        Swal.fire({
            icon: 'warning',
            title: 'Upss...',
            text: 'Se requiere llenar todos los campos!!!'
        });
    } else if (!regularEmail.test(email.value)) {
        Swal.fire({
            icon: 'warning',
            title: 'Upss...',
            text: 'Su correo electronico es incorrecto! Verifiquelo y vuelva a intentar'
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
        let timerInterval;
        Swal.fire({
          title: "Enviando Mensaje!",
          html: "Por favor espere...",
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const b = Swal.getHtmlContainer().querySelector("b");
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft();
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
          }
        });
    }
});