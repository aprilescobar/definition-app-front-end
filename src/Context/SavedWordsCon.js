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
        const collectedWords = {};
        const savedList = [];

        list.forEach(word => {
            const definitionsObject = {
                definition: word.definition,
                example: word.example,
                type: word.word_type
            }
            if(collectedWords[word.word]){
                let innerObj = collectedWords[word.word]
                innerObj["definitions"] = [...innerObj["definitions"], definitionsObject]
            } else {
                collectedWords[word.word] = {
                    word: word.word,
                    definitions: [definitionsObject]
                }
            }
        })

        for(let defined in collectedWords){
            savedList.push(collectedWords[defined])
        }
        setSavedWords(savedList)
    }

    return (
        <SavedWordsContext.Provider value={[savedWords, setSavedWords]}>
            {children}
        </SavedWordsContext.Provider>
    )
}

export default SavedWordsCon