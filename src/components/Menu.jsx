import PizzaData from "./../data.js";
import Pizza from "./Pizza.jsx";

function Menu() {
    return (
        <main className="menu">
            <h2>Our menu</h2>
            <div>
                {PizzaData.map(pizza =>
                    <Pizza
                        key={pizza.id}
                        name={pizza.name}
                        ingredients={pizza.ingredients}
                        photoLink={`src/assets/${pizza.photoName}`}
                        price={pizza.price}
                    />
                )}
            </div>

{/*            <Pizza
                name='Pizza Focaccia'
                ingredients='Bread with italian olive oil and rosemary'
                photoLink='src/assets/pizzas/focaccia.jpg'
                price={6}
            />*/}
        </main>
    )
}

export default Menu;