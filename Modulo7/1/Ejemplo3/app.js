const pool = require('./db/db')

const obtenerViajeros = async () => {
    try {
        const result = await pool.query('select * from viajeros')
        
        console.log("Usuarios encontrados", result.rows)

    } catch (error) {
        console.error("Error al conectarse a la base de datos", error)
    }finally {
        pool.end()
    }
}

obtenerViajeros()