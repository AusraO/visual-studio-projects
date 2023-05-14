
import { useContext } from "react";
import PrekesContext from "../../contexts/PrekesContext";
import PrekeCard from "../Molecules/PrekeCard";
import styled from "styled-components";

const StyledPrekesDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 10px;
`;

const StyledMain = styled.main`
  min-height: calc(100vh - 200px);
  > h1{
    margin-top: 0;
    text-align: center;
  }
`;

const PrekesCards = () => {

  const { prekes } = useContext(PrekesContext);

  return (
    <StyledMain>
      <h1>Mūsų Prekės</h1>
      <StyledPrekesDiv>
        {
          prekes.map(preke => 
            <PrekeCard
              key={preke.id}
              data={preke}
            />  
          )
        }
      </StyledPrekesDiv>
    </StyledMain>
  );
}
 
export default PrekesCards;