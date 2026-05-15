const express = require ('express')
const router = express.Router()
const bicicletasController = require('../controllers/bicicletasController')

// aqui van las rutas. 
// lista de todas las bicicletas
router.get('/', bicicletasController.index)
//formulario crear bicicleta
router.get('/new', bicicletasController.new)
// muestra una bicicleta en base en base a su id
router.get('/:id', bicicletasController.show)


module.exports = router