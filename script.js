let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
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
    }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 