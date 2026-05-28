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
//hateoas --> Hypermedia as the engine of application state

app.get('/api/v2/peliculas', (req,res) => {
    const peliculas = leerPeliculas()

    const pelisHATEOAS = peliculas.map(p => ({
        titulo: p.titulo,
        estreno: p.estreno,
        link: [
            { rel: 'self', url: `/api/v2/peliculas/${p.id}` }
        ]
    }))
    
    res.json({ meta: { total: peliculas.length }, data: pelisHATEOAS })
    })
    
    app.get('/api/v2/peliculas/:id', (req, res) => {
        const peliculas = leerPeliculas()
        const pelicula = peliculas.find(p => p.id === parseInt(req.params.id))
        if (!pelicula) return res.status(404).json({ error: "Pelicula no encontrada" })
    
        res.json({
            data: pelicula,
            links: [
                { rel: 'all', url: `/api/v2/peliculas` },
                { rel: 'Filtro por protagonista', url: `/api/v2/peliculas/buscar?protagonista=${encodeURIComponent(pelicula.protagonista)}` }
            ]
        })
    })



app.listen(PORT, () => {
    console.log(`Servidor inicializado en http://localhost:${PORT}`)
})