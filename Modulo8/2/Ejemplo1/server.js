const express = require('express')
const fileUpload = require('express-fileupload')
const fs = require('fs')
const path = require('path')

const app = express()
const PORT = 3000

app.use(fileUpload())
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

const UPLOAD_DIR = path.join(__dirname, 'uploads')
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR)

const EXT_PERMITIDAS = ['.jpg', '.jpeg', '.png', '.gif']
const MAX_SIZE = 5 * 1024 * 1024

function generarHTMLImagenes() {
    const archivos = fs.readdirSync(UPLOAD_DIR)
    let html = ''
    archivos.forEach(nombre_img => {
        const stats = fs.statSync(path.join(UPLOAD_DIR, nombre_img))
        const sizeKB = (stats.size / 1024).toFixed(2)
        const mimeType = path.extname(nombre_img).toLowerCase().replace('.', '')
        html += `
            <div class="col-3 mb-4">
                <div class="card shadow-sm" style="border-radius: 12px; overflow: hidden;">
                    <img src="/uploads/${nombre_img}" alt="${nombre_img}" class="card-img-top" style="height: 200px; object-fit: cover;">
                    <div class="card-body text-center">
                        <p class="card-text text-muted small mb-1">${nombre_img}</p>
                        <p class="card-text text-muted small mb-3">${sizeKB} KB — ${mimeType}</p>
                        <form action="/delete/${nombre_img}" method="POST">
                            <button type="submit" class="btn btn-danger btn-sm w-100">Eliminar</button>
                        </form>
                    </div>
                </div>
            </div>
        `
    })
    return html
}

app.get('/', (req, res) => {
    const htmlBase = fs.readFileSync(path.join(__dirname, 'public', 'index.html'), 'utf8')
    const htmlFinal = htmlBase.replace('<!-- IMAGENES -->', generarHTMLImagenes())
    res.send(htmlFinal)
})

app.post('/upload', (req, res) => {
    if (!req.files || !req.files.archivo) {
        return res.status(400).send('<div>No se ha seleccionado ningún archivo. <a class="btn btn-dark" href="/">Volver</a></div>')
    }

    const archivos = Array.isArray(req.files.archivo) ? req.files.archivo : [req.files.archivo]

    for (let archivo of archivos) {
        const extArchivo = path.extname(archivo.name).toLowerCase()
        if (!EXT_PERMITIDAS.includes(extArchivo)) {
            return res.send(`<div>Extensión no permitida del archivo: ${archivo.name}. <a class="btn btn-dark" href="/">Volver</a></div>`)
        }
        if (archivo.size > MAX_SIZE) {
            return res.send(`<div>Archivo demasiado grande: ${archivo.name}, máximo 5MB. <a class="btn btn-dark" href="/">Volver</a></div>`)
        }

        const nombreArchivo = Date.now() + "_" + archivo.name
        archivo.mv(path.join(UPLOAD_DIR, nombreArchivo), err => {
            if (err) {
                return res.send(`<div>Error al subir el archivo: ${archivo.name}. <a class="btn btn-dark" href="/">Volver</a></div>`)
            }
        })
    }

    res.redirect('/')
})

app.post('/delete/:nombreArchivo', (req, res) => {
    const archivoPath = path.join(UPLOAD_DIR, req.params.nombreArchivo)
    fs.unlink(archivoPath, err => {
        if (err) {
            return res.status(500).send(`<div>No se pudo eliminar el archivo. <a class="btn btn-dark" href="/">Volver</a></div>`)
        }
        res.redirect('/')
    })
})

app.listen(PORT, () => {
    console.log(`Servidor inicializado en http://localhost:${PORT}`)
})