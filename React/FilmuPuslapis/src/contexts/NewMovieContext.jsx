import { createContext, useReducer, useEffect } from "react";

const NewMovieContext = createContext();
const NewMovieActionTypes = {
  get: 'get_all_movies',
  add: 'add_new_movie',
  delete: 'remove_specific_movie'
};

const reducer = (state, action) => {
  switch(action.type){
    case NewMovieActionTypes.get:
      return action.data;
    case NewMovieActionTypes.add:
      fetch(`http://localhost:8080/movies`, {
        method: "POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(action.data)
      });
      return [ ...state, action.data ];
    case NewMovieActionTypes.delete:
      fetch(`http://localhost:8081/movies/${action.id}`, {
        method: "DELETE"
      });
      return state.filter(el => el.id !== action.id);
    default:
      return state;
  }
}

const NewMovieProvider = ({ children }) => {

  const [newMovie, setNewMovie] = useReducer(reducer, []);

  useEffect(() => {
    fetch(`http://localhost:8080/movies`)
      .then(res => res.json())
      .then(data => setNewMovie({
        type: NewMovieActionTypes.get,
        data: data
      }));
  }, []);

  return (
    <NewMovieContext.Provider
      value={{
        newMovie,
        setNewMovie,
        NewMovieActionTypes
      }}
    >
      { children }
    </NewMovieContext.Provider>
  );
}
 
export { NewMovieProvider };
export default NewMovieContext;