import React, { useState, useEffect, useRef } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (running) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [running]);

  const handleStartStop = () => {
    setRunning(!running);
  };

  const handleReset = () => {
    setTime(0);
    setRunning(false);
  };

  const formatTime = (time) => {
    const getMilliseconds = `0${(time % 1000) / 10}`.slice(-2);
    const getSeconds = `0${Math.floor(time / 1000) % 60}`.slice(-2);
    const getMinutes = `0${Math.floor(time / 60000) % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600000)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds} : ${getMilliseconds}`;
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md"
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      <h1 className="text-4xl font-bold mb-4">Stopwatch</h1>
      <div
        className={`text-6xl font-mono p-4 rounded-md shadow-md ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        {formatTime(time)}
      </div>
      <div className="mt-4 space-x-4">
        <button
          onClick={handleStartStop}
          className="px-4 py-2 bg-purple-500 text-white rounded-md shadow-md"
        >
          {running ? "Stop" : "Start"}
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-red-500 text-white rounded-md shadow-md"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
