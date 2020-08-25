import React, { useState, useRef, useEffect, useContext } from 'react'
import { SavedWordsContext } from '../Context/SavedWordsCon'

export default function WordCard({word, defs}) {
    const [flip, setFlip] = useState(true)
    const [height, setHeight] = useState('initial')
    const [savedList, setSavedList] = useContext(SavedWordsContext)

    const frontEl = useRef()
    const backEl = useRef()

    const setMaxHeight = () => {
        const frontHeight = frontEl.current.getBoundingClientRect().height
        const backHeight = backEl.current.getBoundingClientRect().height
        setHeight(Math.max(frontHeight, backHeight, 150))
    }

    useEffect(() => { setMaxHeight() },[word, defs])
    useEffect(() => {
        window.addEventListener('resize', setMaxHeight)
        return () => window.removeEventListener('resize', setMaxHeight)
    },[])


    const renderDefs = () => {
        return defs.map((def, index) => {
            const type = decodeString(def.type)
            const definition = decodeString(def.definition)
            const example = decodeString(def.example)

            return ( <div className="word-def" key={`${index}-${Date.now()}`}>
                <em>{type}</em><br/>
                <div className="text-box">
                    <b>Definition:</b> <br/>{definition} <br/>
                </div>
                {example && <div className="text-box"><b>Example:</b> <br/>{example}</div>}
            </div>
        )})
    }

    const decodeString = string => {
        const text = document.createElement('textarea')
        text.innerHTML = string
        return text.value
    }

    const handleSave = () => {
        defs.forEach(def => {
            fetch('http://localhost:3000/saved_words', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ 
                    word: word,
                    definition: def.definition,
                    example: def.example,
                    word_type: def.type
                })
            })
        })
        const addWord = { word, definitions: defs }
        setSavedList([...savedList, addWord])
    }

    return (
        <div>
            <div 
                className={`card ${flip ? 'flip' : ''}`}
                style={{height: height}}
                onClick={() => setFlip(!flip)}
            >
                <div className="front" ref={frontEl}>
                    <div className="word-defs">
                        {renderDefs()}
                    </div>
                </div>
                <div className="back" ref={backEl}>
                    <div className="word">
                        <h4>{word}</h4>
                    </div>
                </div>
            </div>
            <div className="add">
                <button onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}
