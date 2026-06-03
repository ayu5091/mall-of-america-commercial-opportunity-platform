'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import GlassCard from '@/components/ui/GlassCard';
import { Crown, Gem, ConciergeBell, ArrowRight } from 'lucide-react';

const luxuryItems = [
  {
    icon: Crown,
    title: 'The Luxury Collection',
    description:
      'A curated portfolio of the world\'s most coveted brands, presented in an environment designed to match their prestige. From haute couture to fine jewelry, every detail — from lighting to fixture design — is considered to elevate brand presence and customer experience alike.',
    features: ['Dedicated luxury corridors', 'Custom storefront design', 'Premium foot traffic zones', 'Brand-appropriate ambiance'],
  },
  {
    icon: Gem,
    title: 'Personal Shopping Experiences',
    description:
      'Dedicated style consultants offering bespoke shopping journeys. Private fitting suites, personalized recommendations, and white-glove service that transforms retail into an experience. These services drive higher average transaction values and build lasting customer relationships.',
    features: ['Private fitting suites', 'Bespoke style consultations', 'White-glove delivery', 'VIP scheduling'],
  },
  {
    icon: ConciergeBell,
    title: 'VIP Amenities & Services',
    description:
      'Exclusive lounge access, priority parking, personal concierge, and curated events. A level of service that transforms visitors into lifelong patrons and ensures that luxury tenants\' customers receive the premium experience they expect from the moment they arrive.',
    features: ['Exclusive lounge access', 'Priority valet parking', 'Personal concierge', 'Curated VIP events'],
  },
];

export default function Luxury() {
  return (
    <SectionWrapper id="luxury" className="py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/luxury-section.png"
          alt="Luxury shopping experience at Mall of America"
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
            Luxury Reimagined
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-white">
            Where Prestige{' '}
            <span className="text-gold-light italic font-light">Meets Place</span>
          </h2>
          <p className="mt-4 text-white/30 max-w-xl mx-auto text-sm leading-relaxed">
            An elevated environment where premium brands thrive and discerning
            customers discover experiences worthy of their loyalty.
          </p>
          <div className="mt-6 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        </motion.div>

        {/* Gold Accent Line - Animated reveal */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <div className="h-px w-64 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        </motion.div>

        {/* Luxury Items */}
        <div className="max-w-4xl mx-auto space-y-6">
          {luxuryItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <GlassCard className="p-8 lg:p-10 group">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/15 transition-colors duration-500">
                    <item.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-light text-white mb-3 tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-white/40 leading-relaxed text-sm mb-5">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-[9px] tracking-wider uppercase px-3 py-1 rounded-full border border-gold/10 bg-gold/[0.03] text-gold/40"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Luxury CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-gold text-xs tracking-[0.2em] uppercase font-medium hover:gap-3 transition-all duration-300"
          >
            Explore Luxury Leasing
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>

        {/* Bottom Accent */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="inline-block">
            <div className="h-px w-32 bg-gradient-to-r from-transparent to-gold/20 mb-4 mx-auto" />
            <p className="text-[9px] tracking-[0.4em] text-white/15 uppercase">
              Elevated by Design
            </p>
            <div className="h-px w-32 bg-gradient-to-l from-transparent to-gold/20 mt-4 mx-auto" />
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
