import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from "react";
import UsersContext from "../../contexts/UsersContext";


const HeaderStyled = styled.header`
    height: 90px;
    width:100%;
    display: flex;
    justify-content: space-around;
    gap:20px; 
    background-color: #351f10;
    align-items: center;
    color:white;
    >div{
      display: flex;
      gap: 2rem;
      justify-content: flex-end;
      align-items: center;
    
   >button{
      width: 90px;
      height: 40px;
      background-color: #F3CC9B;
      border: none;
      border-radius: 3px;
      font-size: 16px;
    }
  }
    a>img{
    
        height: 80px;
        width: auto;
}
a>button{
      width: 90px;
      height: 40px;
      background-color: #F3CC9B;
      border: none;
      border-radius: 3px;
      font-size: 16px;
    }
`


const Header = () => {
  const { currentUser, setCurrentUser } = useContext(UsersContext);

  const navigate = useNavigate();
  return (
    <>
      <HeaderStyled>
        {
          !currentUser &&
          <Link to="/login"><img src="https://img.freepik.com/free-vector/cute-dog-logo-template_1051-3348.jpg?w=2000" alt="logo" /></Link>
        }
        {
          currentUser &&
          <Link to="/dogs"><img src="https://img.freepik.com/free-vector/cute-dog-logo-template_1051-3348.jpg?w=2000" alt="logo" /></Link>
        }
        {
          !currentUser ?
            <>
              <Link to={'/login'}> <button >Log in</button></Link>
              <Link to="/register"> <button>Register</button></Link>
            </> :
            <>
              {
                currentUser &&
                <Link to="/addDog"><button>Add new dog</button></Link>
              }
              <div>
                <img style={{ width: "70px", height: "auto" }} src={currentUser.avatarURL} alt="user avatar" />
                <p>{currentUser.userName}</p>

                <button
                  onClick={() => {
                    setCurrentUser(null);
                    navigate('/');
                  }}
                >
                  Logout
                </button>
              </div>
            </>
        }



      </HeaderStyled>

    </>
  );
}

export default Header;