const Categoria = require('../models/Categoria')

async function listarCategorias() {
    try {
        const categorias = await Categoria.findAll()
        console.log('Categorias: ', categorias.map(p => p.toJSON()))
    } catch (error) {
        console.error('Error al listar los categorias', error)
    }
}

async function crearCategoria(nombre, precio, stock) {
    try {
        const categoria = await Categoria.create({ nombre,})
        console.log('Categoria creado: ', categoria.toJSON())
    } catch (error) {
        console.error('Error al crear el categoria', error)
    }
}

async function actualizarCategoria(id, datosNuevos) {
    try {
        await Categoria.update(datosNuevos, { where: { id } })
        console.log('Categoria actualizado')
    } catch (error) {
        console.error('Error al actualizar el categoria', error)
    }
}

async function eliminarCategoria(id) {
    try {
        await Producto.destroy({ where: { id } })
        console.log('Categoria eliminado')
    } catch (error) {
        console.error('Error al eliminar la categoria', error)
    }
}

module.exports = {
    listarProductos,
    crearProducto,
    actualizarProducto,
    eliminarProducto
}