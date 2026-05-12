require('dotenv').config()
const nodemailer = require('nodemailer')

const enviarCorreo = async (para, asunto, contenido) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS
        }
    })

    const mailOptions = {
        from: process.env.GMAIL_USER,
        to: para,
        subject: asunto,
        text: contenido
    }

    try {
        let info = await transporter.sendMail(mailOptions)
        console.log('Correo Enviado: %s', info.messageId)
    } catch (error) {
        console.error('Error al enviar el correo', error)
    }
}

module.exports = enviarCorreo;