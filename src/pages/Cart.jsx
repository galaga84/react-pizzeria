import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext'; // Asegúrate de importar UserContext
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, totalPrice, clearCart } = useContext(CartContext);
  const { token } = useContext(UserContext); // Obtiene el token del contexto
  const [purchaseSuccess, setPurchaseSuccess] = useState(false); // Estado para el mensaje de éxito

  const handleRemove = (index) => {
    removeFromCart(index);
  };

  const handleCheckout = async () => {
    if (!token) return; // Verifica si el usuario está autenticado

    const checkoutData = {
      items: cartItems,
      total: totalPrice
    };

    try {
      const response = await fetch('/api/checkouts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}` // Envía el token de autenticación
        },
        body: JSON.stringify(checkoutData)
      });

      if (response.ok) {
        const data = await response.json();
        setPurchaseSuccess(true); // Actualiza el estado a true cuando la compra sea exitosa
        clearCart(); // Limpia el carrito después de una compra exitosa
      } else {
        alert("Hubo un error al procesar la compra.");
      }
    } catch (error) {
      console.error("Error al procesar la compra:", error);
      alert("Error de red. Inténtalo nuevamente.");
    }
  };

  return (
    <div className="container">
      <h2>Carrito de Compras</h2>
      {purchaseSuccess ? ( // Si la compra fue exitosa, muestra el mensaje
        <div className="alert alert-success">
          ¡Compra realizada con éxito! Gracias por tu compra.
        </div>
      ) : cartItems.length === 0 ? (
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
          <button className="btn btn-primary" disabled={!token} onClick={handleCheckout}>
            Proceder a pagar
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;








