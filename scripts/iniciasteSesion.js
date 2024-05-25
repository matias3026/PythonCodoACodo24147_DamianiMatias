
// alert("Para que de correctos poner estas credenciales \nmail= 'codoAcodo@mail.com' \nclave= 'python'");
// var mail = 'codoAcodo@mail.com';
// var clave = 'python';

// const $mail = document.getElementById('email');
// const $clave = document.getElementById('password');

// function iniciasteSesion() {
//     if ($mail.value !== mail || $clave.value !== clave) {
//         alert('Contraseña Incorrecta, intente nuevamente');
//     } else {
//         alert("Sesion iniciada Con Exito Sos Un Crack");
//     }
// }

alert("Para iniciar sesión correctamente, usa estas credenciales: \nmail = 'codoAcodo@mail.com' \nclave = 'python'\n-------------------------------------------------------------\nTambien puedas ir a 'Regístrate aquí' \ny tus credenciales se guardaran \nde forma local ");

var mail = 'codoAcodo@mail.com';
var clave = 'python';

const $mail = document.getElementById('email');
const $clave = document.getElementById('password');

// Verificar si hay credenciales guardadas en localStorage
var storedCredentials = JSON.parse(localStorage.getItem('credentials'));

if (storedCredentials) {
    mail = storedCredentials.mail;
    clave = storedCredentials.clave;
}

// function iniciasteSesion() {
//     if ($mail.value !== mail || $clave.value !== clave) {
//         alert('Contraseña incorrecta, intenta nuevamente');
//     } else {
//         alert("Sesión iniciada con éxito, ¡eres un crack!");
//     }
// }

function iniciasteSesion() {
    if (storedCredentials && ($mail.value !== storedCredentials.mail || $clave.value !== storedCredentials.clave)) {
        alert('Contraseña incorrecta, intenta nuevamente');
    } else {
        alert("Sesión iniciada con éxito, ¡eres un crack!");
    }
}
