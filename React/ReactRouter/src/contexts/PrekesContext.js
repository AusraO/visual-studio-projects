import { createContext, useReducer, useEffect } from "react";

const PrekesContext = createContext();
const PrekesReducerTypes = {
  add : 'add_new_preke',
  get : 'get_all_prekes'
}

const reducer = (state, action) => {
  switch(action.type){
    case PrekesReducerTypes.get:
      return action.data;
    case PrekesReducerTypes.add:
    
    default:
      return state;
  }
}

const PrekesProvider = ({ children }) => {

  const [prekes, setPrekes] = useReducer(reducer, []);

  useEffect(()=>{
    fetch(`http://localhost:8080/prekes`)
      .then(res => res.json())
      .then(data => setPrekes({
        type: PrekesReducerTypes.get,
        data: data
      }));
  }, []);

  return (
    <PrekesContext.Provider
      value={{
        prekes,
        setPrekes,
        PrekesReducerTypes
      }}
    >
      { children }
    </PrekesContext.Provider>
  );
}
 
export { PrekesProvider };
export default PrekesContext;