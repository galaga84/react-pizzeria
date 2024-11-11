import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Para redireccionar
import { UserContext } from '../context/UserContext'; // Importa el UserContext

const Register = () => {
  const { register } = useContext(UserContext); // Obtén el método register del contexto
  const [email, setEmail] = useState(''); // Estado para el email
  const [password, setPassword] = useState(''); // Estado para el password
  const navigate = useNavigate(); // Hook para navegar a otras rutas

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que se recargue la página

    try {
      await register(email, password); // Llama al método register con los datos del formulario
      navigate('/profile'); // Redirige a la página de perfil si el registro es exitoso
    } catch (error) {
      console.error('Error al registrarse', error); // Manejo de errores
    }
  };

  return (
    <div className="container">
      <h2>Registrarse</h2>
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
        <button type="submit" className="btn btn-primary">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;


