import styled from 'styled-components'

const StyledFooter=styled.footer`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
height: 100px;
border-top: 2px solid black
`;



const Footer = () => {
    return ( <>
    
    <StyledFooter>
        <p>
            This is footer footer footer
        </p>
    </StyledFooter>
    </> );
}
 
export default Footer;