    // Funcion  para contar vocales en una palabra
const contarVocales = function(palabra) {
  const vocales = ["a", "e", "i", "o", "u"];
  let contador = 0;

  for (let i = 0; i < palabra.length; i++) {
    let caracter = palabra[i].toLowerCase();
    if (vocales.includes(caracter)) {
      contador++;
    }
  }

  return contador;
};

// Pedir al usuario cuantas palabras ingresara
let cantidad = parseInt(prompt("¿Cuantas palabras deseas ingresar?"));

// Almacenar las palabras en un array
let palabras = [];

for (let i = 0; i < cantidad; i++) {
  let palabra = prompt(`Ingresa la palabra ${i + 1}:`);
  palabras.push(palabra);
}

// Unir todas las palabras en una sola cadena
let cadenaCompleta = palabras.join("");

// Contar las vocales en la cadena completa
let totalVocales = contarVocales(cadenaCompleta);

// Mostrar resultados
console.log(`Palabras ingresadas: ${palabras.join(", ")}`); 
console.log(`Total de vocales: ${totalVocales}`);

window.alert(`Total de vocales en las palabras ingresadas: ${totalVocales}`);

document.getElementById("resultado").innerHTML =
  `Las palabras ingresadas fueron: <strong>${palabras.join(", ")}</strong><br>
   Total de vocales encontradas: <strong>${totalVocales}</strong>`;