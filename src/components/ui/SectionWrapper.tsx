'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  id: string;
  className?: string;
  fullWidth?: boolean;
}

export default function SectionWrapper({
  children,
  id,
  className = '',
  fullWidth = false,
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section
      id={id}
      ref={ref}
      className={`relative min-h-screen snap-section ${className}`}
    >
      <motion.div
        className={`min-h-screen ${fullWidth ? '' : 'max-w-7xl mx-auto px-6 lg:px-8'}`}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </section>
  );
}
