const sonido = new Audio ('explosion.mp3');
const i1 = document.querySelectorAll("button");

i1.forEach(boton => {
    boton.addEventListener("click", () => {
    
        sonido.play();

        boton.style.transition = "opacity 2s ease-in-out";
        boton.style.opacity = "0";
    });
});





