import React from 'react'
import { useContext } from 'react'
import { SavedWordsContext } from '../Context/SavedWordsCon'
import WordCard from './WordCard'

export default function Saved() {
    const [savedWords] = useContext(SavedWordsContext)

    const renderCards = () => savedWords.map(obj => {
        return renderCard(obj.word, obj.definitions)
    })

    const renderCard = (word, def) => <WordCard word={word} def={def}/>

    return (
        <div>
            Saved List
            <div className="card-grid">
                {renderCards()}
                {console.log(savedWords)}
            </div>
        </div>
    )
}
