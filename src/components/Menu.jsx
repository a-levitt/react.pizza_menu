import PizzaData from "./../data.js";
import Pizza from "./Pizza.jsx";

function Menu() {
    return (
        <main className="menu">
            <h2>Our menu</h2>
            <p>Authentic Italian cuisine. Creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
            <ul className="pizzas">
                {PizzaData.map(pizza =>
                    <Pizza pizzaObj={pizza} key={pizza.name}/>
                )}
            </ul>
        </main>
    )
}

export default Menu;