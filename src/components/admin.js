import React from 'react';

import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

const eliminarProducto = async (productId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/productos/eliminar-productos/${productId}`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

function Admin({ productos }) { 
  return (
    <div>
      <h1>Panel de administración</h1>
      <p>Aquí puedes administrar todo en tu sitio web.</p>

      {/* mostrando todos los productos en una lista */}
      {productos.map((producto) => (
        <div key={producto.id}>
          <h2>{producto.nombre}</h2>
          <p>{producto.descripcion}</p>
          <p>{producto.precio}</p>
          <button onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}

export default Admin;