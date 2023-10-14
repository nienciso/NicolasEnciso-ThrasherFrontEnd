import React, { useState } from 'react';
import { loginUser } from '../api'; 
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Realizar una solicitud para iniciar sesión con los datos del formulario
      const userData = await loginUser(email, password); // Pasar email y password como argumentos
    
      // Si el inicio de sesión es exitoso, puedes realizar acciones específicas, como redirigir al usuario a su panel de control o actualizar el estado de autenticación en tu aplicación.
      navigate('/dashboard'); // Redirige al usuario al panel de control
    } catch (error) {
      // Si hay un error en el inicio de sesión, puedes mostrar un mensaje de error al usuario o tomar otras medidas.
      console.error('Error de inicio de sesión:', error.message);
      // También podrías mostrar un mensaje de error al usuario en tu interfaz.
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
        <label htmlFor="password">Contraseña:</label>
<input
  type="password" // Cambiar el tipo a "password"
  id="password"
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
