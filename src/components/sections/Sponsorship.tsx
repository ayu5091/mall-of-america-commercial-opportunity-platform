'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import GlassCard from '@/components/ui/GlassCard';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { Crown, Award, Medal, Check } from 'lucide-react';

const tiers = [
  {
    icon: Crown,
    name: 'Presenting Partner',
    tagline: 'Exclusive naming rights. Maximum visibility.',
    price: 'Custom',
    features: [
      'Exclusive naming rights and title partnership',
      'Premium placement across all MOA touchpoints',
      'Custom brand activations in high-traffic zones',
      'Dedicated VIP hospitality suite',
      'First right of refusal on new opportunities',
      'Integrated digital and social media campaigns',
      'Annual branded event series',
      'Executive briefing and strategy sessions',
    ],
    accent: 'from-gold/30 to-gold/10',
    border: 'border-gold/20',
  },
  {
    icon: Award,
    name: 'Platinum Partner',
    tagline: 'Premium placement. Custom activations.',
    price: 'Custom',
    features: [
      'Premium placement in designated zones',
      'Custom brand activation spaces',
      'Seasonal campaign integration',
      'Co-branded event opportunities',
      'Digital and social media integration',
      'Priority access to new venue spaces',
    ],
    accent: 'from-white/10 to-white/5',
    border: 'border-white/10',
  },
  {
    icon: Medal,
    name: 'Signature Partner',
    tagline: 'Brand integration. Event access.',
    price: 'Custom',
    features: [
      'Brand integration in MOA events',
      'Event sponsorship opportunities',
      'Digital presence across MOA platforms',
      'Seasonal promotional campaigns',
      'Co-marketing initiatives',
    ],
    accent: 'from-white/5 to-white/[0.02]',
    border: 'border-white/[0.06]',
  },
];

export default function Sponsorship() {
  return (
    <SectionWrapper id="sponsorship" className="py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/sponsorship.png"
          alt="Sponsorship"
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
            Partnership Tiers
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-white">
            Partner With{' '}
            <span className="text-gold-light italic font-light">the Best</span>
          </h2>
          <div className="mt-6 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        </motion.div>

        {/* Audience Data Callout */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-gold/20 bg-gold/5">
            <span className="text-gold text-2xl font-bold">
              <AnimatedCounter value={40} suffix="M+" />
            </span>
            <span className="text-white/40 text-sm">annual visitors = unmatched brand exposure</span>
          </div>
        </motion.div>

        {/* Tier Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <GlassCard
                className={`p-6 lg:p-8 h-full border ${tier.border} ${
                  index === 0 ? 'ring-1 ring-gold/20' : ''
                }`}
                hover={true}
              >
                {/* Header */}
                <div className="mb-6">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${tier.accent} flex items-center justify-center mb-4`}>
                    <tier.icon className={`w-5 h-5 ${index === 0 ? 'text-gold' : 'text-white/60'}`} />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-1">{tier.name}</h3>
                  <p className="text-white/35 text-sm">{tier.tagline}</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${index === 0 ? 'text-gold' : 'text-white/30'}`} />
                      <span className="text-white/50 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className={`
                    w-full py-3 text-xs tracking-[0.2em] uppercase font-medium rounded-sm
                    transition-all duration-300
                    ${index === 0
                      ? 'bg-gold text-black hover:bg-gold-light'
                      : 'border border-white/10 text-white/60 hover:border-gold/30 hover:text-gold'
                    }
                  `}
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Inquire Now
                </button>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
