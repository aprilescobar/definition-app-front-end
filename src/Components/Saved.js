import React from 'react'
import { useContext } from 'react'
import { SavedWordsContext } from '../Context/SavedWordsCon'
import WordCard from './WordCard'

export default function Saved() {
    const [savedWords] = useContext(SavedWordsContext)

    return (
        <div>
            Saved List
            {console.log(savedWords)}
        </div>
    )
}
