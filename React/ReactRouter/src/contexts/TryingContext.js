import { createContext, useReducer } from "react"

const CounterContext = createContext()


const INITIAL_STATE = 0;

const reducer = (state, action) => {
    switch (action) {
        case 'more':
            return state + 1;
        case 'less':
            return state - 1
        default:
            return state
    }
}

const counterProvider = ({children}) => {
    const [numberNow, dispatch] = useReducer(reducer, INITIAL_STATE)


    return (
        <>
            <CounterContext.Provider
                value={{
                    numberNow,
                    dispatch,

                }}>
                {children}
            </CounterContext.Provider>


        </>
    )
}
export { counterProvider };
export default CounterContext