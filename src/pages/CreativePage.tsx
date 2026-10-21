import React, { useState, useEffect } from 'react';
import {
  Camera,
  MapPin,
  X,
  Play,
  Film,
  Maximize2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { creativeGalleryItems, creativeCategoriesList } from '../data/gallery';
import type { CreativeMediaItem } from '../types/portfolio';
import { contactConfig } from '../data/contact';

export const CreativePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeMedia, setActiveMedia] = useState<CreativeMediaItem | null>(null);

  // Filter only published items for public view
  const publishedItems = creativeGalleryItems.filter(item => item.published);

  const displayItems = selectedCategory === 'all'
    ? publishedItems
    : publishedItems.filter(item => item.category === selectedCategory);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeMedia) return;
      if (e.key === 'Escape') setActiveMedia(null);
      if (e.key === 'ArrowRight') {
        const idx = displayItems.findIndex(i => i.id === activeMedia.id);
        if (idx !== -1 && idx < displayItems.length - 1) setActiveMedia(displayItems[idx + 1]);
      }
      if (e.key === 'ArrowLeft') {
        const idx = displayItems.findIndex(i => i.id === activeMedia.id);
        if (idx !== -1 && idx > 0) setActiveMedia(displayItems[idx - 1]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeMedia, displayItems]);

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (!activeMedia) return;
    const idx = displayItems.findIndex(i => i.id === activeMedia.id);
    if (direction === 'next' && idx < displayItems.length - 1) {
      setActiveMedia(displayItems[idx + 1]);
    } else if (direction === 'prev' && idx > 0) {
      setActiveMedia(displayItems[idx - 1]);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

      {/* Editorial Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-subtle border border-black/[0.08] dark:border-white/[0.08] text-muted text-[11px] font-mono tracking-widest uppercase font-semibold">
          <Camera className="w-3.5 h-3.5 text-coral" />
          <span>VISUAL STORYTELLING &bull; @{contactConfig.creativeIdentity}</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif text-ink tracking-tight font-normal leading-[1.08]">
          &ldquo;Frames, places, and stories <br />
          <span className="italic font-normal text-coral">— collected along the way.&rdquo;</span>
        </h1>
        <p className="text-muted text-sm sm:text-base leading-relaxed">
          The photographic and cinematic journal of Harshad Mane under the creative moniker <span className="font-mono text-ink font-semibold">shiv.premi_1630</span>. Exploring perspective, mountain light, high-frame-rate movement, and genuine natural textures across Western Ghats and Maharashtra.
        </p>

        <div className="flex items-center gap-4 text-xs font-mono text-muted pt-2">
          <span className="px-2.5 py-1 rounded-md bg-cobalt/10 text-cobalt font-bold">
            {publishedItems.length} Authentic Media Files
          </span>
          <span>&bull;</span>
          <span>No Stock Photos</span>
          <span>&bull;</span>
          <span>Original High-Resolution Works</span>
        </div>
      </div>

      {/* Category Filter Chips */}
      <div className="flex flex-wrap gap-2 border-b border-black/[0.08] dark:border-white/[0.08] pb-4">
        {creativeCategoriesList.map((cat) => {
          const count = cat.id === 'all' 
            ? publishedItems.length 
            : publishedItems.filter(i => i.category === cat.id).length;
          
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer flex items-center gap-2 ${
                selectedCategory === cat.id
                  ? 'bg-ink text-paper font-semibold shadow-xs'
                  : 'bg-surface text-muted border border-black/[0.08] dark:border-white/[0.08] hover:border-black/[0.2] dark:hover:border-white/[0.2] hover:text-ink'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                selectedCategory === cat.id ? 'bg-white/20 text-paper' : 'bg-subtle text-muted'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Masonry Gallery Display (Preserves natural aspect ratios without awkward cropping) */}
      {displayItems.length > 0 ? (
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {displayItems.map((item) => (
            <article
              key={item.id}
              onClick={() => setActiveMedia(item)}
              className="break-inside-avoid group cursor-pointer rounded-2xl overflow-hidden border border-black/[0.08] dark:border-white/[0.1] bg-surface flex flex-col justify-between hover:border-black/[0.2] dark:hover:border-white/[0.25] transition-all shadow-xs hover:shadow-md"
            >
              {/* Media Viewport */}
              <div className="relative overflow-hidden bg-slate-950 flex items-center justify-center">
                
                {item.mediaType === 'video' ? (
                  <div className="relative w-full aspect-video sm:aspect-auto">
                    <img
                      src={item.thumbnail || item.source}
                      alt={item.alt}
                      className="w-full h-auto object-cover max-h-[480px] transition-transform duration-500 group-hover:scale-102"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/35 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-white/95 text-slate-900 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 ml-0.5 fill-slate-900" />
                      </div>
                    </div>
                    <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md text-[10px] font-mono bg-black/75 text-white backdrop-blur-xs flex items-center gap-1">
                      <Film className="w-3 h-3 text-sunny" />
                      <span>VIDEO</span>
                    </span>
                  </div>
                ) : (
                  <div className="relative w-full">
                    <img
                      src={item.thumbnail || item.source}
                      alt={item.alt}
                      className="w-full h-auto object-contain max-h-[520px] transition-transform duration-500 group-hover:scale-102"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-end justify-end p-3 opacity-0 group-hover:opacity-100">
                      <div className="p-1.5 rounded-lg bg-surface/90 text-ink shadow-md">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Category Pill Tag */}
                <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-[10px] font-mono uppercase bg-black/70 text-white backdrop-blur-xs shadow-xs">
                  {item.category}
                </span>
              </div>

              {/* Caption & Metadata */}
              <div className="p-4 space-y-2">
                <h3 className="font-serif text-lg font-bold text-ink group-hover:text-coral transition-colors line-clamp-1">
                  {item.title}
                </h3>
                {item.caption && (
                  <p className="text-xs text-muted line-clamp-2 leading-relaxed font-sans">
                    {item.caption}
                  </p>
                )}
                <div className="flex items-center justify-between pt-2 border-t border-black/[0.06] dark:border-white/[0.08] text-[10px] font-mono text-faint">
                  {item.location && (
                    <span className="flex items-center gap-1 text-muted truncate max-w-[70%]">
                      <MapPin className="w-3 h-3 text-coral shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </span>
                  )}
                  {item.date && (
                    <span className="shrink-0 text-muted">{item.date}</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="p-12 sm:p-16 rounded-3xl border border-dashed border-black/[0.12] dark:border-white/[0.15] bg-surface text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-subtle border border-black/[0.08] dark:border-white/[0.1] mx-auto flex items-center justify-center text-coral">
            <Camera className="w-8 h-8" />
          </div>
          <div className="space-y-2 max-w-lg mx-auto">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
              No Media in This Category
            </h3>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              Select another category to view photographs and video essays from the gallery.
            </p>
          </div>
        </div>
      )}

      {/* Lightbox Modal (Full Uncropped Resolution) */}
      {activeMedia && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setActiveMedia(null)}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setActiveMedia(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer z-50"
            aria-label="Close Preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer z-50"
            aria-label="Previous Media"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer z-50"
            aria-label="Next Media"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content Frame */}
          <div 
            className="max-w-5xl w-full bg-surface dark:bg-slate-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Media Container: 100% uncropped object-contain */}
            <div className="bg-black flex-1 flex items-center justify-center overflow-hidden min-h-[40vh] max-h-[72vh] p-2">
              {activeMedia.mediaType === 'video' ? (
                <video 
                  src={activeMedia.source} 
                  poster={activeMedia.poster || activeMedia.thumbnail}
                  controls 
                  autoPlay 
                  playsInline 
                  className="max-h-[70vh] w-auto max-w-full mx-auto rounded-lg" 
                />
              ) : (
                <img 
                  src={activeMedia.source} 
                  alt={activeMedia.alt} 
                  className="max-h-[70vh] w-auto max-w-full mx-auto object-contain rounded-lg" 
                />
              )}
            </div>

            {/* Information Footer */}
            <div className="p-5 sm:p-6 space-y-2 border-t border-slate-200 dark:border-white/10 bg-surface dark:bg-slate-900">
              <div className="flex flex-wrap items-center justify-between text-xs font-mono text-muted gap-2">
                <span className="uppercase text-coral font-bold px-2 py-0.5 rounded bg-coral/10 border border-coral/20">
                  {activeMedia.category}
                </span>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-coral" />
                    <span>{activeMedia.location || 'Maharashtra, India'}</span>
                  </span>
                  <span>&bull;</span>
                  <span>{activeMedia.date || '2026'}</span>
                </div>
              </div>

              <h3 className="font-serif text-2xl font-bold text-ink">
                {activeMedia.title}
              </h3>
              
              {activeMedia.caption && (
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  {activeMedia.caption}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
