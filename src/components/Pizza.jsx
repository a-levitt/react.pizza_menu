// import focaccia from '../assets/pizzas/focaccia.jpg';

function Pizza(props) {
    return (
        <li className="pizza">
            <img src={`src/assets/${props.pizzaObj.photoName}`} alt={props.pizzaObj.name} />
            <div>
                <h3>{props.pizzaObj.name}</h3>
                <p>{props.pizzaObj.ingredients}</p>
                <span>{props.pizzaObj.price}</span>
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
