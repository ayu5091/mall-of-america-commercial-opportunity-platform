'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import GlassCard from '@/components/ui/GlassCard';
import { MapPin, Plane, Building2, Users, Car, Globe } from 'lucide-react';

const stats = [
  { value: 5.6, suffix: 'M', label: 'Square Feet', decimals: 1, prefix: '', icon: Building2 },
  { value: 40, suffix: 'M+', label: 'Annual Visitors', decimals: 0, prefix: '', icon: Users },
  { value: 520, suffix: '+', label: 'Retail Stores', decimals: 0, prefix: '', icon: Globe },
  { value: 2500, suffix: '+', label: 'Hotel Rooms Connected', decimals: 0, prefix: '', icon: Building2 },
  { value: 15, suffix: ' MIN', label: 'From MSP Airport', decimals: 0, prefix: '', icon: Plane },
  { value: 35, suffix: 'M', label: 'People Within 1-Day Drive', decimals: 0, prefix: '', icon: Car },
];

const demographics = [
  { label: 'Average Household Income', value: '$82,000+', subtext: 'Well above national average' },
  { label: 'Median Age', value: '34', subtext: 'Prime consumer demographic' },
  { label: 'Tourist Spend per Visit', value: '$165+', subtext: 'High per-capita spend rate' },
  { label: 'Repeat Visit Rate', value: '68%', subtext: 'Exceptional loyalty metric' },
];

const regionalReach = [
  { radius: '30 min', population: '3.2M', label: 'Metro Area' },
  { radius: '2 hr', population: '8.5M', label: 'Regional Hub' },
  { radius: '4 hr', population: '18M', label: 'Upper Midwest' },
  { radius: '1 day', population: '35M', label: 'Midwest Reach' },
];

export default function WhyProperty() {
  const imageRef = useRef<HTMLDivElement>(null);
  const imageInView = useInView(imageRef, { once: true, margin: '-100px' });

  return (
    <SectionWrapper id="why-property" className="py-24 lg:py-32">
      {/* Section Title */}
      <motion.div
        className="mb-20 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4 font-light">
          Why This Property
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-white">
          A Destination{' '}
          <span className="text-gold-light italic font-light">Without Equal</span>
        </h2>
        <p className="mt-4 text-white/30 max-w-2xl mx-auto text-sm leading-relaxed">
          Strategically positioned at the crossroads of the Midwest, Mall of America commands
          a reach and influence that no other property can match. This is where scale meets access.
        </p>
        <div className="mt-6 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </motion.div>

      {/* Two Column Layout */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-24">
        {/* Left: Stats */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <GlassCard className="p-5 h-full">
                <div className="flex items-center gap-2 mb-3">
                  <stat.icon className="w-4 h-4 text-gold/50" />
                  <span className="text-[10px] text-white/25 tracking-wider uppercase">{stat.label}</span>
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gold">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    decimals={stat.decimals}
                  />
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Right: Image with Parallax */}
        <motion.div
          ref={imageRef}
          className="relative overflow-hidden rounded-xl"
          initial={{ opacity: 0, x: 40 }}
          animate={imageInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.img
            src="/images/why-property.png"
            alt="Mall of America illuminated exterior at night"
            className="w-full h-[500px] lg:h-[600px] object-cover"
            loading="lazy"
            style={{ y: imageInView ? 0 : 20 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent" />

          {/* Overlay info */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-3 h-3 text-gold/60" />
              <p className="text-[10px] text-white/40 tracking-[0.2em] uppercase">
                Bloomington, Minnesota
              </p>
            </div>
            <p className="text-lg text-white/80 font-light">
              At the crossroads of the Midwest
            </p>
            <p className="text-xs text-white/30 mt-1 leading-relaxed">
              Adjacent to MSP International Airport, connected by light rail to downtown Minneapolis,
              and at the intersection of I-494 and I-35W — two of the region&apos;s busiest highways.
            </p>
          </div>

          {/* Floating accent */}
          <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-xl bg-black/40 border border-white/10">
            <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-[9px] text-white/50 tracking-wider uppercase">Live Data</span>
          </div>
        </motion.div>
      </div>

      {/* Regional Reach */}
      <motion.div
        className="mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-center text-lg font-light text-white/60 mb-10 tracking-wide">
          Regional Reach
        </h3>
        <div className="max-w-4xl mx-auto">
          {/* Concentric circles visualization */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              {/* Outermost circle - 1 day drive */}
              <div className="absolute inset-0 rounded-full border border-white/[0.04]" />
              <motion.div
                className="absolute inset-0 rounded-full border border-gold/5"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
              />

              {/* 4-hour circle */}
              <div className="absolute inset-[20%] rounded-full border border-white/[0.06]" />

              {/* 2-hour circle */}
              <div className="absolute inset-[35%] rounded-full border border-white/[0.08]" />

              {/* 30-min circle */}
              <div className="absolute inset-[55%] rounded-full border border-gold/15" />

              {/* Center dot */}
              <div className="absolute inset-[65%] flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-gold shadow-[0_0_12px_rgba(201,168,76,0.4)]" />
              </div>

              {/* Center label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center mt-16">
                  <p className="text-2xl sm:text-3xl font-bold text-gold">35M</p>
                  <p className="text-[9px] text-white/40 uppercase tracking-wider mt-0.5">People</p>
                </div>
              </div>

              {/* Radius labels - positioned on circles */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 text-[9px] text-white/20 uppercase tracking-wider whitespace-nowrap">1-Day Drive</div>
              <div className="absolute bottom-[22%] left-1/2 -translate-x-1/2 text-[9px] text-white/30 uppercase tracking-wider whitespace-nowrap">4-Hour</div>
              <div className="absolute bottom-[38%] left-1/2 -translate-x-1/2 text-[9px] text-white/40 uppercase tracking-wider whitespace-nowrap">2-Hour</div>
              <div className="absolute bottom-[55%] left-1/2 -translate-x-1/2 text-[9px] text-gold/50 uppercase tracking-wider whitespace-nowrap">30 Min</div>
            </div>
          </div>

          {/* Reach data cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {regionalReach.map((area, index) => (
              <motion.div
                key={area.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="text-center p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                  <p className="text-gold text-lg font-bold">{area.population}</p>
                  <p className="text-[10px] text-white/30 uppercase tracking-wider">{area.label}</p>
                  <p className="text-[9px] text-white/15 mt-0.5">{area.radius} radius</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Demographics */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-center text-lg font-light text-white/60 mb-8 tracking-wide">
          Visitor Demographics
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {demographics.map((demo, index) => (
            <motion.div
              key={demo.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="p-5 text-center h-full">
                <p className="text-2xl sm:text-3xl font-bold text-gold mb-1">{demo.value}</p>
                <p className="text-[10px] text-white/40 uppercase tracking-wider mb-1">{demo.label}</p>
                <p className="text-[9px] text-white/20">{demo.subtext}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
