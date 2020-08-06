import React, { useState, useRef } from 'react'

export default function WordCard({word, def}) {
    const [flip, setFlip] = useState(true)

    const frontEl = useRef()
    const backEl = useRef()


    const renderDefs = () => {
        return def.map((def, index) => {
            const type = decodeString(def.type)
            const definition = decodeString(def.definition)
            const example = decodeString(def.example)

            return (
            <div className="flashcard-option" key={`${index}-${Date.now()}`}>
                Type: {type} <br/>
                Definition: {definition} <br/>
                Example: {example ? example : "none provided"}<br/><br/>
            </div>
        )})
    }

    const decodeString = string => {
        const textArea = document.createElement('textarea')
        textArea.innerHTML = string
        return textArea.value
    }

    return (
        <div 
            className={`card ${flip ? 'flip' : ''}`}
            onClick={() => setFlip(!flip)}
        >
            <div className="front" ref={frontEl}>
                <div className="flashcard-options">
                    {renderDefs()}
                </div>
            </div>
            <div className="back" ref={backEl}>
                {word}
            </div>
        </div>
    )
}
