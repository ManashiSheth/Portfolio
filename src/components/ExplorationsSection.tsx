import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EXPLORATIONS = [
  { id: 1, src: '/explorations/explore-1.png', label: 'Fintech Dashboard', category: 'Mobile App' },
  { id: 2, src: '/explorations/explore-2.png', label: 'Project Management', category: 'Web App' },
  { id: 3, src: '/explorations/explore-3.png', label: 'Music Streaming', category: 'Mobile App' },
  { id: 4, src: '/explorations/explore-4.png', label: 'Fitness Tracker', category: 'Mobile App' },
  { id: 5, src: '/explorations/explore-5.png', label: 'Social Platform', category: 'Mobile App' },
  { id: 6, src: '/explorations/explore-6.png', label: 'AI Chat Interface', category: 'Web App' },
];

const leftColumn = EXPLORATIONS.filter((_, i) => i % 2 === 0);
const rightColumn = EXPLORATIONS.filter((_, i) => i % 2 === 1);

export default function ExplorationsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left column moves slower (parallax up)
      if (leftColRef.current) {
        gsap.to(leftColRef.current, {
          y: -80,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }

      // Right column moves faster (parallax down — opposite direction)
      if (rightColRef.current) {
        gsap.to(rightColRef.current, {
          y: 80,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="explorations"
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-16 md:mb-20"
        >
          <span className="block text-xs font-body text-muted uppercase tracking-[0.3em] mb-4">
            Explorations
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-body font-light text-text leading-tight">
            Visual{' '}
            <span className="font-display italic font-normal">playground</span>
          </h2>
          <p className="mt-4 text-muted font-body text-base md:text-lg max-w-xl">
            Conceptual UI explorations and design experiments pushing creative boundaries.
          </p>
        </motion.div>

        {/* Parallax Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Left Column — slower parallax */}
          <div ref={leftColRef} className="flex flex-col gap-6 md:gap-8">
            {leftColumn.map((item, index) => (
              <GalleryCard key={item.id} item={item} index={index} />
            ))}
          </div>

          {/* Right Column — faster parallax, offset start */}
          <div
            ref={rightColRef}
            className="flex flex-col gap-6 md:gap-8 md:mt-16"
          >
            {rightColumn.map((item, index) => (
              <GalleryCard key={item.id} item={item} index={index + leftColumn.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GalleryCard({
  item,
  index,
}: {
  item: (typeof EXPLORATIONS)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group relative rounded-2xl overflow-hidden border border-stroke/30 hover:border-stroke/60 transition-all duration-500 cursor-pointer"
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={item.src}
          alt={item.label}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

      {/* Content overlay — appears on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <span className="block text-[10px] font-body uppercase tracking-[0.2em] text-white/50 mb-1">
          {item.category}
        </span>
        <span className="block text-base md:text-lg font-display italic text-white">
          {item.label}
        </span>
      </div>

      {/* Top-right badge */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
        <div className="w-8 h-8 rounded-full glass flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M1 11L11 1M11 1H4M11 1V8"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
