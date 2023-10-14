import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetallesProducto } from '../api'; // Importa tu función para obtener los detalles del producto

function ProductDetail() {
  const { id } = useParams(); // Obtén el ID del producto de la URL
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    // Cargar los detalles del producto basados en el ID
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
      {/* Puedes mostrar otros detalles del producto aquí */}
    </div>
  );
}

export default ProductDetail;