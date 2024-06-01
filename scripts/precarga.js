document.addEventListener("DOMContentLoaded", function() {
    // Espera 2 segundos antes de ocultar el preloader y mostrar el contenido principal
    setTimeout(function() {
        document.getElementById("preloader").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 5000);
});
