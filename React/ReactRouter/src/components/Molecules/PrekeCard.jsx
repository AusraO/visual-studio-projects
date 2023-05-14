import styled from "styled-components";

const StyledCard = styled.div`
  border: 1px solid black;
`;

const PrekeCard = ({ data }) => {
  return (
    <StyledCard>
      <h1>{data.pavadinimas}</h1>
      <p>Vieneto kaina:{data.kaina}</p>
    </StyledCard>
  );
}
 
export default PrekeCard;
