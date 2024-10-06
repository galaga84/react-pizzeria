import React, { useState } from 'react';
import { pizzaCart } from '../assets/js/pizzas'; // Importa el array pizzaCart


const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  // Función para aumentar la cantidad
  const increaseQuantity = (id) => {
    const updatedCart = cart.map((pizza) => {
      if (pizza.id === id) {
        return { ...pizza, count: pizza.count + 1 };
      }
      return pizza;
    });
    setCart(updatedCart);
  };

  // Función para disminuir la cantidad
  const decreaseQuantity = (id) => {
    const updatedCart = cart
      .map((pizza) => {
        if (pizza.id === id) {
          return { ...pizza, count: pizza.count - 1 };
        }
        return pizza;
      })
      .filter((pizza) => pizza.count > 0); // Elimina la pizza si la cantidad es 0
    setCart(updatedCart);
  };

  // Calcular el total
  const calculateTotal = () => {
    return cart.reduce((total, pizza) => total + pizza.price * pizza.count, 0);
  };

  return (
    <div className='cart'>
  <h2>Tu carrito de compras</h2>
  {cart.length === 0 ? (
    <p>El carrito está vacío</p>
  ) : (
    <div>
      {cart.map((pizza) => (
        <div key={pizza.id} className="cart-item">
          <img src={pizza.img} alt={pizza.name} width="100" />
          <div>
            <h5>{pizza.name}</h5>
            <p>Precio: ${pizza.price.toLocaleString()}</p>
            <p>Cantidad: {pizza.count}</p>                
            <div className="button-container" style={{ display: 'flex', gap: '10px' }}>
              <button type="button" className="btn btn-success" onClick={() => increaseQuantity(pizza.id)}>+</button>
              <button type="button" className="btn btn-danger" onClick={() => decreaseQuantity(pizza.id)}>-</button>
            </div>
          </div>
        </div>
      ))}
      <h3>Total: ${calculateTotal().toLocaleString()}</h3>
      <button type="button" className="btn btn-warning">Pagar</button>
    </div>
  )}
</div>
  );
};

export default Cart;
