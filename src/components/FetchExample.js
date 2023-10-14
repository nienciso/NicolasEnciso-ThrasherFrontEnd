import React, { useState, useEffect } from 'react';

function FetchExample() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Aquí realizamos la solicitud a la API utilizando fetch
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FetchExample;