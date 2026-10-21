import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Compass, Play, Film, X } from 'lucide-react';
import { InstagramIcon } from '../ui/BrandIcons';
import { contactConfig } from '../../data/contact';
import { creativeGalleryItems, creativeCategoriesList } from '../../data/gallery';
import type { CreativeMediaItem } from '../../types/portfolio';

export const StudioCreative: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeMedia, setActiveMedia] = useState<CreativeMediaItem | null>(null);

  const published = creativeGalleryItems.filter(item => item.published);

  // Curate featured or matching items
  const filteredPieces = selectedCategory === 'all'
    ? published.slice(0, 8)
    : published.filter(p => p.category === selectedCategory).slice(0, 8);

  return (
    <section 
      id="chapter-04" 
      className="py-20 sm:py-32 border-b border-slate-200/90 dark:border-white/10 bg-paper text-ink relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-slate-200 dark:border-white/10 pb-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cobalt uppercase font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-coral inline-block animate-pulse" />
              <span className="text-ink">SECTION 05</span>
              <span className="text-slate-300 dark:text-slate-700">//</span>
              <span>VISUAL ESSAY &amp; CINEMATOGRAPHY</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-ink tracking-tight leading-[1.05]">
              &ldquo;Frames, places, and stories &mdash; <br />
              <span className="italic font-serif text-coral font-bold">collected along the way.&rdquo;</span>
            </h2>

            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-mono text-muted">
              <span className="font-bold text-ink">CREATIVE IDENTITY:</span>
              <a
                href={contactConfig.profiles.instagram}
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-0.5 rounded-full bg-coral/10 text-coral border border-coral/30 font-bold font-mono hover:bg-coral/20 transition-colors inline-flex items-center gap-1.5"
              >
                <InstagramIcon className="w-3 h-3" />
                <span>@{contactConfig.creativeIdentity}</span>
              </a>
              <span>&bull;</span>
              <span>{published.length} Authentic Photos &amp; Video Clips</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/creative"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-surface border border-slate-300 dark:border-white/15 text-xs font-mono font-bold text-ink hover:text-cobalt hover:border-cobalt transition-colors shadow-2xs"
            >
              <span>Explore All {published.length} Works</span>
              <ArrowRight className="w-3.5 h-3.5 text-coral" />
            </Link>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {creativeCategoriesList.slice(0, 6).map(cat => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-colors cursor-pointer shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-ink text-paper font-bold shadow-xs'
                  : 'bg-surface text-muted hover:text-ink border border-slate-200 dark:border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Creative Asymmetric Grid — Authentic Photos & Videos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {filteredPieces.map((piece) => (
            <div 
              key={piece.id}
              onClick={() => setActiveMedia(piece)}
              className="p-4 rounded-2xl bg-surface border border-slate-200 dark:border-white/10 shadow-xs hover:shadow-md transition-all space-y-3 group cursor-pointer"
            >
              {/* Media Viewport */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center">
                <img
                  src={piece.thumbnail || piece.source}
                  alt={piece.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* If video: render video play indicator */}
                {piece.mediaType === 'video' && (
                  <div className="absolute inset-0 bg-black/35 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-white/95 text-slate-900 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Play className="w-4 h-4 ml-0.5 fill-slate-900" />
                    </div>
                    <span className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded text-[9px] font-mono bg-black/80 text-white flex items-center gap-1">
                      <Film className="w-2.5 h-2.5 text-sunny" />
                      <span>VIDEO</span>
                    </span>
                  </div>
                )}

                <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[9px] font-mono uppercase bg-black/70 text-white backdrop-blur-xs">
                  {piece.category}
                </span>
              </div>

              {/* Description */}
              <div className="space-y-1">
                <h3 className="font-serif text-base font-bold text-ink group-hover:text-coral transition-colors truncate">
                  {piece.title}
                </h3>
                <div className="flex items-center justify-between text-[10px] font-mono text-muted pt-1 border-t border-slate-100 dark:border-white/5">
                  <span className="flex items-center gap-1 truncate max-w-[70%]">
                    <MapPin className="w-2.5 h-2.5 text-coral shrink-0" />
                    <span className="truncate">{piece.location}</span>
                  </span>
                  <span>{piece.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Motorcycle Expedition Ambitions Banner */}
        <div className="p-6 sm:p-7 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-800 dark:text-amber-400 font-bold">
              <Compass className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>TRAVEL &amp; MOTORCYCLE EXPEDITION HORIZONS</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans">
              Documenting journeys through Western Ghats passes and dreaming of long-distance motorcycle expeditions across Ladakh and remote India.
            </p>
          </div>

          <Link
            to="/explorations"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface border border-amber-300 dark:border-amber-800 text-xs font-mono font-bold text-amber-900 dark:text-amber-300 hover:bg-amber-100/50 transition-colors shrink-0"
          >
            <span>View Expedition Log</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>

      {/* Lightbox Modal for Homepage Preview */}
      {activeMedia && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setActiveMedia(null)}
        >
          <button
            type="button"
            onClick={() => setActiveMedia(null)}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer z-50"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          <div 
            className="max-w-4xl w-full bg-surface dark:bg-slate-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-black flex-1 flex items-center justify-center p-2 min-h-[40vh] max-h-[70vh]">
              {activeMedia.mediaType === 'video' ? (
                <video 
                  src={activeMedia.source} 
                  poster={activeMedia.poster || activeMedia.thumbnail}
                  controls 
                  autoPlay 
                  playsInline 
                  className="max-h-[68vh] w-auto max-w-full mx-auto rounded-lg" 
                />
              ) : (
                <img 
                  src={activeMedia.source} 
                  alt={activeMedia.alt} 
                  className="max-h-[68vh] w-auto max-w-full mx-auto object-contain rounded-lg" 
                />
              )}
            </div>

            <div className="p-5 space-y-1.5 border-t border-slate-200 dark:border-white/10 bg-surface dark:bg-slate-900">
              <div className="flex items-center justify-between text-xs font-mono text-muted">
                <span className="uppercase text-coral font-bold">{activeMedia.category}</span>
                <span>{activeMedia.location}</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-ink">{activeMedia.title}</h3>
              {activeMedia.caption && (
                <p className="text-xs text-slate-600 dark:text-slate-300 font-sans">{activeMedia.caption}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
