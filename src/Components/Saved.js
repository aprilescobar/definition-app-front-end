import React from 'react'
import { useContext } from 'react'
import { SavedWordsContext } from '../Context/SavedWordsCon'
import WordCard from './WordCard'

export default function Saved() {
    const [savedWords] = useContext(SavedWordsContext)

    // const renderSaved = () => (
    //     savedWords.map(word => <WordCard word={word.word} def={word.def}/>)
    // )

    return (
        <div>
            Saved List
            {/* {renderSaved()} */}
            {console.log(savedWords)}
        </div>
    )
}
