export const mostrarproductos = (productos) => {
  productos.forEach(({ descripcion, precio }) => {
    console.log(`Nombre: ${descripcion} 
                     Precio: $${precio}`);
  });
};

export const filtrarproductos = (productos) => {
  const productosFiltrados = productos.filter(
    (producto) => producto.precio > 20
  );
  console.log(productosFiltrados);
};

export const preciosconiva = (productos) => {
  const productosConIva = productos.map((producto) => ({
    descripcion: producto.descripcion,
    precio: producto.precio * 1.21,
  }));
  console.log(productosConIva);
};

export const ordenarMenorMayor = (productos) => {
  productos.sort((a, b) => b.precio - a.precio);
  console.log(productos);
};

export const agregarNuevoProducto = (productos) => {
  const nuevoProducto = { descripcion: "Parlante Bluetooth", precio: 59000.9 };
  productos.push(nuevoProducto);
  console.log(productos);
};
//Se utiliza metodo shift ya que previamente el array esta ordenado de menor a mayor
//Metodo shift elimina siempre el primer elemento del array
export const eliminarMenorPrecio = (productos) => {
  const elementoBorrado = productos.shift();
console.log ("Elemento eliminado:", elementoBorrado)
  console.log(productos);
};
