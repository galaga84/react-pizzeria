import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Para redireccionar
import { UserContext } from '../context/UserContext'; // Importa el UserContext

const Login = () => {
  const { login } = useContext(UserContext); // Obtén el método login del contexto
  const [email, setEmail] = useState(''); // Estado para el email
  const [password, setPassword] = useState(''); // Estado para el password
  const navigate = useNavigate(); // Hook para navegar a otras rutas

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que se recargue la página

    try {
      await login(email, password); // Llama al método login con los datos del formulario
      navigate('/profile'); // Redirige a la página de perfil si el login es exitoso
    } catch (error) {
      console.error('Error al iniciar sesión', error); // Manejo de errores
    }
  };

  return (
    <div className="container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;



