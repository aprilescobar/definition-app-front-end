import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const SavedWordsContext = React.createContext([]);

const SavedWordsCon = ({children}) => {
    const [savedWords, setSavedWords] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/saved_words')
        .then(res => setSavedWords(res.data))
    },[])

    return (
        <SavedWordsContext.Provider value={[savedWords, setSavedWords]}>
            {children}
        </SavedWordsContext.Provider>
    )
}

export default SavedWordsCon