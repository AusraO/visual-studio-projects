import { useEffect } from "react";
import { createContext, useReducer } from "react";

const CardsContext = createContext();
const CardsActionTypes = {
    get: 'get_all_cards',
    add: 'add_new_card',
    remove: 'remove_specific_card'
};

const reducer = (state, action) => {
    switch (action.type) {
        case CardsActionTypes.get:
            return action.data;
        case CardsActionTypes.add:
            fetch(`http://localhost:8080/movies`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(action.data)
            });
            return [...state, action.data];
        case CardsActionTypes.delete:
            fetch(`http://localhost:8080/movies/${action.id}`, {
                method: "DELETE"
            });
            return state.filter(el => el.id !== action.id);
        default:
            return state;
    }
}

const CardsProvider = ({ children }) => {
    const [cards, setCards] = useReducer(reducer, []);

    useEffect(() => {
        fetch(`http://localhost:8080/movies`)
            .then(res => res.json())
            .then(data => setCards({
                type: CardsActionTypes.get,
                data: data
            }));
    }, []);


    return (<>
        <CardsContext.Provider
        value={{
            cards,
            setCards,
            CardsActionTypes
        }}
        
        >
            {children}
        </CardsContext.Provider>
    </>);
}

export { CardsProvider };
export default CardsContext;