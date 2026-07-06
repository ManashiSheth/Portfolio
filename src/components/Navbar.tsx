import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NAV_LINKS } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP entrance animation
  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 3.2 }
      );
    }
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] opacity-0 transition-transform duration-500 ease-out ${
        hidden ? '-translate-y-28' : 'translate-y-0'
      }`}
    >
      <div className="glass rounded-full px-2 py-2 flex items-center gap-1">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="font-display italic text-xl text-text px-4 py-1.5 hover:opacity-80 transition-opacity"
        >
          MS
        </a>

        {/* Divider */}
        <div className="w-px h-5 bg-stroke" />

        {/* Nav Links */}
        <div className="flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-body text-muted hover:text-text px-4 py-1.5 rounded-full transition-colors duration-200 hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-px h-5 bg-stroke" />

        {/* CTA */}
        <a
          href="mailto:manshishth@gmail.com"
          className="text-sm font-body font-medium text-bg px-5 py-1.5 rounded-full accent-gradient hover:opacity-90 transition-opacity duration-200 whitespace-nowrap"
        >
          Say hi ↗
        </a>
      </div>
    </nav>
  );
}
