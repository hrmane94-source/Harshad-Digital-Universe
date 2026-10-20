import React, { useState, useEffect } from 'react';
import {
  Camera,
  MapPin,
  Calendar,
  X,
  Play
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
          The photographic and cinematic journal of Harshad Mane under the creative moniker <span className="font-mono text-ink font-semibold">shiv.premi_1630</span>. Exploring perspective, mountain light, high-frame-rate movement, and genuine natural textures.
        </p>
      </div>

      {/* Category Filter Chips */}
      <div className="flex flex-wrap gap-2 border-b border-black/[0.08] dark:border-white/[0.08] pb-4">
        {creativeCategoriesList.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-ink text-paper font-semibold shadow-xs'
                : 'bg-surface text-muted border border-black/[0.08] dark:border-white/[0.08] hover:border-black/[0.2] dark:hover:border-white/[0.2] hover:text-ink'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Gallery Display or Sophisticated Empty State */}
      {displayItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayItems.map((item) => (
            <article
              key={item.id}
              onClick={() => setActiveMedia(item)}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-black/[0.08] dark:border-white/[0.1] bg-surface flex flex-col justify-between hover:border-black/[0.2] dark:hover:border-white/[0.25] transition-all shadow-xs"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-subtle">
                <img
                  src={item.thumbnail || item.source}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {item.mediaType === 'video' && (
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-lg">
                      <Play className="w-5 h-5 ml-0.5" />
                    </div>
                  </div>
                )}
                <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-[10px] font-mono uppercase bg-black/60 text-white backdrop-blur-xs">
                  {item.category}
                </span>
              </div>

              <div className="p-5 space-y-2">
                <h3 className="font-serif text-xl font-bold text-ink group-hover:text-coral transition-colors line-clamp-1">
                  {item.title}
                </h3>
                {item.caption && (
                  <p className="text-xs text-muted line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                )}
                <div className="flex items-center justify-between pt-2 border-t border-black/[0.06] dark:border-white/[0.08] text-[10px] font-mono text-faint">
                  {item.location ? (
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-coral" />
                      <span>{item.location}</span>
                    </span>
                  ) : <span />}
                  {item.date && (
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{item.date}</span>
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        /* Sophisticated Architectural Empty State (Rule 13 & 20) */
        <div className="p-12 sm:p-16 rounded-3xl border border-dashed border-black/[0.12] dark:border-white/[0.15] bg-surface text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-subtle border border-black/[0.08] dark:border-white/[0.1] mx-auto flex items-center justify-center text-coral">
            <Camera className="w-8 h-8" />
          </div>

          <div className="space-y-2 max-w-lg mx-auto">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
              Visual Archive &amp; Media Registry
            </h3>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              Photographs, cinematography clips, and vertical travel reels remain initially empty per authentic asset guidelines until actual high-resolution media is imported.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-subtle max-w-xl mx-auto border border-black/[0.06] dark:border-white/[0.08] text-xs font-mono text-muted space-y-1.5 text-left">
            <span className="text-[10px] uppercase font-bold text-ink block">How to populate this gallery:</span>
            <p>1. Place your exported photos &amp; video thumbnails in <code className="text-cobalt">/public/assets/gallery/</code>.</p>
            <p>2. Set items to <code className="text-cobalt font-bold">published: true</code> in <code className="text-cobalt">src/data/gallery.ts</code> or the Owner Workspace.</p>
            <p>3. They will immediately render in this high-resolution masonry grid!</p>
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {activeMedia && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            type="button"
            onClick={() => setActiveMedia(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close Preview"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full bg-surface rounded-2xl overflow-hidden border border-white/10 shadow-2xl space-y-4">
            <div className="max-h-[70vh] bg-black flex items-center justify-center">
              {activeMedia.mediaType === 'video' ? (
                <video src={activeMedia.source} controls autoPlay className="max-h-[70vh] w-auto mx-auto" />
              ) : (
                <img src={activeMedia.source} alt={activeMedia.alt} className="max-h-[70vh] w-auto mx-auto object-contain" />
              )}
            </div>

            <div className="p-6 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-muted">
                <span className="uppercase text-coral font-bold">{activeMedia.category}</span>
                <span>{activeMedia.location || 'Maharashtra, India'}</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-ink">{activeMedia.title}</h3>
              {activeMedia.caption && <p className="text-xs text-muted leading-relaxed">{activeMedia.caption}</p>}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
