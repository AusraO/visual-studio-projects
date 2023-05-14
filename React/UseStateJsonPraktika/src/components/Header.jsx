const Header = ({prekiuKiekis, bendraKaina}) => {
    return (<header>
        <div className="header">
            <img
                src="https://images-platform.99static.com//9dUAzGpqELbRhHxtCrVvQJ2OGR4=/204x0:1521x1317/fit-in/500x500/99designs-contests-attachments/116/116672/attachment_116672740"
                alt="store logo"
                className="logo"
            />
            <div className="leftInfo">
                <i className="bi bi-cart2"></i>
                <p>Prekių kiekis: {prekiuKiekis}</p>
                <p>Bendra kaina: {bendraKaina}€</p>
                <button>Ištrinti krepšelį</button>
            </div>
        </div>
    </header>);
}

export default Header;