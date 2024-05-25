const $mail = document.getElementById('email');

const $pass1= document.getElementById('password');
const $pass2= document.getElementById('password2');

function registro(){
    alert("te registraste con exito");
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

        registro();
    }
    else{
        alert("Mail o contraseñas equivocadas")
    }


}