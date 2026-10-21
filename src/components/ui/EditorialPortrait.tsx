import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, UserCheck } from 'lucide-react';
import { BrandMonogram } from './BrandMonogram';
import { assetConfig } from '../../data/assets';
import { contactConfig } from '../../data/contact';

interface EditorialPortraitProps {
  className?: string;
  variant?: 'hero' | 'about';
  aspectRatio?: string;
}

const CANDIDATE_SOURCES = [
  assetConfig.identity.portrait,
  "/assets/identity/portrait.png",
  "/assets/identity/portrait.jpg",
  "/assets/identity/1000109865.png"
].filter(Boolean) as string[];

export const EditorialPortrait: React.FC<EditorialPortraitProps> = ({ 
  className = "", 
  variant = 'hero',
  aspectRatio = 'aspect-square sm:aspect-[4/5]'
}) => {
  const [sourceIdx, setSourceIdx] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const currentSrc = CANDIDATE_SOURCES[sourceIdx] || "/assets/identity/portrait.png";

  const handleImageError = () => {
    if (sourceIdx < CANDIDATE_SOURCES.length - 1) {
      setSourceIdx(prev => prev + 1);
    } else {
      setHasError(true);
    }
  };

  return (
    <div className={`relative ${className}`}>
      
      {/* Layered Architectural Color Cards Behind Portrait */}
      <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-tr from-cobalt/20 via-sunny/25 to-coral/20 rounded-[2.5rem] transform -rotate-2 -z-10 blur-xs transition-transform duration-300 group-hover:rotate-0" />
      <div className="absolute -inset-1.5 sm:-inset-2 bg-gradient-to-br from-sunny/40 via-amber-200/50 to-cobalt/30 rounded-[2.25rem] transform rotate-1 -z-10" />

      {/* Main Portrait Frame */}
      <div className={`relative ${aspectRatio} rounded-3xl overflow-hidden bg-surface border-2 border-slate-900/10 dark:border-white/15 shadow-xl`}>
        
        {/* If image exists and hasn't exhausted all sources */}
        {!hasError ? (
          <>
            <img
              src={currentSrc}
              alt={assetConfig.identity.portraitAlt || "Harshad Mane — Personal Photograph"}
              onLoad={() => setImageLoaded(true)}
              onError={handleImageError}
              className={`w-full h-full object-cover object-top sm:object-center transition-all duration-700 ${
                imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
            />

            {/* Subtle Gradient Shade at bottom for badge contrast */}
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/50 via-black/20 to-transparent pointer-events-none" />

            {/* Fallback while loading */}
            {!imageLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#FFFDF9] via-[#FAF8F5] to-amber-50/40">
                <BrandMonogram size={56} className="animate-pulse" />
                <span className="font-mono text-xs text-muted mt-3">Loading photograph...</span>
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
                  {contactConfig.publicDisplayName}
                </h3>
                <p className="text-xs font-mono text-muted tracking-wide">
                  @{contactConfig.creativeIdentity}
                </p>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 font-sans max-w-xs mx-auto leading-relaxed italic">
                &ldquo;{contactConfig.motto}&rdquo;
              </p>
            </div>

            {/* Bottom Meta Bar */}
            <div className="relative z-10 pt-3 border-t border-black/[0.08] dark:border-white/10 flex items-center justify-between text-[10px] font-mono text-muted">
              <span>B.TECH CSE &bull; ADCET</span>
              <span className="font-bold text-cobalt">CLASS OF 2026–2030</span>
            </div>
          </div>
        )}

        {/* Floating Verified Achievement / Identity Badges on Portrait */}
        {variant === 'hero' ? (
          <>
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
          </>
        ) : (
          <>
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-xl bg-surface/95 backdrop-blur-md border border-black/[0.08] dark:border-white/15 shadow-md flex items-center gap-2 text-[10px] sm:text-[11px] font-mono"
            >
              <UserCheck className="w-3.5 h-3.5 text-cobalt" />
              <span className="font-bold text-ink">AUTHENTIC IDENTITY</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="absolute bottom-4 left-4 z-20 px-3.5 py-1.5 rounded-xl bg-surface/95 backdrop-blur-md border border-black/[0.08] dark:border-white/15 shadow-lg flex items-center gap-2 text-[10px] sm:text-[11px] font-mono font-bold text-ink"
            >
              <span className="text-cobalt">@{contactConfig.creativeIdentity}</span>
              <span className="text-muted">&bull; ADCET Ashta</span>
            </motion.div>
          </>
        )}

      </div>
    </div>
  );
};
