import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrandMonogram } from './BrandMonogram';

interface StudioIntroAnimationProps {
  onComplete?: () => void;
}

export const StudioIntroAnimation: React.FC<StudioIntroAnimationProps> = ({ onComplete }) => {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    // Check if reduced motion is preferred
    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasSeenIntro = sessionStorage.getItem('hrm_studio_intro_v2');

    if (prefersReducedMotion || hasSeenIntro) {
      onComplete?.();
      return;
    }

    setShow(true);
    const timer = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem('hrm_studio_intro_v2', 'true');
      onComplete?.();
    }, 1300);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] bg-[#FFFDF9] dark:bg-[#111215] flex flex-col items-center justify-center p-6 select-none pointer-events-auto"
        >
          <div className="text-center space-y-6 max-w-md">
            
            {/* Animated Monogram */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="flex justify-center"
            >
              <div className="p-4 rounded-3xl bg-surface border-2 border-cobalt/20 dark:border-white/10 shadow-xl">
                <BrandMonogram size={56} />
              </div>
            </motion.div>

            {/* Typographic Reveal */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.25, ease: 'easeOut' }}
              className="space-y-1.5"
            >
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-cobalt font-bold block">
                DIGITAL UNIVERSE // 2026–2030
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ink tracking-tight">
                HARSHAD MANE
              </h1>
              <p className="text-xs font-mono text-muted tracking-wider">
                &ldquo;Curious enough to explore. Driven enough to build.&rdquo;
              </p>
            </motion.div>

            {/* Subtle Progress Bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeInOut' }}
              className="h-1 bg-gradient-to-r from-cobalt via-sunny to-coral rounded-full max-w-[140px] mx-auto"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
