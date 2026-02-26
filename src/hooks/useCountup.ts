import { useEffect, useRef, useState } from "react";

export const useCountUp = (end: number, duration = 2000) => {
  const [count, setCount] = useState(0);

  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const step = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = timestamp - startTimeRef.current;

      const value = Math.min(Math.round((progress / duration) * end), end);
      setCount(value);

      if (value < end) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [end, duration]);

  return count;
};
