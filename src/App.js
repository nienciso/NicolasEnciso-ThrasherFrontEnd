
import React, { useState, useEffect } from 'react';
import { getAllProductos } from './api';


function App() {
  const [productos, setProductos] = useState([]);

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
            <button onClick={() => handleEliminarProducto(producto.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
