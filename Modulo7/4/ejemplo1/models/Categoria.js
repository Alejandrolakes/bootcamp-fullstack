// para el desarrollo de tablas
const {DataTypes} = require('sequelize')
const sequelize = require ('../config/db')
const Producto = require('./Producto')

const Categoria = sequelize.define('categoria',{
    nombre: DataTypes.STRING
})

Categoria.belongsTo(Producto, { as: 'ProductoDestacado'}) // la relacion esta entre categoria y productos

module.exports = Categoria //debe existir relacion entre producto y categoria

