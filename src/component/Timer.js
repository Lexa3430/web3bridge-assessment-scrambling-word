import { useEffect, useState } from "react";

const Timer = ({ initialTime, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp(); // Trigger the callback when time is up
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer); // Clean up the interval
  }, [timeLeft, onTimeUp]);

  return (
    <div className="mt-4 text-lg font-bold text-black">
      Time Left: <span>{timeLeft}</span> seconds
    </div>
  );
};

export default Timer;
