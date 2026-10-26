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
    <div className={`relative group ${className}`}>
      
      {/* Layered Architectural Color Cards Behind Portrait */}
      <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-tr from-cobalt/25 via-violet/25 to-coral/20 dark:from-cobalt/35 dark:via-violet/30 dark:to-mint/25 rounded-[2.5rem] transform -rotate-2 -z-10 blur-xs transition-transform duration-300 group-hover:rotate-0" />
      <div className="absolute -inset-1.5 sm:-inset-2 bg-gradient-to-br from-sunny/35 via-amber-200/40 to-cobalt/25 dark:from-blue-600/25 dark:via-violet-600/25 dark:to-cobalt/30 rounded-[2.25rem] transform rotate-1 -z-10" />

      {/* Main Portrait Frame */}
      <div className={`relative ${aspectRatio} rounded-3xl overflow-hidden bg-surface dark:bg-card border-2 border-border-hairline dark:border-cobalt/30 shadow-xl dark:shadow-2xl dark:shadow-cobalt/10`}>
        
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
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 via-black/25 to-transparent pointer-events-none" />

            {/* Fallback while loading */}
            {!imageLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-paper">
                <BrandMonogram size={56} className="animate-pulse" />
                <span className="font-mono text-xs text-muted mt-3">Loading photograph...</span>
              </div>
            )}
          </>
        ) : (
          /* Designed Architectural Placeholder when image is missing — NEVER looks broken! */
          <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-paper via-surface to-secondary dark:from-[#0B1020] dark:via-[#131B31] dark:to-[#18233E] relative overflow-hidden select-none">
            
            {/* Geometric Grid Texture */}
            <div 
              className="absolute inset-0 opacity-[0.04] pointer-events-none" 
              style={{ 
                backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', 
                backgroundSize: '20px 20px' 
              }}
            />

            {/* Top Monogram */}
            <div className="relative z-10 flex items-center justify-between">
              <BrandMonogram size={48} />
              <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full bg-cobalt/10 text-cobalt border border-cobalt/20 font-bold">
                VERIFIED LEDGER
              </span>
            </div>

            {/* Center Typographic Statement */}
            <div className="relative z-10 text-center space-y-3">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink tracking-tight">
                  {contactConfig.publicDisplayName}
                </h3>
                <p className="text-xs font-mono text-muted tracking-wide">
                  @{contactConfig.creativeIdentity}
                </p>
              </div>

              <p className="text-xs text-muted font-sans max-w-xs mx-auto leading-relaxed italic">
                &ldquo;{contactConfig.motto}&rdquo;
              </p>
            </div>

            {/* Bottom Meta Bar */}
            <div className="relative z-10 pt-3 border-t border-border-hairline flex items-center justify-between text-[10px] font-mono text-muted">
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
              className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-xl bg-surface/95 dark:bg-card/95 backdrop-blur-md border border-border-hairline dark:border-white/15 shadow-md flex items-center gap-2 text-[10px] sm:text-[11px] font-mono"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-bold text-ink">ACTIVE BUILDER</span>
              <span className="text-muted hidden sm:inline">&bull; SIH &apos;26</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="absolute bottom-4 right-4 z-20 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cobalt to-blue-600 text-white shadow-lg flex items-center gap-2 text-[10px] sm:text-[11px] font-mono font-bold"
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
              className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-xl bg-surface/95 dark:bg-card/95 backdrop-blur-md border border-border-hairline dark:border-white/15 shadow-md flex items-center gap-2 text-[10px] sm:text-[11px] font-mono"
            >
              <UserCheck className="w-3.5 h-3.5 text-cobalt" />
              <span className="font-bold text-ink">HARSHAD MANE</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="absolute bottom-4 right-4 z-20 px-3 py-1.5 rounded-xl bg-surface/95 dark:bg-card/95 backdrop-blur-md border border-border-hairline dark:border-white/15 shadow-md flex items-center gap-2 text-[10px] sm:text-[11px] font-mono text-muted"
            >
              <span>ADCET CSE &apos;26</span>
            </motion.div>
          </>
        )}

      </div>
    </div>
  );
};
