import { motion } from 'framer-motion';
import { useHLS } from '../hooks/useHLS';
import { HLS_VIDEO_SRC, EMAIL, SOCIAL_LINKS } from '../data/content';
import MarqueeText from './MarqueeText';

// SVG icons for social links
function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function FigmaIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const iconMap: Record<string, React.ReactNode> = {
  linkedin: <LinkedInIcon />,
  figma: <FigmaIcon />,
  github: <GitHubIcon />,
};

export default function ContactFooter() {
  const videoRef = useHLS(HLS_VIDEO_SRC);

  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* Flipped HLS Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          style={{ transform: 'scaleY(-1)' }}
          muted
          autoPlay
          loop
          playsInline
        />
        {/* Heavy dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Top gradient fade from bg */}
        <div
          className="absolute top-0 left-0 right-0 h-48"
          style={{
            background: 'linear-gradient(to bottom, hsl(var(--bg)) 0%, transparent 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Marquee */}
        <div className="pt-24 md:pt-32 pb-16 md:pb-24">
          <MarqueeText
            text="ARCHITECTING DIGITAL EXPERIENCES • "
            repeat={10}
            className="text-5xl md:text-7xl lg:text-8xl font-display italic text-white/[0.06] select-none"
          />
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center pb-20 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="block text-xs font-body text-muted uppercase tracking-[0.3em] mb-6">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display italic text-text leading-tight mb-8">
              Let's build something
              <br />
              remarkable.
            </h2>
            <p className="text-muted font-body text-base md:text-lg max-w-md mx-auto mb-10">
              Currently open to founding designer roles, freelance projects, and
              creative collaborations.
            </p>

            {/* Email CTA Button */}
            <a
              href={`mailto:${EMAIL}`}
              className="group inline-flex items-center gap-3 px-10 py-4 rounded-full font-body text-sm font-medium border border-stroke text-text transition-all duration-400 hover:scale-105 active:scale-95 gradient-border relative overflow-hidden"
            >
              {/* Gradient background on hover */}
              <span className="absolute inset-0 accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-full" />
              <span className="relative z-10 group-hover:text-bg transition-colors duration-400">
                {EMAIL}
              </span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="relative z-10 transition-all duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M1 15L15 1M15 1H6M15 1V10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:stroke-bg transition-colors duration-400"
                />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Footer Bar */}
        <div className="border-t border-stroke/30 bg-black/20">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8 md:py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Social Links */}
            <div className="flex items-center gap-5">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-muted hover:text-text transition-colors duration-200"
                >
                  {iconMap[link.icon]}
                </a>
              ))}
            </div>

            {/* Availability */}
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
              </span>
              <span className="text-sm font-body text-muted">
                Available for roles
              </span>
            </div>

            {/* Copyright */}
            <span className="text-xs font-body text-muted/50">
              © {new Date().getFullYear()} Manashi Sheth
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
