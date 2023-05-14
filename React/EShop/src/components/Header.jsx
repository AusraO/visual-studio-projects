const Header = ({storeItemsQuantity, totalPrice}) => {
    return (<header>
        <div className="header">
            <img
                src="https://img.freepik.com/free-vector/golden-elegant-logo-flat-style_52683-17266.jpg"
                alt="store logo"
                className="logo"
            />
            <div className="leftInfo">
                <i className="bi bi-cart2"></i>
                <p>Items in cart: {storeItemsQuantity}</p>
                <p>Total price: {totalPrice}€</p>
            </div>
        </div>
    </header>);
}

export default Header;