import { NavLink } from "react-router-dom"
import styled from "styled-components";

const StyledDogFooter = styled.footer`
height: 120px;
width: 100%;
background-color: #351f10;
padding: 0;
text-align: center;
color: white;

     >nav ul li a{
            text-decoration: none;
           font-size: large;
            color: #886754;
            
        :hover{
            color: #050301;
        }
        }
>nav ul{
    list-style-type: none;
    padding-right: 60px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-top: 10px;
    margin: 0;
}
>nav ul li{
    padding-right: 40px;
}
`

const Footer = () => {
    return (
        <>
            <StyledDogFooter>
                <nav>
                    <ul>
                        <li><NavLink to='/dogs'>Dog Breeds</NavLink></li>
                    </ul>
                </nav>
                <p>Terms and uses</p>
                <p>©Dog_World.inc</p>
            </StyledDogFooter>
        </>
    );
}

export default Footer;