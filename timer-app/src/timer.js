import { useEffect, useState } from "react";

const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [pausecount, setPausecount] = useState(0);

  function toggle() {
    setIsActive(!isActive);
    if (!isActive === false) {
      setPausecount(pausecount + 1);
    }
  }

  function reset() {
    setHours(0);
    setMinutes(25);
    setSeconds(0);
    setPausecount(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (hours === 0 && minutes === 0 && seconds === 0) {
      setIsActive(false);
    } else if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
      if (seconds === 0) {
        setSeconds(59);
        setMinutes(minutes - 1);
      }
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, hours, minutes, seconds]);

  return (
    <div className="app">
      <h1>Timer</h1>
      <h1 className="time">
        {`${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`}
      </h1>
      <div className="buttons">
        <button
          className={`button ${isActive ? "active" : "inactive"}`}
          onClick={toggle}
        >
          {isActive ? "Pause" : "Start"}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
      <h3>Pause Count: {pausecount}</h3>
    </div>
  );
};

export default Timer;
