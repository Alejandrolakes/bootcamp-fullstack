const Producto = require('../models/Producto')
const PRODUCTO = require('../models/Producto')

async function listarProductos() {
    try {
        const productos = await Producto.findAll()
        console.log('Productos: ', productos.map(p => p.toJSON()))
    } catch (error) {
        console.error('Error al listar los productos', error)
    }
}

async function crearProducto(nombre, precio, stock) {
    try {
        const producto = await Producto.create({nombre, precio, stock})
        console.log('Producto creado: ', producto.toJSON())
    } catch (error) {
        console.error('Error al crear el producto', error)
    }
    
}

// línea 21-28 — actualizar
async function actualizarProducto(id, datosNuevos) {
    try {
        await Producto.update(datosNuevos, { where: { id } })
        console.log('Producto actualizado')
    } catch (error) {
        console.error('Error al actualizar el producto', error)
    }
}

// línea 30-37 — eliminar
async function eliminarProducto(id) {
    try {
        await Producto.destroy({ where: { id } })
        console.log('Producto eliminado')
    } catch (error) {
        console.error('Error al eliminar el producto', error)
    }
}

// línea 39-43 — exportar todo
module.exports = {
    listarProductos,
    crearProducto,
    actualizarProducto,
    eliminarProducto
}