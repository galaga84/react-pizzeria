// src/components/ProtectedRoute.jsx
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const ProtectedRoute = ({ children }) => {
  const { token } = useContext(UserContext);

  // Si el token es falso, redirige a la página de login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Si hay un token, renderiza los hijos (la ruta protegida)
  return children;
};

export default ProtectedRoute;







