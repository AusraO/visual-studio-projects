import styled from "styled-components";
import { Link, useNavigate} from 'react-router-dom'
import { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";
import UsersContext from "../../contexts/UsersContext";
const HeaderStyled = styled.header`
    height: 70px;
    width:100%;
    display: flex;
    justify-content: center;
    gap:20px; 
    background-color:${props => props.colorPallet.background};
    align-items: center;
    color:${props => props.colorPallet.text}; 
    >a>img{
    
        height: 60px;
        width: auto;
    
}
`


const Header = () => {
    const { currentUser, setCurrentUser } = useContext(UsersContext);
    const { colorPallet, setColorPallet, ThemeActionTypes } = useContext(ThemeContext);
    const navigate = useNavigate();
    return (
        <>
            <HeaderStyled
                colorPallet={colorPallet}>
                <Link to={'/movies'}><img src="https://jeremyironsno1fan.files.wordpress.com/2009/01/imdb-logo-23962421_std.jpg" alt="imdb logo" /></Link>
                <button>Menu</button>
                <input type="text" placeholder="Search.." />
                <button>IMDB Pro</button>
                <button>Watchlist</button>
                
                {
                    !currentUser ?
                    <>
                    <Link to={'/login'}> <button >Log in</button></Link>
                <Link to="/register"> <button>Register</button></Link>
                </> :
                <>
                 {
              currentUser.role === "admin" &&
             <> <Link to="/manageUsers">Manage Users</Link>
            <Link to="/newMovie"><button>Add new movie</button></Link>
              </>
            }
           
              <img style={{width:"50px"}} src={currentUser.avatarURL} alt="user avatar" />
              <p>{currentUser.userName}</p>
          
            <button
              onClick={() => {
                setCurrentUser(null);
                navigate('/posts');
              }}
            >
              Logout
            </button>
                </>
                }
                <button>Menu</button>
                {
                    colorPallet.theme === "day" ?
                        <button
                        onClick={()=> setColorPallet({
                            type: ThemeActionTypes.night
                        })}
                        >Night mode</button> :
                        <button
                        onClick={()=>setColorPallet({
                            type: ThemeActionTypes.day
                        })}
                        >Day mode</button>
                }

            </HeaderStyled>

        </>
    );
}

export default Header;