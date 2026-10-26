import React from 'react';
import { Target, Calendar, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { verifiedGoals } from '../data/goals';
import { fadeInUp, staggerContainer, staggerItem } from '../lib/motionVariants';

export const GoalsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F4F1FF] via-[#EDE5FF]/50 to-[#EAF3FF] dark:from-paper dark:via-paper dark:to-paper transition-colors duration-250">
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 relative"
    >
      {/* Ambient background glow */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-violet/10 blur-3xl pointer-events-none -z-10" />

      {/* Editorial Header */}
      <motion.div variants={fadeInUp} className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-subtle border border-border-hairline text-muted text-[11px] font-mono tracking-widest uppercase font-semibold">
          <Target className="w-3.5 h-3.5 text-cobalt" />
          <span>LONG-TERM VISION &amp; ASPIRATIONS</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif text-ink tracking-tight font-normal leading-[1.08]">
          Personal &amp; Professional Goals
        </h1>
        <p className="text-muted text-sm sm:text-base leading-relaxed">
          Tangible developmental objectives spanning academic engineering, defensive cybersecurity, campus leadership, visual creativity, and lifelong service.
        </p>
      </motion.div>

      {/* Goals Grid */}
      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {verifiedGoals.map((goal) => (
          <motion.article
            key={goal.id}
            variants={staggerItem}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="p-8 rounded-3xl bg-white dark:bg-card border border-border-hairline hover:border-cobalt/40 transition-all flex flex-col justify-between shadow-xs hover:shadow-chromatic tech-card relative overflow-hidden group"
          >
            <div className="space-y-3 relative z-10">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-cobalt uppercase tracking-widest font-bold">
                  {goal.category}
                </span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-subtle text-muted border border-border-hairline flex items-center gap-1 font-semibold">
                  <Calendar className="w-3 h-3 text-coral" />
                  <span>{goal.targetDate}</span>
                </span>
              </div>

              <h2 className="font-serif text-2xl font-bold text-ink tracking-tight group-hover:text-cobalt transition-colors">
                {goal.title}
              </h2>

              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                {goal.description}
              </p>
            </div>

            <div className="pt-4 border-t border-border-hairline flex items-center justify-between text-[11px] font-mono relative z-10">
              <span className="text-muted flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-mint" />
                <span>Target Horizon</span>
              </span>
              <span className="text-ink font-semibold uppercase px-2 py-0.5 rounded bg-subtle border border-border-hairline">
                {goal.status}
              </span>
            </div>
          </motion.article>
        ))}
      </motion.div>

    </motion.div>
    </div>
  );
};
