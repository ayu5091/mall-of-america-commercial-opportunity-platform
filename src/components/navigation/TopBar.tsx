'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function TopBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className={`
        fixed top-0 left-0 right-0 z-40 transition-all duration-500
        ${scrolled
          ? 'bg-[#0A0A0B]/90 backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent'
        }
      `}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 3.2 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-gold font-light text-sm tracking-[0.3em] uppercase">
            Mall of America
          </span>
          <div className="hidden sm:block w-px h-4 bg-white/10" />
          <span className="hidden sm:block text-white/30 text-xs tracking-[0.2em] uppercase">
            Sales Deck
          </span>
        </div>

        <button
          onClick={scrollToContact}
          className="
            hidden sm:inline-flex px-5 py-2 text-xs tracking-[0.2em] uppercase font-medium
            border border-gold/40 text-gold
            hover:bg-gold/10 hover:border-gold/60
            transition-all duration-300 rounded-sm
          "
        >
          Get in Touch
        </button>
      </div>
    </motion.header>
  );
}
