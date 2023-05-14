import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  box-sizing: border-box;
  width: 100%;
  height: 100px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid black;
  ul {
    padding: 0;
    display: flex;
    gap: 10px;
    list-style-type: none;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div>
        Logo
      </div>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/countries'>Countries</Link></li>
          <li><Link to='/prekes'>Prekes</Link></li>
          <li><Link to='/counter'>Skaiciuokle</Link></li>
        </ul>
      </nav>
    </StyledHeader>
  );
}
 
export default Header;