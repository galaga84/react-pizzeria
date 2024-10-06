import React from 'react';
import Header from './Header';
import CardPizza from './CardPizza';
import pizzas from '../assets/js/pizzas'; // Importa el array de pizzas

export default function Home() {
  return (
    <div>
      <Header />
      <div className="card-container">
        {pizzas.map((pizza, index) => (
          <CardPizza
            key={index}
            name={pizza.name}
            desc={pizza.desc} // Pasa la descripción aquí
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />
        ))}
      </div>
    </div>
  );
}

