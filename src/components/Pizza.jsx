// import focaccia from '../assets/pizzas/focaccia.jpg';

function Pizza({pizzaObj}) {

   const { name, ingredients, price, photoName, soldOut } = pizzaObj;

    if (soldOut) return null;

    return (
        <li className="pizza">
            <img src={`src/assets/${photoName}`} alt={name} />
            <div>
                <h3>{name}</h3>
                <p>{ingredients}</p>
                <span>{price}</span>
            </div>
        </li>
    )
}

export default Pizza;

/*
key={pizza.id}
name={pizza.name}
ingredients={pizza.ingredients}
photoLink={`src/assets/${pizza.photoName}`}
price={pizza.price}*/
