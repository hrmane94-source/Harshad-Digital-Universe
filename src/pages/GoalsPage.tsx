import React from 'react';
import {
  Target,
  Calendar
} from 'lucide-react';
import { verifiedGoals } from '../data/goals';

export const GoalsPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

      {/* Editorial Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-subtle border border-black/[0.08] dark:border-white/[0.08] text-muted text-[11px] font-mono tracking-widest uppercase font-semibold">
          <Target className="w-3.5 h-3.5 text-cobalt" />
          <span>LONG-TERM VISION &amp; ASPIRATIONS</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif text-ink tracking-tight font-normal leading-[1.08]">
          Personal &amp; Professional Goals
        </h1>
        <p className="text-muted text-sm sm:text-base leading-relaxed">
          Tangible developmental objectives spanning academic engineering, defensive cybersecurity, campus leadership, visual creativity, and lifelong service.
        </p>
      </div>

      {/* Goals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {verifiedGoals.map((goal) => (
          <article
            key={goal.id}
            className="p-8 rounded-3xl bg-surface border border-black/[0.08] dark:border-white/[0.1] space-y-4 hover:border-black/[0.2] dark:hover:border-white/[0.2] transition-colors flex flex-col justify-between shadow-xs"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-cobalt uppercase tracking-widest font-bold">
                  {goal.category}
                </span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-subtle text-muted border border-black/[0.06] dark:border-white/[0.08] flex items-center gap-1 font-semibold">
                  <Calendar className="w-3 h-3 text-coral" />
                  <span>{goal.targetDate}</span>
                </span>
              </div>

              <h2 className="font-serif text-2xl font-bold text-ink tracking-tight">
                {goal.title}
              </h2>

              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                {goal.description}
              </p>
            </div>

            <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between text-[11px] font-mono">
              <span className="text-muted">Target Horizon</span>
              <span className="text-ink font-semibold uppercase">{goal.status}</span>
            </div>
          </article>
        ))}
      </div>

    </div>
  );
};
