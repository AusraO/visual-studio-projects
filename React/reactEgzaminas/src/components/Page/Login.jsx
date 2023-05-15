import styled from "styled-components";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UsersContext from "../../contexts/UsersContext";
import { compareSync } from 'bcryptjs';

const StyledMain = styled.main`
background-color: #F3CC9B;
text-align: center;
>h1{
  margin-top: 0;
  padding: 10px;
}
  > form{
    padding-top: 20px;
    padding-bottom: 20px;
    width: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

  }
`
const SubmitButton = styled.input`
  background-color: #351F10;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
  font-size: 16px;
 
`
const Login = () => {
  const [formInputs, setFormInputs] = useState({
    userName: '',
    password: ''
  });
  const [failedLogIn, setFailedLogIn] = useState(false);
  const { users, setCurrentUser } = useContext(UsersContext);

  const navigate = useNavigate();

  const inputHandler = e => {
    setFormInputs({
      ...formInputs,
      [e.target.name]:e.target.value
    });
    setFailedLogIn(false);
  }

  const formSubmit = e => {
    e.preventDefault();
    const loggedInUser = users.find(user => user.userName === formInputs.userName && user.password === formInputs.password);
    if(loggedInUser){
      setCurrentUser(loggedInUser);
      navigate('/dogs');
    } else {
      setFailedLogIn(true);
    }
  }

  return (
    <StyledMain>
      <h1>Log in to see all the favourite dog breeds!</h1>
      <form onSubmit={(e) => {formSubmit(e)}}>
        <div>
          <label htmlFor="userName">User Name:</label>
          <input
            type="text"
            name="userName" id="userName"
            value={formInputs.userName}
            onChange={(e)=>{inputHandler(e)}}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password" id="password"
            value={formInputs.password}
            onChange={(e)=>{inputHandler(e)}}
          />
        </div>
        <SubmitButton type="submit" value="Log In" />
      </form>
      {
        failedLogIn &&
        <h1
          style={{ color:'red' }}
        >
          Neteisingi prisijungimo duomenys
        </h1>
      }
    </StyledMain>
  );
}
 
export default Login;