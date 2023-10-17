import React from 'react';
import {  Link } from 'react-router-dom';

function ProductList({ productos }) {
  return (
    <div>
      <h1 id="productos">Productos</h1>
      <div className="row">
        {productos.map((producto) => (
          <div key={producto.id} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">{producto.nombre}</h2>
                <p className="card-text">{producto.descripcion}</p>
                <p className="card-text">Precio: ${producto.precio}</p>
                <Link className="btn btn-primary" to={`/productos/${producto.id}`}>
                  Ver detalles
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;