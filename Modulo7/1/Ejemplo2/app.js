const client = require('./db/client')

async function conection() {
    try {
        await client.connect()
        console.log('Conexión exitosa a PostgreSQL')

        const result = await client.query('SELECT * FROM viajeros')
        console.log("Usuarios encontrados", result.rows)    
    } catch (error) {
        console.error("Error al conectarse a la base de datos", error)
        
    }finally {
        await client.end()
        console.log('Conexion terminada.')
    }
}

conection() 