import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface MarqueeTextProps {
  text: string;
  repeat?: number;
  className?: string;
}

export default function MarqueeText({
  text,
  repeat = 10,
  className = '',
}: MarqueeTextProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(trackRef.current, {
        xPercent: -50,
        duration: 30,
        ease: 'none',
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  const repeatedText = Array(repeat)
    .fill(text)
    .join('');

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div ref={trackRef} className={`inline-block ${className}`}>
        <span>{repeatedText}</span>
        <span>{repeatedText}</span>
      </div>
    </div>
  );
}
