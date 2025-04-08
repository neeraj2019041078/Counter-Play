import React, { useEffect, useState } from 'react';
import './App.css'; // Import the CSS file

const App = () => {
  const [count, setCount] = useState(10);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (count > 0 && flag === true) {
      const time = setTimeout(() => {
        setCount(count - 1);
      }, 1000);

      return () => clearTimeout(time);
    }
  }, [count, flag]);

  const handleSt = () => {
    setFlag(true);
  };

  const handleStop = () => {
    setFlag(!flag);
  };

  const handleR = () => {
    setCount(10);
    setFlag(false);
  };

  return (
    <div className="app">
      <h1 className="title">Countdown Timer</h1>
      <div className="count">{count}</div>
      <div className="buttons">
        <button className="btn" onClick={handleSt}>Start</button>
        <button className="btn" onClick={handleStop}>Stop</button>
        <button className="btn" onClick={handleR}>Reset</button>
      </div>
    </div>
  );
};

export default App;
