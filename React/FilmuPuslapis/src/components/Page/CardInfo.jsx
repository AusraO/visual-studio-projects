import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const StyledMain = styled.main`
    background-color: #323232;
    color: white;

`
const StyledDiv= styled.div`
 
    >img{
        width: 350px;
    }
    >h1{
    margin-top: 0;
 }
`



const CardInfo = () => {

    const{ id } = useParams();
    const[card, setCard]= useState();

    useEffect(()=> {
        fetch(`http://localhost:8080/movies/${id}`)
        .then(res =>res.json())
        .then(data =>{setCard(data)
        console.log(data)})
    }, []);



    return ( 

<StyledMain>

{
    card ?
    <StyledDiv>
        <h1>{card.title}</h1>
        <img src={card.photos.poster[0]} alt={card.title} />
        <p>Genres: {card.genres}</p>
        <p>Description: {card.description}</p>
        <p>Director: {card.castAndCrew.director}</p>
        <p>Writers: {card.castAndCrew.writers[0].name}</p>
        <p>Stars: {card.castAndCrew.actors[0].name}</p>
    </StyledDiv> :
    <p>Something went wrong...</p>
}

</StyledMain>

     );
}
 
export default CardInfo;