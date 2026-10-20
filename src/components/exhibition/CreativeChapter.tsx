import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Camera, 
  Film, 
  ArrowRight, 
  ExternalLink, 
  Compass, 
  Eye, 
  MapPin,
  Sun
} from 'lucide-react';
import { InstagramIcon } from '../ui/BrandIcons';

interface VisualEditorialPiece {
  id: string;
  title: string;
  category: 'photography' | 'cinematography' | 'motovlog' | 'behind-the-scenes';
  tag: string;
  aspectRatio: string;
  span: string;
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
    iconBg: string;
    tagBg: string;
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
    caption: 'Quiet dawn landscape study. Capturing the soft sunlit gradient where morning mist breaks over the ridge line.',
    technicalNote: 'Natural morning light exposure // 35mm equivalent perspective',
    published: false,
    palette: {
      bg: 'from-amber-50/90 via-orange-50/60 to-yellow-50/80',
      border: 'border-amber-200',
      accent: 'text-amber-900',
      iconBg: 'bg-amber-100/80 text-amber-700',
      tagBg: 'bg-amber-100 text-amber-800 border-amber-300'
    }
  },
  {
    id: 'piece-motovlog-highway',
    title: 'The Open Highway',
    category: 'motovlog',
    tag: 'Motion & Velocity',
    aspectRatio: 'aspect-[9/16]',
    span: 'lg:col-span-4 lg:row-span-2',
    location: 'Maharashtra State Highways',
    date: '2026',
    caption: 'The rhythm of the road. Finding clarity in velocity, open asphalt, and golden hour wind.',
    technicalNote: 'Vertical cinematic capture // Helmet mount point-of-view',
    published: false,
    palette: {
      bg: 'from-sky-50/90 via-blue-50/60 to-cyan-50/80',
      border: 'border-sky-200',
      accent: 'text-sky-900',
      iconBg: 'bg-sky-100/80 text-sky-700',
      tagBg: 'bg-sky-100 text-sky-800 border-sky-300'
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
      bg: 'from-emerald-50/90 via-teal-50/60 to-slate-50/80',
      border: 'border-emerald-200',
      accent: 'text-emerald-900',
      iconBg: 'bg-emerald-100/80 text-emerald-700',
      tagBg: 'bg-emerald-100 text-emerald-800 border-emerald-300'
    }
  },
  {
    id: 'piece-monsoon-texture',
    title: 'Monsoon Formations',
    category: 'photography',
    tag: 'Atmosphere & Light',
    aspectRatio: 'aspect-[4/3]',
    span: 'lg:col-span-4',
    location: 'Sahyadri Region',
    date: '2026',
    caption: 'Sunlight breaking through dense monsoon clouds over the basalt plateau. Dynamic natural contrast.',
    technicalNote: 'High dynamic range daylight landscape study',
    published: false,
    palette: {
      bg: 'from-cyan-50/90 via-sky-50/60 to-indigo-50/80',
      border: 'border-cyan-200',
      accent: 'text-cyan-900',
      iconBg: 'bg-cyan-100/80 text-cyan-700',
      tagBg: 'bg-cyan-100 text-cyan-800 border-cyan-300'
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
      className="py-20 sm:py-32 border-b border-slate-200/80 bg-gradient-to-b from-[#FFFDF9] via-[#FAF8F5] to-[#F0FDF4]/30 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Scene Header with Required Quotation */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-slate-200 pb-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cobalt uppercase font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-coral inline-block animate-pulse" />
              <span>SCENE 05 // THE CREATIVE WORLD</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.05]">
              &ldquo;Frames, places, and stories &mdash; <br />
              <span className="italic font-serif text-coral">collected along the way.&rdquo;</span>
            </h2>

            <div className="flex items-center gap-3 pt-1 text-xs font-mono text-slate-600">
              <span className="font-bold text-slate-900">BRAND IDENTITY:</span>
              <span className="px-2.5 py-0.5 rounded-full bg-coral/10 text-coral border border-coral/30 font-bold font-mono">
                @shiv.premi_1630
              </span>
              <span>&bull;</span>
              <span className="font-medium">Visual Storytelling &bull; Motovlogging</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://www.instagram.com/shiv.premi_1630?cplk=Y3lhemlkZXM2MWhr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-xs font-mono font-bold text-slate-800 hover:text-pink-600 hover:border-pink-300 transition-colors shadow-2xs"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-pink-500" />
              <span>Instagram @shiv.premi_1630</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            <Link
              to="/creative"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-cobalt transition-colors shadow-xs"
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
            { id: 'photography', label: 'Landscape Photography' },
            { id: 'motovlog', label: 'Motovlogging & Road' },
            { id: 'behind-the-scenes', label: 'Behind The Scenes' }
          ].map(tab => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono shrink-0 transition-all cursor-pointer flex items-center gap-2 ${
                selectedCategory === tab.id
                  ? 'bg-slate-900 text-white font-bold shadow-md'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300 shadow-2xs'
              }`}
            >
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Narrative Callout */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
            <Compass className="w-4 h-4 text-cobalt" />
            <span>Creative Philosophy &amp; Exploration</span>
          </div>
          <p className="text-sm sm:text-base font-sans text-slate-800 leading-relaxed max-w-4xl font-normal">
            Beyond code and terminal environments, creative storytelling happens through two wheels on open highways, documentary photography in natural landscapes, and the patient observation of light. This visual journal operates under the creative handle <strong className="font-bold text-coral">shiv.premi_1630</strong>.
          </p>
        </div>

        {/* Gallery Editorial Grid in Bright Sunlit Style */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {filteredPieces.map((piece) => (
            <div
              key={piece.id}
              className={`${piece.span} rounded-3xl bg-gradient-to-br ${piece.palette.bg} border ${piece.palette.border} p-6 sm:p-8 flex flex-col justify-between relative group hover:shadow-md transition-all shadow-sm overflow-hidden`}
            >
              {/* Top Folio Metadata */}
              <div className="flex items-start justify-between gap-3 relative z-10">
                <div className="space-y-1">
                  <span className={`text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full font-bold border ${piece.palette.tagBg}`}>
                    {piece.tag}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 pt-2 tracking-tight">
                    {piece.title}
                  </h3>
                </div>

                <div className="text-right text-[11px] font-mono text-slate-600 font-medium">
                  <div className="flex items-center justify-end gap-1">
                    <MapPin className="w-3 h-3 text-coral" />
                    <span>{piece.location}</span>
                  </div>
                  <span>{piece.date}</span>
                </div>
              </div>

              {/* Typographic Visual Core: Honest Designed Composition */}
              <div className="py-10 sm:py-14 text-center space-y-4 relative z-10">
                <div className={`w-14 h-14 mx-auto rounded-2xl ${piece.palette.iconBg} border border-slate-200/60 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs`}>
                  {piece.category === 'motovlog' ? (
                    <Film className="w-6 h-6" />
                  ) : piece.category === 'behind-the-scenes' ? (
                    <Eye className="w-6 h-6" />
                  ) : (
                    <Camera className="w-6 h-6" />
                  )}
                </div>

                <div className="space-y-1.5 max-w-md mx-auto">
                  <p className="text-sm font-sans text-slate-800 leading-relaxed italic font-medium">
                    &ldquo;{piece.caption}&rdquo;
                  </p>
                  <p className="text-[11px] font-mono text-slate-500 font-semibold">
                    {piece.technicalNote}
                  </p>
                </div>
              </div>

              {/* Bottom Editorial Caption Bar */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-mono text-slate-600 font-medium relative z-10">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Curated Visual Entry</span>
                </span>
                <span className="text-[10px] tracking-wider uppercase font-bold text-slate-700">
                  {piece.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Motovlogging & Highway Travel Banner */}
        <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <span className="text-[10px] font-mono uppercase tracking-widest text-amber-800 font-bold flex items-center gap-1.5">
              <Sun className="w-3.5 h-3.5 text-amber-600" />
              <span>FIELD EXPLORATION &bull; MOTORCYCLE REELS</span>
            </span>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
              Two Wheels, Open Highways, &amp; Golden Horizons
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 font-sans max-w-2xl font-medium">
              Equipped for highway journeys and documentary reels across Maharashtra. Documenting scenic ghat passes, cloud formations, and regional heritage.
            </p>
          </div>

          <a
            href="https://www.instagram.com/shiv.premi_1630?cplk=Y3lhemlkZXM2MWhr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-coral text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-orange-600 transition-all shrink-0 shadow-md hover:shadow-lg"
          >
            <span>Follow @shiv.premi_1630</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
