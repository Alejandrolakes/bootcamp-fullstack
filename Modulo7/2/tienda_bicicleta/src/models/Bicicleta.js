const pool = require('../config/db')

const findAll = async() => {
    const res = await pool.query('select * from bicicletas order by id')
    return res.rows
}

const findById = async (id) => {
    const res = await pool.query('select * from bicicletas where id = $1',[id])
    return res.rows[0]
}

module.exports = { findAll, findById}