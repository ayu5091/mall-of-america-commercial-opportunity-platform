'use client';

import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className = '', hover = true }: GlassCardProps) {
  return (
    <motion.div
      className={`
        backdrop-blur-xl bg-white/[0.03]
        border border-white/[0.06]
        rounded-xl
        ${hover ? 'transition-all duration-500 hover:bg-white/[0.06] hover:border-white/[0.12] hover:shadow-lg hover:shadow-black/20' : ''}
        ${className}
      `}
      whileHover={hover ? { y: -4, transition: { duration: 0.3 } } : undefined}
    >
      {children}
    </motion.div>
  );
}
