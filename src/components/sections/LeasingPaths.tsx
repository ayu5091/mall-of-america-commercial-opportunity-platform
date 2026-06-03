'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import GlassCard from '@/components/ui/GlassCard';
import { Gem, ShoppingBag, UtensilsCrossed, Sparkles, ArrowRight } from 'lucide-react';

const leasingPaths = [
  {
    icon: Gem,
    title: 'Luxury Retail',
    tagline: 'Premium storefronts and personal shopping suites',
    description:
      'Positioned in our exclusive luxury corridors, these spaces offer the ambiance and exclusivity that premium brands demand. Custom buildouts, private entries, and dedicated concierge services available.',
    features: ['Premium storefronts', 'Personal shopping suites', 'Custom buildout options', 'Dedicated concierge'],
  },
  {
    icon: ShoppingBag,
    title: 'Retail',
    tagline: 'Flagship, inline, and pop-up spaces',
    description:
      'From flagship corner locations to strategic inline spaces, MOA offers retail environments for every brand size and strategy. High foot traffic zones guarantee visibility and engagement.',
    features: ['Flagship locations', 'Inline spaces', 'Pop-up opportunities', 'High traffic zones'],
  },
  {
    icon: UtensilsCrossed,
    title: 'Food & Beverage',
    tagline: 'Restaurant pads and food hall stalls',
    description:
      'Whether you\'re looking for a full-service restaurant pad, a food hall stall, or a quick-service location, MOA\'s dining infrastructure supports every concept and scale.',
    features: ['Restaurant pads', 'Food hall stalls', 'Quick-service locations', 'Full kitchen buildouts'],
  },
  {
    icon: Sparkles,
    title: 'Pop-Up & Experiential',
    tagline: 'Temporary installations and brand activations',
    description:
      'Launch, test, and activate in one of the world\'s most visited destinations. Flexible short-term leases and pop-up programs designed for maximum brand impact.',
    features: ['Short-term leases', 'Brand activation zones', 'Seasonal opportunities', 'Turnkey setups'],
  },
];

export default function LeasingPaths() {
  return (
    <SectionWrapper id="leasing" className="py-24 lg:py-32">
      {/* Section Title */}
      <motion.div
        className="mb-20 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4 font-light">
          Your Space Awaits
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-white">
          Find Your{' '}
          <span className="text-gold-light italic font-light">Perfect Space</span>
        </h2>
        <div className="mt-6 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </motion.div>

      {/* Leasing Path Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {leasingPaths.map((path, index) => (
          <motion.div
            key={path.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <GlassCard className="p-6 lg:p-8 h-full group">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center">
                  <path.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">{path.title}</h3>
                  <p className="text-gold/60 text-sm">{path.tagline}</p>
                </div>
              </div>
              <p className="text-white/40 text-sm leading-relaxed mb-5">{path.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {path.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-[10px] tracking-wider uppercase px-3 py-1 rounded-full border border-white/[0.06] bg-white/[0.02] text-white/40"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <button
                className="inline-flex items-center gap-2 text-gold text-xs tracking-[0.15em] uppercase font-medium hover:gap-3 transition-all duration-300"
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn More
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <button
          className="px-8 py-3 bg-gold text-black text-xs tracking-[0.2em] uppercase font-medium rounded-sm hover:bg-gold-light transition-all duration-300"
          onClick={() => {
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Schedule a Tour
        </button>
      </motion.div>
    </SectionWrapper>
  );
}
