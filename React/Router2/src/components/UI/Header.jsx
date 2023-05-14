import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';

const StyledHeader = styled.header`
  height: 100px;
  padding: 0 20px;
  background-color: ${props => props.colorPallet.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid black;
  > nav > ul{
    list-style-type: none;
    display: flex;
    gap: 10px;
    a{
      text-decoration: none;
      font-size: 1.3rem;
      font-weight: bold;
      color: ${props => props.colorPallet.notActiveLink}
    }
    a.active{
      color: ${props => props.colorPallet.activeLink}
    }
  }
`;

const Header = () => {

  const { colorPallet, setColorPallet, ThemeActionTypes } = useContext(ThemeContext);

  return (
    <StyledHeader
      colorPallet={colorPallet}
    >
      <div>
        {
          colorPallet.theme === 'day' ?
          <button
            onClick = {() => setColorPallet({
              type: ThemeActionTypes.night
            })}
          >Set Night Mode</button> :
          <button
            onClick = {() => setColorPallet({
              type: ThemeActionTypes.day
            })}
          >Set Day Mode</button>
        }
      </div>
      <div>
        Logo
      </div>
      <nav>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/books'>Books</NavLink></li>
        </ul>
      </nav>
    </StyledHeader>
  );
}
 
export default Header;