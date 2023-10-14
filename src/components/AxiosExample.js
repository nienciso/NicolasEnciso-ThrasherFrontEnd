import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AxiosExample() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Aquí realizamos la solicitud a la API utilizando Axios
    axios.get('https://api.example.com/data')
      .then((response) => {
        setData(response.data);
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

export default AxiosExample;