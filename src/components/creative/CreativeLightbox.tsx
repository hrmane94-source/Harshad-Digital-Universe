import React, { useEffect, useRef, useState, useCallback } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Calendar, 
  Maximize2, 
  Minimize2, 
  Film, 
  Camera, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { InstagramIcon } from '../ui/BrandIcons';
import { contactConfig } from '../../data/contact';
import type { CreativeMediaItem } from '../../types/portfolio';

export interface CreativeLightboxProps {
  activeItem: CreativeMediaItem;
  items: CreativeMediaItem[];
  onClose: () => void;
  onSelect: (item: CreativeMediaItem) => void;
}

export const CreativeLightbox: React.FC<CreativeLightboxProps> = ({
  activeItem,
  items,
  onClose,
  onSelect
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);

  const currentIndex = items.findIndex(i => i.id === activeItem.id);
  const totalCount = items.length;

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onSelect(items[currentIndex - 1]);
    } else {
      // Loop to end
      onSelect(items[items.length - 1]);
    }
  }, [currentIndex, items, onSelect]);

  const handleNext = useCallback(() => {
    if (currentIndex < items.length - 1) {
      onSelect(items[currentIndex + 1]);
    } else {
      // Loop to start
      onSelect(items[0]);
    }
  }, [currentIndex, items, onSelect]);

  // Lock body scroll and save active focus element
  useEffect(() => {
    previouslyFocusedElementRef.current = document.activeElement as HTMLElement;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus modal container
    if (modalRef.current) {
      modalRef.current.focus();
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      if (previouslyFocusedElementRef.current && previouslyFocusedElementRef.current.focus) {
        previouslyFocusedElementRef.current.focus();
      }
    };
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, handlePrev, handleNext]);

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      modalRef.current?.requestFullscreen?.().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen?.().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  const formattedIndex = String(currentIndex + 1).padStart(2, '0');
  const formattedTotal = String(totalCount).padStart(2, '0');

  return (
    <div
      ref={modalRef}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-label={`Immersive Viewer: ${activeItem.title}`}
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col justify-between focus:outline-none select-none animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Telemetry & Control Bar */}
      <div 
        className="w-full px-4 sm:px-8 py-4 sm:py-5 flex items-center justify-between text-white/80 border-b border-white/10 bg-black/40 backdrop-blur-md z-30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Memory Coordinates & Counter */}
        <div className="flex items-center gap-3 sm:gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-white font-bold">
            <span className="w-2 h-2 rounded-full bg-coral animate-pulse" />
            <span>FRAME {formattedIndex} / {formattedTotal}</span>
          </div>

          <span className="hidden sm:inline-flex items-center gap-1.5 text-white/60">
            {activeItem.mediaType === 'video' ? (
              <>
                <Film className="w-3.5 h-3.5 text-sunny" />
                <span>CINEMATIC REEL</span>
              </>
            ) : (
              <>
                <Camera className="w-3.5 h-3.5 text-coral" />
                <span>PHOTOGRAPHIC PRINT</span>
              </>
            )}
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggleFullscreen}
            aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
            className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white/90 hover:text-white transition-colors cursor-pointer"
            title="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4 sm:w-5 sm:h-5" /> : <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5" />}
          </button>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close Lightbox (Esc)"
            className="p-2 sm:p-2.5 rounded-full bg-white/15 hover:bg-coral text-white transition-colors cursor-pointer"
            title="Close Viewer (Escape)"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>

      {/* Main Viewport: Absolute Aspect-Ratio Preservation */}
      <div 
        className="flex-1 relative w-full flex items-center justify-center p-3 sm:p-6 sm:px-16 overflow-hidden min-h-0"
        onClick={onClose}
      >
        {/* Navigation Arrow: Previous */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          aria-label="Previous Photograph (Left Arrow)"
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-white/10 hover:bg-white/25 active:scale-95 text-white backdrop-blur-md transition-all cursor-pointer z-30 group shadow-lg border border-white/10"
        >
          <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 group-hover:-translate-x-0.5 transition-transform" />
        </button>

        {/* Navigation Arrow: Next */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          aria-label="Next Photograph (Right Arrow)"
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-white/10 hover:bg-white/25 active:scale-95 text-white backdrop-blur-md transition-all cursor-pointer z-30 group shadow-lg border border-white/10"
        >
          <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* Active Media Container */}
        <div 
          className="relative max-h-full max-w-full flex items-center justify-center z-20"
          onClick={(e) => e.stopPropagation()}
        >
          {activeItem.mediaType === 'video' ? (
            <video
              ref={videoRef}
              key={activeItem.source}
              src={activeItem.source}
              poster={activeItem.thumbnail || activeItem.poster}
              controls
              autoPlay
              playsInline
              className="max-h-[72vh] sm:max-h-[76vh] max-w-[92vw] sm:max-w-[85vw] w-auto h-auto object-contain rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/15"
            />
          ) : (
            <img
              key={activeItem.source}
              src={activeItem.source}
              alt={activeItem.alt}
              className="max-h-[72vh] sm:max-h-[76vh] max-w-[92vw] sm:max-w-[85vw] w-auto h-auto object-contain rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/15 transition-all duration-300"
            />
          )}
        </div>
      </div>

      {/* Bottom Editorial Caption & Story Bar */}
      <div 
        className="w-full px-4 sm:px-8 py-4 sm:py-5 bg-black/80 backdrop-blur-xl border-t border-white/10 z-30 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2.5 text-[11px] font-mono text-white/70">
              <span className="uppercase px-2.5 py-0.5 rounded-full bg-coral/20 border border-coral/30 text-coral font-bold tracking-wider">
                {activeItem.category}
              </span>

              {activeItem.location && (
                <span className="flex items-center gap-1 text-white/80">
                  <MapPin className="w-3.5 h-3.5 text-coral shrink-0" />
                  <span>{activeItem.location}</span>
                </span>
              )}

              {activeItem.date && (
                <span className="flex items-center gap-1 text-white/60">
                  <Calendar className="w-3.5 h-3.5 text-sunny shrink-0" />
                  <span>{activeItem.date}</span>
                </span>
              )}
            </div>

            <h2 className="font-serif text-xl sm:text-2xl text-white font-normal tracking-tight">
              {activeItem.title}
            </h2>

            {activeItem.caption && (
              <p className="text-xs sm:text-sm text-white/75 font-sans leading-relaxed">
                {activeItem.caption}
              </p>
            )}
          </div>

          {/* Social Proof & Instagram Tag */}
          <div className="flex items-center gap-3 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-white/10">
            <a
              href={contactConfig.profiles.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-mono text-white transition-colors"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-coral" />
              <span>@{contactConfig.creativeIdentity}</span>
              <ExternalLink className="w-3 h-3 text-white/50" />
            </a>

            <div className="hidden lg:flex items-center gap-1.5 text-[11px] font-mono text-white/40">
              <Sparkles className="w-3 h-3 text-sunny" />
              <span>Arrow Keys &bull; Esc to Close</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
