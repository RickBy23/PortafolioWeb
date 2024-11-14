let menuVisible = false;
// Función que oculta o muestra el menú
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    // Oculto el menú una vez que selecciono una opción
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Función que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        // Agregar las clases de animación a las habilidades
        habilidades[0].classList.add("odoo");
        habilidades[1].classList.add("htmlxml");
        habilidades[2].classList.add("python");
        habilidades[3].classList.add("css");
        habilidades[4].classList.add("javascript");
        habilidades[5].classList.add("basedatos");
        habilidades[6].classList.add("c");
        habilidades[7].classList.add("soporte");
        habilidades[8].classList.add("comunicacion");
        habilidades[9].classList.add("trabajo");
        habilidades[10].classList.add("creatividad");
        habilidades[11].classList.add("ganas");
        habilidades[12].classList.add("analisis");
        habilidades[13].classList.add("resolucion");
        habilidades[14].classList.add("relaciones");
        habilidades[15].classList.add("investigacion");
        habilidades[16].classList.add("actitud");
    }
}

// Detecto el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}

// Leer el idioma desde el almacenamiento local o por defecto en inglés
let currentLanguage = localStorage.getItem('language') || 'en';

// Cambiar el texto del botón basado en el idioma actual
function actualizarBotonIdioma() {
    const button = document.getElementById('language-toggle');
    button.textContent = currentLanguage === 'en' ? 'English' : 'Español';
}

// Función para cambiar de idioma y redirigir a la página correspondiente
function toggleLanguage() {
    // Cambiar el idioma
    currentLanguage = currentLanguage === 'en' ? 'es' : 'en';

    // Guardar el idioma en el almacenamiento local
    localStorage.setItem('language', currentLanguage);

    // Actualizar el texto del botón
    actualizarBotonIdioma();

    // Redirigir a la página correspondiente
    if (currentLanguage === 'es') {
        window.location.href = 'index_es.html';
    } else {
        window.location.href = 'index.html';
    }
}

// Inicializar el evento para el botón de cambio de idioma
document.addEventListener("DOMContentLoaded", () => {
    // Actualizar el botón con el idioma almacenado
    actualizarBotonIdioma();

    document.getElementById('language-toggle').addEventListener('click', toggleLanguage);
});
