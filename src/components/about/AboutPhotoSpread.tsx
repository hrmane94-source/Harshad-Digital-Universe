import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, MapPin, ArrowRight } from 'lucide-react';
import { InstagramIcon } from '../ui/BrandIcons';
import { creativeGalleryItems } from '../../data/gallery';
import { contactConfig } from '../../data/contact';
import type { CreativeMediaItem } from '../../types/portfolio';

export const AboutPhotoSpread: React.FC = () => {
  // Select 3 authentic signature captures across landscape, portrait, and rural warm light
  const photo1 = creativeGalleryItems.find(i => i.id === 'gallery-2') as CreativeMediaItem; // Pastel Sunset (Landscape)
  const photo2 = creativeGalleryItems.find(i => i.id === 'gallery-15') as CreativeMediaItem; // Ghats Silhouette (Portrait)
  const photo3 = creativeGalleryItems.find(i => i.id === 'gallery-8') as CreativeMediaItem; // Golden Hour Farmlands (Warm Rural)

  return (
    <section className="space-y-10">
      {/* Chapter Subheading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border-hairline pb-4">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-coral font-bold tracking-widest">
            <Camera className="w-3.5 h-3.5" />
            <span>THE WORLD THROUGH MY LENS &bull; @{contactConfig.creativeIdentity}</span>
          </div>

          <h3 className="font-serif text-3xl sm:text-5xl text-ink font-normal tracking-tight leading-tight">
            &ldquo;A single moment can be experienced in so many ways <br className="hidden sm:inline" />
            <span className="italic text-coral font-normal">depending on how you look at it.&rdquo;</span>
          </h3>

          <p className="text-muted text-sm sm:text-base leading-relaxed font-sans">
            Photography, cinematography, and making reels let me play with that perspective &mdash; to notice details, capture a feeling, and preserve something that might otherwise pass by unnoticed.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/creative"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-[#141D35] border border-border-hairline hover:border-coral/50 text-xs font-mono font-bold text-ink hover:text-coral transition-all shadow-2xs hover:shadow-warm active:scale-95"
          >
            <span>Explore 46 Creative Works</span>
            <ArrowRight className="w-3.5 h-3.5 text-coral" />
          </Link>
        </div>
      </div>

      {/* Layered Editorial Photo Triad */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        
        {/* Left: Pastel Sunset over Sangli (16:10 wide) */}
        {photo1 && (
          <div className="md:col-span-7">
            <div className="group rounded-3xl bg-white dark:bg-[#141D35] border border-border-hairline hover:border-coral/40 p-3 sm:p-4 shadow-md hover:shadow-xl transition-all space-y-3">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-950">
                <img
                  src={photo1.thumbnail || photo1.source}
                  alt={photo1.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[9px] font-mono uppercase bg-black/70 text-white backdrop-blur-xs flex items-center gap-1 shadow">
                  <span className="w-1.5 h-1.5 rounded-full bg-coral inline-block" />
                  <span>FRAME #02 &bull; EVENING LIGHT</span>
                </div>
              </div>

              <div className="px-1 flex items-center justify-between text-xs font-mono text-muted">
                <span className="font-serif font-bold text-base text-ink group-hover:text-coral transition-colors">
                  {photo1.title}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-coral" />
                  <span>Sangli &bull; Maharashtra</span>
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Right Stack: Ghats Silhouette (Portrait) + Golden Hour (Landscape) */}
        <div className="md:col-span-5 space-y-6">
          {photo2 && (
            <div className="group rounded-3xl bg-white dark:bg-[#141D35] border border-border-hairline hover:border-coral/40 p-3 sm:p-4 shadow-md hover:shadow-xl transition-all space-y-3">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-slate-950">
                <img
                  src={photo2.thumbnail || photo2.source}
                  alt={photo2.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[9px] font-mono uppercase bg-black/70 text-white backdrop-blur-xs flex items-center gap-1 shadow">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
                  <span>FRAME #15 &bull; RIDGE SILHOUETTE</span>
                </div>
              </div>

              <div className="px-1 flex items-center justify-between text-xs font-mono text-muted">
                <span className="font-serif font-bold text-base text-ink group-hover:text-coral transition-colors">
                  {photo2.title}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-coral" />
                  <span>Western Ghats</span>
                </span>
              </div>
            </div>
          )}

          {photo3 && (
            <div className="group rounded-3xl bg-white dark:bg-[#141D35] border border-border-hairline hover:border-coral/40 p-3 sm:p-4 shadow-md hover:shadow-xl transition-all space-y-3">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-slate-950">
                <img
                  src={photo3.thumbnail || photo3.source}
                  alt={photo3.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[9px] font-mono uppercase bg-black/70 text-white backdrop-blur-xs flex items-center gap-1 shadow">
                  <span className="w-1.5 h-1.5 rounded-full bg-sunny inline-block" />
                  <span>FRAME #08 &bull; GOLDEN HOUR</span>
                </div>
              </div>

              <div className="px-1 flex items-center justify-between text-xs font-mono text-muted">
                <span className="font-serif font-bold text-base text-ink group-hover:text-coral transition-colors">
                  {photo3.title}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-coral" />
                  <span>Rural Farmlands</span>
                </span>
              </div>
            </div>
          )}
        </div>

      </div>

      {/* Creator Moniker Bar */}
      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#FFECEA]/60 via-[#FFF5E6] to-[#FFECEA]/60 dark:from-[#18233E]/50 dark:via-[#141D35] dark:to-[#18233E]/50 border border-coral/25 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-2.5 text-muted">
          <InstagramIcon className="w-4 h-4 text-coral" />
          <span>Curating perspectives as <strong className="text-ink">@{contactConfig.creativeIdentity}</strong></span>
        </div>

        <a
          href={contactConfig.profiles.instagram}
          target="_blank"
          rel="noreferrer"
          className="text-coral font-bold hover:underline inline-flex items-center gap-1"
        >
          <span>View on Instagram</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
};
