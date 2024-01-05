import React, { useState, useEffect } from 'react';

interface TimerProps {}

const TimerWithInput: React.FC<TimerProps> = () => {
  const [inputSeconds, setInputSeconds] = useState<string>('');
  const [seconds, setSeconds] = useState<number | null>(null);

  const handleInputChange = (e: any) => {
    setInputSeconds(e.target.value);
  };

  const startTimer = () => {
    const parsedSeconds = parseInt(inputSeconds);
    if (!isNaN(parsedSeconds) && parsedSeconds > 0) {
      setSeconds(parsedSeconds);
    }
  };

  useEffect(() => {
    if (seconds === 0) {
      // Timer is done, you can perform additional actions here
      alert("Time's up!");
    }

    const interval = setInterval(() => {
      setSeconds((prevSeconds) => (prevSeconds ? prevSeconds - 1 : null));
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <div>
      <label>
        Set Timer (seconds):{' '}
        <input type="text" value={inputSeconds} onChange={handleInputChange} />
      </label>
      <button onClick={startTimer}>Start Timer</button>
      {seconds !== null && (
        <div>
          <h3>Remaining Time: {seconds} seconds</h3>
        </div>
      )}
    </div>
  );
};

export default TimerWithInput;
