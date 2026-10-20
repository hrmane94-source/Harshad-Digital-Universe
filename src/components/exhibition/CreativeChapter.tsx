import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Camera, 
  Film, 
  ArrowRight, 
  ExternalLink, 
  Compass, 
  Eye, 
  MapPin
} from 'lucide-react';
import { InstagramIcon } from '../ui/BrandIcons';

interface VisualEditorialPiece {
  id: string;
  title: string;
  category: 'photography' | 'cinematography' | 'motovlog' | 'behind-the-scenes';
  tag: string;
  aspectRatio: string; // Tailwind aspect class
  span: string; // Tailwind col/row span
  location: string;
  date: string;
  caption: string;
  technicalNote: string;
  published: boolean;
  imageSrc?: string;
  palette: {
    bg: string;
    border: string;
    accent: string;
  };
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
    caption: 'Quiet dawn landscape study. Capturing the soft gradient where mist breaks over the ridge line.',
    technicalNote: 'Natural light exposure // 35mm equivalent perspective',
    published: false,
    palette: {
      bg: 'from-amber-950/20 via-stone-900/40 to-neutral-950',
      border: 'border-amber-500/20',
      accent: 'text-amber-400'
    }
  },
  {
    id: 'piece-motovlog-highway',
    title: 'The Open Highway',
    category: 'motovlog',
    tag: 'Motion & Rhythm',
    aspectRatio: 'aspect-[9/16]',
    span: 'lg:col-span-4 lg:row-span-2',
    location: 'Maharashtra State Highways',
    date: '2026',
    caption: 'The rhythm of the road. Finding clarity in velocity and open asphalt.',
    technicalNote: 'Vertical cinematic capture // Helmet mount point-of-view',
    published: false,
    palette: {
      bg: 'from-indigo-950/30 via-slate-900/50 to-neutral-950',
      border: 'border-indigo-500/20',
      accent: 'text-indigo-400'
    }
  },
  {
    id: 'piece-hackathon-night',
    title: '03:00 AM Sprint',
    category: 'behind-the-scenes',
    tag: 'Process & Craft',
    aspectRatio: 'aspect-[4/3]',
    span: 'lg:col-span-4',
    location: 'Campus Innovation Lab',
    date: 'October 2026',
    caption: 'Late night problem solving during the SIH 2026 forensic screening architecture sprint.',
    technicalNote: 'Ambient screen luminescence // Documentation archive',
    published: false,
    palette: {
      bg: 'from-emerald-950/20 via-zinc-900/40 to-neutral-950',
      border: 'border-emerald-500/20',
      accent: 'text-emerald-400'
    }
  },
  {
    id: 'piece-monsoon-texture',
    title: 'Monsoon Formations',
    category: 'photography',
    tag: 'Weather & Mood',
    aspectRatio: 'aspect-[4/3]',
    span: 'lg:col-span-4',
    location: 'Sahyadri Region',
    date: '2026',
    caption: 'Heavy overcast rain clouds gathering over the basalt plateau. Dense atmosphere and deep contrast.',
    technicalNote: 'High contrast monochrome composition',
    published: false,
    palette: {
      bg: 'from-sky-950/20 via-slate-900/40 to-neutral-950',
      border: 'border-sky-500/20',
      accent: 'text-sky-400'
    }
  }
];

export const CreativeChapter: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredPieces = selectedCategory === 'all'
    ? editorialPieces
    : editorialPieces.filter(p => p.category === selectedCategory);

  return (
    <section 
      id="chapter-04" 
      className="py-20 sm:py-32 border-b border-black/[0.08] dark:border-white/[0.08] bg-surface relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Chapter Header with Required Quotation */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-black/[0.08] dark:border-white/[0.08] pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cobalt uppercase font-bold">
              <span className="w-2 h-2 rounded-full bg-cobalt inline-block" />
              <span>CHAPTER 04 // THE CREATIVE WORLD</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink tracking-tight">
              &ldquo;Frames, places, and stories &mdash; collected along the way.&rdquo;
            </h2>

            <div className="flex items-center gap-3 pt-1 text-xs font-mono text-muted">
              <span className="font-semibold text-ink">BRAND IDENTITY:</span>
              <span className="px-2 py-0.5 rounded-md bg-cobalt/10 text-cobalt border border-cobalt/20 font-mono">
                @shiv.premi_1630
              </span>
              <span>•</span>
              <span>Visual Storytelling & Motovlogging</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://www.instagram.com/shiv.premi_1630?cplk=Y3lhemlkZXM2MWhr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-subtle border border-black/[0.08] dark:border-white/[0.1] text-xs font-mono font-semibold text-ink hover:text-cobalt transition-colors"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-pink-500" />
              <span>Instagram @shiv.premi_1630</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            <Link
              to="/creative"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-ink text-paper text-xs font-mono font-semibold hover:bg-ink/90 transition-colors"
            >
              <span>Creative Gallery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {[
            { id: 'all', label: 'All Curations' },
            { id: 'photography', label: 'Photography' },
            { id: 'motovlog', label: 'Motovlogging & Road' },
            { id: 'behind-the-scenes', label: 'Behind The Scenes' }
          ].map(tab => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono shrink-0 transition-all cursor-pointer flex items-center gap-2 ${
                selectedCategory === tab.id
                  ? 'bg-ink text-paper font-semibold shadow-xs'
                  : 'bg-subtle text-muted hover:text-ink border border-black/[0.06] dark:border-white/[0.08]'
              }`}
            >
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Narrative Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-paper border border-black/[0.08] dark:border-white/[0.08] space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted">
            <Compass className="w-4 h-4 text-cobalt" />
            <span>Creative Philosophy & Exploration</span>
          </div>
          <p className="text-sm sm:text-base font-sans text-ink leading-relaxed max-w-4xl">
            Beyond code and terminal environments, creative storytelling happens through two wheels on open highways, documentary photography in natural landscapes, and the patient observation of light. This visual journal operates under the creative handle <strong className="font-semibold text-cobalt">shiv.premi_1630</strong>.
          </p>
        </div>

        {/* Gallery Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {filteredPieces.map((piece) => (
            <div
              key={piece.id}
              className={`${piece.span} rounded-2xl bg-gradient-to-br ${piece.palette.bg} border ${piece.palette.border} p-6 sm:p-8 flex flex-col justify-between relative group hover:border-black/30 dark:hover:border-white/30 transition-all shadow-xs overflow-hidden`}
            >
              {/* Top Folio Metadata */}
              <div className="flex items-start justify-between gap-3 relative z-10">
                <div className="space-y-1">
                  <span className={`text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full bg-black/40 border ${piece.palette.border} ${piece.palette.accent}`}>
                    {piece.tag}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white pt-2">
                    {piece.title}
                  </h3>
                </div>

                <div className="text-right text-[11px] font-mono text-zinc-400">
                  <div className="flex items-center justify-end gap-1">
                    <MapPin className="w-3 h-3 text-coral" />
                    <span>{piece.location}</span>
                  </div>
                  <span>{piece.date}</span>
                </div>
              </div>

              {/* Typographic Visual Core: Honest Designed Composition */}
              <div className="py-12 sm:py-16 text-center space-y-4 relative z-10">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/80 group-hover:scale-110 group-hover:text-white transition-all">
                  {piece.category === 'motovlog' ? (
                    <Film className="w-6 h-6" />
                  ) : piece.category === 'behind-the-scenes' ? (
                    <Eye className="w-6 h-6" />
                  ) : (
                    <Camera className="w-6 h-6" />
                  )}
                </div>

                <div className="space-y-1">
                  <p className="text-sm font-sans text-zinc-300 max-w-md mx-auto italic">
                    &ldquo;{piece.caption}&rdquo;
                  </p>
                  <p className="text-[11px] font-mono text-zinc-400">
                    {piece.technicalNote}
                  </p>
                </div>
              </div>

              {/* Bottom Editorial Caption Bar */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400 relative z-10">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Curated Visual Entry</span>
                </span>
                <span className="text-[10px] tracking-wider uppercase text-zinc-400">
                  {piece.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Motovlogging & Highway Travel Banner */}
        <div className="bg-paper rounded-2xl p-6 sm:p-8 border border-black/[0.08] dark:border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <span className="text-[10px] font-mono uppercase tracking-widest text-cobalt font-semibold">
              FIELD EXPLORATION & TRAVEL
            </span>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-ink">
              Two Wheels, Open Highways, & Quiet Horizons
            </h4>
            <p className="text-xs sm:text-sm text-muted font-sans max-w-2xl">
              Equipped for highway journeys and documentary reels across Maharashtra. Documenting scenic ghat passes, monsoon cloud formations, and regional architecture.
            </p>
          </div>

          <a
            href="https://www.instagram.com/shiv.premi_1630?cplk=Y3lhemlkZXM2MWhr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cobalt text-white text-xs font-mono font-semibold hover:bg-cobalt/90 transition-all shrink-0 shadow-xs"
          >
            <span>Follow @shiv.premi_1630</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
