'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const ctaButtons = [
  {
    label: 'Explore Leasing Opportunities',
    email: 'leasing@mallofamerica.com',
    variant: 'primary' as const,
    description: 'Flagship, inline, luxury, F&B, and pop-up spaces available now.',
  },
  {
    label: 'Discuss Sponsorship',
    email: 'partnerships@mallofamerica.com',
    variant: 'outline' as const,
    description: 'Partnership tiers from Signature to Presenting Partner.',
  },
  {
    label: 'Book an Event',
    email: 'events@mallofamerica.com',
    variant: 'outline' as const,
    description: 'Concerts, launches, activations, and corporate events.',
  },
];

const contactInfo = [
  { icon: Phone, text: '(952) 883-8800' },
  { icon: Mail, text: 'info@mallofamerica.com' },
  { icon: MapPin, text: '60 E Broadway, Bloomington, MN 55425' },
];

export default function ContactCTA() {
  return (
    <SectionWrapper id="contact" className="py-24 lg:py-32">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B] via-[#0A0A0B] to-[#0A0A0B]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.04)_0%,transparent_60%)]" />
      </div>

      {/* MOA Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <span className="text-[22vw] font-extralight text-white/[0.012] tracking-[0.2em] select-none">
          MOA
        </span>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen py-12">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4 font-light">
            Join Us
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extralight text-white">
            Be Part of the{' '}
            <span className="text-gold-light italic font-light">Experience</span>
          </h2>
          <p className="mt-4 text-white/30 max-w-lg mx-auto text-sm leading-relaxed">
            Every year, 40 million people walk through these doors. The question
            isn&apos;t whether you can afford to be here — it&apos;s whether you can afford not to be.
          </p>
          <div className="mt-6 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        </motion.div>

        {/* CTA Cards */}
        <motion.div
          className="grid sm:grid-cols-3 gap-4 max-w-4xl w-full mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {ctaButtons.map((cta, index) => (
            <motion.a
              key={cta.label}
              href={`mailto:${cta.email}`}
              className={`
                group relative p-6 rounded-xl border transition-all duration-500
                ${cta.variant === 'primary'
                  ? 'border-gold/20 bg-gold/[0.05] hover:bg-gold/[0.1] hover:border-gold/40'
                  : 'border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.12]'
                }
              `}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
            >
              {/* CTA content */}
              <div className="flex flex-col h-full">
                <h3 className={`text-sm font-medium mb-2 ${cta.variant === 'primary' ? 'text-gold' : 'text-white/70'}`}>
                  {cta.label}
                </h3>
                <p className="text-white/25 text-xs leading-relaxed flex-1 mb-4">
                  {cta.description}
                </p>
                <div className={`inline-flex items-center gap-1.5 text-xs font-medium tracking-wider uppercase transition-all duration-300 group-hover:gap-2.5 ${
                  cta.variant === 'primary' ? 'text-gold' : 'text-white/40 group-hover:text-gold/60'
                }`}>
                  <span>{cta.variant === 'primary' ? 'Get Started' : 'Learn More'}</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>

              {/* Top accent line for primary */}
              {cta.variant === 'primary' && (
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
              )}
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-5 sm:gap-10 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {contactInfo.map((info) => (
            <div key={info.text} className="flex items-center gap-2">
              <info.icon className="w-3.5 h-3.5 text-gold/30" />
              <span className="text-white/35 text-xs">{info.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="h-px w-48 mx-auto bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-6" />
          <p className="text-gold/40 text-[10px] tracking-[0.4em] uppercase">
            Mall of America
          </p>
          <p className="text-white/10 text-[10px] mt-2">
            &copy; {new Date().getFullYear()} Mall of America. All rights reserved.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
