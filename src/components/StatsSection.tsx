import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { STATS } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

export default function StatsSection() {
  return (
    <section
      id="stats"
      className="relative py-24 md:py-32 lg:py-40"
    >
      {/* Subtle top/bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stroke/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stroke/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-16 md:mb-24 text-center"
        >
          <span className="block text-xs font-body text-muted uppercase tracking-[0.3em] mb-4">
            Impact
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-body font-light text-text leading-tight">
            The{' '}
            <span className="font-display italic font-normal">metrics</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-6">
          {STATS.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  stat,
  index,
}: {
  stat: { value: string; label: string };
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const valueRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!cardRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: cardRef.current,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        setHasAnimated(true);

        // Animate the numeric part if it contains a number
        const numericMatch = stat.value.match(/(\d+)/);
        if (numericMatch && valueRef.current) {
          const target = parseInt(numericMatch[1]);
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration: 1.8,
            delay: index * 0.2,
            ease: 'power2.out',
            onUpdate: () => {
              if (valueRef.current) {
                valueRef.current.textContent = stat.value.replace(
                  /\d+/,
                  Math.round(obj.val).toString()
                );
              }
            },
          });
        }
      },
    });

    return () => trigger.kill();
  }, [stat.value, index]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group relative text-center py-12 md:py-16 px-6 rounded-2xl border border-stroke/20 hover:border-stroke/50 bg-surface/20 hover:bg-surface/40 transition-all duration-500"
    >
      {/* Decorative gradient glow on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, hsl(210 40% 50% / 0.04) 0%, transparent 70%)',
        }}
      />

      {/* Value */}
      <span
        ref={valueRef}
        className="block text-5xl md:text-6xl lg:text-7xl font-display italic text-text mb-4 relative z-10"
      >
        {hasAnimated ? stat.value : stat.value.replace(/\d+/, '0')}
      </span>

      {/* Accent line */}
      <div className="w-12 h-[2px] mx-auto mb-4 accent-gradient rounded-full opacity-60" />

      {/* Label */}
      <span className="block text-sm md:text-base font-body text-muted relative z-10">
        {stat.label}
      </span>
    </motion.div>
  );
}
