import React from 'react';
import { motion } from 'framer-motion';

export const ManifestoChapter: React.FC = () => {
  return (
    <section 
      id="chapter-01"
      className="py-24 sm:py-36 bg-[#111215] text-[#FAF7F2] relative overflow-hidden border-b border-white/[0.1]"
    >
      {/* Background Graphic Lines */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px)', backgroundSize: '80px 100%' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Chapter Kicker */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.12] pb-6 text-xs font-mono">
          <div className="flex items-center gap-2.5 tracking-widest text-[#A4A4AF] uppercase">
            <span className="w-2.5 h-2.5 rounded-full bg-coral inline-block" />
            <span className="font-bold text-white">CHAPTER 01</span>
            <span className="text-white/40">//</span>
            <span>THE MANIFESTO</span>
          </div>
          <span className="text-[#A4A4AF] uppercase tracking-widest">
            A DIALECTIC OF CODE &amp; EXPLORATION
          </span>
        </div>

        {/* Large Typography Statement */}
        <div className="space-y-8 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-3"
          >
            <span className="text-xs font-mono text-[#FB923C] uppercase tracking-widest font-bold block">
              THE CORE PREMISE
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#FAF7F2] leading-[1.06] tracking-tight">
              Curiosity leads to exploration. <br />
              Exploration leads to learning. <br />
              <span className="italic text-[#3B82F6]">Learning becomes meaningful when something is built.</span>
            </h2>
          </motion.div>

          <p className="text-sm sm:text-lg text-[#A4A4AF] leading-relaxed max-w-3xl font-sans pt-2">
            Theoretical study builds comprehension, but real friction surfaces only when shipping applications. I combine the rapid prototyping capability of AI accelerators with deep, daily academic practice in low-level procedural C, memory mechanics, and security auditing.
          </p>
        </div>

        {/* Dialectic Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/[0.08]">
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-3">
            <span className="text-[10px] font-mono text-[#3B82F6] uppercase tracking-widest font-bold">
              01 // THE TERMINAL
            </span>
            <h3 className="font-serif text-xl font-bold text-white">
              Computational Foundations
            </h3>
            <p className="text-xs text-[#A4A4AF] leading-relaxed">
              Mastering pointer mechanics, data structures, and system complexity in C through rigorous undergraduate study.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-3">
            <span className="text-[10px] font-mono text-[#FB923C] uppercase tracking-widest font-bold">
              02 // THE ACCELERATOR
            </span>
            <h3 className="font-serif text-xl font-bold text-white">
              AI-Augmented Building
            </h3>
            <p className="text-xs text-[#A4A4AF] leading-relaxed">
              Shipping working full-stack TypeScript prototypes (FALCON-404, Arogya AI) to solve tangible human friction.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-3">
            <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold">
              03 // THE HIGHWAY
            </span>
            <h3 className="font-serif text-xl font-bold text-white">
              Visual Perspective
            </h3>
            <p className="text-xs text-[#A4A4AF] leading-relaxed">
              Observing the raw world through landscape photography and endurance motorcycling under shiv.premi_1630.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
