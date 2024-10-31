import Pizza from "./Pizza.jsx";
//import pizzaData from "../data.js";

function Menu() {
    return (
        <main className="menu">
            <h2>Our menu</h2>
            <Pizza
                name='Pizza Focaccia'
                ingridients='Bread with italian olive oil and rosemary'
                photoLink='src/assets/pizzas/focaccia.jpg'
                price={6}
            />
            <Pizza
                name='Pizza Margherita'
                ingridients='Tomato and mozarella'
                photoLink='src/assets/pizzas/margherita.jpg'
                price={10}
            />
        </main>
    )
}

export default Menu;