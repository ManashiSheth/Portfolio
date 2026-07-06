import { motion } from 'framer-motion';
import { EXPERIENCE } from '../data/content';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const pillVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative py-24 md:py-32 lg:py-40"
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
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-body font-light text-text leading-tight">
            Professional{' '}
            <span className="font-display italic font-normal">journey</span>
          </h2>
        </motion.div>

        {/* Experience Pills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col gap-4"
        >
          {EXPERIENCE.map((entry, index) => (
            <motion.div
              key={index}
              variants={pillVariants}
              className="group"
            >
              <div
                className={`
                  flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0
                  rounded-full border transition-all duration-400
                  px-6 py-4 sm:px-8 sm:py-5
                  hover:border-stroke hover:bg-surface/50
                  ${entry.isCurrent
                    ? 'border-stroke/80 bg-surface/30'
                    : 'border-stroke/30 bg-transparent'
                  }
                `}
              >
                {/* Role */}
                <div className="flex items-center gap-3 sm:flex-1 min-w-0">
                  {entry.isCurrent && (
                    <span className="relative flex h-2 w-2 flex-shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                    </span>
                  )}
                  <span className="text-text font-body font-medium text-sm md:text-base truncate">
                    {entry.role}
                  </span>
                </div>

                {/* Separator */}
                <div className="hidden sm:block w-px h-4 bg-stroke/50 mx-6 flex-shrink-0" />

                {/* Company */}
                <div className="sm:flex-1 min-w-0 pl-5 sm:pl-0">
                  <span className="text-muted font-body text-sm md:text-base">
                    @{' '}
                    <span className="text-text/80 font-display italic text-base md:text-lg">
                      {entry.company}
                    </span>
                  </span>
                </div>

                {/* Separator */}
                <div className="hidden sm:block w-px h-4 bg-stroke/50 mx-6 flex-shrink-0" />

                {/* Dates */}
                <div className="pl-5 sm:pl-0 flex-shrink-0">
                  <span className="text-muted font-body text-xs md:text-sm tracking-wide tabular-nums">
                    {entry.dates}
                  </span>
                  {entry.isCurrent && (
                    <span className="ml-3 text-[10px] font-body font-medium uppercase tracking-[0.15em] text-green-400/80 bg-green-400/10 px-2.5 py-0.5 rounded-full">
                      Current
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative bottom line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          className="mt-16 h-px bg-stroke/30 origin-left"
        />
      </div>
    </section>
  );
}
