let animada = document.querySelectorAll(".animada");

function mostrarScroll(){
    let scrollTop= document.documentElement.scrollTop;
    for (var i=0; i < animada.length; i++){
        let alturaAnimada = animada[i].offsetTop;
        if(alturaAnimada - 300 < scrollTop){
            animada[i].style.opacity = 1;
            animada[i].classList.add("mostrarArriba")
        }
    }
}

window.addEventListener('scroll', mostrarScroll)

let animadas = document.querySelectorAll(".animadas");

function mostrarScroll2(){
    let scrollTop2= document.documentElement.scrollTop;
    for (var i=0; i < animadas.length; i++){
        let alturaAnimadas = animadas[i].offsetTop;
        if(alturaAnimadas - 455 < scrollTop2){
            animadas[i].style.opacity = 1;
            animadas[i].classList.add("mostrarArriba")
        }
    }
}

window.addEventListener('scroll', mostrarScroll2)

let animadass = document.querySelectorAll(".animadass");

function mostrarScroll3(){
    let scrollTop3= document.documentElement.scrollTop;
    for (var i=0; i < animadass.length; i++){
        let alturaAnimadass = animadass[i].offsetTop;
        if(alturaAnimadass - 400 < scrollTop3){
            animadass[i].style.opacity = 1;
            animadass[i].classList.add("mostrarArriba")
        }
    }
}

window.addEventListener('scroll', mostrarScroll3)

let animadasss = document.querySelectorAll(".animadasss");

function mostrarScroll4(){
    let scrollTop4= document.documentElement.scrollTop;
    for (var i=0; i < animadasss.length; i++){
        let alturaAnimadasss = animadasss[i].offsetTop;
        if(alturaAnimadasss - 400 < scrollTop4){
            animadasss[i].style.opacity = 1;
            animadasss[i].classList.add("mostrarArriba")
        }
    }
}

window.addEventListener('scroll', mostrarScroll4)

/* Desplazamiento suave*/

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 500, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });