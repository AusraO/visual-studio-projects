import { createContext, useState } from "react";

const CardContext = createContext()

const CardProvider = ({ children }) => {
    return (<>
        <CardContext.Provider>
            {children}
        </CardContext.Provider>
    </>);
}

export {CardProvider} ;
export default CardContext;