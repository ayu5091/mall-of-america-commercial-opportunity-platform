'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import GlassCard from '@/components/ui/GlassCard';
import { Theater, Building2, Users, Rocket, TreePine } from 'lucide-react';

const venues = [
  {
    icon: Theater,
    title: 'Performing Arts Center',
    capacity: '2,800+ seats',
    specs: ['Full stage and backstage', 'Professional lighting & sound', 'Orchestra pit', 'VIP boxes'],
    description:
      'A world-class performance venue capable of hosting concerts, theatrical productions, and large-scale presentations.',
  },
  {
    icon: Building2,
    title: 'Exposition Center',
    capacity: '100,000+ sq ft',
    specs: ['Flexible floor plan', 'Loading dock access', 'High ceilings', 'Built-in AV'],
    description:
      'An expansive, adaptable space perfect for trade shows, expos, and large-scale brand activations.',
  },
  {
    icon: Users,
    title: 'Corporate Events & Meetings',
    capacity: 'Up to 500 guests',
    specs: ['Multiple meeting rooms', 'AV-equipped', 'Catering available', 'Breakout spaces'],
    description:
      'Professional meeting and conference facilities with full-service support for corporate gatherings of all sizes.',
  },
  {
    icon: Rocket,
    title: 'Product Launch Venues',
    capacity: 'Varies',
    specs: ['Customizable spaces', 'Media facilities', 'Streaming capable', 'VIP areas'],
    description:
      'Dramatic, high-impact spaces designed for unforgettable product launches and brand reveals.',
  },
  {
    icon: TreePine,
    title: 'Outdoor Plaza Events',
    capacity: 'Up to 5,000',
    specs: ['Open-air flexibility', 'Stage & sound systems', 'Seasonal programming', 'Festival-ready'],
    description:
      'Expansive outdoor plazas perfect for festivals, markets, concerts, and seasonal celebrations.',
  },
];

export default function EventsModule() {
  return (
    <SectionWrapper id="events-module" className="py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/venue-expo.png"
          alt="Event venue"
          className="w-full h-full object-cover opacity-15"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B] via-[#0A0A0B]/90 to-[#0A0A0B]" />
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
            Host Your Event
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-white">
            World-Class{' '}
            <span className="text-gold-light italic font-light">Venues</span>
          </h2>
          <p className="mt-4 text-white/40 max-w-2xl mx-auto">
            From intimate meetings to 100,000 sq ft expos, MOA has the space,
            infrastructure, and audience to make your event unforgettable.
          </p>
          <div className="mt-6 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        </motion.div>

        {/* Venue Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {venues.map((venue, index) => (
            <motion.div
              key={venue.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <GlassCard className="p-6 h-full">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                    <venue.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-white">{venue.title}</h3>
                    <span className="text-gold text-sm font-semibold">{venue.capacity}</span>
                  </div>
                </div>
                <p className="text-white/35 text-sm leading-relaxed mb-4">{venue.description}</p>
                <div className="flex flex-wrap gap-2">
                  {venue.specs.map((spec) => (
                    <span
                      key={spec}
                      className="text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full border border-white/[0.06] bg-white/[0.02] text-white/35"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Booking CTA */}
        <motion.div
          className="mt-16 text-center"
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
            Book a Venue
          </button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
