import { useState } from 'react';
import axios from 'axios';

const AgregarProducto = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState('');
  const [precio, setPrecio] = useState('');
  const [imagen, setImagen] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('descripcion', descripcion);
    formData.append('categoria', categoria);
    formData.append('precio', precio);
    formData.append('imagen', imagen);

    try {
      const response = await axios.post('/productos/agregar-productos', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="register">
      <div className="elemento1">
        <label htmlFor="imagen" className="formulario">imagen</label>
        <input type="file" id="imagen" name="imagen" placeholder="imagen" onChange={(event) => setImagen(event.target.files[0])} />

        <br/>
        <label htmlFor="nombre" className="formulario">Nombre</label>
        <input className="formulario" type="nombre"  name="nombre" id="nombre" placeholder="Nombre del producto" value={nombre} onChange={(event) => setNombre(event.target.value)} />

        <br/>
        <label htmlFor="descripcion" className="formulario">descripcion</label>
        <input className="formulario" type="descripcion" name="descripcion" id="descripcion" placeholder="agregue una descripcion" value={descripcion} onChange={(event) => setDescripcion(event.target.value)} />

        <br/>
        <label htmlFor="categoria" className="formulario">categoria</label>
        <input className="formulario" type="categoria" name="categoria" id="categoria" placeholder="agregue una categoria" value={categoria} onChange={(event) => setCategoria(event.target.value)} />

        <br/>
        <label htmlFor="precio" className="formulario">precio</label>
        <input className="formulario" type="number" name="precio" id="precio" placeholder="agregue un Precio" value={precio} onChange={(event) => setPrecio(event.target.value)} />

        <br/>

        <br/>
        <button type="submit" className="btn btn-primary button" >Agregar Producto</button>
      </div>
    </form>
  );
};

export default AgregarProducto;