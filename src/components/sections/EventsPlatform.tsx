'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import GlassCard from '@/components/ui/GlassCard';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { Star, Mic2, Rocket, Megaphone, Music, ArrowRight } from 'lucide-react';

const eventTypes = [
  {
    icon: Star,
    title: 'Celebrity Appearances',
    description: 'A-list talent draws massive crowds and media attention, creating viral moments that amplify brand presence far beyond the property itself.',
  },
  {
    icon: Rocket,
    title: 'Product Launches',
    description: 'Brands debut here because 40M visitors means unmatched exposure. Launch events at MOA generate press coverage, social impressions, and immediate consumer engagement.',
  },
  {
    icon: Megaphone,
    title: 'Brand Activations',
    description: 'Immersive brand experiences that create lasting impressions. From pop-up experiences to full-floor takeovers, MOA provides the canvas for unforgettable activations.',
  },
  {
    icon: Music,
    title: 'Concerts & Performances',
    description: 'Live entertainment that transforms retail into culture. Concerts and performances at MOA create emotional connections that keep audiences coming back.',
  },
  {
    icon: Mic2,
    title: 'Seasonal Celebrations',
    description: 'Holiday events, festivals, and cultural moments that define seasons and drive repeat visitation. These are the events that make MOA a tradition.',
  },
];

const highlights = [
  { year: '2024', event: 'Nike Innovation Summit', audience: '25,000+', type: 'Product Launch' },
  { year: '2023', event: 'MTV Video Music Awards Afterparty', audience: '15,000+', type: 'Celebrity Event' },
  { year: '2023', event: 'Marvel Universe Live Premiere', audience: '30,000+', type: 'Entertainment' },
  { year: '2022', event: 'K-Pop World Festival', audience: '40,000+', type: 'Cultural Event' },
];

export default function EventsPlatform() {
  return (
    <SectionWrapper id="events" className="py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/events-platform.png"
          alt="Concert event at Mall of America"
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B] via-[#0A0A0B]/85 to-[#0A0A0B]" />
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
            A Global Platform
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-white">
            Not Just a Building.{' '}
            <span className="text-gold-light italic font-light">A Stage.</span>
          </h2>
          <p className="mt-4 text-white/35 max-w-2xl mx-auto text-sm leading-relaxed">
            Mall of America isn&apos;t just a place to shop — it&apos;s a global platform for brands,
            artists, and experiences. With over 400 events annually and a built-in audience of
            millions, no other property offers this kind of stage.
          </p>
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
          <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gold">
            <AnimatedCounter value={400} suffix="+" />
          </div>
          <p className="mt-2 text-sm text-white/35 uppercase tracking-wider">
            Events Per Year
          </p>
          <p className="mt-1 text-xs text-white/20">
            Concerts, launches, activations, and celebrations
          </p>
        </motion.div>

        {/* Event Types */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-20">
          {eventTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <GlassCard className="p-5 h-full text-center">
                <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/15 flex items-center justify-center mx-auto mb-3">
                  <type.icon className="w-4 h-4 text-gold" />
                </div>
                <h3 className="text-sm font-medium text-white mb-2">{type.title}</h3>
                <p className="text-white/25 text-xs leading-relaxed">{type.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Past Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-center text-[10px] text-white/25 uppercase tracking-wider mb-8">
            Recent Highlights
          </h3>
          <div className="max-w-3xl mx-auto space-y-3">
            {highlights.map((item, index) => (
              <motion.div
                key={item.event}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <GlassCard className="p-4 group" hover={true}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-gold text-xs font-mono w-10">{item.year}</span>
                      <div>
                        <span className="text-white/70 text-sm">{item.event}</span>
                        <span className="text-[9px] text-white/20 ml-2 uppercase tracking-wider">{item.type}</span>
                      </div>
                    </div>
                    <span className="text-gold/50 text-xs font-medium">{item.audience}</span>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="h-px w-48 mx-auto bg-gradient-to-r from-transparent via-gold/20 to-transparent mb-6" />
          <p className="text-xl sm:text-2xl font-light text-white/50 italic tracking-wide">
            &ldquo;This is where brands become moments.&rdquo;
          </p>
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="mt-6 inline-flex items-center gap-2 text-gold text-xs tracking-[0.2em] uppercase font-medium hover:gap-3 transition-all duration-300"
          >
            Plan Your Event
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
