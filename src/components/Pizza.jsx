// import focaccia from '../assets/pizzas/focaccia.jpg';

function Pizza(props) {
    return (
        <div className="pizza">
            <img src={props.photoLink} alt={props.name} />
            <div>
                <h3>{props.name}</h3>
                <p>{props.ingridients}</p>
                <span>{props.price}</span>
            </div>
        </div>
    )
}

export default Pizza;