const Bicicleta =require('../models/Bicicleta')


exports.index = async (req, res, next) => {
    try {
        const bicicletas = await Bicicleta.findAll()
        res.render('bicicletas/index', { bicicletas })
    } catch (error) {
        next(error)
    }
}

exports.show = async (req, res, next) => {
    try {
        const { id } = req.params
        const bicicleta = await Bicicleta.findById(id)
        if (!bicicleta) return res.status(404).send(`Bicicleta con el id: ${id} no encontrada`)
        res.render('bicicletas/show', { bicicleta })
    } catch (error) {
        next(error)
    }
}

exports.new = async (req, res, next) => {
    try {
        res.render('bicicletas/new')
    } catch (error) {
        next(error)
    }
}

exports.create = async (req, res, next) => {
    try {
        const { marca, modelo, tipo, precio, disponible, year } = req.body
        
        if (!marca || !modelo || !tipo || !precio || !year) {
            res.status(400).send('Todos los datos son obligatorios!')
        }

        const nuevaBici = await Bicicleta.create({
            marca, modelo, tipo, precio: parseFloat(precio), disponible, year: parseInt(year)
        })

        console.log('Se ha creado una nueva bicicleta: ', nuevaBici)

        res.redirect('/bicicletas')
    } catch (error) {
        next(error)
    }
}