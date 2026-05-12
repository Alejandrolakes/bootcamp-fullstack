const secreto = Math.floor(Math.random() * 10) + 1;

let usados = [];
let intentos = 3;

// Función para detectar repetidos
function yaUsado(numero, lista) {
  return lista.includes(numero);
}

alert("Bienvenido. Debes adivinar un numero del 1 al 10. Tienes 3 intentos.");

while (intentos > 0) {

  let entrada = prompt("Ingresa un numero del 1 al 10:");

  let numero = parseInt(entrada);

  if (isNaN(numero) || numero < 1 || numero > 10) {
    alert("Numero inválido. Debes ingresar un número entre 1 y 10.");

  }

  if (yaUsado(numero, usados)) {
    alert("Ya usaste ese numero. Prueba con otro.");
    continue; 
  }

  usados.push(numero);

  document.getElementById("historial").innerHTML = `Intentos: ${usados.join(", ")}`;


  if (numero === secreto) {
    alert("¡Adivinaste! Ganaste el juego.");
    break;
  } else {
    intentos--;

    if (intentos > 0) {
      alert(` No es el numero. Te quedan ${intentos} intento(s).`);
    } else {
      alert(`Sin aciertos. El numero era: ${secreto}`);
    }
  }
}

console.log("Numero secreto:", secreto);
console.log("Intentos usados:", usados);