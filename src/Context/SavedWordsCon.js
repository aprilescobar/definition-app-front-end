import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const SavedWordsContext = React.createContext([]);

const SavedWordsCon = ({children}) => {
    const [savedWords, setSavedWords] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/saved_words')
        .then(res => restructure(res.data))
    },[])

    const restructure = list => {
        const words = {};

        list.map(word => {
            const definitionsObject = {
                definition: word.definition,
                example: word.example,
                type: word.type
            }
            if(words[word.word]){
                let innerObj = words[word.word]
                innerObj["definitions"] = [...innerObj["definitions"], definitionsObject]
            } else {
                words[word.word] = {
                    word: word.word,
                    definitions: [definitionsObject]
                }
            }
            // words[word.word] ? words[word.word] = [...word]: words[word.word] = 1
        })
        setSavedWords(words)
        console.log(words)
    }

    return (
        <SavedWordsContext.Provider value={[savedWords, setSavedWords]}>
            {children}
        </SavedWordsContext.Provider>
    )
}

export default SavedWordsCon