'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import GlassCard from '@/components/ui/GlassCard';
import { Theater, Building2, Presentation } from 'lucide-react';

const venueDetails = [
  {
    icon: Theater,
    title: 'Performing Arts Center',
    capacity: '2,800+ seats',
    size: '40,000 sq ft',
    features: [
      'Full professional stage (80\' x 40\')',
      'Orchestra pit for 65 musicians',
      'State-of-the-art lighting rig',
      'Professional sound system',
      '8 VIP boxes with dedicated service',
      'Backstage dressing rooms',
      'Green room and artist lounge',
    ],
  },
  {
    icon: Building2,
    title: 'Exposition Center',
    capacity: '5,000+ guests',
    size: '100,000+ sq ft',
    features: [
      'Column-free main hall',
      'Divisible into 4 sections',
      'Loading dock with drive-in access',
      '30\' ceiling clearance',
      'Built-in AV and fiber connectivity',
      'On-site freight elevator',
      'Adjacent catering kitchen',
    ],
  },
  {
    icon: Presentation,
    title: 'Meeting & Conference Rooms',
    capacity: '10–500 guests',
    size: 'Multiple rooms',
    features: [
      '10 configurable meeting rooms',
      'Boardroom and classroom setups',
      'Built-in projection and sound',
      'High-speed WiFi throughout',
      'Full-service catering available',
      'Video conferencing capable',
      'Breakout and networking areas',
    ],
  },
];

export default function VenueModules() {
  return (
    <SectionWrapper id="venues" className="py-24 lg:py-32">
      {/* Section Title */}
      <motion.div
        className="mb-20 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4 font-light">
          Venue Specifications
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-white">
          Built for{' '}
          <span className="text-gold-light italic font-light">Impact</span>
        </h2>
        <div className="mt-6 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </motion.div>

      {/* Venue Detail Cards */}
      <div className="grid lg:grid-cols-3 gap-6">
        {venueDetails.map((venue, index) => (
          <motion.div
            key={venue.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
          >
            <GlassCard className="p-6 lg:p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                  <venue.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="text-base font-medium text-white">{venue.title}</h3>
                  <div className="flex items-center gap-3">
                    <span className="text-gold text-xs font-medium">{venue.capacity}</span>
                    <span className="text-white/20 text-xs">|</span>
                    <span className="text-white/30 text-xs">{venue.size}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2.5">
                {venue.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <div className="w-1 h-1 rounded-full bg-gold/50 mt-2 flex-shrink-0" />
                    <span className="text-white/40 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
