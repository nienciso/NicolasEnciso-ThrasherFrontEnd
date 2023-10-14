import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Login from './components/Login'; 
import { getAllProductos } from './api'; 
import CheckSession from './components/CheckSession';


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
          <Route path="/login" element={<Login />} />
          <Route exact path="/login" component={Login} />
        <Route path="/validate-session" component={CheckSession} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;