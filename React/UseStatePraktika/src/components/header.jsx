const Header = () => {
    return (

        <header>
            <img
                src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/281243256/original/dd809280775ecedc19471fa8e0cb708a255a1bf7/do-a-high-resolution-funny-cat-logo-for-your-company-with-express-delivery.jfif"
                alt="cat logo"
                className="logo" />
            <div className="userInfo">
                <div className="loginInfo">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3705/3705590.png"
                        alt="user icon cat"
                        className="userIcon" />
                    <p className="name">Cat The Great</p>
                </div>
                <p>Šiandien atlikti DarbuSkaicius darbai</p>
            </div>
        </header>
    );
}

export default Header;