
function Footer() {
    const hour = new Date().getHours();
    const openHour = 8;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    return (
        <footer className='footer'>
            <div className="order">
                {isOpen ? <p>We are open now!</p> : <p>We are closed.</p>}
                <p>Work hours: {openHour}:00 - {closeHour}:00 CET.</p>
                <button className="btn">Order</button>
            </div>

        </footer>
    )
}

export default Footer;