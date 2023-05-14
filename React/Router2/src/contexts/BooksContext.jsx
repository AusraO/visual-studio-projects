import { createContext, useReducer, useEffect } from "react";

const BooksContext = createContext();
const BooksActionTypes = {
  get: 'get_all_books',
  add: 'add_new_book'
}

const reducer = (state, action) =>{
  switch(action.type){
    case BooksActionTypes.get:
      return action.data;
      case BooksActionTypes.add:
        fetch(`http://localhost:8081/books`, {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(action.data)
        })
        return [...state, action.data]
    
    default: 
      return state;
  }
}

const BooksProvider = ({ children }) => {

  const [books, setBooks] = useReducer(reducer, []);

  useEffect(()=>{
    fetch(`http://localhost:8081/books`)
      .then(res => res.json())
      .then(data => setBooks({
        type: BooksActionTypes.get,
        data: data
      }));
  }, []);

  return (
    <BooksContext.Provider
      value={{
        books,
        BooksActionTypes,
        setBooks
      }}
    >
      { children }
    </BooksContext.Provider>
  );
}
 
export { BooksProvider };
export default BooksContext;
