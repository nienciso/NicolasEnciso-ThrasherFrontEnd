import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Login from './components/Login'; 
import { getAllProductos } from './api'; 

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
        <Routes>
          <Route
          path="/" element={<ProductList productos={productos} />} />
          <Route path="/productos/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} /> {}
        </Routes>
      </div>
    </Router>
  );
}

export default App;