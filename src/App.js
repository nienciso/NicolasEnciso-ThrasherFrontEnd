import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { getAllProductos } from './api'; 
import NavBar from './components/NavBar'
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Login from './components/Login'; 
import CheckSession from './components/CheckSession';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getAllProductos()
      .then((data) => setProductos(data))
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;