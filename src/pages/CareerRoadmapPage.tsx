import React from 'react';
import {
  Route
} from 'lucide-react';
import {
  careerRoadmapVision,
  learningPriorityStages,
  careerMilestones
} from '../data/careerRoadmap';

export const CareerRoadmapPage: React.FC = () => {
  const getStageStatusBadge = (status: string) => {
    switch (status) {
      case 'learning':
        return 'bg-cobalt/10 text-cobalt border-cobalt/20 font-bold';
      case 'practising':
        return 'bg-coral/10 text-coral border-coral/20 font-semibold';
      case 'building':
        return 'bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20 font-semibold';
      case 'proficient':
        return 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20 font-bold';
      case 'completed':
        return 'bg-subtle text-muted border-black/[0.06] dark:border-white/[0.08]';
      default:
        return 'bg-subtle text-muted border-black/[0.06] dark:border-white/[0.08]';
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

      {/* Editorial Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-subtle border border-black/[0.08] dark:border-white/[0.08] text-muted text-[11px] font-mono tracking-widest uppercase font-semibold">
          <Route className="w-3.5 h-3.5 text-cobalt" />
          <span>FOUR-YEAR ENGINEERING ROADMAP &amp; DEVSECOPS VISION</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif text-ink tracking-tight font-normal leading-[1.08]">
          Career Direction &amp; Progression
        </h1>
        <p className="text-muted text-sm sm:text-base leading-relaxed">
          Targeting high-impact specialization in Cybersecurity and DevSecOps by 2030, anchored in disciplined programming foundations, practical machine learning, and secure cloud delivery.
        </p>
      </div>

      {/* Vision 2030 Banner */}
      <section className="p-8 sm:p-10 rounded-3xl bg-surface border border-black/[0.08] dark:border-white/[0.1] space-y-4 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs font-mono uppercase text-cobalt tracking-wider font-bold">
            Primary Target Direction: {careerRoadmapVision.primaryDirection}
          </span>
          <span className="text-xs font-mono text-muted">
            {careerRoadmapVision.currentAcademicPhase}
          </span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-ink tracking-tight">
          The 2030 Engineering Vision
        </h2>

        <p className="text-xs sm:text-base text-muted leading-relaxed max-w-4xl">
          {careerRoadmapVision.vision2030}
        </p>

        <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.08] flex flex-wrap items-center gap-2 text-xs font-mono">
          <span className="text-muted">Secondary Fields of Exploration:</span>
          {careerRoadmapVision.secondaryInterests.map((interest, i) => (
            <span key={i} className="text-ink bg-subtle px-2.5 py-0.5 rounded-md border border-black/[0.06] dark:border-white/[0.08]">
              {interest}
            </span>
          ))}
        </div>
      </section>

      {/* 4-Year Academic Progression */}
      <section className="space-y-6">
        <div className="space-y-1 pb-4 border-b border-black/[0.08] dark:border-white/[0.08]">
          <span className="text-[11px] font-mono uppercase tracking-widest text-muted font-semibold">
            DEVELOPMENTAL MILESTONES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink tracking-tight">
            Four-Year Undergraduate Progression (2026 – 2030)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {careerMilestones.map((m) => (
            <div
              key={m.year}
              className="p-6 sm:p-8 rounded-2xl bg-surface border border-black/[0.08] dark:border-white/[0.1] space-y-3.5 shadow-xs"
            >
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="px-3 py-1 rounded-full bg-subtle text-ink font-bold border border-black/[0.06] dark:border-white/[0.08]">
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

              <div className="pt-2 border-t border-black/[0.06] dark:border-white/[0.08] flex flex-wrap gap-1.5">
                {m.focusAreas.map((f, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-subtle text-muted border border-black/[0.04] dark:border-white/[0.06]"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Active Study Tracks */}
      <section className="space-y-6">
        <div className="space-y-1 pb-4 border-b border-black/[0.08] dark:border-white/[0.08]">
          <span className="text-[11px] font-mono uppercase tracking-widest text-muted font-semibold">
            LEARNING DISCIPLINE MATRIX
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink tracking-tight">
            Active Study Tracks &amp; Weekly Targets
          </h2>
        </div>

        <div className="space-y-4">
          {learningPriorityStages.map((stage) => (
            <div
              key={stage.id}
              className="p-6 sm:p-8 rounded-2xl bg-surface border border-black/[0.08] dark:border-white/[0.1] flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xs"
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

              <div className="p-4 rounded-xl bg-subtle border border-black/[0.04] dark:border-white/[0.06] text-xs font-mono shrink-0 space-y-1 md:text-right">
                <span className="text-muted block text-[10px] uppercase">Target Phase</span>
                <span className="text-ink font-semibold">{stage.plannedPhase}</span>
                <span className="text-faint text-[10px] block truncate max-w-xs">{stage.targetResources[0]}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
