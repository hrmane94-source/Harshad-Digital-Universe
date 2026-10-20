import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, MapPin, Compass } from 'lucide-react';
import { BrandMonogram } from '../ui/BrandMonogram';
import { contactConfig } from '../../data/contact';

export const IntroChapter: React.FC = () => {
  const scrollToExhibition = () => {
    document.getElementById('chapter-02')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="chapter-00"
      className="relative min-h-[92vh] flex flex-col justify-between pt-6 sm:pt-12 pb-12 border-b border-black/[0.08] dark:border-white/[0.08] overflow-hidden"
    >
      {/* Background Architectural Coordinate Field */}
      <div 
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.05] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 space-y-10">
        
        {/* Editorial Top Folio Kicker */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-widest text-muted pb-4 border-b border-black/[0.06] dark:border-white/[0.08]">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-cobalt inline-block" />
            <span className="font-bold text-ink">CHAPTER 00</span>
            <span className="text-faint">//</span>
            <span>PROLOGUE &bull; THE DIGITAL EXHIBITION</span>
          </div>
          <div className="flex items-center gap-4 text-faint">
            <span className="flex items-center gap-1.5 text-muted">
              <MapPin className="w-3.5 h-3.5 text-coral" />
              <span>ADCET ASHTA, SANGLI</span>
            </span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="hidden sm:inline">16.9482° N, 74.4093° E</span>
          </div>
        </div>

        {/* Hero Exhibition Layout: Asymmetric Dual Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Monolithic Typographic Display */}
          <motion.div 
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 space-y-7"
          >
            {/* Student Credential Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-subtle border border-black/[0.08] dark:border-white/[0.08] text-[11px] font-mono text-muted">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>FIRST-YEAR B.TECH CSE &bull; CLASS OF 2026–2030</span>
            </div>

            {/* Oversized Expressive Headline */}
            <div className="space-y-1">
              <h1 className="font-serif text-5xl sm:text-7xl lg:text-[5.75rem] text-ink leading-[1.02] tracking-tight font-normal">
                Curious enough <br />
                <span className="italic text-cobalt font-serif">to explore.</span> <br />
                Driven enough <br />
                <span className="text-ink font-semibold">to build.</span>
              </h1>
            </div>

            {/* Motto Frame */}
            <div className="p-5 sm:p-6 rounded-2xl border-l-4 border-coral bg-subtle/80 space-y-1.5 max-w-xl shadow-2xs">
              <div className="text-[10px] font-mono uppercase tracking-widest text-coral font-bold flex items-center gap-1.5">
                <span>PERSONAL NORTH STAR</span>
              </div>
              <p className="font-serif text-2xl sm:text-3xl text-ink italic font-normal tracking-tight">
                &ldquo;Pressure is a privilege.&rdquo;
              </p>
              <p className="text-[11px] font-mono text-muted pt-1">
                — Expectation reflects capability; engineering friction yields resilience.
              </p>
            </div>

            {/* Credible Personal Statement */}
            <p className="text-base sm:text-lg text-muted leading-relaxed max-w-2xl font-sans">
              Welcome to the digital universe of <strong className="text-ink font-semibold">{contactConfig.publicDisplayName}</strong> — first-year Computer Science Engineering undergraduate, aspiring cybersecurity &amp; DevSecOps practitioner, rapid AI-assisted software prototyper, and visual storyteller under <span className="font-mono text-xs text-cobalt font-semibold">shiv.premi_1630</span>.
            </p>

            {/* Primary Action Suite */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={scrollToExhibition}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-ink text-paper text-xs font-semibold uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all shadow-md font-mono cursor-pointer"
              >
                <span>Enter Project Exhibition</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <Link
                to="/resume"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-surface border border-black/[0.1] dark:border-white/[0.12] text-ink hover:border-black/30 dark:hover:border-white/30 text-xs font-semibold uppercase tracking-wider transition-all font-mono shadow-xs"
              >
                <span>ATS Résumé</span>
                <ArrowUpRight className="w-4 h-4 text-cobalt" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Architectural Identity Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-4 space-y-5"
          >
            {/* Identity Card */}
            <div className="p-8 rounded-3xl bg-surface border border-black/[0.08] dark:border-white/[0.1] space-y-6 shadow-xs relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-black/[0.06] dark:border-white/[0.08] pb-3 text-[10px] font-mono text-muted uppercase tracking-widest">
                <span>IDENTITY MARK</span>
                <span className="text-cobalt font-bold">HM // 2026</span>
              </div>

              <div className="flex flex-col items-center justify-center py-4 text-center space-y-3">
                <div className="w-20 h-20 rounded-2xl bg-subtle/80 border border-black/[0.08] dark:border-white/[0.1] flex items-center justify-center shadow-xs">
                  <BrandMonogram size={48} className="w-12 h-12" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-ink tracking-tight">
                    Harshad Mane
                  </h3>
                  <p className="text-xs text-muted font-mono mt-0.5">
                    ADCET CSE &bull; First Year
                  </p>
                </div>
              </div>

              {/* Verified Metrics Matrix */}
              <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-black/[0.06] dark:border-white/[0.08] text-[11px] font-mono">
                <div className="p-3 rounded-xl bg-subtle/60 border border-black/[0.04] dark:border-white/[0.06] space-y-0.5">
                  <span className="text-muted block text-[10px] uppercase">Specialty</span>
                  <span className="text-ink font-semibold">DevSecOps / AI</span>
                </div>
                <div className="p-3 rounded-xl bg-subtle/60 border border-black/[0.04] dark:border-white/[0.06] space-y-0.5">
                  <span className="text-muted block text-[10px] uppercase">Hackathon Lead</span>
                  <span className="text-cobalt font-semibold">SIH 2026</span>
                </div>
                <div className="p-3 rounded-xl bg-subtle/60 border border-black/[0.04] dark:border-white/[0.06] space-y-0.5">
                  <span className="text-muted block text-[10px] uppercase">PixelCraft</span>
                  <span className="text-coral font-semibold">2nd Place (Natl)</span>
                </div>
                <div className="p-3 rounded-xl bg-subtle/60 border border-black/[0.04] dark:border-white/[0.06] space-y-0.5">
                  <span className="text-muted block text-[10px] uppercase">Creative Mark</span>
                  <span className="text-ink font-semibold">shiv.premi</span>
                </div>
              </div>
            </div>

            {/* Reserved Portrait Box */}
            <div className="p-3.5 rounded-2xl bg-subtle/70 border border-black/[0.06] dark:border-white/[0.08] text-[11px] font-mono text-muted flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-cobalt" />
                <span>Curated Image Placeholder</span>
              </span>
              <span className="text-[10px] text-faint">portrait.jpg (Reserved)</span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Scroll Cue */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 flex items-center justify-between text-[11px] font-mono text-muted">
        <button
          type="button"
          onClick={scrollToExhibition}
          className="inline-flex items-center gap-2 hover:text-ink transition-colors cursor-pointer group"
        >
          <span className="w-2 h-2 rounded-full bg-cobalt animate-ping" />
          <span className="tracking-widest uppercase">SCROLL TO COMMENCE EXHIBITION</span>
          <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-1" />
        </button>
        <span className="hidden sm:inline tracking-wider text-faint">CURIO GUIDE READY ON DEMAND</span>
      </div>
    </section>
  );
};
