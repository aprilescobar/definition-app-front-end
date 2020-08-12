import React, { useState } from 'react';

export const WordContext = React.createContext('');
export const ShowCardContext = React.createContext('');


const WordCon = ({children}) => {
    const [wordList, setWordList] = useState('');
    const [showCard, setShowCard] = useState(false)

    return (
        <>
            <WordContext.Provider value={[wordList, setWordList]}>
            <ShowCardContext.Provider value={[showCard, setShowCard]}>
                {children}
            </ShowCardContext.Provider>
            </WordContext.Provider>
        </>
    )
}

export default WordCon