import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';

export default function Home() {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true); 

  
  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas');
        const data = await response.json();
        setPizzas(data); 
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener las pizzas:', error);
        setLoading(false);
      }
    };

    fetchPizzas();
  }, []); 

  if (loading) {
    return <div>Cargando pizzas...</div>; 
  }

  return (
    <div>
      <Header />
      <div className="card-container">
        {pizzas.map((pizza, index) => (
          <CardPizza
          key={index}
          name={pizza.name}
          desc={pizza.desc}  
          price={pizza.price}
          ingredients={pizza.ingredients}
          img={pizza.img}
        />
        
        ))}
      </div>
    </div>
  );
}


