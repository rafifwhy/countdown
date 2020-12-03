import './App.css';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

export default function App() {
  const [minutes, setMinutes] = useState(0);
  const [second, setSecond] = useState(0);
  const [hours, setHours] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    if(isRunning){
      const interval = setInterval(() => {
        if(second > 0){
          setSecond(second - 1);
        }
        if(second === 0){
          if(minutes === 0){
            clearInterval(interval);
          }else{
            setMinutes(minutes - 1);
            setSecond(59);
          }
        }
        if(second === 0){
          if(minutes === 0){
            if(hours === 0){
              clearInterval(interval);
            }else{
              setHours(hours - 1);
              setMinutes(59);
              setSecond(59);
            }
          }
        }
      }, 1000);
      return () => clearInterval(interval);
    }
    if (second === 60){
      setMinutes(minutes + 1);
      setSecond(0);
    }
    if(minutes === 60){
      if(second >= 59){
        setHours(hours + 1);
        setMinutes(0);
        setSecond(0);
      }
    }
    if(minutes > 0){
      if(second < 0){
        setMinutes(minutes - 1);
        setSecond(59);
      }
    }
    if(minutes < 0){
      if(second < 0){
        setHours(hours - 1);
        setMinutes(59);
        setSecond(59);
      }
    }
  }, [hours, isRunning, minutes, second]);

  const reset = () => {
    setSecond(0);
    setMinutes(0);
    setHours(0);
    setStatus(0);
    setIsRunning(false);
  }

  const start = () => {
    setIsRunning(true);
    setStatus(1);
    
  }

  const pause = () => {
    setIsRunning(false);
  }

  const resume = () => {
    setIsRunning(true);
  }

  const incsec = () => {
    setSecond(second + 1);
  }

  const incmin = () => {
    setMinutes(minutes + 1);
  }

  const inchours = () =>{
    setHours(hours + 1);
  }

  const decsec = () => {
    setSecond(second - 1);
  }

  const decmin= () => {
    setMinutes(minutes - 1);
  }

  const dechours = () => {
    setHours(hours - 1);
  }

  return (
    <div className="App">
      <h1>SIMPLE COUNTDOWN</h1>
      <div>
        {!isRunning && <FontAwesomeIcon icon={['fas', 'caret-up']} style={{width: '100px', height: '100px'}} onClick={inchours} />}
        {!isRunning && <FontAwesomeIcon icon={['fas', 'caret-up']} style={{width: '100px', height: '100px'}} onClick={incmin} />}
        {!isRunning && <FontAwesomeIcon icon={['fas', 'caret-up']} style={{width: '100px', height: '100px'}} onClick={incsec} />}
      </div>
      <h1>{hours}:{minutes}:{second}</h1>
      <div>
        {!isRunning && (hours > 0) && (<FontAwesomeIcon icon={['fas', 'caret-down']} style={{width: '100px', height: '100px'}} onClick={dechours}/>)}
        {!isRunning && (hours === 0) && (<FontAwesomeIcon icon={['fas', 'caret-down']} style={{width: '100px', height: '100px'}}/>)}
        {!isRunning && (minutes > 0) && (<FontAwesomeIcon icon={['fas', 'caret-down']} style={{width: '100px', height: '100px'}} onClick={decmin}/>)}
        {!isRunning && (minutes === 0) && (<FontAwesomeIcon icon={['fas', 'caret-down']} style={{width: '100px', height: '100px'}} />)}
        {!isRunning && (second > 0) && (<FontAwesomeIcon icon={['fas', 'caret-down']} style={{width: '100px', height: '100px'}} onClick={decsec}/>)}
        {!isRunning && (second === 0) && (<FontAwesomeIcon icon={['fas', 'caret-down']} style={{width: '100px', height: '100px'}} />)}
      </div>
      {!isRunning && status === 0 && (<button onClick={start}><h1>Start</h1></button>)}
      <div>
        {!isRunning && status === 1 && (<button onClick={resume}><h1>Resume</h1></button>)}
        {!isRunning && status === 1 && (<button onClick={reset}><h1>Reset</h1></button>)}
        {isRunning && (hours >= 0) && (minutes >= 0) && (second >= 0) && (<button onClick={pause}><h1>Pause</h1></button>)}
        {isRunning && (hours >= 0) && (minutes >= 0) && (second >= 0) && (<button onClick={reset}><h1>Reset</h1></button>)}
      </div>
    </div>
  );
}