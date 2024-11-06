import PizzaData from "./../data.js";
import Pizza from "./Pizza.jsx";

function Menu() {
    const pizzas = PizzaData;
    return (
        <main className="menu">
            <h2>Our menu</h2>

            <ul className="pizzas">
                {pizzas.map(pizza =>
                    <Pizza pizzaObj={pizza} key={pizza.name}/>
                )}
            </ul>
        </main>
    )
}

export default Menu;