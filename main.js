let menuVisible = false;
//Funcion que oculta  o muestra menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList= "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function selector(){
    //Oculta el menu una vez que seleccione una opción
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//Función que aplica las animaciones de las habilidades 
function efectoHabilidades(){
    var skills= document.getElementById("skills");
    var distancia_skills = window.innerHeight -skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades= document.getElementById("progreso");
        habilidades[0].classList.add("javascript");
    }
}

window.onscroll = function(){
    efectoHabilidades();
}
