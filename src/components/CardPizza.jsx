const CardPizza = ({ name, price, ingredients, img, desc }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        
        <p className="card-text"> Precio: ${price.toLocaleString('es-CL')}</p>
        <p className="card-text"> Descripción: {desc}</p> {/* Aquí se muestra la descripción */}
        
        <p> 🍕 Ingredientes:</p>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <div className='d-flex justify-content-between gap-botones'>
          <button className="btn btn-warning">Ver más</button>
          <button className="btn btn-success">Añadir</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;




