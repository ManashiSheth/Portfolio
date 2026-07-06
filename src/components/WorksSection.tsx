import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../data/content';

export default function WorksSection() {
  return (
    <section
      id="works"
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
            Selected Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-body font-light text-text leading-tight">
            Featured{' '}
            <span className="font-display italic font-normal">projects</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
