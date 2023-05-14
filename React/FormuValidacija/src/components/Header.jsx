import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Katinelis=styled.header`
    height: 50px;
    width:100%;
    display: flex;
    justify-content: center;
    gap:20px;
    >a{
        text-decoration: none;
        font-size: 1.5rem;
        font-weight: bald;
    }
    >a.active{
        color:green
    }
`



const Header = () => {
    return ( 

        <Katinelis>
<NavLink to='/'>Home?</NavLink>
<NavLink to='/register'>Register</NavLink>
        </Katinelis>
     );
}
 
export default Header;