import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as generateId } from 'uuid';
import styled from "styled-components";
import BooksContext from "../../contexts/BooksContext";

const StyledMain = styled.main`
  > h1{
    margin-top: 0;
    text-align: center;
  }
  > form{
    width: 500px;
    height: 600px;
    margin: 0 auto;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;

const AddNewBook = () => {

  const { BooksActionTypes, setBooks } = useContext(BooksContext);
  const navigate = useNavigate();

  const [formInputs, setFormInputs] = useState({
    name: '',
    description: '',
    price: '',
    author: '',
    picture: '',
    rating: ''
  });

  const inputHandler = (e) => {
    if (e.target.type === 'number') {
      setFormInputs({
        ...formInputs,
        [e.target.name]: e.target.valueAsNumber
      });
    } else {
      setFormInputs({
        ...formInputs,
        [e.target.name]: e.target.value
      });
    }
  }

  const formHandler = e => {
    e.preventDefault();
    const newBook = {
      ...formInputs,
      id: generateId()
    };
    setBooks({
      type: BooksActionTypes.add,
      data: newBook
    });
    navigate('/books');
  }

  return (
    <StyledMain>
      <h1>Fill and Submit form to add new Book to the list</h1>
      <form onSubmit={(e) => formHandler(e)}>
        <div>
          <label htmlFor='name'>Title:</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={formInputs.name}
            onChange={(e) => inputHandler(e)}
          />
        </div>
        <div>
          <label htmlFor='description'>Description:</label>
          <textarea 
            name="description" 
            id="description"
            required
            value={formInputs.description} 
            onChange={(e) => inputHandler(e)}
          ></textarea>
        </div>
        <div>
          <label htmlFor='author'>Author:</label>
          <input
            type="text"
            name="author"
            id="author"
            required
            value={formInputs.author}
            onChange={(e) => inputHandler(e)}
          />
        </div>
        <div>
          <label htmlFor='picture'>Cover URL:</label>
          <input
            type="url"
            name="picture"
            id="picture"
            required
            value={formInputs.picture}
            onChange={(e) => inputHandler(e)}
          />
        </div>
        <div>
          <label htmlFor='price'>Price:</label>
          <input
            type="number"
            name="price"
            id="price"
            required
            value={formInputs.price}
            onChange={(e) => inputHandler(e)}
          />
        </div>
        <div>
          <label htmlFor='rating'>Rating:</label>
          <input
            type="number"
            min={0} max={5} step={0.1}
            name="rating"
            id="rating"
            required
            value={formInputs.rating}
            onChange={(e) => inputHandler(e)}
          />
        </div>
        <input type="submit" value="Add" />
      </form>
    </StyledMain>
  );
}

export default AddNewBook;