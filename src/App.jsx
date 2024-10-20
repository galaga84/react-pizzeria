import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home'; 
import NavbarComponent from './components/Navbar'; 
import Register from './pages/Register'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login'; 
import Cart from './pages/Cart'; 
import NotFound from './components/NotFound'; 
import Profile from './components/Profile'; 
import Pizza from './pages/Pizza'; 

function App() {
  return (
    <Router>
      <NavbarComponent /> 
      
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/register" element={<Register />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/profile" element={<Profile />} /> 
        <Route path="/pizza/p001" element={<Pizza />} /> 
        <Route path="*" element={<NotFound />} /> 
      </Routes>

      <Footer /> 
    </Router>
  );
}

export default App;

