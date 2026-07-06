import { useState, useEffect, useCallback } from 'react';

export function useCycleText(
  words: readonly string[],
  intervalMs: number = 3000
) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const cycle = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
      setIsAnimating(false);
    }, 50);
  }, [words.length]);

  useEffect(() => {
    const timer = setInterval(cycle, intervalMs);
    return () => clearInterval(timer);
  }, [cycle, intervalMs]);

  return {
    currentWord: words[currentIndex],
    currentIndex,
    isAnimating,
  };
}
