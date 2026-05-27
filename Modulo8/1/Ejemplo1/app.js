const express = require('express')
const fs = require('fs')
const app = express()
const PORT = 3000

app.use(express.json())

const leerPeliculas = () => {
    const data = fs.readFileSync('peliculas.json','utf8')
    return JSON.parse(data)
}

const guardarPelicula = (pelicula) => {
    fs.writeFileSync('peliculas.json', JSON.stringify(pelicula, null, 4))
}

app.get('/api/v1/peliculas', (req, res) => {
    const peliculas = leerPeliculas()
    res.json(peliculas)
})

app.get('/api/v1/peliculas/:id', (req, res) => {
    const peliculas = leerPeliculas()
    const pelicula = peliculas.find(p => p.id === parseInt(req.params.id))
    if(!pelicula) return res.status(404).json({error: "Pelicula no encontrada"})

    res.json(pelicula)
})

app.post('/api/v1/peliculas', (req,res) => {
    const peliculas = leerPeliculas()
    const { titulo, direccion, protagonista, genero, estreno } = req.body
    if (!titulo || !direccion || !protagonista || !genero || !estreno) return res.status(400).json({error: "Todos los datos son obligatorios"})
    
    const nuevaPelicula = {
        id: peliculas.length ? peliculas[peliculas.length -1 ].id + 1 : 1,
        titulo,
        direccion, 
        protagonista,
        genero, 
        estreno
    }

    peliculas.push(nuevaPelicula)
    guardarPelicula(peliculas)

    res.status(201).json({mensaje: "Pelicula Creada", pelicula:nuevaPelicula})
})

app.put('/api/v1/peliculas/:id', (req,res) => {
    const peliculas = leerPeliculas()
    const peliculaIndex = peliculas.findIndex(p => p.id === parseInt(req.params.id))

    if(peliculaIndex === -1) return res.status(404).json({error: 'Pelicula no encontrada'})

    peliculas[peliculaIndex] = { ...peliculas[peliculaIndex], ...req.body}

    guardarPelicula(peliculas)

    res.status(200).json({mensaje: 'Pelicula actualizada', pelicula: peliculas[peliculaIndex]})
})

app.delete('/api/v1/peliculas/:id', (req,res) => {
    const peliculas = leerPeliculas()
    const peliculaIndex = peliculas.findIndex(p => p.id === parseInt(req.params.id))

    if(peliculaIndex === -1) return res.status(404).json({error: 'Pelicula no encontrada'})

    const peliculaEliminada = peliculas.splice(peliculaIndex, 1)[0]

    guardarPelicula(peliculas)

    res.status(200).json({mensaje: 'Pelicula Eliminada', pelicula: peliculaEliminada})
})

app.listen(PORT, () => {
    console.log(`Servidor inicializado en http://localhost:${PORT}`)
})