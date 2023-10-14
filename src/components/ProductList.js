import React from 'react';
import { Link } from 'react-router-dom';


function ProductList({ productos }) {
  return (
    <div>
      <h1>Productos</h1>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <p>Precio: ${producto.precio}</p>
            <Link to={`/productos/${producto.id}`}>Ver detalles</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;