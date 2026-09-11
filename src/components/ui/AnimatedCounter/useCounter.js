import { useState, useEffect } from 'react';

export function useCounter(endValue, duration = 2000, trigger = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let startTime = null;
    const startValue = 0;
    const isFloat = endValue % 1 !== 0;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Ease-out cubic formula
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = startValue + (endValue - startValue) * easeProgress;

      setCount(isFloat ? parseFloat(currentVal.toFixed(1)) : Math.floor(currentVal));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [endValue, duration, trigger]);

  return count;
}
