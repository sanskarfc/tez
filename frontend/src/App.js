import React, { useState, useEffect } from 'react';
import './App.css'; 

function App() {
    const [text, setText] = useState('');
    const [speed, setSpeed] = useState('');
    const [words, setWords] = useState([]);
    const [currentWord, setCurrentWord] = useState(0);

    const handleTextChange = (event) => {
        setText(event.target.value);
    } 

    const handleSpeedChange = (event) => {
        setSpeed(event.target.value);
    } 

    useEffect(() => {
        setWords(text.split(' ')); 
        setCurrentWord(0);
    }, [text]); 

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord(currentWord => currentWord + 1);
        }, 1000/speed); 
        return () => clearInterval(interval);
    }, [speed]); 

    return (
        <div className="apppp"> 
            <h1>{words[currentWord]}</h1>
            <input type="text" value={text} onChange={handleTextChange} />
            <select value={speed} onChange={handleSpeedChange}>
                <option value="1">1 word per second</option>
                <option value="2">2 word per second</option>
                <option value="3">3 word per second</option>
            </select>
        </div>
    );
}

export default App;
