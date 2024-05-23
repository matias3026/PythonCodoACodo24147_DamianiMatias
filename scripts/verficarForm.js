document.addEventListener('DOMContentLoaded', function() {
    // capturar id de formulario en constante
    const $mail = document.getElementById('email');
    const $nombre = document.getElementById('nombre');
    const $telefono = document.getElementById('telefono');
    const $motivo = document.getElementById('motivo');
    const $newsletter = document.getElementById('newsletter');
    const $mensaje = document.getElementById('mensaje');
    const $errorForm = document.getElementById('notificacion');

    const $contarCaracteres = document.getElementById('contador-caracteres');

    function validarEmail(email) {
        // Expresión regular para validar el formato de email
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function limpiarNotification(){
        $errorForm.innerHTML = "";
        return;
    }

    function contarCaracteres() {
    const caracteresIngresados = $mensaje.value.length;
    $contarCaracteres.textContent = caracteresIngresados + ' caracteres';

    if (caracteresIngresados < 50) {
        $contarCaracteres.classList.add('mal');
        $contarCaracteres.classList.remove('bien');
    } else {
        $contarCaracteres.classList.remove('mal');
        $contarCaracteres.classList.add('bien');
    }
}


    // Agregar evento 'input' al textarea una sola vez
    $mensaje.addEventListener('input', contarCaracteres);



    function validarForm(){

        if ($nombre.value.length < 3){
            $errorForm.innerHTML = "Nombre incorrecto.";
            return;
        } else if (!validarEmail($mail.value)){
            $errorForm.innerHTML = "Formato de correo electrónico incorrecto.";
            return;
        } else if (isNaN($telefono.value) || $telefono.value.length < 10){
            $errorForm.innerHTML = "Ingrese solo números y verifique la cantidad (deben ser al menos 10 dígitos).";
            return;
        } else if ($motivo.selectedIndex === 0) {
            $errorForm.innerHTML = "Seleccione el motivo del contacto.";
            return;
        } else if ($mensaje.value.length < 50){
            $errorForm.innerHTML = "Escriba al menos 50 caracteres en el mensaje.";
            return;
        } else {
            limpiarNotification();
            alert("¡Formulario enviado con éxito!");
        }
    }

    function imprimir() {
        console.log($mail.value, $motivo.value, $newsletter.checked, $nombre.value, $telefono.value);
    }

    // Exponer la función imprimir al ámbito global
    window.imprimir = imprimir;

    // Exponer la función validarForm al ámbito global
    window.validarForm = validarForm;
});
