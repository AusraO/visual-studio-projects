
import styled from 'styled-components';
import { FaTiktok, } from 'react-icons/fa'
import { AiOutlineInstagram, AiFillTwitterCircle, AiFillYoutube, AiFillFacebook } from 'react-icons/ai'
import { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';


const FooterStyled = styled.footer`
 height: 200px;
 background-color: ${props => props.colorPallet.background};
 color: ${props => props.colorPallet.text};
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
 >.icons{
    display: flex;
    justify-content: center;
    color: ${props => props.colorPallet.text};
    >a{
       color: ${props => props.colorPallet.text};
        width: 50px;  
    }
 }

 >ul{
    list-style-type: none;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
 }
 >p{
    text-align:center;
 }

`







const Footer = () => {
    const { colorPallet } = useContext(ThemeContext);
    return (
        <>

            <FooterStyled
            colorPallet={colorPallet}>
                <div className='icons'>
                    <a href='https://www.tiktok.com/@imdb'><FaTiktok /></a>
                    <a href='https://www.instagram.com'><AiOutlineInstagram /></a>
                    <a href='https://twitter.com/imdb'><AiFillTwitterCircle /></a>
                    <a href='https://www.youtube.com/imdb'><AiFillYoutube /></a>
                    <a href='https://www.facebook.com/imdb'><AiFillFacebook /></a>
                </div>

                <ul>
                    <li>Get the IMDb App</li>
                    <li>Help</li>
                    <li>Site Index</li>
                    <li>IMDbPro</li>
                    <li>Box Office Mojo</li>
                    <li>IMDb Developer</li>
                </ul>
                <ul>
                    <li>Press Room</li>
                    <li>Advertising</li>
                    <li>Jobs</li>
                    <li>Conditions of use</li>
                    <li>Privacy Policy</li>
                    <li>Your Ads Privacy Choices</li>
                </ul>
                <p>© 1990-2023 by IMDb.com, Inc.</p>


            </FooterStyled>

        </>
    );
}

export default Footer;