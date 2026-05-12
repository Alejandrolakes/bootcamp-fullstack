const express = require('express')
const app = express()
const enviarCorreo = require('./mailer')

const PORT = 3000

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/enviar', (req, res) => {
    const { para, asunto, contenido } = req.query

    if (para && asunto && contenido) {
        enviarCorreo(para, asunto, contenido)
            .then(() => {
                res.send('Correo enviado exitosamente, revisa tu bandeja de entrada.')
            })
            .catch((error) => {
                console.error(error)
                res.status(500).send('Ocurrió un error al enviar el correo.')
            })
    } else {
        res.status(400).send('Faltan datos para enviar el correo, llena todos los campos del formulario.')
    }
})

app.listen(PORT, () => {
    console.log(`Servidor inicializado en http://localhost:${PORT}`)
})