import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Pizza = () => {
  const { id } = useParams(); // Obtiene el id de la URL
  const [pizza, setPizza] = useState(null); // Estado para almacenar los detalles de la pizza
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await axios.get(`https://tu-api.com/pizzas/${id}`); // Cambia la URL por la de tu API
        setPizza(response.data); // Almacena los datos de la pizza
      } catch (err) {
        setError('Error al cargar la pizza.'); // Manejo de errores
      } finally {
        setLoading(false); // Indica que la carga ha finalizado
      }
    };

    fetchPizza(); // Llama a la función para obtener la pizza
  }, [id]);

  if (loading) return <p>Cargando...</p>; // Mensaje de carga
  if (error) return <p>{error}</p>; // Mensaje de error

  return (
    <div>
      <h1>🍕 Detalles de la Pizza 🍕</h1>
      {pizza ? (
        <>
          <h2>{pizza.name}</h2>
          <img src={pizza.image} alt={pizza.name} />
          <p>{pizza.description}</p>
          <p>Precio: ${pizza.price}</p>
        </>
      ) : (
        <p>Pizza no encontrada.</p>
      )}
    </div>
  );
};

export default Pizza;
