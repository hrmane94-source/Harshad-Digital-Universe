import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass } from 'lucide-react';
import { InstagramIcon } from '../ui/BrandIcons';
import { contactConfig } from '../../data/contact';
import { creativeGalleryItems, creativeCategoriesList } from '../../data/gallery';
import type { CreativeMediaItem } from '../../types/portfolio';
import { PrismaticLens3DArtwork } from './PrismaticLens3DArtwork';
import { CreativeTiltFrame } from '../creative/CreativeTiltFrame';
import { CreativeLightbox } from '../creative/CreativeLightbox';

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

        {/* Creative Tilt Cards Grid — 3D Tilt, Glare, Light Sweep */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {filteredPieces.map((piece, index) => (
            <CreativeTiltFrame
              key={piece.id}
              item={piece}
              onClick={() => setActiveMedia(piece)}
              variant={piece.isVertical ? 'portrait' : 'standard'}
              frameNumber={index + 1}
            />
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

      {/* Premium Immersive Lightbox Modal */}
      {activeMedia && (
        <CreativeLightbox
          activeItem={activeMedia}
          items={filteredPieces}
          onClose={() => setActiveMedia(null)}
          onSelect={(item) => setActiveMedia(item)}
        />
      )}
    </section>
  );
};
