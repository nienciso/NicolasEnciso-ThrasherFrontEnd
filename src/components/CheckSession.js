import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CheckSession = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Realiza una solicitud al servidor para comprobar la sesión
    axios.get('/check-session').then((response) => {
      if (response.status === 200) {
        // Sesión activa
        setMessage('Sesión activa');
      }
    });
  }, []);

  return (
    <div>
      <h2>Comprobar Sesión</h2>
      <p>{message}</p>
    </div>
  );
};

export default CheckSession;