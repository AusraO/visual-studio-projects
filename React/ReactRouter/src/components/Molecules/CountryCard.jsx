import styled from "styled-components";

const StyledCard = styled.div`
  width: 300px;
  border: 1px solid black;
  padding: 10px;
  > h1{
    margin: 0;
    text-align: center;
  }
  > img{
    width: 100%;
    background-size: cover;
    background-position: center;
  }
  > p{
    margin: 0;
    text-align: justify;
  }
`;

const CountryCard = ({ data }) => {
  return (
    <StyledCard>
      <h1>{data.name}</h1>
      <img src={data.image} alt={data.name} />
      <p>{data.description}</p>
    </StyledCard>
  );
}
 
export default CountryCard;