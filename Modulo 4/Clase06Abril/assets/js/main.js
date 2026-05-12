const palabras = ["javascript","programacion","bootstrap","html","css","framwork"]

// sacar una al azar
let indice = Math.floor(Math.random()*palabras.length)

let palabraSecreta = palabras[indice]

let palabraOculta = [] /* aqui se toma la palabra y se hace un arreglo de guiones bajos*/

let intentos = 5


for (let i = 0; i < palabraSecreta.length; i++){
    palabraOculta.push('_')
}

function resultadoParcial(){
    alert (`
        La palabra secreta es: ${palabraOculta.join(" ")}
        Intentos restantes: ${intentos}
        `)
}

function verificarLetra(letra) {
    let encontrada = false

    for (let i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta[i] === letra) {
            palabraOculta[i] = letra
            encontrada = true
        }
    }

    if (!encontrada) {
        intentos--
    }
}

while (intentos > 0 && palabraOculta.includes("_")) {
    resultadoParcial()

    let letraJugador = prompt("Ingresa una letra").toLowerCase()

    if (letraJugador === null || letraJugador === "") {
        alert("Debes ingresar una letra!")
        continue
    }

    verificarLetra(letraJugador)
}

if (!palabraOculta.includes("_")) {
    alert(`¡Felicidades!!! Has ganado!!! La palabra secreta era: "${palabraSecreta}"`)
} else {
    alert(`Wuajajajajaja perdiste!!! La palabra secreta era: "${palabraSecreta}"`)
}