// para el desarrollo de tablas
const {DataTypes} = require('sequelize')
const sequelize = require ('../config/db')

const Categoria = sequelize.define('categoria',{
    nombre: DataTypes.STRING
})


module.exports = Categoria 