import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrandMonogram } from './BrandMonogram';

interface CinematicIntroOverlayProps {
  onComplete?: () => void;
}

export const CinematicIntroOverlay: React.FC<CinematicIntroOverlayProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [stage, setStage] = useState<'initial' | 'monogram' | 'name' | 'exit'>('initial');

  useEffect(() => {
    // Check if user has already seen the intro during this browser session
    const hasSeenIntro = sessionStorage.getItem('has_seen_intro_v5');
    
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (hasSeenIntro || prefersReducedMotion) {
      onComplete?.();
      return;
    }

    // Begin sequence
    setIsVisible(true);

    const timer1 = setTimeout(() => {
      setStage('monogram');
    }, 150);

    const timer2 = setTimeout(() => {
      setStage('name');
    }, 600);

    const timer3 = setTimeout(() => {
      setStage('exit');
    }, 1450);

    const timer4 = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('has_seen_intro_v5', 'true');
      onComplete?.();
    }, 1950);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        dismissIntro();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete]);

  const dismissIntro = () => {
    setIsVisible(false);
    sessionStorage.setItem('has_seen_intro_v5', 'true');
    onComplete?.();
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="cinematic-intro"
          initial={{ opacity: 1 }}
          animate={{ opacity: stage === 'exit' ? 0 : 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-neutral-950 text-neutral-100 flex flex-col items-center justify-center overflow-hidden pointer-events-auto selection:bg-cobalt/30 select-none"
        >
          {/* Subtle architectural grid pattern */}
          <div 
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{ 
              backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', 
              backgroundSize: '32px 32px' 
            }}
          />

          {/* Top Folio Indicator */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute top-6 left-6 right-6 flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-neutral-400"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cobalt inline-block animate-pulse" />
              <span>THE DIGITAL EXHIBITION</span>
            </div>
            <span>VOL. 05 // 2026 EDITION</span>
          </motion.div>

          {/* Centerpiece Composition */}
          <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-xl space-y-6">
            
            {/* Monogram Reveal */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: stage !== 'initial' ? 1 : 0.8, 
                opacity: stage !== 'initial' ? 1 : 0 
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 shadow-2xl backdrop-blur-xs"
            >
              <BrandMonogram size={56} />
            </motion.div>

            {/* Typography Stagger */}
            <div className="space-y-2 overflow-hidden">
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ 
                  y: stage === 'name' || stage === 'exit' ? 0 : 40, 
                  opacity: stage === 'name' || stage === 'exit' ? 1 : 0 
                }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-cobalt font-semibold block mb-1">
                  PORTFOLIO OF
                </span>
                <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
                  HARSHAD MANE
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: stage === 'name' || stage === 'exit' ? 0.7 : 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="text-xs sm:text-sm font-mono text-neutral-400 tracking-wide"
              >
                Computer Science &bull; Systems &bull; Applied AI &bull; Cinematography
              </motion.p>
            </div>

            {/* Hairline Loading / Transition Bar */}
            <div className="w-36 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
              <motion.div 
                initial={{ x: '-100%' }}
                animate={{ x: stage === 'name' || stage === 'exit' ? '100%' : '-100%' }}
                transition={{ duration: 0.9, ease: 'easeInOut' }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-cobalt to-transparent"
              />
            </div>
          </div>

          {/* Bottom Escape / Skip Prompt */}
          <div className="absolute bottom-6 flex items-center justify-between w-full px-6 text-[10px] font-mono text-neutral-400">
            <span>ADCET ASHTA, MAHARASHTRA</span>
            <button
              type="button"
              onClick={dismissIntro}
              className="hover:text-white transition-colors cursor-pointer px-2 py-1 rounded-md bg-white/[0.05] border border-white/10"
            >
              Skip Intro [Esc]
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
