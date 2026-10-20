import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, MapPin, Sparkles, FileText, Bot } from 'lucide-react';
import { BrandMonogram } from '../ui/BrandMonogram';
import { contactConfig } from '../../data/contact';

export const StudioHero: React.FC = () => {
  const scrollToProjects = () => {
    document.getElementById('chapter-02')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCurio = () => {
    document.getElementById('chapter-06')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="chapter-00"
      className="relative min-h-[92vh] flex flex-col justify-between pt-8 sm:pt-12 pb-16 bg-paper border-b border-slate-200/90 dark:border-white/10 overflow-hidden"
    >
      {/* Architectural Background Grid Texture */}
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
            <span className="font-bold text-ink">INDEX 01</span>
            <span className="text-slate-300 dark:text-slate-700">//</span>
            <span className="font-semibold text-cobalt tracking-wider">HARSHAD RAJARAM MANE &bull; DIGITAL UNIVERSE</span>
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

        {/* Hero Studio Composition: Asymmetric Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Monolithic Typographic Display (8 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 space-y-8"
          >
            {/* Academic Credential Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-slate-200 dark:border-white/10 text-xs font-mono text-ink shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-medium">FIRST-YEAR B.TECH CSE &bull; ADCET ASHTA &bull; 2026–2030</span>
            </div>

            {/* Oversized Typographic Headline */}
            <div className="space-y-1">
              <h1 className="font-serif text-5xl sm:text-7xl lg:text-[5.75rem] text-ink leading-[1.02] tracking-tight font-normal">
                Curious enough <br />
                <span className="italic text-cobalt font-serif font-medium">to explore.</span> <br />
                Driven enough <br />
                <span className="text-ink font-bold">to build.</span>
              </h1>
            </div>

            {/* Architectural Motto Box */}
            <div className="p-6 sm:p-7 rounded-2xl border border-amber-200/90 dark:border-amber-900/40 bg-amber-50/70 dark:bg-amber-950/20 space-y-2 max-w-2xl shadow-xs">
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

            {/* Narrative Editorial Statement */}
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-sans max-w-2xl">
              Undergraduate computer science engineer exploring systems software, forensic document screening, and applied AI tools. Anchored in rigorous algorithmic problem solving and creative visual storytelling.
            </p>

            {/* Primary Action Button Cluster */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-ink text-paper hover:opacity-90 transition-all font-mono text-xs uppercase font-bold tracking-wider cursor-pointer shadow-sm hover:shadow-md"
              >
                <span>Explore Selected Work</span>
                <ArrowDown className="w-4 h-4 text-coral" />
              </button>

              <button
                type="button"
                onClick={scrollToCurio}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-surface border border-slate-300 dark:border-white/15 text-xs font-mono font-bold text-ink hover:text-cobalt hover:border-cobalt transition-colors shadow-xs cursor-pointer"
              >
                <Bot className="w-4 h-4 text-cobalt" />
                <span>Ask CURIO AI</span>
              </button>

              <Link
                to="/resume"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-surface border border-slate-300 dark:border-white/15 text-xs font-mono font-bold text-muted hover:text-ink hover:border-slate-400 transition-colors shadow-xs"
              >
                <FileText className="w-4 h-4 text-muted" />
                <span>Interactive Résumé</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Studio Identity & Verification Ledger (4 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-4 space-y-6"
          >
            {/* Identity Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-surface border border-slate-200 dark:border-white/10 shadow-sm space-y-6 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/10 pb-5">
                <div className="flex items-center gap-3.5">
                  <BrandMonogram size={44} />
                  <div>
                    <h2 className="font-serif text-lg font-bold text-ink leading-tight">
                      {contactConfig.publicDisplayName}
                    </h2>
                    <span className="text-xs font-mono text-muted">
                      @{contactConfig.creativeIdentity}
                    </span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 text-[10px] font-mono font-bold">
                  ACTIVE
                </span>
              </div>

              {/* Verified Metrics Ledger */}
              <div className="space-y-3.5">
                <div className="text-[11px] font-mono uppercase tracking-wider text-muted font-bold">
                  STUDIO METRICS &bull; VERIFIED
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-100 dark:border-white/5 space-y-0.5">
                    <span className="font-serif text-2xl font-bold text-cobalt">07</span>
                    <p className="text-[11px] font-mono text-muted leading-tight">
                      Verified Projects
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-100 dark:border-white/5 space-y-0.5">
                    <span className="font-serif text-2xl font-bold text-amber-600">SIH &apos;26</span>
                    <p className="text-[11px] font-mono text-muted leading-tight">
                      Problem 26188
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-100 dark:border-white/5 space-y-0.5">
                    <span className="font-serif text-2xl font-bold text-coral">2nd</span>
                    <p className="text-[11px] font-mono text-muted leading-tight">
                      PixelCraft Runner-Up
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-100 dark:border-white/5 space-y-0.5">
                    <span className="font-serif text-2xl font-bold text-emerald-600">89.2%</span>
                    <p className="text-[11px] font-mono text-muted leading-tight">
                      SSC Subject Topper
                    </p>
                  </div>
                </div>
              </div>

              {/* Technical Domains */}
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-white/10">
                <div className="text-[10px] font-mono uppercase tracking-wider text-muted font-bold">
                  CORE TECHNICAL DISCIPLINES
                </div>
                <div className="flex flex-wrap gap-1.5 text-xs font-mono">
                  <span className="px-2 py-1 rounded-md bg-blue-50 dark:bg-blue-950/40 text-cobalt border border-blue-200 dark:border-blue-800">
                    Procedural C Systems
                  </span>
                  <span className="px-2 py-1 rounded-md bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                    Forensic ELA &amp; OCR
                  </span>
                  <span className="px-2 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                    TypeScript &amp; React
                  </span>
                  <span className="px-2 py-1 rounded-md bg-purple-50 dark:bg-purple-950/40 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                    DevSecOps Pipeline
                  </span>
                </div>
              </div>

              {/* Quick Route Links */}
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-white/10">
                <div className="text-[10px] font-mono uppercase tracking-wider text-muted font-bold">
                  DIRECT DOSSIER NAVIGATION
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <Link
                    to="/about"
                    className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-white/[0.03] hover:bg-slate-100 dark:hover:bg-white/[0.06] text-ink transition-colors"
                  >
                    <span>Full Biography</span>
                    <ArrowUpRight className="w-3 h-3 text-muted" />
                  </Link>
                  <Link
                    to="/achievements"
                    className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-white/[0.03] hover:bg-slate-100 dark:hover:bg-white/[0.06] text-ink transition-colors"
                  >
                    <span>Achievements</span>
                    <ArrowUpRight className="w-3 h-3 text-muted" />
                  </Link>
                  <Link
                    to="/creative"
                    className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-white/[0.03] hover:bg-slate-100 dark:hover:bg-white/[0.06] text-ink transition-colors"
                  >
                    <span>Creative Frames</span>
                    <ArrowUpRight className="w-3 h-3 text-muted" />
                  </Link>
                  <Link
                    to="/contact"
                    className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-white/[0.03] hover:bg-slate-100 dark:hover:bg-white/[0.06] text-ink transition-colors"
                  >
                    <span>Contact Studio</span>
                    <ArrowUpRight className="w-3 h-3 text-muted" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
