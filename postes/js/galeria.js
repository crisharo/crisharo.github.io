let slideIndex = 1;

document.addEventListener("DOMContentLoaded", function() {
    showSlides(slideIndex); // Muestra la primera imagen al cargar la página
});

// Controles de siguiente/anterior
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Control de los dots
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    // Oculta todas las diapositivas
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Elimina la clase "active" de los dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Muestra la imagen correcta y marca el dot activo
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
