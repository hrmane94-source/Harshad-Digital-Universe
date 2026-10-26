import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Camera, Sparkles, HeartHandshake, Compass, BookOpen, ShieldCheck } from 'lucide-react';
import { fadeInUp, defaultViewport } from '../../lib/motionVariants';
import { CyberMatrix3DArtwork } from './CyberMatrix3DArtwork';

export const StudioThesis: React.FC = () => {
  const coreValues = [
    {
      title: "Pressure is a Privilege",
      subtitle: "RESILIENCE & TRUST",
      desc: "Pressure is not an obstacle to avoid; it signals that you have been trusted with an opportunity that matters. Friction builds genuine capability.",
      icon: Sparkles,
      color: "border-amber-400/50 bg-[#FFF0BF] dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 shadow-warm"
    },
    {
      title: "Build a Life Worth Experiencing",
      subtitle: "DEPTH OVER NOISE",
      desc: "Live with fewer regrets, explore the physical world, document nature through a camera lens, and seek depth over superficial digital distraction.",
      icon: Compass,
      color: "border-cobalt/40 bg-[#DDEBFF] dark:bg-cobalt/20 text-blue-950 dark:text-blue-200 shadow-chromatic"
    },
    {
      title: "Keep Learning Without Limits",
      subtitle: "UNBOUNDED CURIOSITY",
      desc: "Curiosity and disciplined daily effort conquer any knowledge deficit. Bridging procedural C systems with modern applied AI orchestration.",
      icon: BookOpen,
      color: "border-mint/40 bg-[#D8F6F0] dark:bg-mint/20 text-emerald-950 dark:text-emerald-200 shadow-mint"
    },
    {
      title: "Leave People Better Than You Found Them",
      subtitle: "COLLABORATION & INTEGRITY",
      desc: "Treat collaborators fairly, stand beside teammates through difficulty, and engineer software that serves genuine human and institutional needs.",
      icon: HeartHandshake,
      color: "border-violet/40 bg-[#EDE5FF] dark:bg-violet/20 text-purple-950 dark:text-purple-200 shadow-chromatic"
    }
  ];

  return (
    <section 
      id="chapter-01"
      className="py-20 sm:py-32 bg-gradient-to-b from-[#FFF5E6] via-[#FFF0BF]/30 to-[#FFF5E6] dark:from-paper dark:via-paper dark:to-paper border-b border-border-hairline text-ink relative overflow-hidden transition-colors duration-250"
    >
      {/* Background Architectural Grid & Subtle Ambient Glow */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', 
          backgroundSize: '28px 28px' 
        }}
      />
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] rounded-full bg-amber-500/10 dark:bg-violet/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] rounded-full bg-coral/10 dark:bg-mint/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border-hairline pb-5 text-xs font-mono">
          <div className="flex items-center gap-2.5 tracking-widest text-muted uppercase">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block animate-pulse shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
            <span className="font-bold text-ink">SECTION 02</span>
            <span className="text-muted/40">//</span>
            <span className="font-semibold text-cobalt">PERSONAL PHILOSOPHY &amp; CORE VALUES</span>
          </div>
          <span className="text-muted uppercase tracking-widest font-medium text-[11px]">
            VALUES &bull; CURIOSITY &bull; RESILIENCE
          </span>
        </div>

        {/* Massive Typographic Statement */}
        <div className="space-y-6 max-w-5xl">
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/15 text-amber-800 dark:text-amber-400 border border-amber-400/40 text-[11px] font-mono uppercase font-bold tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE CORE PREMISE</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl lg:text-[4.75rem] font-normal text-ink leading-[1.04] tracking-tight">
              Curiosity leads to exploration. <br />
              Exploration leads to learning. <br />
              <span className="italic font-serif text-cobalt font-semibold bg-gradient-to-r from-cobalt via-violet to-blue-500 bg-clip-text text-transparent">
                Learning becomes meaningful when something is built.
              </span>
            </h2>
          </motion.div>

          <p className="text-base sm:text-xl text-ink/85 leading-relaxed max-w-3xl font-sans pt-2">
            Theoretical study builds comprehension, but real friction surfaces only when shipping applications. I combine the rapid prototyping capability of modern tooling with daily academic practice in low-level procedural C, memory mechanics, and security auditing.
          </p>
        </div>

        {/* Dimensional Laboratory Motif: Interactive 3D Cyber Matrix Banner */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white/90 dark:bg-card/70 backdrop-blur-md border border-border-hairline shadow-chromatic relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cobalt/10 text-cobalt border border-cobalt/25 text-[10px] font-mono font-bold tracking-widest uppercase">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>INTERACTIVE LAB MOTIF // CRYPTOGRAPHY &amp; REASONING MATRIX</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-4xl font-bold text-ink tracking-tight">
                Deterministic Execution &amp; Empirical Integrity
              </h3>

              <p className="text-xs sm:text-sm text-muted leading-relaxed font-sans max-w-xl">
                From low-level procedural C pointer arithmetic to client-side Error Level Analysis (ELA) and cryptographic document forensics, every software artifact is designed to resist ambiguity and execute with predictable precision.
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-[10px] font-mono text-muted">
                <span className="px-2.5 py-1 rounded-lg bg-subtle border border-border-hairline text-ink font-semibold">C Memory Determinism</span>
                <span className="px-2.5 py-1 rounded-lg bg-subtle border border-border-hairline text-ink font-semibold">Cryptographic Hashes</span>
                <span className="px-2.5 py-1 rounded-lg bg-subtle border border-border-hairline text-ink font-semibold">Neural Inference Nodes</span>
              </div>
            </div>

            <div className="lg:col-span-5 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-cobalt/15 via-violet/10 to-amber-400/10 rounded-full blur-2xl pointer-events-none" />
              <CyberMatrix3DArtwork size="md" className="py-2" />
            </div>

          </div>
        </motion.div>

        {/* 4 Core Personal Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-4 border-t border-border-hairline">
          {coreValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <motion.div 
                key={val.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className={`p-6 sm:p-7 rounded-2xl border ${val.color} space-y-3 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between`}
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
                <p className="text-xs font-sans leading-relaxed text-ink/85 pt-2">
                  {val.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* 3 Technical Disciplines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-border-hairline">
          
          {/* Pillar 01: Low-level Systems */}
          <div className="p-7 rounded-2xl bg-white dark:bg-card border border-border-hairline shadow-sm hover:shadow-chromatic hover:border-cobalt/40 transition-all duration-250 space-y-4 group tech-card">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-cobalt/10 border border-cobalt/25 flex items-center justify-center text-cobalt font-mono font-bold text-sm">
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

            <p className="text-xs sm:text-sm text-muted leading-relaxed font-sans">
              Mastering pointers, structs, stack-heap dynamics, and UNIX process pipelines. Building true technical endurance from the metal upwards.
            </p>

            <div className="pt-2 flex flex-wrap gap-1.5 text-[11px] font-mono text-muted">
              <span className="px-2 py-0.5 rounded bg-subtle border border-border-hairline">Pointers</span>
              <span className="px-2 py-0.5 rounded bg-subtle border border-border-hairline">POSIX</span>
              <span className="px-2 py-0.5 rounded bg-subtle border border-border-hairline">Memory Models</span>
            </div>
          </div>

          {/* Pillar 02: Applied Intelligence */}
          <div className="p-7 rounded-2xl bg-white dark:bg-card border border-border-hairline shadow-sm hover:shadow-warm hover:border-amber-500/40 transition-all duration-250 space-y-4 group tech-card">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-600 dark:text-amber-400 font-mono font-bold text-sm">
                02
              </div>
              <Cpu className="w-5 h-5 text-amber-500/60 group-hover:text-amber-500 transition-colors" />
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-mono text-amber-600 dark:text-amber-400 uppercase tracking-widest font-bold block">
                THE ENGINE
              </span>
              <h3 className="font-serif text-xl font-bold text-ink">
                Applied AI &amp; Forensics
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-muted leading-relaxed font-sans">
              Deploying client-side OCR heuristics, Error Level Analysis (ELA), and grounded RAG models to solve practical real-world screening challenges.
            </p>

            <div className="pt-2 flex flex-wrap gap-1.5 text-[11px] font-mono text-muted">
              <span className="px-2 py-0.5 rounded bg-subtle border border-border-hairline">Tesseract OCR</span>
              <span className="px-2 py-0.5 rounded bg-subtle border border-border-hairline">ELA Analysis</span>
              <span className="px-2 py-0.5 rounded bg-subtle border border-border-hairline">FastAPI</span>
            </div>
          </div>

          {/* Pillar 03: Visual Storytelling */}
          <div className="p-7 rounded-2xl bg-white dark:bg-card border border-border-hairline shadow-sm hover:shadow-mint hover:border-mint/40 transition-all duration-250 space-y-4 group tech-card">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-mint/10 border border-mint/25 flex items-center justify-center text-mint font-mono font-bold text-sm">
                03
              </div>
              <Camera className="w-5 h-5 text-mint/60 group-hover:text-mint transition-colors" />
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-mono text-mint uppercase tracking-widest font-bold block">
                THE LENS
              </span>
              <h3 className="font-serif text-xl font-bold text-ink">
                Visual Cinematography
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-muted leading-relaxed font-sans">
              Creative photography across the Western Ghats under the identity @shiv.premi_1630. Engineering precision informed by visual sensibility.
            </p>

            <div className="pt-2 flex flex-wrap gap-1.5 text-[11px] font-mono text-muted">
              <span className="px-2 py-0.5 rounded bg-subtle border border-border-hairline">35mm Framing</span>
              <span className="px-2 py-0.5 rounded bg-subtle border border-border-hairline">Editorial Grid</span>
              <span className="px-2 py-0.5 rounded bg-subtle border border-border-hairline">Western Ghats</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
