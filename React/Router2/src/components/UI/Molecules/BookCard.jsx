
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledCardDiv = styled.div`
  width: 250px;
  border: 1px solid black;
  box-sizing: border-box;
  > img{
    width: 100%;
    object-fit: cover;
    object-position: top;
  }
  >div{
    padding: 10px;
  }
`;

const BookCard = ({ data }) => {
  return (
    <StyledCardDiv>
      <img src={data.picture} alt={data.name} />
      <div>
        <h3>{data.name}</h3>
        <p>{data.author}</p>
        <button>
          <Link to={`/books/${data.id}`}>More Info</Link>
        </button>
      </div>
    </StyledCardDiv>
  );
}
 
export default BookCard;