import React, { useState, useRef } from 'react';
import "./StopWatch.css";

function StopWatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const timerRef = useRef(null);

  const startStopStopwatch = () => {
    if (!running) {
      setRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);  //done so that the stopwatch doesnt continue running in the background
      setRunning(false);
    }
  };

  const resetStopwatch = () => {
    clearInterval(timerRef.current);
    setRunning(false);
    setTime(0);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className='stopwatch-container'>
      <h1>Stopwatch</h1>
      <p style={{fontSize:"22px"}}> Time : {formatTime(time)}</p>
      <div>
        <button onClick={startStopStopwatch}>
            {running ? 'Stop' : 'Start'}
        </button>
        <button onClick={resetStopwatch}>Reset</button>
      </div>
    </div>
  );
}

export default StopWatch;
