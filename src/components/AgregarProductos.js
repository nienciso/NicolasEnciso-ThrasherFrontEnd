import React, { useState } from 'react';
import axios from 'axios';

function AgregarProducto() {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [categoria, setCategoria] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/productos/detalles/agregar-producto', {
        nombre,
        descripcion,
        precio,
        categoria
      });

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Agregar producto</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(event) => setNombre(event.target.value)} />
        </label>
        <br />
        <label>
          Descripción:
          <input type="text" value={descripcion} onChange={(event) => setDescripcion(event.target.value)} />
        </label>
        <br />
        <label>
          Precio:
          <input type="text" value={precio} onChange={(event) => setPrecio(event.target.value)} />
        </label>
        <br />
        <label>
          Categoria:
          <input type="text" value={categoria} onChange={(event) => setCategoria(event.target.value)} />
        </label>
        <br />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
}

export default AgregarProducto;