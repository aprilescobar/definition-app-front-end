import React, { useState, useRef, useContext } from 'react'
import WordCard from './WordCard';
import { WordContext, ShowCardContext } from '../Context/WordCon';

export default function InputForm() {
    const token = process.env.REACT_APP_OWLBOT_API_TOKEN
    const Owlbot = require('owlbot-js');
    const client = Owlbot(token)
    
    const [defined, setDefined] = useContext(WordContext)
    const [showCard, setShowCard] = useContext(ShowCardContext)
    
    const [word, setWord] = useState('')
    const [showWordError, setShowWordError] = useState(false)
    
    const wordEl = useRef()

    const handleSubmit = e => {
        e.preventDefault()
        client.define(word).then(function(result){
            setDefined(result);
            setShowCard(true);
            setWord('');
            setShowWordError(false);
        })
        word.length !== 0 && setShowWordError(true); 
    } 

    const renderCard = (definedWord, def) => <WordCard word={definedWord} def={def}/>

    return (
        <div>
            <div className="header">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="word">Enter a word:</label>
                        <input type="text" ref={wordEl} value={word} onChange={e => setWord(e.target.value)}/>
                        {showWordError && <small>*Word not found.</small>}
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
