import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown, MapPin, Sparkles, FileText, ArrowRight } from 'lucide-react';
import { contactConfig } from '../../data/contact';
import { EditorialPortrait } from '../ui/EditorialPortrait';
import { staggerContainer, staggerItem } from '../../lib/motionVariants';

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
      className="relative min-h-[92vh] flex flex-col justify-between pt-8 sm:pt-12 pb-16 bg-gradient-to-b from-[#F4F1FF] via-[#EAF3FF] to-[#EDE5FF]/40 dark:from-paper dark:via-paper dark:to-paper border-b border-border-hairline overflow-hidden transition-colors duration-250"
    >
      {/* Background Atmospheric Glows & Technical Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(circle, currentColor 1.25px, transparent 1.25px)', 
          backgroundSize: '28px 28px' 
        }}
      />
      {/* Ambient Radial Lights */}
      <div className="absolute -top-32 right-1/4 w-[650px] h-[650px] rounded-full bg-violet/10 dark:bg-violet/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-[550px] h-[550px] rounded-full bg-cobalt/10 dark:bg-cobalt/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-mint/5 dark:bg-mint/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 space-y-12">
        
        {/* Top Folio Header Strip */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono uppercase tracking-widest text-muted pb-5 border-b border-border-hairline"
        >
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-cobalt inline-block animate-pulse shadow-[0_0_8px_rgba(49,94,235,0.6)]" />
            <span className="font-bold text-ink">SECTION 01</span>
            <span className="text-muted/40">//</span>
            <span className="font-semibold text-cobalt tracking-wider">HARSHAD MANE &bull; DIGITAL PORTFOLIO</span>
          </div>
          <div className="flex items-center gap-4 font-medium">
            <span className="flex items-center gap-1.5 text-ink">
              <MapPin className="w-3.5 h-3.5 text-coral" />
              <span>ADCET ASHTA, MAHARASHTRA</span>
            </span>
            <span className="hidden sm:inline text-muted/40">&bull;</span>
            <span className="hidden sm:inline font-mono text-muted">16.9482° N, 74.4093° E</span>
          </div>
        </motion.div>

        {/* Hero Asymmetric Composition: Typography (7 Cols) + Portrait (5 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Expressive Typography (7 Cols) */}
          <motion.div 
            variants={staggerContainer(0.08, 0.1)}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-8"
          >
            {/* Identity & Academic Credential Tag */}
            <motion.div variants={staggerItem} className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cobalt/10 text-cobalt border border-cobalt/25 text-xs font-mono font-bold shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-cobalt animate-pulse" />
                <span>FIRST-YEAR B.TECH CSE &bull; ADCET ASHTA</span>
              </span>
              <span className="px-3 py-1.5 rounded-full bg-surface dark:bg-card border border-border-hairline text-xs font-mono text-muted">
                @{contactConfig.creativeIdentity}
              </span>
            </motion.div>

            {/* Oversized Typographic Headline */}
            <motion.div variants={staggerItem} className="space-y-2">
              <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-muted font-bold block">
                {contactConfig.publicDisplayName}
              </span>
              <h1 className="font-serif text-5xl sm:text-7xl lg:text-[5.5rem] text-ink leading-[1.02] tracking-tight font-normal">
                Curious enough <br />
                <span className="italic font-serif font-medium bg-gradient-to-r from-cobalt via-violet to-sky-400 bg-clip-text text-transparent">
                  to explore.
                </span> <br />
                Driven enough <br />
                <span className="text-ink font-bold">to build.</span>
              </h1>
            </motion.div>

            {/* Architectural Motto Box */}
            <motion.div 
              variants={staggerItem}
              className="p-6 sm:p-7 rounded-2xl border border-amber-400/30 dark:border-amber-400/20 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent space-y-2 max-w-xl shadow-xs backdrop-blur-xs"
            >
              <div className="text-[10px] font-mono uppercase tracking-widest text-amber-700 dark:text-amber-400 font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>PERSONAL NORTH STAR</span>
              </div>
              <p className="font-serif text-2xl sm:text-3xl text-ink italic font-normal tracking-tight">
                &ldquo;Pressure is a privilege.&rdquo;
              </p>
              <p className="text-xs font-mono text-muted pt-1">
                — Expectation reflects capability; engineering friction builds lifelong resilience.
              </p>
            </motion.div>

            {/* Concise Introduction Statement */}
            <motion.p 
              variants={staggerItem}
              className="text-base sm:text-lg text-ink/80 leading-relaxed font-sans max-w-2xl"
            >
              First-year B.Tech Computer Science student, AI enthusiast and AI-assisted application builder developing technical foundations while exploring cybersecurity, cloud computing, machine learning, and creative technology.
            </motion.p>

            {/* Primary Action Button Cluster */}
            <motion.div variants={staggerItem} className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cobalt to-blue-600 text-white hover:opacity-95 transition-all font-mono text-xs uppercase font-bold tracking-wider cursor-pointer shadow-md hover:shadow-lg hover:shadow-cobalt/25 active:scale-[0.98]"
              >
                <span>Explore Selected Work</span>
                <ArrowDown className="w-4 h-4 text-sunny" />
              </button>

              <button
                type="button"
                onClick={scrollToJourney}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white dark:bg-card border border-border-hairline text-xs font-mono font-bold text-ink hover:text-cobalt hover:border-cobalt/40 transition-colors shadow-2xs hover:shadow-chromatic cursor-pointer active:scale-[0.98]"
              >
                <span>Technical Journey</span>
                <ArrowRight className="w-4 h-4 text-muted" />
              </button>

              <Link
                to="/resume"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white dark:bg-card border border-border-hairline text-xs font-mono font-bold text-muted hover:text-ink hover:border-border-strong transition-colors shadow-2xs hover:shadow-chromatic active:scale-[0.98]"
              >
                <FileText className="w-4 h-4 text-muted" />
                <span>Interactive Résumé</span>
              </Link>
            </motion.div>

            {/* Subtle Invitation to Scroll */}
            <motion.div variants={staggerItem} className="pt-2 flex items-center gap-2 text-[11px] font-mono text-muted tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-cobalt/70 animate-bounce" />
              <span>SCROLL TO EXPLORE SELECTED WORK &darr;</span>
            </motion.div>
          </motion.div>

          {/* Right Column: Real Portrait & Verified Studio Ledger (5 Cols) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* The Real Portrait Component with Layered Editorial Framing */}
            <EditorialPortrait />

            {/* Quick Studio Metrics Strip Under Portrait */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center font-mono">
              <div className="p-3 rounded-xl bg-white dark:bg-card border border-cobalt/25 shadow-2xs hover:shadow-chromatic transition-all">
                <span className="block font-serif text-xl font-bold text-cobalt">07</span>
                <span className="text-[10px] text-muted">Projects</span>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-card border border-amber-500/25 shadow-2xs hover:shadow-warm transition-all">
                <span className="block font-serif text-xl font-bold text-amber-500">SIH &apos;26</span>
                <span className="text-[10px] text-muted">Problem 26188</span>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-card border border-coral/25 shadow-2xs hover:shadow-warm transition-all">
                <span className="block font-serif text-xl font-bold text-coral">2nd</span>
                <span className="text-[10px] text-muted">PixelCraft</span>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-card border border-mint/25 shadow-2xs hover:shadow-mint transition-all">
                <span className="block font-serif text-xl font-bold text-mint">89.2%</span>
                <span className="text-[10px] text-muted">SSC Topper</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
