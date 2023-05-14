import { useContext } from "react";
import CardsContext from "../../contexts/CardsContext";
import Card from "../UI/Molecules/Card";
import styled from "styled-components";
import ThemeContext from "../../contexts/ThemeContext";


const StyledHome = styled.div`
    background-color: ${props => props.colorPallet.background};
    display: flex;
    flex-direction: row;
    color: white;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    

`



const Home = () => {

    const { cards } = useContext(CardsContext);

    const { colorPallet } = useContext(ThemeContext);

    return ( 
        <StyledHome
        colorPallet={colorPallet}>
            {
                cards.map(card=>
                    <Card
                    key={card.id}
                    data={card}
                    />
                    )
            }
        
        </StyledHome>
     );
}
 
export default Home;