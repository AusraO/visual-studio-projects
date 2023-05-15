import styled from "styled-components";
import { useState } from "react";
import "./DogCardModal.css"
const StyledDogCardDiv = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    border: 1px solid #431500;
    padding-bottom: 10px;
    >img{
        width: 100%;
        object-fit: cover;
        object-position: top;
    }
    >div button{
        height: 40px;
        align-items: center;
        background-color: #5a392a;
        border: none;
        color: white;
    }
`

const DogCard = ({ data }) => {

    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }
    
    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }
    

    return (
        <>
        <StyledDogCardDiv>
            <img src={data.picture} alt={data.name} />
            <div>
                <h2>{data.name}</h2>
                <p>Size: {data.size}</p>
                <button onClick={toggleModal}>More about this breed </button>
            </div>
        </StyledDogCardDiv>

         {modal && (<div className="modal">
                <div className="overlay" onClick={toggleModal}></div>
                <div className="modal-content">
                    <h1>{data.name}</h1>
                    <img style={{ width: "100px" }} src={data.picture} alt={`${data.name}`} />
                    <p>Dog size:{data.size}</p>
                    <p>Description: {data.description}</p>

                    <button className="close-modal" onClick={toggleModal}>X</button>
                </div>
            </div>
            )}
            </>
    );
}

export default DogCard;