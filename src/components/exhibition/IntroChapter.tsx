import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, MapPin, Sun } from 'lucide-react';
import { BrandMonogram } from '../ui/BrandMonogram';

export const IntroChapter: React.FC = () => {
  const scrollToExhibition = () => {
    document.getElementById('chapter-02')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="chapter-00"
      className="relative min-h-[90vh] flex flex-col justify-between pt-8 sm:pt-14 pb-14 bg-gradient-to-b from-[#FFFDF9] via-[#FAF8F5] to-[#F8FAFC] border-b border-slate-200/80 overflow-hidden"
    >
      {/* Radiant Sunlit Background Auras */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(circle, #0284C7 1.5px, transparent 1.5px)', backgroundSize: '36px 36px' }}
      />
      <div className="absolute -top-24 left-1/4 w-[550px] h-[550px] rounded-full bg-amber-200/20 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-[450px] h-[450px] rounded-full bg-sky-200/25 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 space-y-12">
        
        {/* Editorial Top Folio Kicker */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono uppercase tracking-widest text-slate-500 pb-5 border-b border-slate-200/80">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-cobalt inline-block animate-pulse" />
            <span className="font-bold text-slate-900">SCENE 01</span>
            <span className="text-slate-300">//</span>
            <span className="font-semibold text-cobalt">INTRODUCING HARSHAD RAJARAM MANE</span>
          </div>
          <div className="flex items-center gap-4 text-slate-500 font-medium">
            <span className="flex items-center gap-1.5 text-slate-700">
              <MapPin className="w-3.5 h-3.5 text-coral" />
              <span>ADCET ASHTA, MAHARASHTRA</span>
            </span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="hidden sm:inline">16.9482° N, 74.4093° E</span>
          </div>
        </div>

        {/* Hero Cinematic Layout: Asymmetric Dual Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Monolithic Typographic Display */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 space-y-8"
          >
            {/* Student Credential Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono text-cobalt font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>FIRST-YEAR B.TECH CSE &bull; ADCET ASHTA &bull; CLASS OF 2026–2030</span>
            </div>

            {/* Oversized Expressive Headline */}
            <div className="space-y-2">
              <h1 className="font-serif text-5xl sm:text-7xl lg:text-[5.5rem] text-slate-900 leading-[1.03] tracking-tight font-normal">
                Curious enough <br />
                <span className="italic text-cobalt font-serif font-medium">to explore.</span> <br />
                Driven enough <br />
                <span className="text-slate-900 font-bold">to build.</span>
              </h1>
            </div>

            {/* Motto Frame — Sunlit Coral & Warm Gold */}
            <div className="p-6 sm:p-7 rounded-3xl border border-amber-200 bg-gradient-to-r from-amber-50/90 via-orange-50/60 to-white space-y-2 max-w-xl shadow-xs">
              <div className="text-[10px] font-mono uppercase tracking-widest text-amber-800 font-bold flex items-center gap-1.5">
                <Sun className="w-3.5 h-3.5 text-amber-600" />
                <span>PERSONAL NORTH STAR</span>
              </div>
              <p className="font-serif text-2xl sm:text-3xl text-slate-900 italic font-normal tracking-tight">
                &ldquo;Pressure is a privilege.&rdquo;
              </p>
              <p className="text-xs font-mono text-slate-600 pt-1">
                — Expectation reflects capability; engineering friction builds lifelong resilience.
              </p>
            </div>

            {/* Narrative Paragraph */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-sans max-w-2xl">
              An undergraduate computer science engineer exploring systems software, forensic document screening, and applied AI tools. Anchored in rigorous algorithmic problem solving and creative visual storytelling.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={scrollToExhibition}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-slate-900 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-cobalt transition-all shadow-md cursor-pointer hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>Enter The Project Journey</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </button>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white border border-slate-300 text-slate-800 font-mono text-xs font-bold uppercase tracking-wider hover:border-cobalt hover:text-cobalt transition-all shadow-xs"
              >
                <span>About Harshad</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Architectural Specimen Plate */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="lg:col-span-4"
          >
            <div className="rounded-3xl bg-white p-7 sm:p-8 border border-slate-200/90 shadow-xl space-y-6 relative overflow-hidden">
              
              {/* Top Accent Strip */}
              <div className="h-2 w-full bg-gradient-to-r from-amber-400 via-coral to-cobalt rounded-full" />

              {/* Passport Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-semibold">
                    IDENTITY SPECIMEN
                  </span>
                  <div className="font-serif text-xl font-bold text-slate-900">
                    Harshad Rajaram Mane
                  </div>
                </div>
                <div className="p-2 rounded-2xl bg-slate-50 border border-slate-100">
                  <BrandMonogram size={44} />
                </div>
              </div>

              {/* Verified Telemetry Ledger */}
              <div className="space-y-3 text-xs font-mono">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-slate-500 uppercase">Primary Focus</span>
                  <span className="text-cobalt font-bold">Systems &bull; Applied AI</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-slate-500 uppercase">Flagship System</span>
                  <span className="text-slate-800 font-bold">FALCON-404 (SIH 2026)</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-slate-500 uppercase">National Award</span>
                  <span className="text-emerald-600 font-bold">PixelCraft 2nd Place</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-slate-500 uppercase">Creative Moniker</span>
                  <span className="text-coral font-bold">@shiv.premi_1630</span>
                </div>
              </div>

              {/* Quick Status Bar */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>First-Year Undergraduate</span>
                </span>
                <span className="font-semibold text-slate-700">ADCET 2026–2030</span>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
