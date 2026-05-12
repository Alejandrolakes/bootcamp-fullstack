const { text } = require('node:stream/consumers')
const nodemailer = require('nodemailer')

// funcion de enviar correos. de tipo asincrona

async function enviarCorreo() {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'alejandro.lagosjara@gmail.com',
            pass: 'dadq jymo nabf ubjt'
        }
    })

    let mailOptions = {
        from: 'alejandro.lagosjara@gmail.com',
        to: 'alejandro.lagosjara@gmail.com',
        subject: 'Testeando Nodemailer',
        text: 'Hola estamos probrando enviar correos con nodemailer 😄'
    }

    try {
        let info = await transporter.sendMail(mailOptions)
        console.log('Correo enviado: %s', info.messageId)
    } catch (error) {
        console.error('Error al enviar el correo.', error)
    }

}

enviarCorreo()