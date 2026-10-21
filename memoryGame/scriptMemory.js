let miGaleria=document.querySelector(".galeria");
let misImagenes=miGaleria.querySelectorAll("img");
var numGiradas = 0; // puede valer 0,1,2
var cartaGirada1 = 0; //puede valer 0, 1, 2,3,4 o 5
var cartaGirada2 = 0; //puede valer 0, 1, 2,3,4 o 5
const cartas = [];
const cartaTapada = "img/carta memory reves.png"
var fin = 3;

//guardo los audios para usarlos y las imagenes que hay en los botones ademas de variables para poder sacar los pares y el como gestionarlos
cartas[0] = "img/picto comer.png";
cartas[1] = "img/picto saludar.jpg";
cartas[2] = "img/picto saludar.jpg";
cartas[3] = "img/picto jugar.png";
cartas[4] = "img/picto comer.png";
cartas[5] = "img/picto jugar.png";

// hago un for para poder ir pasando por los botones y me fijo en lo que se han pulsado con un evento 
//los botones pulsados deberan reaccionar de la siguientes forma :
// 1. la imagen tendra un efecto style con el que al final muestre una foto designada 
// 2. en el caso de haber a la vez otra foto descubierta se comprobara si son iguales y habra 2 casos 
// si son iguales se reproduce sonido2 y bloquean esos botones , añadiendo 1 par hecho al contador
// en caso contrario se resetean al estado anterior los 2 botones con sus imagenes 


for (let i = 0; i < 6; i++) {

misImagenes[i].onclick = function () {

   //Compruebo si no he girado todavÃ­a ninguna carta
   if (numGiradas === 0) {
	 //Giro una carta y pongo al dia el estado del juego
         misImagenes[i].setAttribute("src", cartas[i]);
         numGiradas = 1;
         cartaGirada1 = i; 
   } else if (numGiradas === 1) { 
         misImagenes[i].setAttribute("src", cartas[i]);
         numGiradas = 2;
         cartaGirada2 = i;
   }   
   //compruebo si tengo dos cartas giradas y tengo que hacer algo
   if ( numGiradas === 2) {
	// si hay dos cartas iguales las elimino
	if ( misImagenes[cartaGirada1].getAttribute("src") === misImagenes[cartaGirada2].getAttribute("src") ) {
	  //sonido
          let sonidoAplausos = new Audio('sonidos/aplausos.mp3');
          sonidoAplausos.play();
          //Desvanecer
          misImagenes[cartaGirada1].style.opacity = "0";
          misImagenes[cartaGirada1].style.transition = "opacity 2s ease-in-out";
          misImagenes[cartaGirada2].style.opacity = "0";
          misImagenes[cartaGirada2].style.transition = "opacity 2s ease-in-out";
          
          //marco un acierto menos hacia el fin
          fin = fin - 1;

        } else {
          let sonidoFallo = new Audio('sonidos/fallo.mp3');
          sonidoFallo.play();
          //Espero 2 segundos y tapo las cartas
          setTimeout(() => {
             misImagenes[cartaGirada1].setAttribute("src", cartaTapada)
             misImagenes[cartaGirada2].setAttribute("src", cartaTapada)
          }, 2000);

	}
        //reseteo las varialbles
        numGiradas = 0;

   }          
//Compruebo si he terminado
   if (fin === 0) {
      alert("TERMINASTE");
   }
 
};
  
}





