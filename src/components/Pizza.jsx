// import pizzaData from '../../data.js'
import focaccia from '../assets/pizzas/focaccia.jpg';

function Pizza() {
    return (
        <div className="pizza">
            <img src={focaccia} />
            <h3>Focaccia</h3>
            <p>Bread with italian olive oil and rosemary</p>
        </div>
    )
}

export default Pizza;