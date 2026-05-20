const { DataTypes } = require('sequelize')
const sequelize = require('../config/db');
const Categoria = require('./Categoria');

const Producto = sequelize.define("producto", {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
})

Producto.hasOne(Categoria, { as: 'CategoriaDestacada'})

module.exports = Producto;