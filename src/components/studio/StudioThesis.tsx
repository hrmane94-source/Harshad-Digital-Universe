import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Camera, Sparkles, HeartHandshake, Compass, BookOpen } from 'lucide-react';

export const StudioThesis: React.FC = () => {
  const coreValues = [
    {
      title: "Pressure is a Privilege",
      subtitle: "RESILIENCE & TRUST",
      desc: "Pressure is not an obstacle to avoid; it signals that you have been trusted with an opportunity that matters. Friction builds genuine capability.",
      icon: Sparkles,
      color: "border-amber-300 dark:border-amber-800 bg-amber-50/80 dark:bg-amber-950/20 text-amber-900 dark:text-amber-300"
    },
    {
      title: "Build a Life Worth Experiencing",
      subtitle: "DEPTH OVER NOISE",
      desc: "Live with fewer regrets, explore the physical world, document nature through a camera lens, and seek depth over superficial digital distraction.",
      icon: Compass,
      color: "border-sky-300 dark:border-sky-800 bg-sky-50/80 dark:bg-sky-950/20 text-sky-900 dark:text-sky-300"
    },
    {
      title: "Keep Learning Without Limits",
      subtitle: "UNBOUNDED CURIOSITY",
      desc: "Curiosity and disciplined daily effort conquer any knowledge deficit. Bridging procedural C systems with modern applied AI orchestration.",
      icon: BookOpen,
      color: "border-emerald-300 dark:border-emerald-800 bg-emerald-50/80 dark:bg-emerald-950/20 text-emerald-900 dark:text-emerald-300"
    },
    {
      title: "Leave People Better Than You Found Them",
      subtitle: "COLLABORATION & INTEGRITY",
      desc: "Treat collaborators fairly, stand beside teammates through difficulty, and engineer software that serves genuine human and institutional needs.",
      icon: HeartHandshake,
      color: "border-purple-300 dark:border-purple-800 bg-purple-50/80 dark:bg-purple-950/20 text-purple-900 dark:text-purple-300"
    }
  ];

  return (
    <section 
      id="chapter-01"
      className="py-20 sm:py-32 bg-gradient-to-b from-amber-50/50 via-paper to-surface border-b border-slate-200/90 dark:border-white/10 text-ink relative overflow-hidden"
    >
      {/* Background Architectural Grid */}
      <div 
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.05] pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(circle, #0F172A 1px, transparent 1px)', 
          backgroundSize: '28px 28px' 
        }}
      />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-amber-200/25 dark:bg-amber-950/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-5 text-xs font-mono">
          <div className="flex items-center gap-2.5 tracking-widest text-muted uppercase">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block animate-pulse" />
            <span className="font-bold text-ink">SECTION 02</span>
            <span className="text-slate-300 dark:text-slate-700">//</span>
            <span className="font-semibold text-cobalt">PERSONAL PHILOSOPHY &amp; CORE VALUES</span>
          </div>
          <span className="text-muted uppercase tracking-widest font-medium text-[11px]">
            VALUES &bull; CURIOSITY &bull; RESILIENCE
          </span>
        </div>

        {/* Massive Typographic Statement */}
        <div className="space-y-6 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-200/80 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-amber-950 dark:text-amber-200 text-[11px] font-mono uppercase font-bold tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>THE CORE PREMISE</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl lg:text-[4.75rem] font-normal text-ink leading-[1.04] tracking-tight">
              Curiosity leads to exploration. <br />
              Exploration leads to learning. <br />
              <span className="italic font-serif text-cobalt font-semibold">
                Learning becomes meaningful when something is built.
              </span>
            </h2>
          </motion.div>

          <p className="text-base sm:text-xl text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl font-sans pt-2">
            Theoretical study builds comprehension, but real friction surfaces only when shipping applications. I combine the rapid prototyping capability of modern tooling with daily academic practice in low-level procedural C, memory mechanics, and security auditing.
          </p>
        </div>

        {/* 4 Core Personal Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-4 border-t border-slate-200 dark:border-white/10">
          {coreValues.map((val) => {
            const Icon = val.icon;
            return (
              <div 
                key={val.title}
                className={`p-6 rounded-2xl border ${val.color} space-y-3 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest font-bold opacity-80">
                      {val.subtitle}
                    </span>
                    <Icon className="w-4 h-4 opacity-80" />
                  </div>
                  <h3 className="font-serif text-xl font-bold tracking-tight text-ink">
                    {val.title}
                  </h3>
                </div>
                <p className="text-xs font-sans leading-relaxed text-slate-700 dark:text-slate-300 pt-2">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* 3 Technical Disciplines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-200 dark:border-white/10">
          
          {/* Pillar 01: Low-level Systems */}
          <div className="p-7 rounded-2xl bg-surface border border-slate-200 dark:border-white/10 shadow-xs hover:shadow-md transition-shadow space-y-4 group">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-cobalt font-mono font-bold text-sm">
                01
              </div>
              <Terminal className="w-5 h-5 text-cobalt/60 group-hover:text-cobalt transition-colors" />
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-mono text-cobalt uppercase tracking-widest font-bold block">
                THE FOUNDATION
              </span>
              <h3 className="font-serif text-xl font-bold text-ink">
                Systems &amp; Low-Level C
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              Mastering pointers, structs, stack-heap dynamics, and UNIX process pipelines. Building true technical endurance from the metal upwards.
            </p>

            <div className="pt-2 flex flex-wrap gap-1.5 text-[11px] font-mono text-muted">
              <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5">Pointers</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5">POSIX</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5">Memory Models</span>
            </div>
          </div>

          {/* Pillar 02: Applied Intelligence */}
          <div className="p-7 rounded-2xl bg-surface border border-slate-200 dark:border-white/10 shadow-xs hover:shadow-md transition-shadow space-y-4 group">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 flex items-center justify-center text-amber-700 dark:text-amber-400 font-mono font-bold text-sm">
                02
              </div>
              <Cpu className="w-5 h-5 text-amber-600/60 group-hover:text-amber-600 transition-colors" />
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-mono text-amber-700 dark:text-amber-400 uppercase tracking-widest font-bold block">
                THE ENGINE
              </span>
              <h3 className="font-serif text-xl font-bold text-ink">
                Applied AI &amp; Forensics
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              Deploying client-side OCR heuristics, Error Level Analysis (ELA), and grounded RAG models to solve practical real-world screening challenges.
            </p>

            <div className="pt-2 flex flex-wrap gap-1.5 text-[11px] font-mono text-muted">
              <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5">Tesseract OCR</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5">ELA Analysis</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5">FastAPI</span>
            </div>
          </div>

          {/* Pillar 03: Visual Storytelling */}
          <div className="p-7 rounded-2xl bg-surface border border-slate-200 dark:border-white/10 shadow-xs hover:shadow-md transition-shadow space-y-4 group">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-emerald-700 dark:text-emerald-400 font-mono font-bold text-sm">
                03
              </div>
              <Camera className="w-5 h-5 text-emerald-600/60 group-hover:text-emerald-600 transition-colors" />
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 uppercase tracking-widest font-bold block">
                THE LENS
              </span>
              <h3 className="font-serif text-xl font-bold text-ink">
                Visual Cinematography
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              Creative photography across the Western Ghats under the identity @shiv.premi_1630. Engineering precision informed by visual sensibility.
            </p>

            <div className="pt-2 flex flex-wrap gap-1.5 text-[11px] font-mono text-muted">
              <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5">35mm Framing</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5">Editorial Grid</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5">Western Ghats</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
