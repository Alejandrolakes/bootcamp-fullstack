// // las variables pueden almacenar datos, de varios tipos, 
// // ejemplo= var name = "Pedro" // string
// // var nombre = "Alejandro" // el signo igual = es el operador de asignacion. // var esta desaconsejado para declarar variables
// let nombre = "Alejandro" // let son variables.
// let edad = 35 // solo vamos a utilizar el let
// const correo = "alejandro.lagosjara@gmail.com" // este es una constante
// let medida = 60
// const unidad = "cm"
// let curso = 'Javascript'
// let detalleCompra = "2 Poleras XL"
// const PI = 3.14156

// nombre = "Luis" // aca hay una reasignacion, cambiamos el dato de nombre
// // correo = "alejandro@gmail.com"  esto es un error porque ya declaramos la constante
// // String, datos numericos, boolenados, null -- datos 
// let booleanos = false // o true 
// let indefinidos = undefined
// let nulo = null 

// let palabra;
// let otraPalabra = null

// // A continuacion los datos compuestos

// let arreglo = [1, "hola", true,5.7 ,undefined, null]

// let objeto = {
//     nombre: "Coni", // LLave: valor,
//     edad: 32,
//     programadora: false,
//     hobbies: ["nadar","cocinar","bicicleta"]

// }

// // VER arreglos de objetos 
// let numeroCalle
// console.log("Hola mundo ")
// console.log(nombre)
// // console.log 

// console.log(edad)
// console.log(correo)
// console.log(palabra)
// console.log(otraPalabra)
// console.log(arreglo)
// console.log(objeto)
// console.log(typeof curso)
// console.log(typeof medida)
// console.log(typeof arreglo) // el typeof nos muestra que tipo de dato tiene la variable. 
// Tipos de anotaciones.... Ver
// kebab-case 
// camelCase
// PascalCase
// snake_case

// javascript es un lenguaje dinamicamente tipado

// a continuacion. Primeras operaciones
// operadores aritmeticos

// let num1 = 6
// let num2 = 2
// let num3 =  '2'

// let suma = num1 + num2
// console.log(suma)

// let resta = num1 - num2
// console.log(resta)

// let multiplicacion = num1 * num2
// console.log(multiplicacion)

// let division = num1 / num2
// console.log(division)

// let potencia = num1 ** num2
// console.log(potencia)

// let modulo = num1 % num2
// console.log(modulo)

// let sumaNueva = num1 + Number(num3)  // Concatenar, cuando se le pone el Number es como obligar a que el num3 lo transforme en numero
// console.log(sumaNueva)

// let num1Incrementado = ++num1 // ++ suma uno. es lo mismo que num1Incrementado = num1 + 1 
// console.log(num1Incrementado)

// let num1Decrementado = --num1
// console.log(num1Decrementado)

// Ahora veremos los operadores de comparacion


let num1 = 6
let num2 = 2

let igualdad = num1 == num2
console.log(igualdad)

let mayorQue = num1 > num2
console.log(mayorQue)

let menorQue = num1 < num2
console.log(menorQue)

let mayorOIgualQue = num1 >= num2
console.log(mayorOIgualQue)

let menorOIgualQue = num1 <= num2
console.log(menorOIgualQue)

let identidad = num1 === num2
console.log(identidad)