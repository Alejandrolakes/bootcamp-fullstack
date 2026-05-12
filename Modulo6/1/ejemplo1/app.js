// // console.log(process.argv)
// console.log(process.argv[2])
// console.log(process.argv[3])


// const nombre = process.argv[2]
// const apellido = process.argv[3]

// console.log(num1 + num2)

// const opcion = process.argv[2]

// if (opcion === 'saludar') {
//     console.log("Hola a todos")
// } else if (opcion === 'despedir') {
//     console.log("chao, nos vemos pronto")
// } else {
//     console.log('opcion no valida')
// }

// const operacion = process.argv[2]
// const num1 = Number(process.argv[3])
// const num2 = Number(process.argv[4])

// if (operacion === 'sumar') {
//     console.log(num1+num2)
// } else if (operacion === 'restar') {
//     console.log(num1-num2)
// } else if (operacion === 'multiplicar') {
//     console.log(num1*num2)
// } else if (operacion === 'dividir') {
//     console.log(num1/num2)
// } else {
//     console.log('opcion no valida')
// }

// // arriba opcion mia, abajo opcion profe.

// const operacion = process.argv[2]
// const num1 = Number(process.argv[3])
// const num2 = Number(process.argv[4])

// switch(operacion) {
//     case 'sumar': 
//         console.log(num1+num2)
//         break
//     case 'restar':
//         console.log(num1-num2)
//         break
//     case 'multiplicar':
//         console.log(num1*num2)
//         break
//     case 'dividor':
//         console.log(num1/num2)
//         break
//     default:
//         console.log('operacion no valida')
// }

require('dotenv').config()

console.log(process.env.EMAIL_USER)
console.log(process.env.EMAIL_PASSWORD)
process.exit()
console.log(process.cwd())