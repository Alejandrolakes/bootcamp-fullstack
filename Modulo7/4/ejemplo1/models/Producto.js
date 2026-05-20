const { DataTypes } = require('sequelize')
const sequelize = require('../config/db');


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

// Producto.hasOne(Categoria, { as: 'CategoriaDestacada'})  // Sirve para relacion 1 a 1 

module.exports = Producto;