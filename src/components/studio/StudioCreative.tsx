import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Compass, Play, Film, X } from 'lucide-react';
import { InstagramIcon } from '../ui/BrandIcons';
import { contactConfig } from '../../data/contact';
import { creativeGalleryItems, creativeCategoriesList } from '../../data/gallery';
import type { CreativeMediaItem } from '../../types/portfolio';
import { PrismaticLens3DArtwork } from './PrismaticLens3DArtwork';

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
      className="py-20 sm:py-32 border-b border-border-hairline bg-gradient-to-b from-[#FFECEA] via-[#FFF5E6]/60 to-[#FFECEA] dark:from-paper dark:via-paper dark:to-paper text-ink relative overflow-hidden transition-colors duration-250"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 border-b border-border-hairline pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-coral uppercase font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-coral inline-block animate-pulse shadow-[0_0_8px_rgba(230,93,89,0.6)]" />
              <span className="text-ink">SECTION 05</span>
              <span className="text-muted/40">//</span>
              <span>VISUAL ESSAY &amp; CINEMATOGRAPHY</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-ink tracking-tight leading-[1.05]">
              &ldquo;Frames, places, and stories &mdash; <br />
              <span className="italic font-serif text-coral font-bold">collected along the way.&rdquo;</span>
            </h2>

            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-mono text-muted">
              <span className="font-bold text-ink">CREATIVE MONIKER:</span>
              <a
                href={contactConfig.profiles.instagram}
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-0.5 rounded-full bg-coral/15 text-coral border border-coral/30 font-bold font-mono hover:bg-coral/25 transition-colors inline-flex items-center gap-1.5"
              >
                <InstagramIcon className="w-3 h-3" />
                <span>@{contactConfig.creativeIdentity}</span>
              </a>
              <span>&bull;</span>
              <span>{published.length} Authentic Photographic Works &amp; Cinema Reels</span>
            </div>
          </div>

          {/* Interactive 3D Aperture Lens Artwork */}
          <div className="flex items-center gap-6">
            <div className="hidden sm:block w-44 h-36 relative shrink-0">
              <PrismaticLens3DArtwork size="sm" />
            </div>

            <div className="flex flex-col gap-2 shrink-0">
              <Link
                to="/creative"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-card border border-border-hairline text-xs font-mono font-bold text-ink hover:text-coral hover:border-coral/40 transition-all shadow-sm hover:shadow-warm active:scale-95"
              >
                <span>Explore All {published.length} Works</span>
                <ArrowRight className="w-3.5 h-3.5 text-coral" />
              </Link>
            </div>
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
                  : 'bg-white dark:bg-card text-muted hover:text-ink border border-border-hairline hover:border-border-medium'
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
              className="p-4 rounded-2xl bg-white dark:bg-card border border-border-hairline shadow-sm hover:shadow-warm transition-all space-y-3 group cursor-pointer tech-card"
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
        <div className="p-6 sm:p-7 rounded-2xl bg-[#FFF5E6] dark:bg-amber-950/20 border border-amber-300/60 dark:border-amber-900/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-700 dark:text-amber-400 flex items-center justify-center shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase text-amber-700 dark:text-amber-400 font-bold block">
                EXPEDITION DISPATCH
              </span>
              <p className="text-sm font-serif font-bold text-ink">
                All-India Motorcycle Circuit Preparation &bull; 2027&ndash;2030 Long-Term Ambition
              </p>
            </div>
          </div>
          <Link
            to="/explorations"
            className="inline-flex items-center gap-1 text-xs font-mono font-bold text-amber-700 dark:text-amber-400 hover:underline shrink-0"
          >
            <span>Read Ambition Brief</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeMedia && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveMedia(null)}
        >
          <button
            type="button"
            onClick={() => setActiveMedia(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
          >
            <X className="w-6 h-6" />
          </button>

          <div 
            className="max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-black flex-1 flex items-center justify-center overflow-hidden min-h-[300px] max-h-[70vh]">
              {activeMedia.mediaType === 'video' ? (
                <video 
                  src={activeMedia.source} 
                  poster={activeMedia.thumbnail}
                  controls 
                  autoPlay 
                  className="max-h-[70vh] w-auto max-w-full mx-auto" 
                />
              ) : (
                <img 
                  src={activeMedia.source} 
                  alt={activeMedia.alt} 
                  className="max-h-[70vh] w-auto max-w-full mx-auto object-contain" 
                />
              )}
            </div>

            <div className="p-4 sm:p-6 space-y-1.5 border-t border-white/10 bg-slate-900 text-white">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="uppercase text-coral font-bold">{activeMedia.category}</span>
                <span>{activeMedia.date}</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold">
                {activeMedia.title}
              </h3>
              {activeMedia.caption && (
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {activeMedia.caption}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
