import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetallesProducto } from '../api'; 

function ProductDetail() {
  const { id } = useParams(); 
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    
    getDetallesProducto(id)
      .then((data) => {
        setProducto(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!producto) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Detalles del Producto</h1>
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <p>Precio: ${producto.precio}</p>
      {}
    </div>
  );
}

export default ProductDetail;