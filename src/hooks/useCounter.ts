import { useState, useEffect, useRef } from 'react';

export function useCounter(
  target: number = 100,
  durationMs: number = 2700,
  start: boolean = true
) {
  const [count, setCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const rafRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    if (!start) return;

    startTimeRef.current = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTimeRef.current;
      const progress = Math.min(elapsed / durationMs, 1);
      // Ease out cubic for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);

      setCount(current);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setIsComplete(true);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
    };
  }, [target, durationMs, start]);

  const formatted = String(count).padStart(3, '0');

  return { count, formatted, isComplete, progress: count / target };
}
