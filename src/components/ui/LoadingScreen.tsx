'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] bg-[#0A0A0B] flex flex-col items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Gold line animation */}
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              className="h-px bg-gold"
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            />
            <motion.span
              className="text-gold text-xs tracking-[0.5em] uppercase font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Mall of America
            </motion.span>
            <motion.div
              className="h-px bg-gold"
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            />
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="w-48 h-px bg-white/[0.06] rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-gold/60 to-gold"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2, delay: 0.8, ease: 'easeInOut' }}
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="mt-6 text-white/20 text-[10px] tracking-[0.4em] uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            Interactive Sales Deck
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
