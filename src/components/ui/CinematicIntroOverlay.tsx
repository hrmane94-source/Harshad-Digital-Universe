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
    const hasSeenIntro = sessionStorage.getItem('has_seen_cinematic_v6');
    
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (hasSeenIntro || prefersReducedMotion) {
      onComplete?.();
      return;
    }

    // Begin bright cinematic sequence
    setIsVisible(true);

    const timer1 = setTimeout(() => {
      setStage('monogram');
    }, 120);

    const timer2 = setTimeout(() => {
      setStage('name');
    }, 500);

    const timer3 = setTimeout(() => {
      setStage('exit');
    }, 1300);

    const timer4 = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('has_seen_cinematic_v6', 'true');
      onComplete?.();
    }, 1750);

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
    sessionStorage.setItem('has_seen_cinematic_v6', 'true');
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
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-gradient-to-br from-[#FFFDF9] via-[#F8FAFC] to-[#F0FDF4] text-[#1E293B] flex flex-col items-center justify-center overflow-hidden pointer-events-auto selection:bg-cobalt/20 select-none"
        >
          {/* Subtle sunlit architectural grid & luminous aura */}
          <div 
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{ 
              backgroundImage: 'radial-gradient(circle, #0284C7 1.5px, transparent 1.5px)', 
              backgroundSize: '36px 36px' 
            }}
          />

          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-amber-300/30 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-sky-300/30 blur-3xl pointer-events-none" />

          {/* Top Folio Film Slate Indicator */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute top-6 left-6 right-6 flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-slate-500"
          >
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block animate-ping" />
              <span className="font-bold text-slate-800">SCENE 01 // TITLE SEQUENCE</span>
            </div>
            <span className="hidden sm:inline font-semibold text-cobalt">THE DIGITAL UNIVERSE • VOL. 06</span>
          </motion.div>

          {/* Centerpiece Composition */}
          <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-xl space-y-6">
            
            {/* Monogram Reveal */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0, rotate: -6 }}
              animate={{ 
                scale: stage !== 'initial' ? 1 : 0.7, 
                opacity: stage !== 'initial' ? 1 : 0,
                rotate: stage !== 'initial' ? 0 : -6
              }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="p-4 rounded-3xl bg-white/90 border border-slate-200/80 shadow-xl backdrop-blur-md"
            >
              <BrandMonogram size={56} />
            </motion.div>

            {/* Typography Stagger */}
            <div className="space-y-2 overflow-hidden">
              <motion.div
                initial={{ y: 35, opacity: 0 }}
                animate={{ 
                  y: stage === 'name' || stage === 'exit' ? 0 : 35, 
                  opacity: stage === 'name' || stage === 'exit' ? 1 : 0 
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center justify-center gap-2 mb-1.5">
                  <span className="h-px w-6 bg-coral/60" />
                  <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-coral font-bold">
                    AN INTERACTIVE FILM
                  </span>
                  <span className="h-px w-6 bg-coral/60" />
                </div>
                <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.02]">
                  HARSHAD MANE
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: stage === 'name' || stage === 'exit' ? 0.9 : 0 }}
                transition={{ duration: 0.35, delay: 0.1 }}
                className="text-xs sm:text-sm font-mono text-slate-600 tracking-wide font-medium"
              >
                Computer Science &bull; Systems &bull; Applied AI &bull; Creative Vision
              </motion.p>
            </div>

            {/* Luminous Warm Hairline Bar */}
            <div className="w-44 h-1 bg-slate-200 rounded-full overflow-hidden relative">
              <motion.div 
                initial={{ x: '-100%' }}
                animate={{ x: stage === 'name' || stage === 'exit' ? '100%' : '-100%' }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="absolute inset-0 bg-gradient-to-r from-amber-400 via-coral to-cobalt"
              />
            </div>
          </div>

          {/* Bottom Coordinates & Skip Control */}
          <div className="absolute bottom-6 flex items-center justify-between w-full px-6 text-[11px] font-mono text-slate-500">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>ADCET ASHTA, MAHARASHTRA</span>
            </span>
            <button
              type="button"
              onClick={dismissIntro}
              className="hover:text-slate-900 hover:border-slate-400 transition-all cursor-pointer px-3 py-1 rounded-lg bg-white/80 border border-slate-200 shadow-xs font-semibold"
            >
              Skip Intro [Esc] &rarr;
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
