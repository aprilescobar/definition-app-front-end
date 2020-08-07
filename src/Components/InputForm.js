import React, { useState, useRef } from 'react'
import WordCard from './WordCard';

export default function InputForm() {
    const token = process.env.REACT_APP_OWLBOT_API_TOKEN
    const Owlbot = require('owlbot-js');
    const client = Owlbot(token)
    
    const [word, setWord] = useState('')
    const [defined, setDefined] = useState({})
    const [showCard, setShowCard] = useState(false)
    
    const wordEl = useRef()

    const handleSubmit = e => {
        e.preventDefault()
        client.define(word).then(function(result){
            setDefined(result)
            setShowCard(true)
            setWord('')
        })
    }

    const renderCard = (word, def) => <WordCard word={word} def={def}/>

    return (
        <div>
            <div className="header">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="word">Enter a word:</label>
                        <input type="text" ref={wordEl} value={word} onChange={e => setWord(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <button className="button">Define</button>
                    </div>
                </form>
            </div>
            <div className="card-grid">
                {showCard && renderCard(defined.word, defined.definitions)}
            </div>
        </div>
    )
}