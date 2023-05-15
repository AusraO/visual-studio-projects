import { useContext } from "react";
import styled from "styled-components";
import DogsContext from "../../contexts/DogsContext";
import DogCard from "../UI/Molecules/DogCard";
import { useEffect } from "react";
import { useState } from "react";


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
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);

    return (
        <StyledDogsMain>
            <h1> Our Favourite Dog Breeds in one place</h1>

            {
                isLoading ? (<p>Loading...</p>) : (

            <StyledDogsDiv>
                {dogs.length === 0 ? (<p>No dogs available..</p>) : (

                    dogs.map(dog =>
                        <DogCard
                            key={dog.id}
                            data={dog}
                        />
                    )
                ) }
            </StyledDogsDiv>
)}
        </StyledDogsMain>
    );
}

export default DogsPage;