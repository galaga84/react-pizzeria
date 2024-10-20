import React from 'react';
import { Link } from 'react-router-dom'; 


export default function NotFound() {
  return (
    <div className='not-found'>
      <h1>🍕 Oops... No podemos encontrar esta página 🍕</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <Link to="/" style={{ textDecoration: 'none', color: 'blue' }}>
        Volver al inicio
      </Link> 
    </div>
  );
}

