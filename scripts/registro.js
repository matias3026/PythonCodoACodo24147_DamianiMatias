const $mail = document.getElementById('email');

const $pass1= document.getElementById('password');
const $pass2= document.getElementById('password2');

function registro(){
    alert("te registraste con exito");
}

function guardarRegistro(email, password) {
    // Verificar si hay registros almacenados previamente
    let registros = JSON.parse(localStorage.getItem('registros')) || [];

    // Agregar el nuevo registro
    registros.push({ email: email, password: password });

    // Guardar los registros actualizados en localStorage
    localStorage.setItem('registros', JSON.stringify(registros));
}



function validarEmail(email) {
    // Expresión regular para validar el formato de email
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validarPass(pass1 ,pass2){
    if (pass1 !== pass2){
        return false;
    }
    else return true;

}


function validarRegistro(){
    if (validarEmail($mail.value) && validarPass($pass1.value, $pass2.value)) {
        guardarRegistro($mail.value, $pass1.value);
        registro();
    }
    else{
        alert("Mail o contraseñas equivocadas")
    }


}


//-------------------------------------------------------
// Recuperar los registros almacenados en localStorage
let registrosGuardados = JSON.parse(localStorage.getItem('registros'));

// Verificar si hay registros y mostrarlos en la consola
if (registrosGuardados) {
    console.log("Registros almacenados:");
    registrosGuardados.forEach(registro => {
        console.log("Email: " + registro.email + ", Password: " + registro.password);
    });
} else {
    console.log("No se encontraron registros almacenados.");
}

