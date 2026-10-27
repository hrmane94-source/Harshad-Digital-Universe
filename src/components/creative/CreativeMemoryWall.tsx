import React, { useRef, useState, useEffect } from 'react';
import { Sparkles, Maximize2, Play, Film, MapPin } from 'lucide-react';
import type { CreativeMediaItem } from '../../types/portfolio';
import { creativeGalleryItems } from '../../data/gallery';

interface CreativeMemoryWallProps {
  onSelectMedia: (item: CreativeMediaItem) => void;
}

export const CreativeMemoryWall: React.FC<CreativeMemoryWallProps> = ({ onSelectMedia }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isInteractive, setIsInteractive] = useState<boolean>(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    const hoverQuery = window.matchMedia('(hover: hover)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const update = () => {
      setIsInteractive(hoverQuery.matches && !motionQuery.matches);
    };

    update();
    hoverQuery.addEventListener('change', update);
    motionQuery.addEventListener('change', update);

    return () => {
      hoverQuery.removeEventListener('change', update);
      motionQuery.removeEventListener('change', update);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isInteractive || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
    setHoveredId(null);
  };

  // Curate 5 diverse, signature real memories across different genres and orientations
  const memoryIds = [
    'gallery-2',  // Pastel Sunset over Sangli (Landscape)
    'gallery-15', // Ghats Silhouette (Portrait / Nature)
    'gallery-8',  // Golden Hour Farmlands (Warm rural)
    'gallery-36', // Morning Ride Reel (Motion reel)
    'gallery-17', // Wide Sahyadri Ridge (Panoramic landscape)
  ];

  const wallItems = memoryIds
    .map(id => creativeGalleryItems.find(item => item.id === id))
    .filter((item): item is CreativeMediaItem => Boolean(item));

  // Spatial configurations for the layered editorial spread
  const layoutConfigs = [
    // 0: Center Main (Pastel Sunset)
    {
      className: 'col-span-12 md:col-span-6 lg:col-span-5 md:translate-y-4',
      depthFactor: 1.0,
      baseRotate: -1.2,
      aspectClass: 'aspect-[16/11]',
      badge: 'SIGNATURE HORIZON'
    },
    // 1: Center-Right Vertical (Ghats Silhouette)
    {
      className: 'col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 md:-translate-y-6',
      depthFactor: 1.4,
      baseRotate: 2.1,
      aspectClass: 'aspect-[3/4]',
      badge: 'RIDGE VERTICAL'
    },
    // 2: Right Warm (Golden Hour Farmlands)
    {
      className: 'col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 md:translate-y-12',
      depthFactor: 0.8,
      baseRotate: -2.0,
      aspectClass: 'aspect-[4/3]',
      badge: 'AUTUMN LIGHT'
    },
    // 3: Motion Reel (Morning Ride)
    {
      className: 'col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 md:translate-y-2',
      depthFactor: 1.2,
      baseRotate: 1.5,
      aspectClass: 'aspect-[4/3]',
      badge: 'EXPEDITION REEL'
    },
    // 4: Wide Sahyadri Ridge (Panoramic)
    {
      className: 'col-span-12 md:col-span-6 lg:col-span-8 md:-translate-y-4',
      depthFactor: 0.9,
      baseRotate: -0.8,
      aspectClass: 'aspect-[21/9]',
      badge: 'PANORAMIC SAHYADRI'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Section Subhead & Interaction Cue */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border-hairline pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-coral font-bold tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-sunny" />
            <span>INTERACTIVE MEMORY WALL</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl text-ink font-normal tracking-tight pt-1">
            Moments spread across time and space.
          </h2>
        </div>

        <p className="text-xs font-mono text-muted max-w-xs text-left sm:text-right">
          {isInteractive ? (
            <span>Explore by moving your pointer &bull; Click to immerse</span>
          ) : (
            <span>Curated fragments from the personal archive &bull; Tap to view</span>
          )}
        </p>
      </div>

      {/* Layered Surface Canvas */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative p-4 sm:p-8 rounded-3xl bg-gradient-to-br from-[#FFECEA]/50 via-white/80 to-[#FFF5E6]/60 dark:from-[#10172A] dark:via-[#141D35] dark:to-[#0E1527] border border-border-hairline shadow-sm overflow-hidden"
      >
        {/* Subtle Ambient Radial Lighting */}
        <div 
          className="absolute inset-0 pointer-events-none transition-opacity duration-700"
          style={{
            background: `radial-gradient(circle 600px at ${50 + mousePos.x * 30}% ${50 + mousePos.y * 30}%, rgba(230, 93, 89, 0.08), transparent 70%)`
          }}
          aria-hidden="true"
        />

        {/* Asymmetrical Floating Grid */}
        <div className="grid grid-cols-12 gap-5 sm:gap-6 items-center relative z-10">
          {wallItems.map((item, index) => {
            const config = layoutConfigs[index] || layoutConfigs[0];
            const isHovered = hoveredId === item.id;

            // Parallax offset computation
            const translateX = isInteractive ? mousePos.x * config.depthFactor * 16 : 0;
            const translateY = isInteractive ? mousePos.y * config.depthFactor * 16 : 0;
            const rotate = isHovered ? 0 : config.baseRotate;

            return (
              <div
                key={item.id}
                className={`${config.className} transition-all duration-300`}
                style={{
                  zIndex: isHovered ? 40 : 10 + index,
                  transform: isInteractive
                    ? `translate3d(${translateX}px, ${translateY}px, 0) rotate(${rotate}deg) scale(${isHovered ? 1.03 : 1})`
                    : `rotate(${config.baseRotate}deg)`,
                  transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease'
                }}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => onSelectMedia(item)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onSelectMedia(item);
                    }
                  }}
                  aria-label={`Open memory: ${item.title}`}
                  className="group relative rounded-2xl bg-white dark:bg-[#18233E] border border-border-hairline hover:border-coral/50 p-2 sm:p-2.5 shadow-md hover:shadow-2xl transition-all cursor-pointer overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-coral"
                >
                  {/* Decorative Tape / Pin Header */}
                  <div className="flex items-center justify-between px-2 py-1 text-[10px] font-mono text-muted select-none">
                    <span className="font-bold text-ink group-hover:text-coral transition-colors flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-coral inline-block" />
                      {config.badge}
                    </span>
                    <span className="text-faint">{item.date}</span>
                  </div>

                  {/* Photo Viewport */}
                  <div className={`relative ${config.aspectClass} rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center`}>
                    <img
                      src={item.thumbnail || item.source}
                      alt={item.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Video Indicator */}
                    {item.mediaType === 'video' && (
                      <div className="absolute inset-0 bg-black/35 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                        <div className="w-11 h-11 rounded-full bg-white/95 text-slate-900 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <Play className="w-4 h-4 ml-0.5 fill-slate-900 text-slate-900" />
                        </div>
                        <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md text-[9px] font-mono bg-black/80 text-white flex items-center gap-1 shadow">
                          <Film className="w-2.5 h-2.5 text-sunny" />
                          <span>MOTION</span>
                        </span>
                      </div>
                    )}

                    {/* Maximize pill on hover */}
                    {item.mediaType === 'image' && (
                      <div className="absolute bottom-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="p-1.5 rounded-lg bg-black/70 text-white backdrop-blur-xs">
                          <Maximize2 className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    )}

                    {/* Corner viewfinder markings */}
                    <div className="absolute inset-2 pointer-events-none opacity-0 group-hover:opacity-50 transition-opacity flex justify-between text-[8px] font-mono text-white">
                      <span>+</span>
                      <span>+</span>
                    </div>
                  </div>

                  {/* Micro Caption */}
                  <div className="px-2 pt-2 pb-1 space-y-0.5">
                    <h3 className="font-serif text-sm font-bold text-ink group-hover:text-coral transition-colors truncate">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1 text-[10px] font-mono text-muted truncate">
                      <MapPin className="w-2.5 h-2.5 text-coral shrink-0" />
                      <span className="truncate">{item.location || 'Western Ghats'}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
