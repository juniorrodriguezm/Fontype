var tamano = document.getElementById("tamano");
var puntos = document.getElementById("puntos");
puntos.innerHTML = tamano.value;

tamano.oninput = function () {
    puntos.innerHTML = this.value;

    var pruebame = document.getElementById("pruebame");
    pruebame.style.fontSize = this.value + "px";



}

//Para el menu delizable
var menuSelect = document.querySelector("div > select");
$(menuSelect).customSelectMenu();

//Para el menu deslizable de compra
var menuSelectCompra = document.querySelector("form > select");
$(menuSelectCompra).customSelectMenu();

//Cambiar la paeta

function cambiarPaleta(id) {

    var paleta1 = document.getElementById("paleta1");
    var paleta2 = document.getElementById("paleta2");
    var paleta3 = document.getElementById("paleta3");
    var paleta4 = document.getElementById("paleta4");
    var pruebame = document.getElementById("pruebame");
    var combina = document.getElementById("combina");
    var ornamento = document.querySelectorAll("#ornamento");
    var linea = document.querySelectorAll("#linea");
    var fondo = document.querySelector("section.pruebame");
    var rasgadoArriba = document.getElementById("rasgadoArriba");
    var rasgadoAbajo = document.getElementById("rasgadoAbajo");

    if (id === "paleta1") {
        paleta1.style.borderColor = "#FDB84E";
        paleta2.style.borderColor = "#FFFFFF";
        paleta3.style.borderColor = "#FFFFFF";
        paleta3.style.borderColor = "#FFFFFF";


        pruebame.style.color = "#D9E4D7";
        combina.style.color = "#D9E4D7";
        //___________________________________
        fondo.style.backgroundColor = "#5c60a1";
        rasgadoArriba.style.fill = "#5c60a1";
        rasgadoAbajo.style.fill = "#5c60a1";

        var x;
        for (x = 0; x < ornamento.length; x++) {
            ornamento[x].style.fill = "D9E4D7";
            linea[x].style.fill = "D9E4D7";
        }

    }

    if (id === "paleta2") {
        paleta2.style.borderColor = "#FDB84E";
        paleta1.style.borderColor = "#FFFFFF";
        paleta3.style.borderColor = "#FFFFFF";
        paleta3.style.borderColor = "#FFFFFF";


        pruebame.style.color = "#FDB84E";
        combina.style.color = "#FDB84E";
        //_______________________________________
        fondo.style.backgroundColor = "#213440";
        rasgadoArriba.style.fill = "#213440";
        rasgadoAbajo.style.fill = "#213440";

        var x;
        for (x = 0; x < ornamento.length; x++) {
            ornamento[x].style.fill = "FDB84E";
            linea[x].style.fill = "FDB84E";
        }



    }

    if (id === "paleta3") {
        paleta3.style.borderColor = "#FDB84E";
        paleta1.style.borderColor = "#FFFFFF";
        paleta2.style.borderColor = "#FFFFFF";
        paleta4.style.borderColor = "#FFFFFF";

        pruebame.style.color = "#d9c2a7";
        combina.style.color = "#d9c2a7";
        //_______________________________________
        fondo.style.backgroundColor = "#8c2e36";
        rasgadoArriba.style.fill = "#8c2e36";
        rasgadoAbajo.style.fill = "#8c2e36";

        var x;
        for (x = 0; x < ornamento.length; x++) {
            ornamento[x].style.fill = "d9c2a7";
            linea[x].style.fill = "d9c2a7";
        }
    }

    if (id === "paleta4") {
        paleta4.style.borderColor = "#FDB84E";
        paleta1.style.borderColor = "#FFFFFF";
        paleta2.style.borderColor = "#FFFFFF";
        paleta3.style.borderColor = "#FFFFFF";

        pruebame.style.color = "#37646F";
        combina.style.color = "#37646F";
        //_______________________________________
        fondo.style.backgroundColor = "#f2a595";
        rasgadoArriba.style.fill = "#f2a595";
        rasgadoAbajo.style.fill = "#f2a595";

        var x;
        for (x = 0; x < ornamento.length; x++) {
            ornamento[x].style.fill = "37646F";
            linea[x].style.fill = "37646F";
        }
    }

}

//para ir a seccion

var anclaDescarga = document.getElementById("seccionPruebamelink");

$(anclaDescarga).click(function(e) { 
    // Prevent a page reload when a link is pressed
  e.preventDefault(); 
    // Call the scroll function
  goToByScroll($(this).attr("id"));           
});

//___________________________________________________________

function goToByScroll(id){
    // Reove "link" from the ID
  id = id.replace("link", "");
    // Scroll
  $('html,body').animate({
      scrollTop: $("#"+id).offset().top},
      'slow');
}



