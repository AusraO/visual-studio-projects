import { createContext, useReducer, useEffect } from "react";

const DogsContext = createContext();

const DogsActionTypes = {
    get: 'get_all_dogs',
    add: 'add_new_dog'
}

const reducer = (state, action) => {
    switch (action.type) {
        case DogsActionTypes.get:
            return action.data;
        case DogsActionTypes.add:
            fetch(`http://localhost:8080/dogs`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(action.data)
            })
            return [...state, action.data]
        default:
            return state
    }
}

const DogsProvider = ({ children }) => {

    const [dogs, setDogs] = useReducer(reducer, []);

    useEffect(() => {
        fetch(`http://localhost:8080/dogs`)
            .then(res => res.json())
            .then(data => setDogs({
                type: DogsActionTypes.get,
                data: data
            }));
    }, []);

    return (
        <DogsContext.Provider
            value={{
                dogs,
                DogsActionTypes,
                setDogs
            }}
        >
            {children}
        </DogsContext.Provider>
    )
}

export { DogsProvider };
export default DogsContext;