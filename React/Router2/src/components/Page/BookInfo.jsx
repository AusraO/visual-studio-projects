import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const BookInfo = () => {

  const { id } = useParams();

  const [book, setBook] = useState();

  useEffect(()=>{
    fetch(`http://localhost:8081/books/${id}`)
    .then(res => res.json())
    .then(data => setBook(data))
  }, []);

  return (
    <main>
      {
        book ? 
        <div>
          <h1>{book.name}</h1>
          <img src={book.picture} alt={book.name} />
          <p>Author: {book.author}</p>
          <p>{book.description}</p>
          <p>Average price: {book.price}</p>
        </div> :
        <p>loading</p>
      }
    </main>
  );
}
 
export default BookInfo;