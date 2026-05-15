const pool = require('../config/db')

const findAll = async () => {
    const res = await pool.query('select * from bicicletas order by id')
    return res.rows
}

const findById = async (id) => {
    const res = await pool.query('select * from bicicletas where id = $1', [id])
    return res.rows[0]
}

const create = async ({ marca, modelo, tipo, precio, disponible, year }) => {
    const res = await pool.query('insert into bicicletas (marca, modelo, tipo, precio, disponible, year) values ($1, $2, $3, $4, $5, $6) returning *', 
        [marca, modelo, tipo, precio, disponible, year]
    )

    return res.rows[0]
}


module.exports = { findAll, findById, create }