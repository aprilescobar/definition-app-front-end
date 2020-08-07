import React, { useState, useRef, useEffect } from 'react'

export default function WordCard({word, def}) {
    const [flip, setFlip] = useState(true)
    const [height, setHeight] = useState('initial')

    const frontEl = useRef()
    const backEl = useRef()

    const setMaxHeight = () => {
        const frontHeight = frontEl.current.getBoundingClientRect().height
        const backHeight = backEl.current.getBoundingClientRect().height
        setHeight(Math.max(frontHeight, backHeight, 150))
    }

    useEffect(() => { setMaxHeight() },[word, def])
    useEffect(() => {
        window.addEventListener('resize', setMaxHeight)
        return () => window.removeEventListener('resize', setMaxHeight)
    },[])


    const renderDefs = () => {
        return def.map((def, index) => {
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
                <button onClick={() => console.log("click")}>Save</button>
            </div>
        </div>
    )
}
