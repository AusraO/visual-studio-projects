import { createContext,  useReducer, useEffect} from "react";

const CardContext = createContext()


const reducerTypes = {
    pirmas: 'pirmas',
    antras: 'antras',
    trecias: 'trecias',
    prideti_kortele: 'prideti_kortele'
}

const reducer = (state, action) => {
    switch (action.type) {
        case reducerTypes.pirmas:
            return state.map(el => {
                if (el.id === action.id && el.className === 'boxInside') {
                    fetch(`http://localhost:8080/boxes/${action.id}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ className: 'boxAfterFirstChange' })
                    });
                    return {
                        ...el,
                        className: 'boxAfterFirstChange'
                    }
                }
                else {
                    return el
                }
            })
        case reducerTypes.prideti_kortele: //jeigu pridedam kortele
            return [...state, action.data]; //grazinam destrukturizuota dabartine busena
        default:
            console.error('Unknown action:', action.type);
            return state;
    }
}

const CardProvider = ({ children }) => {
    const [boxes, boxChanging] = useReducer(reducer, []);
    useEffect(() => {
        fetch('http://localhost:8080/boxes')
            .then(res => res.json())
            .then(data => data.forEach (el => boxChanging({
                type: reducerTypes.prideti_kortele,
                data: el
            })))
    }, []);



    return (<>
        <CardContext.Provider
            value={{
                boxes,
                reducerTypes
            }}
        >
            {children}
        </CardContext.Provider>
    </>);
}

export { CardProvider };
export default CardContext;