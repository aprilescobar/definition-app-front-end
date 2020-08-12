import React, { useState } from 'react'

export const WordListContext = React.createContext([]);

const WordListCon = ({children}) => {
    const [defined, setDefined] = useState([]);

    return (
        <WordListContext.Provider value={[defined, setDefined]}>
            {children}
        </WordListContext.Provider>
    )
}

export default WordListCon