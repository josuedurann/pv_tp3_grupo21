
export const mostrarproductos = (productos) => {
    productos.forEach(({descripcion,precio}) => {
        console.log(`Nombre: ${descripcion} 
                     Precio: $${precio}`);
    })
}

export const filtrarproductos = (productos) => {
    const productosFiltrados = productos.filter(producto => producto.precio > 20);
    console.log(productosFiltrados);
}

export const preciosconiva = (productos) => {
    const productosConIva = productos.map(producto => ({
        descripcion: producto.descripcion,
        precio: producto.precio * 1.21,
    }))
    console.log(productosConIva);
}