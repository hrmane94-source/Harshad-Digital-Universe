import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const ManifestoChapter: React.FC = () => {
  return (
    <section 
      id="chapter-01"
      className="py-20 sm:py-32 bg-gradient-to-b from-[#FFFDF9] via-[#F0F9FF] to-[#FAF8F5] text-slate-900 relative overflow-hidden border-b border-sky-100"
    >
      {/* Background Solar & Architectural Glow */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(circle, #0284C7 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-amber-200/25 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full bg-sky-200/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Scene Kicker */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-sky-200/70 pb-5 text-xs font-mono">
          <div className="flex items-center gap-2.5 tracking-widest text-slate-600 uppercase">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block animate-pulse" />
            <span className="font-bold text-slate-900">SCENE 02</span>
            <span className="text-slate-300">//</span>
            <span className="font-semibold text-cobalt">THE PERSONAL MANIFESTO</span>
          </div>
          <span className="text-slate-500 uppercase tracking-widest font-medium">
            ENERGY &bull; CURIOSITY &bull; MOMENTUM
          </span>
        </div>

        {/* Large Typography Statement */}
        <div className="space-y-6 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 border border-amber-300/60 text-amber-900 text-[11px] font-mono uppercase font-bold tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>THE CORE PREMISE</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl lg:text-[4.75rem] font-normal text-slate-900 leading-[1.04] tracking-tight">
              Curiosity leads to exploration. <br />
              Exploration leads to learning. <br />
              <span className="italic font-serif text-cobalt font-semibold">
                Learning becomes meaningful when something is built.
              </span>
            </h2>
          </motion.div>

          <p className="text-base sm:text-xl text-slate-700 leading-relaxed max-w-3xl font-sans pt-2">
            Theoretical study builds comprehension, but real friction surfaces only when shipping applications. I combine the rapid prototyping capability of AI accelerators with deep, daily academic practice in low-level procedural C, memory mechanics, and security auditing.
          </p>
        </div>

        {/* Dialectic Pillars Grid with Bright, Confident Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-sky-200/60">
          
          <div className="p-7 rounded-3xl bg-white border border-sky-100 shadow-sm hover:shadow-md transition-shadow space-y-4 relative overflow-hidden group">
            <div className="w-10 h-10 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-cobalt font-bold">
              01
            </div>
            <span className="text-[11px] font-mono text-cobalt uppercase tracking-widest font-bold block">
              THE TERMINAL &amp; SYSTEMS
            </span>
            <h3 className="font-serif text-xl font-bold text-slate-900">
              Low-Level Foundations
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              Mastering pointers, structs, stack-heap dynamics, and UNIX process pipelines. Building true technical endurance from the metal upwards.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-amber-100 shadow-sm hover:shadow-md transition-shadow space-y-4 relative overflow-hidden group">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 font-bold">
              02
            </div>
            <span className="text-[11px] font-mono text-amber-700 uppercase tracking-widest font-bold block">
              THE ENGINE &amp; AI
            </span>
            <h3 className="font-serif text-xl font-bold text-slate-900">
              Applied Intelligence
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              Leveraging LLMs and deterministic forensic tooling (OCR, ELA) as leverage to solve real-world problems with speed, safety, and architectural discipline.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-emerald-100 shadow-sm hover:shadow-md transition-shadow space-y-4 relative overflow-hidden group">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 font-bold">
              03
            </div>
            <span className="text-[11px] font-mono text-emerald-700 uppercase tracking-widest font-bold block">
              THE HORIZON &amp; DISCOVERY
            </span>
            <h3 className="font-serif text-xl font-bold text-slate-900">
              Creative Perspective
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              Cinematography, highway rides, and mountain horizons under @shiv.premi_1630. Living an adventurous life and bringing visual depth into digital craft.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
