import React, { useState, useEffect } from 'react';
import { 
  Camera, 
  Film, 
  MapPin, 
  Calendar, 
  X, 
  Play
} from 'lucide-react';
import { creativeGalleryItems, creativeCategoriesList } from '../data/gallery';
import type { CreativeMediaItem } from '../types/portfolio';

export const CreativePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeMedia, setActiveMedia] = useState<CreativeMediaItem | null>(null);

  // Filter only published items for public view (Section 18 & 21)
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
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-800 text-purple-300 text-xs font-mono">
          <Camera className="w-3.5 h-3.5" />
          <span>VISUAL STORYTELLING &amp; CINEMATOGRAPHY</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
          Creative Portfolio &amp; Visual Journal
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          The photographic and cinematic world of <span className="text-purple-300 font-semibold font-mono">@shiv.premi_1630</span>. Exploring creative visual storytelling, nature and landscape interests, future travel plans, and the quiet beauty of authentic life moments.
        </p>
      </div>

      {/* Category Filter Chips */}
      <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-4">
        {creativeCategoriesList.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-purple-600 text-white font-semibold shadow-md shadow-purple-600/20'
                : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Gallery Display or Sophisticated Empty State (Rule 13 & 20) */}
      {displayItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayItems.map((item) => (
            <article
              key={item.id}
              onClick={() => setActiveMedia(item)}
              className={`rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden cursor-pointer group transition-all duration-300 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 flex flex-col justify-between ${
                item.isVertical ? 'row-span-2' : ''
              }`}
            >
              <div className="relative overflow-hidden aspect-video w-full bg-slate-950">
                {item.mediaType === 'image' ? (
                  <img
                    src={item.thumbnail || item.source}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full relative flex items-center justify-center">
                    {item.poster ? (
                      <img src={item.poster} alt={item.alt} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-slate-950 flex items-center justify-center">
                        <Film className="w-8 h-8 text-purple-400" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 ml-0.5" />
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-slate-950/80 text-[10px] font-mono text-slate-300 border border-slate-700">
                  {item.category}
                </div>
              </div>

              <div className="p-4 space-y-1.5">
                <h3 className="text-base font-heading font-bold text-white group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                {item.caption && (
                  <p className="text-xs text-slate-400 line-clamp-2">{item.caption}</p>
                )}
                <div className="flex items-center justify-between pt-2 text-[11px] font-mono text-slate-400 border-t border-slate-800/80">
                  {item.location && (
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-purple-400" />
                      <span>{item.location}</span>
                    </span>
                  )}
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
        /* Designed Editorial Empty State */
        <div className="p-12 sm:p-20 rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/60 to-slate-950 text-center space-y-6 max-w-2xl mx-auto shadow-2xl">
          <div className="w-20 h-20 rounded-3xl bg-purple-950/60 border border-purple-500/40 mx-auto flex items-center justify-center text-purple-400 shadow-xl shadow-purple-500/10">
            <Camera className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-semibold">
              Visual Journal Architecture Active
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              The Creative Gallery is Prepared
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed max-w-lg mx-auto">
              This gallery environment is built to showcase Harshad&apos;s cinematography, vertical reels, photography, and future motorcycle travel documentation as <span className="text-purple-300 font-mono font-medium">@shiv.premi_1630</span>.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs text-left font-mono space-y-2 max-w-md mx-auto">
            <span className="text-cyan-400 font-bold block">How To Populate Media:</span>
            <p className="text-slate-300 text-[11px]">
              1. Place photos/videos in <code className="text-purple-300">/public/assets/gallery/&lt;category&gt;/</code><br />
              2. Add an entry in <code className="text-purple-300">src/data/gallery.ts</code> with <code className="text-emerald-400">published: true</code>.<br />
              3. The gallery renders your media automatically without touching any UI code!
            </p>
          </div>

          <div className="pt-2 text-xs text-slate-400 font-mono">
            * In adherence to verification rules, no generic stock or synthetic photography is displayed as personal work.
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {activeMedia && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setActiveMedia(null)}
        >
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] bg-slate-900 rounded-3xl border border-slate-700 overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-heading font-bold text-white">{activeMedia.title}</h3>
                <p className="text-xs text-purple-400 font-mono">{activeMedia.category} • @shiv.premi_1630</p>
              </div>
              <button
                type="button"
                onClick={() => setActiveMedia(null)}
                className="p-2 rounded-xl border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Media Content */}
            <div className="flex-1 bg-black flex items-center justify-center overflow-hidden p-2 min-h-[360px]">
              {activeMedia.mediaType === 'image' ? (
                <img
                  src={activeMedia.source}
                  alt={activeMedia.alt}
                  className="max-h-[65vh] max-w-full object-contain"
                />
              ) : (
                <video
                  src={activeMedia.source}
                  poster={activeMedia.poster}
                  controls
                  className="max-h-[65vh] max-w-full rounded-lg"
                />
              )}
            </div>

            {/* Caption & Location Footer */}
            {(activeMedia.caption || activeMedia.location || activeMedia.date) && (
              <div className="p-4 sm:p-6 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                {activeMedia.caption && (
                  <p className="text-slate-300 italic">{activeMedia.caption}</p>
                )}
                <div className="flex items-center gap-3 text-slate-400 font-mono shrink-0">
                  {activeMedia.location && <span>{activeMedia.location}</span>}
                  {activeMedia.date && <span>{activeMedia.date}</span>}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
