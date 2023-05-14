import { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "../../contexts/ThemeContext";

const StyledMain = styled.main`
  height: calc(100vh - 100px);
  background-color: ${props => props.colorPallet.background};
  color: ${props => props.colorPallet.text};
  padding: 0 50px;
`;

const Home = () => {

  const { colorPallet } = useContext(ThemeContext);

  return (
    <StyledMain 
      colorPallet={colorPallet}
    >
      <h1>Home Page</h1>
      <p>
        Welcome to my page!
      </p>
    </StyledMain>
  );
}
 
export default Home;