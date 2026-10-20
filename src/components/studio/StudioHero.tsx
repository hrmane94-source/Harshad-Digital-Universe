import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown, MapPin, Sparkles, FileText, ArrowRight } from 'lucide-react';
import { contactConfig } from '../../data/contact';
import { EditorialPortrait } from '../ui/EditorialPortrait';

export const StudioHero: React.FC = () => {
  const scrollToProjects = () => {
    document.getElementById('chapter-02')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToJourney = () => {
    document.getElementById('chapter-03')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="chapter-00"
      className="relative min-h-[92vh] flex flex-col justify-between pt-8 sm:pt-12 pb-16 bg-paper border-b border-slate-200/90 dark:border-white/10 overflow-hidden"
    >
      {/* Background Architectural Grid Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(circle, #0F172A 1.5px, transparent 1.5px)', 
          backgroundSize: '32px 32px' 
        }}
      />
      <div className="absolute -top-32 right-1/4 w-[600px] h-[600px] rounded-full bg-amber-100/40 dark:bg-amber-950/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-[500px] h-[500px] rounded-full bg-blue-100/30 dark:bg-blue-950/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 space-y-12">
        
        {/* Top Folio Header Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono uppercase tracking-widest text-muted pb-5 border-b border-slate-200/90 dark:border-white/10">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-cobalt inline-block animate-pulse" />
            <span className="font-bold text-ink">SECTION 01</span>
            <span className="text-slate-300 dark:text-slate-700">//</span>
            <span className="font-semibold text-cobalt tracking-wider">HARSHAD MANE &bull; DIGITAL PORTFOLIO</span>
          </div>
          <div className="flex items-center gap-4 font-medium">
            <span className="flex items-center gap-1.5 text-ink">
              <MapPin className="w-3.5 h-3.5 text-coral" />
              <span>ADCET ASHTA, MAHARASHTRA</span>
            </span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">&bull;</span>
            <span className="hidden sm:inline font-mono">16.9482° N, 74.4093° E</span>
          </div>
        </div>

        {/* Hero Asymmetric Composition: Typography (7 Cols) + Portrait (5 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Expressive Typography (7 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Identity & Academic Credential Tag */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cobalt/10 text-cobalt border border-cobalt/20 text-xs font-mono font-bold shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-cobalt animate-pulse" />
                <span>FIRST-YEAR B.TECH CSE &bull; ADCET ASHTA</span>
              </span>
              <span className="px-3 py-1.5 rounded-full bg-surface border border-slate-200 dark:border-white/10 text-xs font-mono text-muted">
                @{contactConfig.creativeIdentity}
              </span>
            </div>

            {/* Oversized Typographic Headline */}
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-muted font-bold block">
                {contactConfig.publicDisplayName}
              </span>
              <h1 className="font-serif text-5xl sm:text-7xl lg:text-[5.5rem] text-ink leading-[1.02] tracking-tight font-normal">
                Curious enough <br />
                <span className="italic text-cobalt font-serif font-medium">to explore.</span> <br />
                Driven enough <br />
                <span className="text-ink font-bold">to build.</span>
              </h1>
            </div>

            {/* Architectural Motto Box */}
            <div className="p-6 sm:p-7 rounded-2xl border border-amber-200/90 dark:border-amber-900/40 bg-amber-50/70 dark:bg-amber-950/20 space-y-2 max-w-xl shadow-xs">
              <div className="text-[10px] font-mono uppercase tracking-widest text-amber-800 dark:text-amber-400 font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                <span>PERSONAL NORTH STAR</span>
              </div>
              <p className="font-serif text-2xl sm:text-3xl text-ink italic font-normal tracking-tight">
                &ldquo;Pressure is a privilege.&rdquo;
              </p>
              <p className="text-xs font-mono text-muted pt-1">
                — Expectation reflects capability; engineering friction builds lifelong resilience.
              </p>
            </div>

            {/* Concise Introduction Statement */}
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-sans max-w-2xl">
              First-year B.Tech Computer Science student, AI enthusiast and AI-assisted application builder developing technical foundations while exploring cybersecurity, cloud computing, machine learning, and creative technology.
            </p>

            {/* Primary Action Button Cluster */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-cobalt text-white hover:bg-blue-700 transition-all font-mono text-xs uppercase font-bold tracking-wider cursor-pointer shadow-sm hover:shadow-md active:scale-[0.98]"
              >
                <span>Explore Selected Work</span>
                <ArrowDown className="w-4 h-4 text-sunny" />
              </button>

              <button
                type="button"
                onClick={scrollToJourney}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-surface border border-slate-300 dark:border-white/15 text-xs font-mono font-bold text-ink hover:text-cobalt hover:border-cobalt transition-colors shadow-xs cursor-pointer"
              >
                <span>Technical Journey</span>
                <ArrowRight className="w-4 h-4 text-muted" />
              </button>

              <Link
                to="/resume"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-surface border border-slate-300 dark:border-white/15 text-xs font-mono font-bold text-muted hover:text-ink hover:border-slate-400 transition-colors shadow-xs"
              >
                <FileText className="w-4 h-4 text-muted" />
                <span>Interactive Résumé</span>
              </Link>
            </div>

            {/* Subtle Invitation to Scroll */}
            <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-muted tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-cobalt/60 animate-bounce" />
              <span>SCROLL TO EXPLORE SELECTED WORK &darr;</span>
            </div>
          </motion.div>

          {/* Right Column: Real Portrait & Verified Studio Ledger (5 Cols) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* The Real Portrait Component with Layered Editorial Framing */}
            <EditorialPortrait />

            {/* Quick Studio Metrics Strip Under Portrait */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center font-mono">
              <div className="p-3 rounded-xl bg-surface border border-slate-200 dark:border-white/10 shadow-2xs">
                <span className="block font-serif text-xl font-bold text-cobalt">07</span>
                <span className="text-[10px] text-muted">Projects</span>
              </div>
              <div className="p-3 rounded-xl bg-surface border border-slate-200 dark:border-white/10 shadow-2xs">
                <span className="block font-serif text-xl font-bold text-amber-600">SIH &apos;26</span>
                <span className="text-[10px] text-muted">Problem 26188</span>
              </div>
              <div className="p-3 rounded-xl bg-surface border border-slate-200 dark:border-white/10 shadow-2xs">
                <span className="block font-serif text-xl font-bold text-coral">2nd</span>
                <span className="text-[10px] text-muted">PixelCraft</span>
              </div>
              <div className="p-3 rounded-xl bg-surface border border-slate-200 dark:border-white/10 shadow-2xs">
                <span className="block font-serif text-xl font-bold text-emerald-600">89.2%</span>
                <span className="text-[10px] text-muted">SSC Topper</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
