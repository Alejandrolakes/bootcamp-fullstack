const express =require('express')
const axios = require('axios')
const fs = require('fs') // para leer y escribir archivos.
const app = express()
const PORT = 3000
const archivo = 'usuarios.json'

app.get('/random', async (req, res) => {
    try {
        const respuesta = await axios.get('https://randomuser.me/api')
        const datosUsuario = respuesta.data.results[0]

        const nuevoUsuario = {
            nombre: datosUsuario.name.first,
            apellido: datosUsuario.name.last,
            email: datosUsuario.email,
            edad: datosUsuario.registered.age,
            telefono: datosUsuario.phone,
            direccion: `${datosUsuario.location.name} ${datosUsuario.location.street}`
            
        }

        if (!fs.existsSync(archivo)) {
            fs.writeFileSync(archivo, JSON.stringify({usuarios:[]}, null, 2))
        }

        const dataOriginal = fs.readFileSync(archivo, 'utf-8')
        const contenidoJSON = JSON.parse(dataOriginal)

        contenidoJSON.usuarios.push(nuevoUsuario)

        fs.writeFileSync(archivo, JSON.stringify(contenidoJSON, null,2 ))

        res.send('Usuario guardado exitosamente')

    } catch (error) {
        console.log('Hubo un error', error.message)
        res.status(500).send('Error al procesar la solicitud')
    }
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})