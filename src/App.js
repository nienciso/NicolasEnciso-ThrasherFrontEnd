import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { getAllProductos } from './api';
import NavBar from './components/NavBar'
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Login from './components/Login';
import CheckSession from './components/CheckSession';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './components/admin';

function App() {
  const [productos, setProductos] = useState([]);
  const [todosLosProductos, setTodosLosProductos] = useState([]); // nuevo estado para almacenar todos los productos 

  useEffect(() => {
    getAllProductos()
      .then((data) => {
        setProductos(data); // guardando la lista de productos en el estado productos 
        setTodosLosProductos(data); // guardando la lista de productos en el estado todosLosProductos
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route
          path="/" element={<ProductList productos={productos} />} />
          <Route path="/productos/:id" element={<ProductDetail />} />
          <Route path="/auth/login" element={<Login />} />
          <Route exact path="/auth/login" component={Login} />
          <Route path="/validate-session" component={CheckSession} />
          <Route path="/admin" element={<Admin productos={todosLosProductos} />} /> {/* pasando el estado todosLosProductos como una propiedad al componente Admin */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;