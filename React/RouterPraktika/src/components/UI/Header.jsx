import { NavLink } from "react-router-dom";
import styled from "styled-components";


const StyledDogHeader = styled.header`
    height: 170px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #e0c6a7;
    >div>img{
        padding-left: 20px;
        width: 150px;
    }
    >nav ul li a{
            text-decoration: none;
           font-size: large;
            color: #50301b;
        :hover{
            color: #050301;
        }
        }
>nav ul{
    list-style-type: none;
    padding-right: 60px;
    display: flex;
    flex-direction: row;
}
>nav ul li{
    padding-right: 40px;
}
`


const Header = () => {

    // const {colorPallet}

    return (<>
        <StyledDogHeader   >

            <div>
                <img src="https://img.freepik.com/free-vector/cute-dog-logo-template_1051-3348.jpg?w=2000" alt="logo" />
            </div>
            <nav>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/dogs'>Dog Breeds</NavLink></li>
                </ul>
            </nav>


        </StyledDogHeader>


    </>);
}

export default Header;