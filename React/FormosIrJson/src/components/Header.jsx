const Header = ({ visitedCountries, loggedIn, changeLogInStatus }) => {
    return (
      <header>
        <div className="headerLogo">
          <img src="https://www.nationsonline.org/maps/Political-World-Map-3360.jpg" alt="world map" />
        </div>
        {
          loggedIn ? 
          <div className="userInfo">
            <img src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" alt="useAvatar" />
            <p>Rokas</p>
            <p>Lankytos šalys: {visitedCountries}</p>
            <button
              onClick={() => changeLogInStatus()}
            >LogOut</button>
          </div> :
          <div className="userInfo">
            <button
              onClick={() => changeLogInStatus()}
            >LogIn</button>
          </div>
        }
      </header>
    );
  }
   
  export default Header;