const { Client } = require('pg')

const conection = async () => {
    const client = new Client ({
        host: 'localhost', //127.0.0.1
        port: 5432,
        user: 'alejandrolagosj',
        password: '',
        database: 'agencia_viajes'
    })

    await client.connect()
    const result = await client.query('SELECT * FROM viajeros')
    console.log(result.rows)
    await client.end()
}

conection()