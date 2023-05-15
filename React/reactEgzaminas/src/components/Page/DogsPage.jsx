import { useContext } from "react";
import styled from "styled-components";
import DogsContext from "../../contexts/DogsContext";
import DogCard from "../UI/Molecules/DogCard";



const StyledDogsMain = styled.main`
    background-color: #f3cc9b;
    text-align: center;
    padding-bottom: 10px;
`;

const StyledDogsDiv = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 2rem;
    flex-wrap: wrap;
    padding-left: 30px;
    padding-right: 30px;
    
`;

const DogsPage = () => {

    const { dogs } = useContext(DogsContext)

    return (
        <StyledDogsMain>
            <h1> Your Favourite Dog Breeds in one place</h1>
         

            <StyledDogsDiv>
                {
                    dogs.map(dog =>
                        <DogCard
                            key={dog.id}
                            data={dog}
                        />
                    )
                }
            </StyledDogsDiv>

        </StyledDogsMain>
    );
}

export default DogsPage;