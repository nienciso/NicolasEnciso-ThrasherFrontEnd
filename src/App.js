import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import { getAllProductos } from './api'; // Importa tu función para obtener productos

function App() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Carga los productos al montar el componente
    getAllProductos()
      .then((data) => setProductos(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<ProductList productos={productos} />}
          />
          <Route path="/productos/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;