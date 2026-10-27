import React, { useState, useEffect, useMemo } from 'react';
import {
  Camera,
  Film,
  Sparkles,
  LayoutGrid,
  SlidersHorizontal,
  ArrowDown,
  ChevronUp,
  MapPin,
  ExternalLink,
  Eye,
  Check
} from 'lucide-react';
import { creativeGalleryItems, creativeCategoriesList } from '../data/gallery';
import type { CreativeMediaItem } from '../types/portfolio';
import { contactConfig } from '../data/contact';
import { InstagramIcon } from '../components/ui/BrandIcons';
import { CreativeTiltFrame } from '../components/creative/CreativeTiltFrame';
import { CreativeLightbox } from '../components/creative/CreativeLightbox';
import { CreativeMemoryWall } from '../components/creative/CreativeMemoryWall';
import { CreativeExpeditionDispatch } from '../components/creative/CreativeExpeditionDispatch';

export const CreativePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeMedia, setActiveMedia] = useState<CreativeMediaItem | null>(null);
  const [viewMode, setViewMode] = useState<'editorial' | 'contact-sheet'>('editorial');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Scroll to top when page opens
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Filter published items
  const publishedItems = useMemo(() => {
    return creativeGalleryItems.filter(item => item.published);
  }, []);

  // Filter items by category & search query
  const displayItems = useMemo(() => {
    let items = selectedCategory === 'all'
      ? publishedItems
      : publishedItems.filter(item => item.category === selectedCategory);

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      items = items.filter(item => 
        item.title.toLowerCase().includes(q) ||
        (item.caption && item.caption.toLowerCase().includes(q)) ||
        (item.location && item.location.toLowerCase().includes(q)) ||
        item.category.toLowerCase().includes(q)
      );
    }

    return items;
  }, [publishedItems, selectedCategory, searchQuery]);

  // Featured flagship memory for the cinematic hero
  const heroPrimary = useMemo(() => {
    return publishedItems.find(i => i.id === 'gallery-2') || publishedItems[0];
  }, [publishedItems]);

  const heroSecondaryLeft = useMemo(() => {
    return publishedItems.find(i => i.id === 'gallery-1') || publishedItems[1];
  }, [publishedItems]);

  const heroSecondaryRight = useMemo(() => {
    return publishedItems.find(i => i.id === 'gallery-30') || publishedItems[2];
  }, [publishedItems]);

  const scrollToArchive = () => {
    const el = document.getElementById('curated-archive');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const videoCount = publishedItems.filter(i => i.mediaType === 'video').length;
  const photoCount = publishedItems.filter(i => i.mediaType === 'image').length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFECEA] via-[#FFF5E6]/70 to-[#FFECEA] dark:from-[#0B1020] dark:via-[#10182B] dark:to-[#0B1020] text-ink transition-colors duration-300">
      
      {/* 1. CINEMATIC HERO INTRODUCTION */}
      <section className="relative pt-12 sm:pt-20 pb-16 sm:pb-24 border-b border-border-hairline overflow-hidden">
        {/* Soft Ambient Radial Lights */}
        <div 
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-coral/15 dark:bg-coral/8 blur-3xl pointer-events-none" 
          aria-hidden="true" 
        />
        <div 
          className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-amber-400/15 dark:bg-amber-400/8 blur-3xl pointer-events-none" 
          aria-hidden="true" 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          
          {/* Editorial Header Text */}
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-coral/10 dark:bg-coral/15 border border-coral/25 text-coral text-xs font-mono font-bold uppercase tracking-widest shadow-2xs">
              <Camera className="w-3.5 h-3.5" />
              <span>A LIVING ARCHIVE OF MEMORIES &bull; @{contactConfig.creativeIdentity}</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-ink tracking-tight leading-[1.04]">
              LIFE, THROUGH MY LENS. <br />
              <span className="italic font-normal bg-gradient-to-r from-coral via-amber-500 to-rose-400 bg-clip-text text-transparent">
                &ldquo;Places explored. Moments captured. Experiences that stay.&rdquo;
              </span>
            </h1>

            <p className="text-muted text-base sm:text-lg leading-relaxed font-sans max-w-3xl">
              The photographic and cinematographic journal of Harshad Mane under the creative moniker{' '}
              <a 
                href={contactConfig.profiles.instagram}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-ink font-bold hover:text-coral transition-colors underline decoration-coral/40 underline-offset-4"
              >
                @{contactConfig.creativeIdentity}
              </a>
              . Documenting high-contrast mountain light, winding Sahyadri passes, solo motorcycle expeditions, and genuine natural textures across Western Ghats and Maharashtra. Every photograph and cinema reel here is real &mdash; no stock, no fabricated locations, just moments that deserved to be paused.
            </p>

            {/* Telemetry Ledger Bar */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono text-muted pt-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-[#141D35] border border-border-hairline shadow-2xs font-bold text-ink">
                <span className="w-2 h-2 rounded-full bg-coral animate-pulse" />
                <span>{publishedItems.length} Authentic Media Pieces</span>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/60 dark:bg-[#141D35]/60 border border-border-hairline text-muted">
                <Camera className="w-3.5 h-3.5 text-cobalt" />
                <span>{photoCount} High-Res Stills</span>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/60 dark:bg-[#141D35]/60 border border-border-hairline text-muted">
                <Film className="w-3.5 h-3.5 text-sunny" />
                <span>{videoCount} Motion Reels</span>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/60 dark:bg-[#141D35]/60 border border-border-hairline text-muted">
                <MapPin className="w-3.5 h-3.5 text-coral" />
                <span>Western Ghats, MH</span>
              </div>
            </div>
          </div>

          {/* Dimensional Hero Triad Composition */}
          <div className="pt-4 grid grid-cols-12 gap-6 items-center">
            
            {/* Secondary Accent Left: Midday Cloud Formations */}
            {heroSecondaryLeft && (
              <div className="hidden lg:block col-span-3 -rotate-2 hover:rotate-0 transition-transform duration-500">
                <CreativeTiltFrame
                  item={heroSecondaryLeft}
                  onClick={() => setActiveMedia(heroSecondaryLeft)}
                  variant="standard"
                  frameNumber="01"
                />
              </div>
            )}

            {/* Dominant Flagship Hero Center: Pastel Sunset over Sangli */}
            {heroPrimary && (
              <div className="col-span-12 lg:col-span-6 z-20">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-coral/25 via-amber-500/20 to-rose-400/25 rounded-3xl blur-xl opacity-75" />
                  <CreativeTiltFrame
                    item={heroPrimary}
                    onClick={() => setActiveMedia(heroPrimary)}
                    variant="hero"
                    priority={true}
                    frameNumber="02"
                    className="relative z-10 shadow-2xl"
                  />
                </div>
              </div>
            )}

            {/* Secondary Accent Right: Cinema Camera Raw Reel */}
            {heroSecondaryRight && (
              <div className="hidden lg:block col-span-3 rotate-2 hover:rotate-0 transition-transform duration-500">
                <CreativeTiltFrame
                  item={heroSecondaryRight}
                  onClick={() => setActiveMedia(heroSecondaryRight)}
                  variant="portrait"
                  frameNumber="30"
                />
              </div>
            )}

          </div>

          {/* Visual cue to explore */}
          <div className="pt-4 flex justify-center">
            <button
              type="button"
              onClick={scrollToArchive}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-[#141D35] border border-border-hairline hover:border-coral/50 text-xs font-mono text-muted hover:text-ink transition-all shadow-sm hover:shadow-warm cursor-pointer active:scale-95"
            >
              <span>Explore Curated Archive</span>
              <ArrowDown className="w-3.5 h-3.5 text-coral animate-bounce" />
            </button>
          </div>

        </div>
      </section>

      {/* 2. MAIN GALLERY & MEMORY WALL EXPERIENCE */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20">
        
        {/* Interactive Memory Wall Spread */}
        <CreativeMemoryWall onSelectMedia={(item) => setActiveMedia(item)} />

        {/* Curated Archive Section */}
        <section id="curated-archive" className="space-y-8 scroll-mt-24">
          
          {/* Section Heading & View Controls */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-border-hairline pb-6">
            <div className="space-y-1.5 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-coral font-bold tracking-widest">
                <Sparkles className="w-3 h-3 text-sunny" />
                <span>CURATED REPOSITORY</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-ink font-normal tracking-tight">
                The Living Memory Collection
              </h2>
              <p className="text-xs sm:text-sm text-muted font-sans leading-relaxed">
                Filter across photography genres, motion reels, and documented journeys. Click or tap any frame to open the uncropped full-resolution cinema viewer.
              </p>
            </div>

            {/* View Mode & Search Controls */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Search filter input */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search frames or locations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="px-3.5 py-2 pl-9 rounded-xl text-xs font-mono bg-white dark:bg-[#141D35] border border-border-hairline text-ink placeholder:text-muted/60 focus:outline-none focus:border-coral/50 shadow-2xs w-48 sm:w-56"
                />
                <SlidersHorizontal className="w-3.5 h-3.5 text-muted absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* View layout toggles */}
              <div className="flex items-center p-1 rounded-xl bg-white dark:bg-[#141D35] border border-border-hairline shadow-2xs">
                <button
                  type="button"
                  onClick={() => setViewMode('editorial')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer ${
                    viewMode === 'editorial'
                      ? 'bg-ink text-white font-bold shadow-xs'
                      : 'text-muted hover:text-ink'
                  }`}
                  title="Editorial Asymmetric Layout"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Editorial Story</span>
                </button>

                <button
                  type="button"
                  onClick={() => setViewMode('contact-sheet')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer ${
                    viewMode === 'contact-sheet'
                      ? 'bg-ink text-white font-bold shadow-xs'
                      : 'text-muted hover:text-ink'
                  }`}
                  title="Contact Sheet Grid Layout"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Contact Sheet</span>
                </button>
              </div>
            </div>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap gap-2 pt-1">
            {creativeCategoriesList.map((cat) => {
              const count = cat.id === 'all'
                ? publishedItems.length
                : publishedItems.filter(i => i.category === cat.id).length;
              const isSelected = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? 'bg-ink text-white dark:bg-white dark:text-slate-900 font-bold shadow-xs'
                      : 'bg-white dark:bg-[#141D35] text-muted border border-border-hairline hover:border-coral/40 hover:text-ink shadow-2xs'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isSelected 
                      ? 'bg-white/20 text-white dark:bg-black/15 dark:text-slate-900' 
                      : 'bg-slate-100 dark:bg-white/5 text-muted'
                  }`}>
                    {count}
                  </span>
                  {isSelected && <Check className="w-3 h-3 text-coral ml-0.5" />}
                </button>
              );
            })}
          </div>

          {/* Active Filter Ledger Pill */}
          <div className="flex items-center justify-between text-xs font-mono text-muted py-2 border-b border-border-hairline">
            <span>
              Showing <span className="font-bold text-ink">{displayItems.length}</span> of {publishedItems.length} authentic records
            </span>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="text-coral hover:underline cursor-pointer"
              >
                Clear search filter
              </button>
            )}
          </div>

          {/* Gallery Media Display */}
          {displayItems.length > 0 ? (
            viewMode === 'editorial' ? (
              /* Asymmetrical Editorial Composition (Alternating rhythm of wide, portrait, and standard cards) */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-start">
                {displayItems.map((item, index) => {
                  // Determine layout variant:
                  // Every 7th item is highlighted wide
                  const isHeroSpan = (index % 7 === 0 && index !== 0 && !item.isVertical);
                  const isPortrait = Boolean(item.isVertical);

                  return (
                    <div 
                      key={item.id} 
                      className={`transition-all duration-300 ${
                        isHeroSpan 
                          ? 'sm:col-span-2' 
                          : isPortrait 
                            ? 'sm:col-span-1' 
                            : 'col-span-1'
                      }`}
                    >
                      <CreativeTiltFrame
                        item={item}
                        onClick={() => setActiveMedia(item)}
                        variant={isHeroSpan ? 'wide' : isPortrait ? 'portrait' : 'standard'}
                        frameNumber={index + 1}
                      />
                    </div>
                  );
                })}
              </div>
            ) : (
              /* Contact Sheet Grid (Structured compact 4-column layout) */
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {displayItems.map((item, index) => (
                  <CreativeTiltFrame
                    key={item.id}
                    item={item}
                    onClick={() => setActiveMedia(item)}
                    variant="scrapbook"
                    frameNumber={index + 1}
                  />
                ))}
              </div>
            )
          ) : (
            /* Empty State */
            <div className="p-12 sm:p-16 rounded-3xl border border-dashed border-border-hairline bg-white dark:bg-[#141D35] text-center space-y-4 shadow-xs">
              <div className="w-16 h-16 rounded-2xl bg-coral/10 border border-coral/20 mx-auto flex items-center justify-center text-coral">
                <Camera className="w-8 h-8" />
              </div>
              <div className="space-y-1.5 max-w-md mx-auto">
                <h3 className="font-serif text-2xl font-bold text-ink">
                  No Memories Found
                </h3>
                <p className="text-xs sm:text-sm text-muted">
                  No media matches &ldquo;{searchQuery || selectedCategory}&rdquo;. Reset your filters to explore all 46 archival works.
                </p>
              </div>
              <button
                type="button"
                onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                className="px-4 py-2 rounded-xl bg-ink text-white dark:bg-white dark:text-slate-900 text-xs font-mono font-bold hover:bg-coral transition-colors"
              >
                Reset to All Works
              </button>
            </div>
          )}

        </section>

        {/* 3. EXPEDITIONS & DOCUMENTARY DISPATCH */}
        <CreativeExpeditionDispatch />

        {/* 4. CLOSING: KEEP COLLECTING MOMENTS */}
        <section className="pt-12 border-t border-border-hairline">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#FFECEA] via-[#FFF5E6] to-[#EDE5FF] dark:from-[#141D35] dark:via-[#10182B] dark:to-[#18233E] border border-border-hairline shadow-sm space-y-8 text-center relative overflow-hidden">
            
            <div className="space-y-4 max-w-2xl mx-auto relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coral/10 border border-coral/25 text-coral text-[11px] font-mono uppercase font-bold">
                <Camera className="w-3 h-3" />
                <span>EPILOGUE</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-ink tracking-tight">
                &ldquo;We do not remember days; <br />
                <span className="italic text-coral font-normal">we remember moments.&rdquo;</span>
              </h2>

              <p className="text-xs sm:text-sm text-muted font-sans leading-relaxed max-w-lg mx-auto">
                The camera is simply an excuse to pause time, study light, and bear witness to places that will change. The journey continues on the road and behind the lens.
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={contactConfig.profiles.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-ink text-white dark:bg-white dark:text-slate-900 text-xs font-mono font-bold hover:bg-coral dark:hover:bg-coral dark:hover:text-white transition-all shadow-md active:scale-95"
                >
                  <InstagramIcon className="w-4 h-4 text-coral" />
                  <span>Follow @{contactConfig.creativeIdentity} on Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>

                <button
                  type="button"
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-[#141D35] border border-border-hairline text-xs font-mono font-bold text-muted hover:text-ink hover:border-coral/40 transition-all shadow-2xs active:scale-95 cursor-pointer"
                >
                  <span>Back to Top of Archive</span>
                  <ChevronUp className="w-4 h-4 text-coral" />
                </button>
              </div>
            </div>

            {/* Background subtle watermark */}
            <div 
              className="absolute -bottom-10 -right-10 text-[120px] font-serif text-ink/3 dark:text-white/3 select-none pointer-events-none"
              aria-hidden="true"
            >
              1630
            </div>

          </div>
        </section>

      </main>

      {/* 5. PREMIUM IMMERSIVE LIGHTBOX MODAL */}
      {activeMedia && (
        <CreativeLightbox
          activeItem={activeMedia}
          items={displayItems}
          onClose={() => setActiveMedia(null)}
          onSelect={(item) => setActiveMedia(item)}
        />
      )}

    </div>
  );
};
