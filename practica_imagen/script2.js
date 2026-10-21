const i1= document.getElementById("imagen");
var boton = document.getElementById("b1");

boton.onclick = function () {
let src1 = i1.getAttribrute("src");
if (src1 == "perro.webp"){
    i1.setAttribute("src", "gato.webp");
}else {
    i1.setAttribute("src", "perro.webp");
}

}









