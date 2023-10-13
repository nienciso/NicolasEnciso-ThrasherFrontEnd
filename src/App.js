
import React, { useState, useEffect } from 'react';
import { getAllProductos, getDetallesProducto } from './api';


function App() {
  const [productos, setProductos] = useState([]);
  const [detalles, setDetalles] = useState(null);
  useEffect(() => {
    // Cargamos los productos cuando el componente se monta
    getAllProductos()
      .then((data) => {
        setProductos(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //detalles

  const handleVerDetalles = async (productoId) => {
    try {
      const detalles = await getDetallesProducto(productoId);
      setDetalles(detalles);
    } catch (error) {
      console.error(error);
      // Manejar errores, como producto no encontrado, aquí si es necesario
    }
  };

//eliminar Producto

const handleEliminarProducto = (productoId) => {
  const eliminarProductoUrl = `http://localhost:3000/api/productos/eliminar-producto/${productoId}`;

  fetch(eliminarProductoUrl, {
    method: 'DELETE',
  })
    .then((response) => {
      if (response.ok) {
        console.log(`Producto eliminado con éxito: ${productoId}`);
        // Actualiza tu lista de productos o realiza cualquier otra acción necesaria
      } else {
        console.error('Error al eliminar el producto');
      }
    })
    .catch((error) => {
      console.error('Error al realizar la solicitud:', error);
    });
};

  return (
    <div className="App">
      <h1>Productos</h1>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
             <img src={producto.imagen} alt="Descripción de la imagen" />
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <p>Precio: ${producto.precio}</p>
            <button onClick={() => handleAddToCart(producto.id)}>Agregar al carrito</button>
            <button onClick={() => handleVerDetalles(producto.id)}>Ver detalles</button>
          </li>
        ))}
      </ul>
      {detalles && (
        <div>
          <h2>Detalles del Producto</h2>
          <p>Nombre: {detalles.nombre}</p>
          <p>Descripción: {detalles.descripcion}</p>
          <p>Precio: ${detalles.precio}</p>
          {/* Mostrar otros detalles aquí */}
        </div>
      )}
    </div>
  );
}


export default App;
