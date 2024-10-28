import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, totalPrice } = useContext(CartContext);

  const handleRemove = (index) => {
    removeFromCart(index); // Llama a la función para eliminar un producto
  };

  return (
    <div className="container">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <div>
          <p>Tu carrito está vacío.</p>
          <Link to="/">Volver a la tienda</Link>
        </div>
      ) : (
        <div>
          <ul className="list-group">
            {cartItems.map((item, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <h5>{item.name}</h5>
                  <p>Precio: ${item.price.toLocaleString('es-CL')}</p>
                </div>
                <div>
                  <button className="btn btn-danger" onClick={() => handleRemove(index)}>
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h4 className="mt-3">Total: ${totalPrice.toLocaleString('es-CL')}</h4>
          <button className="btn btn-primary">Proceder a pagar</button>
        </div>
      )}
    </div>
  );
};

export default Cart;






