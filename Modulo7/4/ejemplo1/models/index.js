const sequelize = require('../config/db')
const Categoria = require('./Categoria')
const Producto = require('./Producto')


Categoria.hasMany(Producto, {
    foreignKey: 'categoriaId',
    as: 'productos'
})
Producto.hasOne(Categoria, {
    foreignKey: 'categoriaId',
    as: 'categoria',
    onDelete: 'CASCADE' // elimina la categoria y todos los productos asociados
})

module.exports = {
    sequelize,
    Categoria,
    Producto
}