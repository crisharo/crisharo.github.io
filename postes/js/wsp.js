$(document).ready(function() {
    $("#chat-button").click(function() {
        $("#chat-popup").toggleClass("show"); // Activa/desactiva la visibilidad
    });

    $("#close-popup").click(function() {
        $("#chat-popup").removeClass("show"); // Oculta la ventana
    });

    // Cerrar al hacer clic fuera de la ventana emergente
    $(document).click(function(event) {
        if (!$(event.target).closest("#chat-popup, #chat-button").length) {
            $("#chat-popup").removeClass("show");
        }
    });
});
