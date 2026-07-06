import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useHLS } from '../hooks/useHLS';
import { useCycleText } from '../hooks/useCycleText';
import { HLS_VIDEO_SRC, HERO_ROLES } from '../data/content';
import ScrollIndicator from './ScrollIndicator';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const videoRef = useHLS(HLS_VIDEO_SRC);

  const { currentWord } = useCycleText(HERO_ROLES, 3000);

  // GSAP name-reveal + blur-in animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Name reveal: clip-path wipe from left to right
      if (nameRef.current) {
        gsap.fromTo(
          nameRef.current,
          {
            clipPath: 'inset(0 100% 0 0)',
            opacity: 0,
          },
          {
            clipPath: 'inset(0 0% 0 0)',
            opacity: 1,
            duration: 1.2,
            ease: 'power4.out',
            delay: 3.5,
          }
        );
      }

      // Description blur-in
      if (descRef.current) {
        gsap.fromTo(
          descRef.current,
          {
            filter: 'blur(8px)',
            opacity: 0,
            y: 20,
          },
          {
            filter: 'blur(0px)',
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            delay: 4.0,
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* HLS Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          autoPlay
          loop
          playsInline
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Bottom gradient fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-64"
          style={{
            background: 'linear-gradient(to top, hsl(var(--bg)) 0%, transparent 100%)',
          }}
        />
        {/* Top gradient fade */}
        <div
          className="absolute top-0 left-0 right-0 h-32"
          style={{
            background: 'linear-gradient(to bottom, hsl(var(--bg) / 0.3) 0%, transparent 100%)',
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-20">
        <div className="flex flex-col gap-6 max-w-4xl">
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.3, ease: 'easeOut' }}
            className="text-xs text-muted uppercase tracking-[0.3em] font-body"
          >
            Collection '26
          </motion.span>

          {/* Name */}
          <h1
            ref={nameRef}
            className="text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight opacity-0"
            style={{ color: 'hsl(var(--text))' }}
          >
            Manashi
            <br />
            Sheth
          </h1>

          {/* Role line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 4.2 }}
            className="flex items-center gap-2 text-lg md:text-xl font-body"
          >
            <span className="text-muted">A</span>
            <span
              key={currentWord}
              className="text-text font-medium animate-role-fade-in inline-block"
            >
              {currentWord}
            </span>
            <span className="text-muted">based in Gujarat.</span>
          </motion.div>

          {/* Description */}
          <p
            ref={descRef}
            className="text-muted text-base md:text-lg max-w-xl leading-relaxed font-body font-light opacity-0"
          >
            Designing scalable SaaS interfaces and agentic AI workflows that
            drive deep user engagement and business value.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 4.5, ease: 'easeOut' }}
            className="flex items-center gap-4 mt-4"
          >
            <a
              href="#works"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#works')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center px-8 py-3.5 rounded-full font-body text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                backgroundColor: 'hsl(var(--accent))',
                color: 'hsl(var(--bg))',
              }}
            >
              See Works
            </a>
            <a
              href="mailto:manshishth@gmail.com"
              className="inline-flex items-center px-8 py-3.5 rounded-full font-body text-sm font-medium border transition-all duration-300 hover:scale-105 active:scale-95 gradient-border"
              style={{
                borderColor: 'hsl(var(--stroke))',
                color: 'hsl(var(--text))',
              }}
            >
              Reach out
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}
