'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import GlassCard from '@/components/ui/GlassCard';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { RollerCoaster, Fish, Puzzle, Plane, Mountain, KeyRound } from 'lucide-react';

const attractions = [
  {
    icon: RollerCoaster,
    title: 'Nickelodeon Universe',
    stat: '7 acres',
    statLabel: 'Indoor Theme Park',
    description:
      'The largest indoor theme park in America, featuring 27 rides and attractions including roller coasters, spin rides, and the iconic Teenage Mutant Ninja Turtles Shellraiser. A year-round destination that drives family visits regardless of Minnesota weather.',
    image: '/images/moa-interior.png',
  },
  {
    icon: Fish,
    title: 'SEA LIFE Minnesota Aquarium',
    stat: '1.2M',
    statLabel: 'Gallons of Water',
    description:
      'Walk through a 300-foot underwater tunnel surrounded by sharks, rays, and thousands of sea creatures. An immersive ocean experience in the heart of the Midwest that draws school groups, families, and marine enthusiasts from across the region.',
    image: '/images/sea-life.png',
  },
  {
    icon: Puzzle,
    title: 'LEGO Imagination Center',
    stat: '4 stories',
    statLabel: 'Of Creative Play',
    description:
      'A flagship LEGO experience featuring giant models, interactive building zones, and exclusive sets. A must-visit destination for families worldwide and one of the most photographed spots in the property.',
    image: null,
  },
  {
    icon: Plane,
    title: 'FlyOver America',
    stat: '10 min',
    statLabel: 'Flight Experience',
    description:
      'A breathtaking virtual flight ride that soars over America\'s most spectacular landmarks. Wind, mist, and scents make it feel real — a signature attraction that drives extended dwell time and social sharing.',
    image: null,
  },
  {
    icon: Mountain,
    title: 'Moose Mountain Adventure Golf',
    stat: '18 holes',
    statLabel: 'Mini Golf',
    description:
      'A whimsical indoor mini golf adventure through the north woods. Perfect for families and groups, this attraction extends visits and creates additional spending opportunities across the property.',
    image: null,
  },
  {
    icon: KeyRound,
    title: 'The Escape Game',
    stat: '6 rooms',
    statLabel: 'Escape Experiences',
    description:
      'Immersive escape rooms with Hollywood-level set design. Team-building and adventure in one unforgettable experience. A powerful corporate and group-booking driver.',
    image: null,
  },
];

export default function Attractions() {
  return (
    <SectionWrapper id="attractions" className="py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/attractions-entertainment.png"
          alt="Nickelodeon Universe indoor theme park"
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B] via-[#0A0A0B]/85 to-[#0A0A0B]" />
      </div>

      <div className="relative z-10">
        {/* Section Title */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4 font-light">
            Attractions & Entertainment
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-white">
            More Than{' '}
            <span className="text-gold-light italic font-light">Shopping</span>
          </h2>
          <p className="mt-4 text-white/35 max-w-3xl mx-auto text-sm leading-relaxed">
            Seven acres of indoor theme park. A 1.2 million gallon aquarium. World-class
            escape rooms. This is retail + entertainment at a scale no one else can match —
            and it&apos;s what makes MOA irreplaceable as a destination.
          </p>
          <div className="mt-6 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        </motion.div>

        {/* Key Stats Row */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 sm:gap-16 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-gold">
              <AnimatedCounter value={7} suffix="+" />
            </div>
            <p className="text-[10px] text-white/25 uppercase tracking-wider mt-1">Acres Indoor Park</p>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-gold">
              <AnimatedCounter value={1.2} suffix="M" decimals={1} />
            </div>
            <p className="text-[10px] text-white/25 uppercase tracking-wider mt-1">Gallon Aquarium</p>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-gold">
              <AnimatedCounter value={27} suffix="+" />
            </div>
            <p className="text-[10px] text-white/25 uppercase tracking-wider mt-1">Rides & Attractions</p>
          </div>
        </motion.div>

        {/* Attraction Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {attractions.map((attraction, index) => (
            <motion.div
              key={attraction.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <GlassCard className="overflow-hidden h-full group">
                {/* Card Image */}
                {attraction.image && (
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={attraction.image}
                      alt={attraction.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/20 to-transparent" />
                  </div>
                )}
                <div className="p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center">
                      <attraction.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-white">{attraction.title}</h3>
                      <div className="flex items-baseline gap-1.5 mt-0.5">
                        <span className="text-gold text-lg font-bold">{attraction.stat}</span>
                        <span className="text-white/25 text-[10px] uppercase tracking-wider">{attraction.statLabel}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-white/30 text-sm leading-relaxed">{attraction.description}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-white/20 text-sm italic tracking-wide">
            Entertainment drives foot traffic. Foot traffic drives revenue.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
