// ==========================
// JUEGO DEL AHORCADO
// ==========================

// Arreglo de palabras
let palabras = ["gato", "perro", "fuego", "casa", "javascript"];

// Objeto del juego
let juego = {
    palabraSecreta: "",
    progreso: [],
    intentosRestantes: 6,
    letrasUsadas: [],
    juegoTerminado: false
};

// Elementos del HTML
let palabraOculta = document.getElementById("palabraOculta");
let intentos = document.getElementById("intentos");
let letrasUsadas = document.getElementById("letrasUsadas");
let mensaje = document.getElementById("mensaje");
let botonesLetras = document.getElementById("botonesLetras");

// ==========================
// FUNCIONES
// ==========================

// Elegir palabra al azar
function elegirPalabra() {
    let posicion = Math.floor(Math.random() * palabras.length);
    return palabras[posicion];
}

// Crear arreglo con guiones bajos
function crearProgreso(palabra) {
    let arreglo = [];
    let i = 0;

    while (i < palabra.length) {
        arreglo.push("_");
        i++;
    }

    return arreglo;
}

// Mostrar datos en pantalla
function actualizarPantalla() {
    palabraOculta.textContent = juego.progreso.join(" ");
    intentos.textContent = juego.intentosRestantes;

    if (juego.letrasUsadas.length > 0) {
        letrasUsadas.textContent = juego.letrasUsadas.join(", ");
    } else {
        letrasUsadas.textContent = "Ninguna";
    }

    console.log("Palabra actual: " + juego.progreso.join(" "));
    console.log("Intentos restantes: " + juego.intentosRestantes);
    console.log("Letras usadas: " + juego.letrasUsadas.join(", "));
}

// Revisar si la letra ya fue usada
function letraYaUsada(letra) {
    for (let i = 0; i < juego.letrasUsadas.length; i++) {
        if (juego.letrasUsadas[i] === letra) {
            return true;
        }
    }
    return false;
}

// Procesar letra presionada
function probarLetra(letra) {
    if (juego.juegoTerminado === true) {
        return;
    }

    if (letraYaUsada(letra) === true) {
        mensaje.textContent = "Ya usaste la letra " + letra;
        console.log("La letra " + letra + " ya fue usada");
        return;
    }

    juego.letrasUsadas.push(letra);

    let encontrada = false;

    for (let i = 0; i < juego.palabraSecreta.length; i++) {
        if (juego.palabraSecreta[i] === letra) {
            juego.progreso[i] = letra;
            encontrada = true;
        }
    }

    if (encontrada === true) {
        mensaje.textContent = "Bien, la letra " + letra + " está en la palabra";
        console.log("Acierto con la letra: " + letra);
    } else {
        juego.intentosRestantes--;
        mensaje.textContent = "La letra " + letra + " no está en la palabra";
        console.log("Error con la letra: " + letra);
    }

    actualizarPantalla();
    revisarEstadoJuego();
}

// Revisar si ganó o perdió
function revisarEstadoJuego() {
    if (juego.progreso.join("") === juego.palabraSecreta) {
        juego.juegoTerminado = true;
        mensaje.textContent = "¡Ganaste! La palabra era " + juego.palabraSecreta;
        console.log("GANÓ EL JUGADOR");
        desactivarBotones();
        preguntarReinicio();
    } else if (juego.intentosRestantes <= 0) {
        juego.juegoTerminado = true;
        mensaje.textContent = "Perdiste. La palabra era " + juego.palabraSecreta;
        console.log("PERDIÓ EL JUGADOR");
        desactivarBotones();
        preguntarReinicio();
    }
}

// Crear botones del abecedario
function crearBotones() {
    botonesLetras.innerHTML = "";

    let abecedario = "abcdefghijklmnñopqrstuvwxyz";

    for (let i = 0; i < abecedario.length; i++) {
        let boton = document.createElement("button");
        boton.textContent = abecedario[i];
        boton.addEventListener("click", function () {
            probarLetra(abecedario[i]);
            boton.disabled = true;
        });

        botonesLetras.appendChild(boton);
    }
}

// Desactivar botones al terminar
function desactivarBotones() {
    let listaBotones = botonesLetras.getElementsByTagName("button");

    for (let i = 0; i < listaBotones.length; i++) {
        listaBotones[i].disabled = true;
    }
}

// Reiniciar juego
function reiniciarJuego() {
    juego.palabraSecreta = elegirPalabra();
    juego.progreso = crearProgreso(juego.palabraSecreta);
    juego.intentosRestantes = 6;
    juego.letrasUsadas = [];
    juego.juegoTerminado = false;

    mensaje.textContent = "Juego reiniciado. Sigue intentando";
    crearBotones();
    actualizarPantalla();

    console.log("Nueva palabra secreta: " + juego.palabraSecreta);
}

// Preguntar si quiere reiniciar
function preguntarReinicio() {
    let respuesta = prompt("¿Quieres jugar nuevamente? Escribe SI o NO");

    if (respuesta !== null) {
        respuesta = respuesta.toLowerCase();
    }

    if (respuesta === "si") {
        reiniciarJuego();
    } else {
        console.log("El jugador decidió terminar el juego");
        mensaje.textContent = mensaje.textContent + " | Juego finalizado";
    }
}

// Iniciar juego
function iniciarJuego() {
    alert("Bienvenido al juego del ahorcado");

    juego.palabraSecreta = elegirPalabra();
    juego.progreso = crearProgreso(juego.palabraSecreta);
    juego.intentosRestantes = 6;
    juego.letrasUsadas = [];
    juego.juegoTerminado = false;

    crearBotones();
    actualizarPantalla();

    console.log("Palabra secreta elegida: " + juego.palabraSecreta);
}

// ==========================
// INICIO
// ==========================
iniciarJuego();