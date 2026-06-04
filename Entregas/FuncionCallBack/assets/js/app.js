// Funcion Callback
const validarNumero = function(callback) {
    let dato = prompt("Ingrese un número:");

    if (!isNaN(dato) && dato.trim() !== "") {
        callback(true, "Correcto: ingresó el número " + dato);
    } else {
        callback(false, "Error: usted ingresó caracteres incorrectos.");
    }
};


const calcular1 = function(numero, callback) {
    let sumatoria = 0;

    for (let i = 1; i <= numero; i++) {
        if (i % 2 !== 0) {   // solo impares
        sumatoria += i;
        }
    }

    setTimeout(function() {
        callback(sumatoria);
    }, 5000);
};

const calcular2= function(numero, callback, callback_error) {
    let total = 0;

    for (let i = 1; i <= numero; i++) {
        let sumaParcial = 0;
        for (let j = 1; j <= i; j++) {
        sumaParcial += j;
        }
        total += sumaParcial;
    }

    if (total < 1000) {
        callback(numero, total);
    } else {
        callback_error(numero, total);
    }
};


validarNumero(function(esValido, mensaje) {
    console.log(mensaje);
    alert(mensaje);
    document.getElementById("resultado1").innerHTML = mensaje;
});

let num2 = parseInt(prompt("Ingrese un número para la sumatoria de impares:"));
calcular1(num2, function(resultado) {
    let mensaje= "El valor de la sumatoria es " + resultado +
                ". Este resultado se obtuvo hace 5 segundos.";
    console.log(mensaje);
    alert(mensaje);
    document.getElementById("resultado2").innerHTML = mensaje;
});


let num3 = parseInt(prompt("Ingrese un numero para las sumatorias sucesivas:"));
calcular2(
    num3,
    function(numero, resultado) {
        let mensaje = "Las sumatorias sucesivas de " + numero + " es " + resultado;
        console.log(mensaje);
        alert(mensaje);
        document.getElementById("resultado3").innerHTML = mensaje;
    },
    function(numero, resultado) {
        let mensaje = "Error: el numero " + numero + " sobrepasa el objetivo. " +
                "Resultado obtenido: " + resultado;
        console.log(mensaje);
        alert(mensaje);
        document.getElementById("resultado3").innerHTML = mensaje;
    }
);