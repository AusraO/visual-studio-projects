import { useContext } from 'react';
import styled from "styled-components";
import BooksContext from '../../contexts/BooksContext'
import BookCard from '../UI/Molecules/BookCard';
import { Link } from 'react-router-dom';

const StyledMain = styled.main`
  min-height: calc(100vh - 100px);
  background-color: #d5eaea;
  padding: 10px 50px 0;
  > h1{
    margin-top: 0;
    text-align: center;
  }
`;
const StyledBooksDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
`;

const BooksPage = () => {

  const { books } = useContext(BooksContext);

  return (
    <StyledMain>
      <h1>All books</h1>
      <Link to='/books/newBook'>Add new book</Link>
      <StyledBooksDiv>
        {
          books.map(book => 
            <BookCard 
              key={book.id}
              data={book}
            />
          )
        }
      </StyledBooksDiv>
    </StyledMain>
  );
}
 
export default BooksPage;