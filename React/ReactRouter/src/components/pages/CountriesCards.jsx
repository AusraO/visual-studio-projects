import { useContext } from "react";
import styled from "styled-components";
import CountriesContext from "../../contexts/CountriesContext";
import CountryCard from "../Molecules/CountryCard";

const StyledMain = styled.main`
  min-height: calc(100vh - 200px);
  >h1{
    text-align: center;
  }
`;
const StyledCountriesDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 10px;
`;

const CountriesCards = () => {

  const { countries } = useContext(CountriesContext);

  return (
    <StyledMain>
      <h1>Mūsų Šalys</h1>
      <StyledCountriesDiv>
        {
          countries.map(country => 
            <CountryCard 
              key={country.id}
              data={country}
            />
          )
        }
      </StyledCountriesDiv>
    </StyledMain>
  );
}
 
export default CountriesCards;