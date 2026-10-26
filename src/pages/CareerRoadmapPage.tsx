import React from 'react';
import { Route, Sparkles, Compass } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  careerRoadmapVision,
  learningPriorityStages,
  careerMilestones
} from '../data/careerRoadmap';
import { fadeInUp, staggerContainer, staggerItem, defaultViewport } from '../lib/motionVariants';

export const CareerRoadmapPage: React.FC = () => {
  const getStageStatusBadge = (status: string) => {
    switch (status) {
      case 'learning':
        return 'bg-cobalt/15 text-cobalt border-cobalt/30 font-bold';
      case 'practising':
        return 'bg-coral/15 text-coral border-coral/30 font-semibold';
      case 'building':
        return 'bg-violet/15 text-violet border-violet/30 font-semibold';
      case 'proficient':
        return 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30 font-bold';
      case 'completed':
        return 'bg-subtle text-muted border-border-hairline';
      default:
        return 'bg-subtle text-muted border-border-hairline';
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 relative"
    >
      {/* Ambient background glow */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-cobalt/10 blur-3xl pointer-events-none -z-10" />

      {/* Editorial Header */}
      <motion.div variants={fadeInUp} className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-subtle border border-border-hairline text-muted text-[11px] font-mono tracking-widest uppercase font-semibold">
          <Route className="w-3.5 h-3.5 text-cobalt" />
          <span>FOUR-YEAR ENGINEERING ROADMAP &amp; DEVSECOPS VISION</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif text-ink tracking-tight font-normal leading-[1.08]">
          Career Direction &amp; Progression
        </h1>
        <p className="text-muted text-sm sm:text-base leading-relaxed">
          Targeting high-impact specialization in Cybersecurity and DevSecOps by 2030, anchored in disciplined programming foundations, practical machine learning, and secure cloud delivery.
        </p>
      </motion.div>

      {/* Vision 2030 Banner */}
      <motion.section
        variants={fadeInUp}
        className="p-8 sm:p-10 rounded-3xl bg-card border border-border-hairline hover:border-border-medium transition-all space-y-4 shadow-sm relative overflow-hidden tech-card"
      >
        <div className="absolute top-0 right-0 w-80 h-40 bg-gradient-to-bl from-cobalt/10 via-violet/5 to-transparent pointer-events-none" />
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs font-mono uppercase text-cobalt tracking-wider font-bold inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cobalt" />
            <span>Primary Target Direction: {careerRoadmapVision.primaryDirection}</span>
          </span>
          <span className="text-xs font-mono text-muted px-2.5 py-1 rounded-full bg-subtle border border-border-hairline">
            {careerRoadmapVision.currentAcademicPhase}
          </span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-ink tracking-tight">
          The 2030 Engineering Vision
        </h2>

        <p className="text-xs sm:text-base text-muted leading-relaxed max-w-4xl">
          {careerRoadmapVision.vision2030}
        </p>

        <div className="pt-4 border-t border-border-hairline flex flex-wrap items-center gap-2 text-xs font-mono">
          <span className="text-muted flex items-center gap-1">
            <Compass className="w-3.5 h-3.5 text-muted" />
            <span>Secondary Fields of Exploration:</span>
          </span>
          {careerRoadmapVision.secondaryInterests.map((interest, i) => (
            <span key={i} className="text-ink bg-subtle px-2.5 py-0.5 rounded-md border border-border-hairline">
              {interest}
            </span>
          ))}
        </div>
      </motion.section>

      {/* 4-Year Academic Progression */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={defaultViewport}
        variants={staggerContainer}
        className="space-y-6"
      >
        <div className="space-y-1 pb-4 border-b border-border-hairline">
          <span className="text-[11px] font-mono uppercase tracking-widest text-muted font-semibold">
            DEVELOPMENTAL MILESTONES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink tracking-tight">
            Four-Year Undergraduate Progression (2026 – 2030)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {careerMilestones.map((m) => (
            <motion.div
              key={m.year}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="p-6 sm:p-8 rounded-2xl bg-card border border-border-hairline hover:border-border-medium transition-all space-y-3.5 shadow-sm tech-card"
            >
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="px-3 py-1 rounded-full bg-subtle text-ink font-bold border border-border-hairline">
                  {m.year}
                </span>
                <span className="text-cobalt font-semibold capitalize">{m.status}</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-ink tracking-tight">
                {m.title}
              </h3>
              <div className="text-[11px] font-mono text-coral font-medium uppercase">
                {m.phase}
              </div>
              <p className="text-xs text-muted leading-relaxed">
                {m.description}
              </p>

              <div className="pt-2 border-t border-border-hairline flex flex-wrap gap-1.5">
                {m.focusAreas.map((f, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-subtle text-muted border border-border-hairline"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Active Study Tracks */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={defaultViewport}
        variants={staggerContainer}
        className="space-y-6"
      >
        <div className="space-y-1 pb-4 border-b border-border-hairline">
          <span className="text-[11px] font-mono uppercase tracking-widest text-muted font-semibold">
            LEARNING DISCIPLINE MATRIX
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink tracking-tight">
            Active Study Tracks &amp; Weekly Targets
          </h2>
        </div>

        <div className="space-y-4">
          {learningPriorityStages.map((stage) => (
            <motion.div
              key={stage.id}
              variants={staggerItem}
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
              className="p-6 sm:p-8 rounded-2xl bg-card border border-border-hairline hover:border-border-medium transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm tech-card"
            >
              <div className="space-y-1.5 max-w-xl">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-muted uppercase tracking-wider">{stage.focus}</span>
                  <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full border ${getStageStatusBadge(stage.status)}`}>
                    {stage.status}
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink tracking-tight">
                  {stage.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {stage.description}
                </p>
                <div className="pt-1 text-[11px] font-mono text-cobalt">
                  <strong>Key Topics:</strong> {stage.topics.slice(0, 3).join(' • ')}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-subtle border border-border-hairline text-xs font-mono shrink-0 space-y-1 md:text-right">
                <span className="text-muted block text-[10px] uppercase">Target Phase</span>
                <span className="text-ink font-semibold">{stage.plannedPhase}</span>
                <span className="text-faint text-[10px] block truncate max-w-xs">{stage.targetResources[0]}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

    </motion.div>
  );
};
