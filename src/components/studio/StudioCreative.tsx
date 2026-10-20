import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Camera, MapPin, ArrowRight, Compass } from 'lucide-react';
import { InstagramIcon } from '../ui/BrandIcons';
import { contactConfig } from '../../data/contact';

interface VisualEditorialPiece {
  id: string;
  title: string;
  category: 'photography' | 'cinematography' | 'essay';
  tag: string;
  aspectRatio: string;
  span: string;
  location: string;
  date: string;
  caption: string;
  technicalNote: string;
}

const editorialPieces: VisualEditorialPiece[] = [
  {
    id: 'piece-nature-dawn',
    title: 'Horizon at Dawn',
    category: 'photography',
    tag: 'Landscape & Solitude',
    aspectRatio: 'aspect-[16/10]',
    span: 'lg:col-span-8',
    location: 'Western Ghats, Maharashtra',
    date: '2026',
    caption: 'Quiet dawn landscape study. Capturing the soft sunlit gradient where morning mist breaks over the ridge line.',
    technicalNote: 'Natural morning light exposure // 35mm equivalent perspective'
  },
  {
    id: 'piece-monsoon-rain',
    title: 'Monsoon Mist',
    category: 'photography',
    tag: 'Atmosphere',
    aspectRatio: 'aspect-[4/5]',
    span: 'lg:col-span-4',
    location: 'Ashta Countryside, Sangli',
    date: '2026',
    caption: 'Rain study in rural Maharashtra. Heavy overcast clouds softening contrast across lush foliage.',
    technicalNote: 'Subdued saturation // High shutter speed rain capture'
  },
  {
    id: 'piece-mountain-path',
    title: 'Sahyadri Ascent',
    category: 'cinematography',
    tag: 'Motion & Terrain',
    aspectRatio: 'aspect-[4/3]',
    span: 'lg:col-span-4',
    location: 'Western Ghats Pass',
    date: '2026',
    caption: 'Chasing elevations and curving roads through Sahyadri ghats. Framing nature as a quiet sanctuary.',
    technicalNote: 'Motorcycle expedition visual frame // Ambient environmental sound'
  },
  {
    id: 'piece-texture-stone',
    title: 'Architectural Stone & Shadow',
    category: 'essay',
    tag: 'Heritage & Form',
    aspectRatio: 'aspect-[16/9]',
    span: 'lg:col-span-8',
    location: 'Historic Maharashtra Environs',
    date: '2026',
    caption: 'Monolithic stone masonry surviving centuries. Exploring symmetry, patina, and tactile geometry in ancient architecture.',
    technicalNote: 'Deep dynamic range // Architectural framing'
  }
];

export const StudioCreative: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredPieces = selectedCategory === 'all'
    ? editorialPieces
    : editorialPieces.filter(p => p.category === selectedCategory);

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

            <div className="flex items-center gap-3 pt-1 text-xs font-mono text-muted">
              <span className="font-bold text-ink">BRAND IDENTITY:</span>
              <a
                href={contactConfig.profiles.instagram}
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-0.5 rounded-full bg-coral/10 text-coral border border-coral/30 font-bold font-mono hover:bg-coral/20 transition-colors inline-flex items-center gap-1.5"
              >
                <InstagramIcon className="w-3 h-3" />
                <span>@{contactConfig.creativeIdentity}</span>
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/creative"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-surface border border-slate-300 dark:border-white/15 text-xs font-mono font-bold text-ink hover:text-cobalt hover:border-cobalt transition-colors shadow-2xs"
            >
              <span>Explore Visual Archive</span>
              <ArrowRight className="w-3.5 h-3.5 text-coral" />
            </Link>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {[
            { id: 'all', label: 'All Curated Pieces' },
            { id: 'photography', label: 'Landscape & Solitude' },
            { id: 'cinematography', label: 'Rides & Motion' },
            { id: 'essay', label: 'Architectural Studies' }
          ].map(cat => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-colors cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-ink text-paper font-bold shadow-xs'
                  : 'bg-surface text-muted hover:text-ink border border-slate-200 dark:border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Creative Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {filteredPieces.map((piece) => (
            <div 
              key={piece.id}
              className={`${piece.span} p-6 sm:p-7 rounded-2xl bg-surface border border-slate-200 dark:border-white/10 shadow-xs hover:shadow-md transition-all space-y-4 group`}
            >
              {/* Artistic Framed Viewport */}
              <div className={`w-full ${piece.aspectRatio} rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 flex flex-col justify-between p-4 relative overflow-hidden`}>
                <div className="flex items-center justify-between text-xs font-mono text-muted">
                  <span className="px-2 py-0.5 rounded bg-surface/90 backdrop-blur-md border border-slate-200 dark:border-white/10 font-bold text-[10px]">
                    {piece.tag}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-coral" />
                    <span>{piece.location}</span>
                  </span>
                </div>

                <div className="text-center py-6">
                  <div className="w-12 h-12 rounded-full bg-surface/90 border border-slate-200 dark:border-white/10 mx-auto flex items-center justify-center text-coral shadow-xs group-hover:scale-105 transition-transform">
                    <Camera className="w-5 h-5" />
                  </div>
                  <span className="font-serif italic text-sm text-muted mt-2 block">
                    Authentic visual study
                  </span>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-muted border-t border-slate-200/60 dark:border-white/10 pt-2">
                  <span>{piece.technicalNote}</span>
                  <span className="font-bold text-ink">{piece.date}</span>
                </div>
              </div>

              {/* Editorial Description */}
              <div className="space-y-1.5">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink">
                  {piece.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                  {piece.caption}
                </p>
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
              Dreaming of long-distance motorcycle expeditions across the high passes of Ladakh and remote corners of India.
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
    </section>
  );
};
