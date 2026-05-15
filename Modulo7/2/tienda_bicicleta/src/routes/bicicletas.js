const express = require('express')
const router = express.Router()
const bicicletasController = require('../controllers/bicicletasController')

//aqui iran las rutas 
//lista de todas las bicicletas
router.get('/', bicicletasController.index)
//Formulario crear bicicleta
router.get('/new', bicicletasController.new)
//ruta post para crear bicicletas
router.post('/', bicicletasController.create)
//muestra 1 bicicleta en base a su id
router.get('/:id', bicicletasController.show)



module.exports = router