import React, { useState, useEffect } from 'react'; 
import "./App.css";

function App() {
  const [text, setText] = useState('');
  const [speed, setSpeed] = useState(1);
  const [words, setWords] = useState([]);
  const [currentWord, setCurrentWord] = useState(0);
  const [isReading, setIsReading] = useState(false);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  
  const handleSpeedChange = (event) => {
    setSpeed(event.target.value);
  };
  
  useEffect(() => {
    setWords(text.split(' '));
    setCurrentWord(0);
  }, [text]);
  
  useEffect(() => {
    let intervalId;
    intervalId = setInterval(() => {
      setCurrentWord(currentWord => currentWord + 1);
    }, 1000 / speed * 60);
    setCurrentWord(0);
    return () => clearInterval(intervalId);
  }, [isReading]);
  
  const handleStart = () => {
    setIsReading(!isReading);
    console.log("isReading: ", isReading);
  };

  return (
    <div className='APP'>
      <h1 className="heading"> Enter Text To Speed Read Below </h1>
      <div className="input-field">
          <input type="text" value={text} onChange={handleTextChange} size="40" height="100"/>
      </div>
      <h2 className="speedreader">Speed Read Below</h2>
      <div className="main">
        <div className="main-text">{words[currentWord]}</div>
      </div> 
      <div className="speed-control">
          <h3>Speed Selector in WPM (words per minute)</h3><input type="text" value={speed} onChange={handleSpeedChange} size="5" />
      </div>
      <button onClick={handleStart}>Start</button>
    </div>
  );
}

export default App;

