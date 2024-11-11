import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext'; // Importa el UserContext
import { useNavigate } from 'react-router-dom'; // Para redirigir al usuario después de logout

const Profile = () => {
  const { email, logout, token, getProfile } = useContext(UserContext); // Obtiene el email y el método logout del contexto
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login'); // Si no hay token, redirige al login
    } else {
      getProfile(); // Obtén el perfil del usuario si está autenticado
    }
  }, [token, navigate, getProfile]);

  const handleLogout = () => {
    logout(); // Llama al método logout para cerrar sesión
    navigate('/login'); // Redirige al usuario a la página de login
  };

  return (
    <div className="container">
      <h2>Perfil del Usuario</h2>
      <p><strong>Email:</strong> {email}</p> {/* Muestra el correo electrónico del usuario */}
      <button className="btn btn-danger" onClick={handleLogout}>Cerrar Sesión</button> {/* Botón para cerrar sesión */}
    </div>
  );
};

export default Profile;



