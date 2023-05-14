import { useContext } from "react";
import CardsContext from "../../../contexts/CardsContext";
import { AiOutlineInfoCircle } from "react-icons/ai"
import styled from "styled-components";
import { Link } from 'react-router-dom'
import UsersContext from "../../../contexts/UsersContext";
import { useState } from "react";
import "./CardModal.css"


const CardStyled = styled.div`
background-color:#1A1A1A ;
width: 250px;
display: flex;
flex-direction: column;
color: white;
gap: 5px;
justify-content: center;
align-items: center;
    >img{
        width: 250px;
        height: 100%;
    }
`

const Card = ({ data }) => {

    const { currentUser, setCurrentUser } = useContext(UsersContext);
    const addToWatchlist = (moviesId) => {
        const updatedUser = {
            ...currentUser,
            watchlist: [...currentUser.watchlist, moviesId]
        };
        setCurrentUser(updatedUser);
        console.log(moviesId)
    };

    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    // const { cards, currentCard } = useContext(CardsContext)
    // const { setCards, CardsActionTypes } = useContext(CardsContext)
    // const card = cards.find(el => el.id === data.cardId)
    return (
        <>
            {/* {
            currentCard && data.cardId === currentCard.id &&
            <button
            onClick={()=> setCards({
                type: CardsActionTypes.delete,
                id:data.id
            })}
            >Delete movie</button>
        } */}
            <CardStyled>
                <img onClick={toggleModal} src={data.photos.poster[0]} alt={`${data.title} poster`} />
                <p>{data.title}</p>
                <button onClick={addToWatchlist}>+ watchlist</button>
                <Link to={`/movies/${data.id}`}><AiOutlineInfoCircle /></Link>

            </CardStyled>

            {modal && (<div className="modal">
                <div className="overlay" onClick={toggleModal}></div>
                <div className="modal-content">
                    <h1>{data.title}</h1>
                    <img style={{ width: "100px" }} src={data.photos.poster[0]} alt={`${data.title} poster`} />
                    <p>Release year:{data.releaseYear}</p>
                    <p>Length:{data.length}min</p>
                    <p>{data.description}</p>

                    <button className="close-modal" onClick={toggleModal}>X</button>
                </div>
            </div>
            )}

        </>
    );
}

export default Card;