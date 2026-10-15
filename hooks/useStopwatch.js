import { useEffect, useState } from "react";

function useStopwatch(isRunning) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const interval = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  return seconds;
}

export default useStopwatch;