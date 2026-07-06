import { useRef } from 'react';
import { motion } from 'framer-motion';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={`${project.colSpan} col-span-12 group`}
    >
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-stroke/50 cursor-pointer transition-all duration-500 hover:border-stroke">
        {/* Project image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {/* Default subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-opacity duration-400" />

        {/* Halftone overlay on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-[1]"
          style={{
            background:
              'radial-gradient(circle, hsl(0 0% 96% / 0.06) 1px, transparent 1px)',
            backgroundSize: '4px 4px',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
          }}
        />

        {/* Project number — top right */}
        <div className="absolute top-5 right-5 z-[2]">
          <span className="text-xs font-body text-white/40 tracking-wider">
            {String(project.id).padStart(2, '0')}
          </span>
        </div>

        {/* Content — bottom, slides up on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-[2] translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          {/* Subtitle — hidden, appears on hover */}
          <span className="block text-xs font-body text-white/50 uppercase tracking-[0.2em] mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400 delay-100">
            {project.subtitle}
          </span>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-display italic text-white leading-tight mb-2">
            {project.title}
          </h3>

          {/* Description — hidden, appears on hover */}
          <p className="text-sm font-body text-white/60 max-w-md leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-400 delay-150">
            {project.description}
          </p>

          {/* View project link — appears on hover */}
          <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400 delay-200">
            <span className="inline-flex items-center gap-2 text-xs font-body font-medium text-white/80 uppercase tracking-[0.15em] hover:text-white transition-colors">
              View Project
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              >
                <path
                  d="M1 13L13 1M13 1H5M13 1V9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
