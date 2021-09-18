import React, { useRef, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import './countdown.css'
export const Timeup=false;
const RenderTime = ({ remainingTime,Timeup }) => {

  const currentTime = useRef(remainingTime);
  const prevTime = useRef(null);
  const isNewTimeFirstTick = useRef(false);
  const [, setOneLastRerender] = useState(0);
  
  if (currentTime.current !== remainingTime) {
    isNewTimeFirstTick.current = true;
    prevTime.current = currentTime.current;
    currentTime.current = remainingTime;
  } else {
    isNewTimeFirstTick.current = false;
  }

  if (remainingTime === 0) {
    
    Timeup=true;
    setTimeout(() => {
      setOneLastRerender(val=>val+1)
      
    }, 20);
    

  }
  
  

  const isTimeUp = isNewTimeFirstTick.current;
 
  
  return (
    <div className="time-wrapper">
      <div key={remainingTime} className={`time ${isTimeUp ? "up"  : ""}`}>
        {remainingTime}
      </div>
      {prevTime.current !== null && (
        <div
          key={prevTime.current}
          className={`time ${!isTimeUp ? "down" : ""}`}
        >
          {prevTime.current}
        </div>
      )}
    </div>
  );
};

export default function Countdown({reset,pause,setTimeup}) {
  
  return (
    <div>
      <div className="timer-wrapper">
        <CountdownCircleTimer
          key={reset}
          isPlaying ={!pause}
          duration={30}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          size={180}
          onComplete={() => {setTimeup(true)
            return[false, 1000]}}  
          
        >
          {RenderTime}
        </CountdownCircleTimer>
      </div>
    </div>
  );
}