import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importar Router y Routes
import Footer from './components/Footer';
import Home from './components/Home';
import NavbarComponent from './components/Navbar'; // Asegúrate de que se llame NavbarComponent
import Register from './components/Register'; // Importar el componente Register
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';

function App() {
  return (
    <Router> {/* Envuelve la aplicación con el Router */}
      <NavbarComponent /> {/* Navbar siempre visible */}
      
      <Routes>
        <Route path="/" element={<Home />} /> {/* Ruta para la página principal */}
        <Route path="/register" element={<Register />} /> {/* Ruta para la página de registro */}
        <Route path="/login" element={<Login />} /> {/* Ruta para la página de login */}
      </Routes>

      <Footer /> {/* Footer siempre visible */}
    </Router>
  );
}

export default App;

