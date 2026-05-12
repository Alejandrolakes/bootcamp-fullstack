const yargs =require('yargs')
const {hideBin} = require('yargs/helpers')
const argv = yargs(hideBin(process.argv))

.command(
    'saludo',
    'Comando para saludar',

    {
        nombre: {
            describe: "Argumento para definir tu nombre",
            demannd: true,
            alias: 'n'
        }
    },

    (args) => {
        console.log(`Saludos ${args.nombre}, espero que el codigo funcione bien.`)
    }
)
.help().argv