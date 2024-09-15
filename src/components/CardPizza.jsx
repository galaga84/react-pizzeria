import React from 'react';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text"> Precio: ${price.toLocaleString()}</p>
        <p> 🍕 Ingedientes:</p>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <div className='gap-botones'>
        <button className="btn btn-warning">Ver más</button>
        <button className="btn btn-success">Añadir</button>
        </div>
        
      </div>
    </div>
  );
};

export default CardPizza;
