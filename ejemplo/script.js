alert("es viernes")
// const saludo = document.getElementById("saludo")
const saludo = document.querySelectorAll("h1");
const boton = document.getElementById("boton1");
const titulo = document.getElementById("saludo1");
saludo[0].textContent = "no"

boton.addEventListener("click", function () {
    titulo.textContent = "pulsado";
    titulo.style.color = "blue";
    titulo.style.fontSize = "40px";
    titulo.style.backgroundColor = "yellow";

});

