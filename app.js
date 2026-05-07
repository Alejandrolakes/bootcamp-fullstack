const yargs =require('yargs')
const {hideBin} = require('yargs/helpers')
const chalk =require('chalk')

const argv = yargs(hideBin(process.argv))
    .option('nombre', {
        alias: 'n',
        describe: 'Nombre del usuario',
        demandOption: true,
        type: 'string'
    })
    .option('edad', {
        alias: 'e',
        describe: 'Edad del usuario',
        demandOption: true,
        type: 'number'
    })
    .option('tipo',{
        alias: 't',
        describe: 'Tipo de saludo: formal, informal, divertido',
        choices: ['formal','informal','divertido'],
        default: 'informal'
    })
    .fail((msg, err, yargs) => {
        if (err) throw err
        console.log(chalk.red("Erro"),chalk.red(msg))
        console.log('\nAqui tienes la ayuda: \n')
        console.log(yargs.help())

        process.exit(1)
    })
    .help().argv

    function generarSaludo({nombre,edad,tipo}) {
        let mensaje;

        if (tipo === 'formal') {
            mensaje = `Buenos dias ${nombre}`
        } else if (tipo === 'informal') {
            mensaje = `Hola ${nombre}. como estas?`
        } else {
            mensaje = `Wena compa ${nombre}, como va?`
        }

        if (edad < 18){
            mensaje += 'Eres menor de edad'
        } else if (edad < 50){
            mensaje += 'Estas en la mejor etapa de tu vida'
        } else {
            mensaje += 'Eres una persona con experiencia y sabiduria'
        }

        switch (tipo) {
            case 'formal':
                console.log(chalk.blue(mensaje))
                break
            case 'informal':
                console.log(chalk.green(mensaje))
                break
            case 'divertido':
                console.log(chalk.magenta(mensaje))
                break
        }
    }

    try {
        generarSaludo(argv)
    } catch (error) {
        console.error(chalk.red('Error al generar el saludo: '), error.message)
        process.exit(1)
    }
    