let lista = []; // creamos un arreglo vacio donde guardaremos los 3 numeros
for (let i = 0; i < 3; i++) { // Repite 3 veces para pedir 3 numeros

    let num = parseFloat(prompt("Ingrese numero")); 
    // Muestra ventana emergente, pide número y lo convierte a decimal

    lista.push(num); 
    // Agrega el número ingresado al arreglo lista
}

let n; // Variable para controlar si hubo cambios al ordenar

do { // Ejecuta al menos una vez el bloque de ordenamiento
    n = 0; 
    // Reiniciamos cambios en 0 antes de comenzar cada pasada
    for (let i = 0; i < lista.length - 1; i++) { 
    // Recorremos posiciones del arreglo hasta la penultima
        if (lista[i] > lista[i + 1]) { 
        // Si número actual es mayor que el siguiente
            let aux = lista[i]; 
            // Guardamos temporalmente el valor actual
            lista[i] = lista[i + 1]; 
            // Movemos el menor hacia la izquierda
            lista[i + 1] = aux; 
            // Ponemos el valor guardado a la derecha
            n++; 
            // Sumamos 1 porque hubo intercambio
        }
    }

} while (n != 0); 
// Si hubo cambios, repite otra pasada hasta ordenar totalmente
let menor = lista[0]; 
// El primer elemento ya ordenado sera el menor
let mayor = lista[lista.length - 1]; 
// El ultimo elemento sera el mayor
if (menor == mayor) { 
// Si menor y mayor son iguales
    alert("Los tres números son iguales"); 
    // Significa que todos los numeros son iguales
} else {
    alert("Menor: " + menor + " Mayor: " + mayor); 
    // Muestra el numero menor y el mayor
}