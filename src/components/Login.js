import React, { useState } from 'react';
import { loginUser } from '../api'; 
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {

      const userData = await loginUser(email, password);

   
      if (userData) {

        navigate('/');
      }
    } catch (error) {
      
      console.error('Error de inicio de sesión:', error.message);
      
    }
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input
  type="email"
  id="email"
  autoComplete="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
        </div>
        <div>
        <label htmlFor="password">Contraseña:</label>
        <input
  type="password"
  id="password"
  autoComplete="current-password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>
        </div>
        <button type="button" onClick={handleLogin}>
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}

export default Login;
