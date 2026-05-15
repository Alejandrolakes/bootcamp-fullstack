const Bicicleta = require('../models/Bicicleta')


exports.index = async (req, res, next) => {
    try {
        const bicicletas = await Bicicleta.findAll()
        res.render('bicicletas/index', {bicicletas}) 
    } catch (error) {
        next(error)
    }
}

exports.show = async (req, res, next) => {
    try {
        const { id } = req.params
        const bicicleta = await Bicicleta.findById(id)
        if (!bicicleta) return res.status(404).send(`Bicicleta con el id: ${id} no encontrada`)
        res.render('bicicletas/show')
    } catch (error){

    }
}

exports.new = async (req, res, next) => {
    try {
        res.render('bicicletas/new')
    } catch (error) {
        next(error)
    }
}