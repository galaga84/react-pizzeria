import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Importa Link para la navegación
import { CartContext } from '../context/CartContext';

const CardPizza = ({ id, name, price, ingredients, img, desc }) => {
  const { addToCart } = useContext(CartContext); // Accede a addToCart del CartContext

  const handleAddToCart = () => {
    const pizza = { name, price, ingredients, img, desc }; // Crea un objeto pizza
    addToCart(pizza); // Agrega la pizza al carrito
  };

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text"> Precio: ${price.toLocaleString('es-CL')}</p>
        <p className="card-text"> Descripción: {desc}</p>
        <p> 🍕 Ingredientes:</p>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <div className='d-flex justify-content-between gap-botones'>
          <Link to={`/pizza/${id}`} className="btn btn-warning">Ver más</Link> {/* Enlace a la página de detalles de la pizza */}
          <button className="btn btn-success" onClick={handleAddToCart}>
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;











