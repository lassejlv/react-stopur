import { useEffect, useState } from 'react';

export default function App() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function handleStart() {
    setIsActive(true);
  }

  function handleStop() {
    setIsActive(false);
  }

  function handleReset() {
    setTime(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval: any;

    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <div>
      <h1>{time}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
