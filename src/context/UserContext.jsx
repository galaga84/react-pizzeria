import React, { createContext, useState } from 'react';

// Crea el contexto
export const UserContext = createContext();

// Proveedor del UserContext
export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null); // El token inicialmente es null
  const [email, setEmail] = useState(null); // El email también es null inicialmente
  const [profile, setProfile] = useState(null); // Nuevo estado para almacenar el perfil del usuario

  // Método para hacer login
  const login = async (email, password) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (data.token) {
        setToken(data.token);
        setEmail(data.email);
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  // Método para hacer register
  const register = async (email, password) => {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (data.token) {
        setToken(data.token);
        setEmail(data.email);
      }
    } catch (error) {
      console.error('Error al registrar:', error);
    }
  };

  // Método para hacer logout
  const logout = () => {
    setToken(null); // Elimina el token del estado
    setEmail(null); // Elimina el email del estado
    setProfile(null); // Limpia el perfil del estado
  };

  // Método para obtener el perfil del usuario autenticado
  const getProfile = async () => {
    if (!token) return; // Si no hay token, no se puede obtener el perfil

    try {
      const response = await fetch('/api/auth/me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`, // Enviar el token en los encabezados
        },
      });

      const data = await response.json();
      if (response.ok) {
        setProfile(data); // Guarda los datos del perfil en el estado
      } else {
        console.error('Error al obtener el perfil:', data.message);
      }
    } catch (error) {
      console.error('Error al obtener el perfil:', error);
    }
  };

  return (
    <UserContext.Provider value={{ token, email, profile, login, register, logout, getProfile }}>
      {children}
    </UserContext.Provider>
  );
};
















