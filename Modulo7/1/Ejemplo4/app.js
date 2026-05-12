const pool = require('./db/db')


async function conection() {
    try {
        const result = await pool.query('SELECT * FROM productos')
        console.log("Productos encontrados", result.rows)    
    } catch (error) {
        console.error("Error al conectarse a la base de datos", error)
        
    }finally {
        await pool.end()
        console.log('Conexión terminada y proceso cerrado.');
        process.exit(0)
    }
}

conection()  