function Pizza({pizzaObj}) {

   const { name, ingredients, price, photoName, soldOut } = pizzaObj;

    return (
        <li className={`pizza ${soldOut? "sold-out" : ""}`}>
            <img src={`src/assets/${photoName}`} alt={name} />
            <div>
                <h3>{name}</h3>
                <p>{ingredients}</p>
                <span>{soldOut ? 'SOLD OUT' : price}</span>
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
