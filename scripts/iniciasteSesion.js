

var mail = 'codoAcodo@mail.com';
var clave = 'python';

const $mail = document.getElementById('email');
const $clave = document.getElementById('password');

function iniciasteSesion() {
    if ($mail.value !== mail || $clave.value !== clave) {
        alert('Contraseña Incorrecta, intente nuevamente');
    } else {
        alert("Sesion iniciada Con Exito Sos Un Crack");
    }
}
