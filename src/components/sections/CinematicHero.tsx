'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronDown, Play } from 'lucide-react';

export default function CinematicHero() {
  const [showGrain, setShowGrain] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const grainTimer = setTimeout(() => setShowGrain(true), 3000);
    const contentTimer = setTimeout(() => setShowContent(true), 3200);
    return () => {
      clearTimeout(grainTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  const scrollToNext = () => {
    const element = document.getElementById('why-property');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Ken Burns */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-aerial.png"
          alt="Mall of America aerial view at golden hour"
          className="w-full h-full object-cover animate-ken-burns"
        />
      </div>

      {/* Multi-layered overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

      {/* Vignette effect */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.4) 100%)'
      }} />

      {/* Grain overlay */}
      {showGrain && (
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none animate-grain"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '256px 256px',
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        {showContent && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-5xl"
          >
            {/* Pre-heading */}
            <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-8 bg-gold/40" />
              <p className="text-gold text-[10px] sm:text-xs tracking-[0.5em] uppercase font-light">
                Mall of America
              </p>
              <div className="h-px w-8 bg-gold/40" />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight text-white leading-[1.05]"
            >
              Where the World
              <br />
              Comes to{' '}
              <span className="text-gold-light font-light italic">Experience</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="mt-8 text-sm sm:text-base lg:text-lg text-white/50 font-light max-w-2xl mx-auto leading-relaxed"
            >
              The largest shopping and entertainment destination in North America.
              <br className="hidden sm:block" />
              5.6 million square feet. 40 million visitors. One unparalleled opportunity.
            </motion.p>

            {/* Decorative elements */}
            <motion.div
              variants={itemVariants}
              className="mt-6 flex items-center justify-center gap-4"
            >
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/30" />
              <span className="text-[9px] tracking-[0.4em] text-white/25 uppercase">
                Bloomington, Minnesota
              </span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/30" />
            </motion.div>

            {/* Quick Stats Row */}
            <motion.div
              variants={itemVariants}
              className="mt-12 flex items-center justify-center gap-8 sm:gap-12"
            >
              {[
                { value: '5.6M', label: 'Square Feet' },
                { value: '40M+', label: 'Annual Visitors' },
                { value: '520+', label: 'Retail Stores' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-gold text-lg sm:text-xl lg:text-2xl font-bold">{stat.value}</p>
                  <p className="text-white/25 text-[9px] sm:text-[10px] tracking-[0.2em] uppercase mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Explore CTA */}
            <motion.div
              variants={itemVariants}
              className="mt-10"
            >
              <button
                onClick={scrollToNext}
                className="inline-flex items-center gap-2 px-6 py-2.5 text-[10px] tracking-[0.25em] uppercase font-medium border border-gold/30 text-gold hover:bg-gold/10 hover:border-gold/50 transition-all duration-300 rounded-sm group"
              >
                <Play className="w-3 h-3 transition-transform duration-300 group-hover:scale-110" />
                Explore the Opportunity
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Scroll indicator */}
      {showContent && (
        <motion.button
          onClick={scrollToNext}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4.5 }}
          aria-label="Scroll to next section"
        >
          <span className="text-[9px] tracking-[0.4em] text-white/20 uppercase group-hover:text-gold/50 transition-colors duration-300">
            Scroll
          </span>
          <ChevronDown className="w-4 h-4 text-gold/30 animate-pulse-gold" />
        </motion.button>
      )}

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0A0A0B] to-transparent" />

      {/* Side accent lines */}
      <div className="absolute left-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-gold/10 to-transparent hidden xl:block" />
      <div className="absolute right-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-gold/10 to-transparent hidden xl:block" />
    </section>
  );
}
