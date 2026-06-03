'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import GlassCard from '@/components/ui/GlassCard';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { UtensilsCrossed, Coffee, Store, Wine } from 'lucide-react';

const diningCategories = [
  {
    icon: UtensilsCrossed,
    title: 'Fine Dining',
    count: '20+',
    description: 'Upscale restaurants featuring acclaimed chefs and world-class cuisine',
    accent: 'from-gold/20 to-gold/5',
  },
  {
    icon: Coffee,
    title: 'Casual & Fast-Casual',
    count: '50+',
    description: 'Diverse options from beloved national chains to local favorites',
    accent: 'from-gold/15 to-gold/3',
  },
  {
    icon: Store,
    title: 'Food Halls & Markets',
    count: '3',
    description: 'Curated culinary destinations with artisan vendors and global flavors',
    accent: 'from-gold/15 to-gold/3',
  },
  {
    icon: Wine,
    title: 'Bars & Nightlife',
    count: '10+',
    description: 'Craft cocktails, local brews, and vibrant evening entertainment',
    accent: 'from-gold/15 to-gold/3',
  },
];

export default function DiningLifestyle() {
  return (
    <SectionWrapper id="dining" className="py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/dining-lifestyle.png"
          alt="Dining and lifestyle"
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B] via-[#0A0A0B]/80 to-[#0A0A0B]" />
      </div>

      <div className="relative z-10">
        {/* Section Title */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4 font-light">
            Dining & Lifestyle
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-white">
            A Feast for{' '}
            <span className="text-gold-light italic font-light">Every Palate</span>
          </h2>
          <div className="mt-6 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        </motion.div>

        {/* Key Stat */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-5xl sm:text-6xl font-bold text-gold">
            <AnimatedCounter value={50} suffix="+" />
          </div>
          <p className="mt-2 text-sm text-white/40 uppercase tracking-wider">
            Dining Destinations
          </p>
        </motion.div>

        {/* Dining Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {diningCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="p-6 lg:p-8 h-full">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/10 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between mb-1">
                      <h3 className="text-lg font-medium text-white">{category.title}</h3>
                      <span className="text-gold text-xl font-bold">{category.count}</span>
                    </div>
                    <p className="text-white/40 text-sm leading-relaxed">{category.description}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Lifestyle Tagline */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="h-px w-48 mx-auto bg-gradient-to-r from-transparent via-gold/20 to-transparent mb-6" />
          <p className="text-white/30 text-sm tracking-wider italic">
            &ldquo;More than a meal — an experience that keeps them coming back&rdquo;
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
