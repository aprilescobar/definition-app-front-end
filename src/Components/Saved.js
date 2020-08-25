import React from 'react'
import { useContext } from 'react'
import { SavedWordsContext } from '../Context/SavedWordsCon'
import WordCard from './WordCard'

export default function Saved() {
    const [savedWords] = useContext(SavedWordsContext)

    const renderCards = () => savedWords.map(obj => {
        return renderCard(obj.word, obj.definitions)
    })

    const renderCard = (word, defs) => <WordCard key={`${word}-${Date.now()}`} word={word} defs={defs}/>

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
