import React, { useRef, useState, useEffect } from 'react';
import { MapPin, Play, Film, Maximize2 } from 'lucide-react';
import type { CreativeMediaItem } from '../../types/portfolio';

export interface CreativeTiltFrameProps {
  item: CreativeMediaItem;
  onClick: () => void;
  variant?: 'hero' | 'wide' | 'portrait' | 'standard' | 'scrapbook';
  frameNumber?: number | string;
  className?: string;
  priority?: boolean;
}

export const CreativeTiltFrame: React.FC<CreativeTiltFrameProps> = ({
  item,
  onClick,
  variant = 'standard',
  frameNumber,
  className = '',
  priority = false
}) => {
  const frameRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState<number>(0);
  const [rotateY, setRotateY] = useState<number>(0);
  const [glarePos, setGlarePos] = useState<{ x: number; y: number; opacity: number }>({ x: 50, y: 50, opacity: 0 });
  const [isHoverable, setIsHoverable] = useState<boolean>(false);

  useEffect(() => {
    const hoverQuery = window.matchMedia('(hover: hover)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const updateCapabilities = () => {
      setIsHoverable(hoverQuery.matches && !motionQuery.matches);
    };

    updateCapabilities();
    hoverQuery.addEventListener('change', updateCapabilities);
    motionQuery.addEventListener('change', updateCapabilities);

    return () => {
      hoverQuery.removeEventListener('change', updateCapabilities);
      motionQuery.removeEventListener('change', updateCapabilities);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHoverable || !frameRef.current) return;

    const rect = frameRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle 2.5 degree max tilt for smooth photographic feel
    const rotX = -((y - centerY) / centerY) * 2.5;
    const rotY = ((x - centerX) / centerX) * 2.5;

    setRotateX(rotX);
    setRotateY(rotY);

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    setGlarePos({ x: glareX, y: glareY, opacity: 0.16 });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  // Determine aspect ratio class based on orientation and variant
  const getAspectClass = () => {
    if (variant === 'hero') return 'aspect-[16/10] sm:aspect-[21/10]';
    if (variant === 'wide') return 'aspect-[16/9]';
    if (variant === 'portrait' || item.isVertical) return 'aspect-[9/14] sm:aspect-[3/4]';
    if (variant === 'scrapbook') return 'aspect-[4/3]';
    return 'aspect-[4/3] sm:aspect-[16/11]';
  };

  const formatFrameNum = frameNumber 
    ? String(frameNumber).padStart(2, '0') 
    : item.id.replace('gallery-', '').padStart(2, '0');

  return (
    <div
      style={{ perspective: '1200px' }}
      className={`relative w-full ${className}`}
    >
      <div
        ref={frameRef}
        role="button"
        tabIndex={0}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        aria-label={`View full memory: ${item.title}`}
        style={{
          transform: isHoverable
            ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`
            : 'none',
          transition: rotateX === 0 && rotateY === 0 
            ? 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.45s ease, border-color 0.25s ease' 
            : 'transform 0.08s ease-out',
          transformStyle: 'preserve-3d'
        }}
        className="group relative rounded-2xl bg-white dark:bg-[#141D35] border border-border-hairline hover:border-coral/45 dark:hover:border-coral/50 shadow-sm hover:shadow-xl hover:shadow-coral/10 dark:hover:shadow-black/60 transition-all duration-300 overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 flex flex-col justify-between"
      >
        {/* Dynamic Tactile Glare Reflection (Pointer-driven) */}
        {isHoverable && (
          <div
            className="pointer-events-none absolute -inset-px rounded-2xl z-30 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle 320px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, ${glarePos.opacity}), transparent 75%)`,
              opacity: glarePos.opacity > 0 ? 1 : 0
            }}
          />
        )}

        {/* Cinematic Diagonal Light Sweep on Hover */}
        <div 
          className="pointer-events-none absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute -inset-full w-[250%] h-[250%] bg-gradient-to-r from-transparent via-white/12 dark:via-white/8 to-transparent -rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
        </div>

        {/* Film Header Bar: Frame Number, ISO, Viewfinder Markers */}
        <div className="px-3.5 py-2.5 bg-slate-100/90 dark:bg-[#10172A]/90 border-b border-border-hairline flex items-center justify-between text-[10px] font-mono tracking-wider text-muted select-none">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-coral/80 group-hover:scale-125 transition-transform" />
            <span className="font-bold text-ink group-hover:text-coral transition-colors">
              M&ndash;{formatFrameNum}
            </span>
            <span className="text-muted/40">//</span>
            <span className="uppercase text-[9px] px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/5 text-muted">
              {item.category}
            </span>
          </div>

          <div className="flex items-center gap-2 text-faint">
            {item.mediaType === 'video' ? (
              <span className="flex items-center gap-1 text-sunny font-semibold">
                <Film className="w-3 h-3" />
                <span>24 FPS</span>
              </span>
            ) : (
              <span className="font-mono">RAW &bull; HDR</span>
            )}
            <span className="hidden sm:inline font-mono opacity-50">+ [ ] +</span>
          </div>
        </div>

        {/* Media Viewport */}
        <div className={`relative w-full ${getAspectClass()} overflow-hidden bg-slate-950 flex items-center justify-center`}>
          <img
            src={item.thumbnail || item.source}
            alt={item.alt}
            loading={priority ? 'eager' : 'lazy'}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />

          {/* Corner Viewfinder Crosshairs Overlay */}
          <div className="absolute inset-2 pointer-events-none opacity-0 group-hover:opacity-60 transition-opacity duration-300 z-10 flex flex-col justify-between">
            <div className="flex justify-between text-[9px] font-mono text-white/70">
              <span>&#x250C;</span>
              <span>&#x2510;</span>
            </div>
            <div className="flex justify-between text-[9px] font-mono text-white/70">
              <span>&#x2514;</span>
              <span>&#x2518;</span>
            </div>
          </div>

          {/* Video Play Pill & Glow */}
          {item.mediaType === 'video' && (
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 flex items-center justify-center transition-colors z-10">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/95 dark:bg-white text-slate-900 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Play className="w-5 h-5 sm:w-6 sm:h-6 ml-0.5 fill-slate-900 text-slate-900" />
              </div>
              <span className="absolute bottom-3 right-3 px-2 py-1 rounded-md text-[10px] font-mono bg-black/80 text-white backdrop-blur-xs flex items-center gap-1.5 shadow-md">
                <Film className="w-3 h-3 text-sunny animate-pulse" />
                <span className="font-bold">MOTION REEL</span>
              </span>
            </div>
          )}

          {/* Maximize Icon on Image Hover */}
          {item.mediaType === 'image' && (
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <div className="p-2 rounded-lg bg-black/75 text-white backdrop-blur-xs shadow-md group-hover:scale-105 transition-transform">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>
          )}

          {/* Atmospheric subtle vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity pointer-events-none" />
        </div>

        {/* Information & Journal Caption Footer */}
        <div className="p-4 sm:p-5 space-y-2.5 bg-white dark:bg-[#141D35] flex-1 flex flex-col justify-between">
          <div className="space-y-1.5">
            <h3 className="font-serif text-lg sm:text-xl font-normal text-ink group-hover:text-coral transition-colors line-clamp-1 leading-snug">
              {item.title}
            </h3>

            {item.caption && (
              <p className="text-xs sm:text-[13px] text-muted line-clamp-2 leading-relaxed font-sans">
                {item.caption}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between pt-2.5 border-t border-border-hairline text-[11px] font-mono text-muted">
            <span className="flex items-center gap-1.5 truncate max-w-[70%]">
              <MapPin className="w-3 h-3 text-coral shrink-0" />
              <span className="truncate">{item.location || 'Western Ghats, Maharashtra'}</span>
            </span>

            <span className="shrink-0 font-bold text-ink/80 dark:text-white/80">
              {item.date || '2026'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
