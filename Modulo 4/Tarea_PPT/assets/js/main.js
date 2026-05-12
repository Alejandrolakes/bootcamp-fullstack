let puntosUsuario = 0;
let puntosPC = 0;

function jugar(eleccionUsuario) {

  // opciones posibles
  let opciones = ["piedra", "papel", "tijera"];

  // número aleatorio
  let numero = Math.floor(Math.random() * 3);

  // elección del computador
  let eleccionPC = opciones[numero];

  // variable resultado
  let mensaje;

  // comparación
  if (eleccionUsuario == eleccionPC) {
    mensaje = "Empate";
  } 
  else {
    if (eleccionUsuario == "piedra") {
      if (eleccionPC == "tijera") {
        mensaje = "Ganaste";
        puntosUsuario = puntosUsuario + 1;
      } else {
        mensaje = "Perdiste";
        puntosPC = puntosPC + 1;
      }
    }

    if (eleccionUsuario == "papel") {
      if (eleccionPC == "piedra") {
        mensaje = "Ganaste";
        puntosUsuario = puntosUsuario + 1;
      } else {
        mensaje = "Perdiste";
        puntosPC = puntosPC + 1;
      }
    }

    if (eleccionUsuario == "tijera") {
      if (eleccionPC == "papel") {
        mensaje = "Ganaste";
        puntosUsuario = puntosUsuario + 1;
      } else {
        mensaje = "Perdiste";
        puntosPC = puntosPC + 1;
      }
    }
  }

  // mostrar resultados
  document.getElementById("eleccion-usuario").innerHTML = "Tu elección: " + eleccionUsuario;
  document.getElementById("eleccion-pc").innerHTML = "PC eligió: " + eleccionPC;
  document.getElementById("mensaje").innerHTML = "Resultado: " + mensaje;
  document.getElementById("puntos-usuario").innerHTML = puntosUsuario;
  document.getElementById("puntos-pc").innerHTML = puntosPC;
}