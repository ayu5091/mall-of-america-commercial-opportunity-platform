'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import GlassCard from '@/components/ui/GlassCard';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { ShoppingBag, Shirt, Sparkles, Cpu, TrendingUp, ArrowRight } from 'lucide-react';

const categories = [
  {
    icon: ShoppingBag,
    title: 'Flagship Stores',
    brands: 'Nordstrom, Macy\'s, Bloomingdale\'s',
    description: 'Anchor destinations driving consistent foot traffic and brand prestige. These flagship locations serve as magnetic draws, pulling visitors deep into the property.',
    stat: '4',
    statLabel: 'Anchors',
  },
  {
    icon: Shirt,
    title: 'Fashion & Accessories',
    brands: '500+ Brands',
    description: 'From contemporary to couture, the widest selection in the region. A curated mix of national powerhouses and emerging labels that keeps the offering fresh and aspirational.',
    stat: '500+',
    statLabel: 'Brands',
  },
  {
    icon: Sparkles,
    title: 'Specialty & Lifestyle',
    brands: 'Curated Collections',
    description: 'Unique boutiques and specialty experiences found nowhere else in the market. These tenants benefit from MOA\'s unique ability to turn shopping into discovery.',
    stat: '80+',
    statLabel: 'Specialty',
  },
  {
    icon: Cpu,
    title: 'Technology & Innovation',
    brands: 'Apple, Microsoft & More',
    description: 'Cutting-edge retail concepts and experiential tech stores that draw early adopters and tech-savvy consumers. Innovation retail at its most impactful.',
    stat: '25+',
    statLabel: 'Tech Stores',
  },
];

const growthData = [
  { year: '2019', value: 85, label: 'Pre-Pandemic Peak' },
  { year: '2020', value: 52, label: 'Pandemic Impact' },
  { year: '2021', value: 72, label: 'Recovery Begins' },
  { year: '2022', value: 91, label: 'Strong Rebound' },
  { year: '2023', value: 98, label: 'Near Peak' },
  { year: '2024', value: 105, label: 'Record Growth' },
];

export default function Retail() {
  return (
    <SectionWrapper id="retail" className="py-24 lg:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/retail-luxury.png"
          alt="Premium retail environment at Mall of America"
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
            The Retail Experience
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-white">
            520+ Stores.{' '}
            <span className="text-gold-light italic font-light">One Destination.</span>
          </h2>
          <p className="mt-4 text-white/30 max-w-2xl mx-auto text-sm leading-relaxed">
            The most comprehensive retail portfolio in the Upper Midwest, strategically curated to
            maximize foot traffic, dwell time, and revenue per square foot.
          </p>
          <div className="mt-6 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        </motion.div>

        {/* Category Grid */}
        <div className="grid sm:grid-cols-2 gap-5 mb-20">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="p-6 lg:p-8 h-full group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between mb-1">
                      <h3 className="text-lg font-medium text-white">{category.title}</h3>
                      <div className="text-right flex-shrink-0 ml-4">
                        <span className="text-gold text-xl font-bold">{category.stat}</span>
                        <span className="text-[9px] text-white/25 uppercase tracking-wider ml-1">{category.statLabel}</span>
                      </div>
                    </div>
                    <p className="text-gold/50 text-xs mb-2">{category.brands}</p>
                    <p className="text-white/35 text-sm leading-relaxed">{category.description}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Economic Impact + Growth */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Economic Impact */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <TrendingUp className="w-5 h-5 text-gold mb-4" />
              <p className="text-[10px] text-white/30 uppercase tracking-wider mb-2">
                Annual Economic Impact
              </p>
              <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gold">
                <AnimatedCounter value={2} prefix="$" suffix="B+" />
              </div>
              <p className="mt-4 text-white/40 leading-relaxed text-sm">
                Mall of America generates over $2 billion in annual economic impact,
                supporting more than 16,000 jobs and contributing over $100 million in
                state and local tax revenue. It is one of the most valuable retail properties
                in the nation and a critical economic engine for the state of Minnesota.
              </p>
            </div>

            {/* Key metrics */}
            <div className="grid grid-cols-3 gap-3 mt-6">
              {[
                { value: '16,000+', label: 'Jobs Supported' },
                { value: '$100M+', label: 'Tax Revenue' },
                { value: '#1', label: 'MN Attraction' },
              ].map((metric) => (
                <div key={metric.label} className="text-center p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                  <p className="text-gold text-base font-bold">{metric.value}</p>
                  <p className="text-[9px] text-white/25 uppercase tracking-wider mt-0.5">{metric.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Growth Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <GlassCard className="p-6" hover={false}>
              <div className="flex items-center justify-between mb-6">
                <p className="text-[10px] text-white/30 uppercase tracking-wider">
                  Visitor Growth Index
                </p>
                <span className="text-[9px] text-gold/40 font-mono">BASE: 2019 = 85</span>
              </div>
              <div className="flex items-end gap-2 h-52">
                {growthData.map((item, index) => (
                  <div key={item.year} className="flex-1 flex flex-col items-center gap-1.5">
                    <span className="text-[9px] text-white/25 font-mono">{item.value}</span>
                    <div className="w-full relative group/bar">
                      <motion.div
                        className={`w-full rounded-t-sm ${
                          index === growthData.length - 1
                            ? 'bg-gradient-to-t from-gold to-gold/70'
                            : 'bg-gradient-to-t from-white/10 to-white/5'
                        }`}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${(item.value / 110) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
                      />
                      {/* Tooltip */}
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-opacity duration-200 pointer-events-none">
                        <span className="text-[8px] text-gold/60 whitespace-nowrap bg-black/80 px-2 py-1 rounded">
                          {item.label}
                        </span>
                      </div>
                    </div>
                    <span className={`text-[9px] ${index === growthData.length - 1 ? 'text-gold/60 font-medium' : 'text-white/30'}`}>
                      {item.year}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-white/[0.04]">
                <p className="text-[9px] text-white/20 leading-relaxed">
                  2024 marks record visitor levels, surpassing pre-pandemic peaks with strong growth
                  in international tourism and extended-stay visitors.
                </p>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
