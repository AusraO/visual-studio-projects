import { createContext, useReducer, useEffect } from "react";

const CountriesContext = createContext()
const CountriesReducerTypes = {
    add: 'add_new_country',
    get: 'get_new_countries'
}

const reducer = (state, action) => {
    switch (action.type) {
        case CountriesReducerTypes.get:
            return action.data;

        case CountriesReducerTypes.add:

      
        default:
            return state;
    }
}



const CountriesProvider = ({ children }) => {


    const [countries, setCountries] = useReducer(reducer, [])



    useEffect(() => {
        fetch(`http://localhost:8080/countries`)
            .then(res => res.json())
            .then(data => setCountries({
                type: CountriesReducerTypes.get,
                data: data
            }))
    }, [])

    return (<>
        <CountriesContext.Provider
            value={{
                countries,
                setCountries,
                CountriesReducerTypes
            }}>
            {children}
        </CountriesContext.Provider>
    </>);
}

export { CountriesProvider };
export default CountriesContext;