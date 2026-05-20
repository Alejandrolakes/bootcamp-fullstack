const { Producto, Categoria } = require ('../models')

async function obtenerProductosCategorias () {
    try {
        const productos = await Productos.findAll ({
            include: {
                model: Categoria,
                as: 'categoria',
                attributes: ['id','name']
            }
        })

        console.log('Productos con categorias: ', productos.map(p => p.toJSON()))
    } catch (error) {
        
    }
}