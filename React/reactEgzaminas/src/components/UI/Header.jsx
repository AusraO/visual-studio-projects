import styled from "styled-components";
import { Link, useNavigate} from 'react-router-dom'
import { useContext } from "react";

import UsersContext from "../../contexts/UsersContext";
const HeaderStyled = styled.header`
    height: 90px;
    width:100%;
    display: flex;
    justify-content: space-around;
    gap:20px; 
    background-color: beige;
    align-items: center;
    color:black;
    >img{
    
        height: 80px;
        width: auto;
    
}
`


const Header = () => {
    const { currentUser, setCurrentUser } = useContext(UsersContext);

    const navigate = useNavigate();
    return (
        <>
            <HeaderStyled>
           <img src="https://img.freepik.com/free-vector/cute-dog-logo-template_1051-3348.jpg?w=2000" alt="logo" />
                <button>Menu</button>
                
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
                

            </HeaderStyled>

        </>
    );
}

export default Header;