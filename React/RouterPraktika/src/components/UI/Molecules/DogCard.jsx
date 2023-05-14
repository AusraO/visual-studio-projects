import styled from "styled-components";
import { Link } from "react-router-dom";


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
    }
`


const DogCard = ({ data }) => {
    return (
        <StyledDogCardDiv>
            <img src={data.picture} alt={data.name} />
            <div>
                <h2>{data.name}</h2>
                <p>{data.size}</p>
                <button>
                    <Link to={`/dogs/${data.id}`} >More about this breed</Link>
                </button>

            </div>
        </StyledDogCardDiv>



    );
}

export default DogCard;