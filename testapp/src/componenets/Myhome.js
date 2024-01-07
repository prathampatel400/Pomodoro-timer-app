import React from "react";
import { useEffect, useState } from "react";
import "./Myhome.css";

const Myhome = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (isActive && timeLeft === 0) {
      clearInterval(interval);

      if (isBreak) {
        setIsBreak(false);
        setTimeLeft(25 * 60);
      } else {
        setIsBreak(true);
        setTimeLeft(5 * 60);
      }
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft, isBreak]);

  const startTimer = () => {
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsBreak(false);
    setTimeLeft(25 * 60);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:
    ${String(remainingSeconds).padStart(2, "0")}`;
  };

  return (
    <>
      <div className="demo1">
        <div className="demo">
          <h1>{isBreak ? "Break Time" : "Pomodro Timer App"}</h1>
          <p>{formatTime(timeLeft)}</p>
          <button onClick={startTimer} disabled={isActive}>
            Start
          </button>
          <button onClick={pauseTimer} disabled={!isActive}>
            Pause
          </button>
          <button onClick={resetTimer}>Reset</button>
        </div>
      </div>
    </>
  );
};

export default Myhome;
