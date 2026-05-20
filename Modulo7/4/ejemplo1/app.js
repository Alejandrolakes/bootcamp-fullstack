const sequelize = require('./config/db');

const { listarProductos, crearProducto, actualizarProducto, eliminarProducto } = require('./controllers/productosController')

async function iniciarServidor() {
    try {
        // Sincroniza los modelos con la base de datos
        await sequelize.sync({ force: true }); // alter solo hace modificaciones
        console.log("Base de datos sincronizada correctamente.");

        await crearProducto('Teclado mecanico', 49.00, 10)
        await crearProducto('Mouse Gamer', 79.00, 15)
        await crearProducto('Monitor', 150.00, 5)
        await listarProductos()
        await actualizarProducto(2, {precio: 59.99, stock: 20})
        await listarProductos()
        eliminarProducto(3)
        await listarProductos()
    } catch (error) {
        console.error("Error al sincronizar la base de datos:", error);
    }
}

iniciarServidor();
