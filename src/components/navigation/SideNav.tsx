'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const sections = [
  { id: 'hero', label: 'Intro' },
  { id: 'why-property', label: 'Why This Property' },
  { id: 'retail', label: 'Retail' },
  { id: 'luxury', label: 'Luxury' },
  { id: 'dining', label: 'Dining & Lifestyle' },
  { id: 'attractions', label: 'Attractions' },
  { id: 'events', label: 'Events Platform' },
  { id: 'sponsorship', label: 'Sponsorship' },
  { id: 'leasing', label: 'Leasing' },
  { id: 'events-module', label: 'Host Events' },
  { id: 'venues', label: 'Venues' },
  { id: 'contact', label: 'Contact' },
];

export default function SideNav() {
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { threshold: 0.3 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-end gap-3"
      aria-label="Section navigation"
    >
      {sections.map((section, index) => (
        <div
          key={section.id}
          className="relative flex items-center"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.span
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="absolute right-8 whitespace-nowrap text-xs font-medium tracking-wider uppercase text-gold bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-md border border-white/10"
              >
                {section.label}
              </motion.span>
            )}
          </AnimatePresence>
          <button
            onClick={() => scrollToSection(section.id)}
            className="group relative flex items-center justify-center w-3 h-3 transition-all duration-300"
            aria-label={`Navigate to ${section.label}`}
          >
            <span
              className={`
                block rounded-full transition-all duration-300
                ${activeSection === section.id
                  ? 'w-3 h-3 bg-gold shadow-[0_0_8px_rgba(201,168,76,0.5)]'
                  : 'w-2 h-2 bg-white/20 group-hover:bg-white/40 group-hover:w-2.5 group-hover:h-2.5'
                }
              `}
            />
          </button>
        </div>
      ))}
    </nav>
  );
}
