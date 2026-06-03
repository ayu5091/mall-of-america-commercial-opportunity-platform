'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

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

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden fixed top-0 right-0 z-50">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-xl bg-white/5 border border-white/10"
        aria-label="Toggle navigation menu"
      >
        {isOpen ? (
          <X className="w-5 h-5 text-gold" />
        ) : (
          <Menu className="w-5 h-5 text-white/60" />
        )}
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-[#0A0A0B]/95 backdrop-blur-xl z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center justify-center h-full gap-1 px-8">
              {sections.map((section, index) => (
                <motion.button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="text-white/50 text-sm tracking-[0.3em] uppercase py-2.5 hover:text-gold transition-colors duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                >
                  {section.label}
                </motion.button>
              ))}

              {/* CTA */}
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="mt-6 px-6 py-2.5 text-xs tracking-[0.2em] uppercase font-medium border border-gold/40 text-gold hover:bg-gold/10 transition-all duration-300 rounded-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: sections.length * 0.04 + 0.1 }}
              >
                Get in Touch
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
