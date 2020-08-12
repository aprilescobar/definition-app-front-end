import React, { createContext, useState } from 'react'

export const WordContext = createContext([]);

const Store = ({children}) => {
    const [defined, setDefined] = useState([]);

    return (
        <WordContext.Provider value={[defined, setDefined]}>
            {children}
        </WordContext.Provider>
    )
}

export default Store