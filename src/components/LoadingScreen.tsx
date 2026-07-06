import { useEffect, useRef, useState } from 'react';
import { useCycleText } from '../hooks/useCycleText';
import { useCounter } from '../hooks/useCounter';
import { LOADING_WORDS } from '../data/content';
import { gsap } from 'gsap';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  const { currentWord } = useCycleText(LOADING_WORDS, 900);
  const { formatted, isComplete, progress } = useCounter(100, 2700, true);

  // Lock scroll during loading
  useEffect(() => {
    document.documentElement.classList.add('loading-active');
    setHasStarted(true);
    return () => {
      document.documentElement.classList.remove('loading-active');
    };
  }, []);

  // Animate "Portfolio" label entrance
  useEffect(() => {
    if (labelRef.current && hasStarted) {
      gsap.fromTo(
        labelRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out', delay: 0.1 }
      );
    }
  }, [hasStarted]);

  // Exit animation when counter hits 100
  useEffect(() => {
    if (isComplete && containerRef.current) {
      const tl = gsap.timeline({
        onComplete: () => {
          onComplete();
        },
      });

      tl.to(containerRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: 'power2.inOut',
        delay: 0.3,
      });
    }
  }, [isComplete, onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col justify-between"
      style={{ backgroundColor: 'hsl(var(--bg))' }}
    >
      {/* Top-left: Portfolio label */}
      <div className="p-8 md:p-12">
        <span
          ref={labelRef}
          className="text-xs uppercase tracking-[0.3em] font-body opacity-0"
          style={{ color: 'hsl(var(--muted))' }}
        >
          Portfolio
        </span>
      </div>

      {/* Center: Rotating words */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative h-20 flex items-center justify-center overflow-hidden">
          <span
            key={currentWord}
            className="text-4xl md:text-6xl lg:text-7xl font-display italic animate-role-fade-in"
            style={{ color: 'hsl(var(--text))' }}
          >
            {currentWord}
          </span>
        </div>
      </div>

      {/* Bottom: Counter + Progress bar */}
      <div className="p-8 md:p-12">
        {/* Counter - bottom right */}
        <div className="flex justify-end mb-4">
          <span
            className="text-5xl md:text-7xl font-display italic tabular-nums"
            style={{ color: 'hsl(var(--text))' }}
          >
            {formatted}
          </span>
        </div>

        {/* Progress bar */}
        <div
          className="w-full h-[2px] overflow-hidden"
          style={{ backgroundColor: 'hsl(var(--stroke))' }}
        >
          <div
            className="h-full accent-gradient origin-left transition-transform duration-100 ease-linear"
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>
      </div>
    </div>
  );
}
