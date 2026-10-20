import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { BrandMonogram } from './BrandMonogram';
import { assetConfig } from '../../data/assets';

interface EditorialPortraitProps {
  className?: string;
}

export const EditorialPortrait: React.FC<EditorialPortraitProps> = ({ className = "" }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const portraitSrc = assetConfig.identity.portrait || "/assets/identity/portrait.jpg";

  return (
    <div className={`relative ${className}`}>
      
      {/* Layered Architectural Color Cards Behind Portrait */}
      <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-tr from-cobalt/20 via-sunny/25 to-coral/20 rounded-[2.5rem] transform -rotate-2 -z-10 blur-xs transition-transform duration-300 group-hover:rotate-0" />
      <div className="absolute -inset-1.5 sm:-inset-2 bg-gradient-to-br from-sunny/40 via-amber-200/50 to-cobalt/30 rounded-[2.25rem] transform rotate-1 -z-10" />

      {/* Main Portrait Frame */}
      <div className="relative aspect-[4/5] sm:aspect-[3/4] rounded-3xl overflow-hidden bg-surface border-2 border-slate-900/10 dark:border-white/15 shadow-xl">
        
        {/* If image exists and hasn't errored */}
        {!imageError ? (
          <>
            <img
              src={portraitSrc}
              alt={assetConfig.identity.portraitAlt || "Harshad Mane — Personal Portrait"}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              className={`w-full h-full object-cover object-top transition-all duration-700 ${
                imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
            />

            {/* Fallback while loading */}
            {!imageLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#FFFDF9] via-[#FAF8F5] to-amber-50/40">
                <BrandMonogram size={56} className="animate-pulse" />
                <span className="font-mono text-xs text-muted mt-3">Loading portrait...</span>
              </div>
            )}
          </>
        ) : (
          /* Designed Architectural Placeholder when image is missing — NEVER looks broken! */
          <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-[#FFFDF9] via-[#FAF8F5] to-[#EEF7FF] dark:from-[#18191E] dark:via-[#111215] dark:to-[#1E293B] relative overflow-hidden select-none">
            
            {/* Geometric Grid Texture */}
            <div 
              className="absolute inset-0 opacity-[0.04] pointer-events-none" 
              style={{ backgroundImage: 'radial-gradient(circle, #0F172A 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}
            />
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-amber-200/40 dark:bg-amber-900/20 blur-2xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-blue-200/40 dark:bg-blue-900/20 blur-2xl pointer-events-none" />

            {/* Top Folio Header */}
            <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-muted border-b border-black/[0.08] dark:border-white/10 pb-3">
              <span className="font-bold text-ink">HM // PORTRAIT FRAME</span>
              <span className="px-2 py-0.5 rounded-full bg-cobalt/10 text-cobalt font-bold">16.9482° N</span>
            </div>

            {/* Monogram Centerpiece */}
            <div className="relative z-10 my-auto text-center space-y-4">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-surface border-2 border-cobalt/30 dark:border-cobalt/40 shadow-lg mx-auto flex items-center justify-center text-cobalt transform group-hover:scale-105 transition-transform duration-300">
                <BrandMonogram size={64} />
              </div>

              <div className="space-y-1">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink tracking-tight">
                  Harshad Mane
                </h3>
                <p className="text-xs font-mono text-muted tracking-wide">
                  @shiv.premi_1630
                </p>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 font-sans max-w-xs mx-auto leading-relaxed italic">
                &ldquo;Curious enough to explore. Driven enough to build.&rdquo;
              </p>
            </div>

            {/* Bottom Meta Bar */}
            <div className="relative z-10 pt-3 border-t border-black/[0.08] dark:border-white/10 flex items-center justify-between text-[10px] font-mono text-muted">
              <span>B.TECH CSE &bull; ADCET</span>
              <span className="font-bold text-cobalt">CLASS OF 2026–2030</span>
            </div>
          </div>
        )}

        {/* Floating Verified Achievement Badges on Portrait */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-xl bg-surface/95 backdrop-blur-md border border-black/[0.08] dark:border-white/15 shadow-md flex items-center gap-2 text-[10px] sm:text-[11px] font-mono"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-bold text-ink">ACTIVE BUILDER</span>
          <span className="text-muted hidden sm:inline">&bull; SIH &apos;26</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="absolute bottom-4 right-4 z-20 px-3.5 py-1.5 rounded-xl bg-cobalt text-white shadow-lg flex items-center gap-2 text-[10px] sm:text-[11px] font-mono font-bold"
        >
          <Award className="w-3.5 h-3.5 text-sunny" />
          <span>PIXELCRAFT 2ND PLACE</span>
        </motion.div>

      </div>
    </div>
  );
};
