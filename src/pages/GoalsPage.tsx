import React from 'react';
import { 
  Target, 
  Calendar 
} from 'lucide-react';
import { verifiedGoals } from '../data/goals';

export const GoalsPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-300 text-xs font-mono">
          <Target className="w-3.5 h-3.5" />
          <span>LONG-TERM VISION &amp; ASPIRATIONS</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
          Personal &amp; Professional Goals
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Tangible developmental objectives spanning academic engineering, defensive cybersecurity, campus leadership, visual creativity, and lifelong service.
        </p>
      </div>

      {/* Goals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {verifiedGoals.map((goal) => (
          <article
            key={goal.id}
            className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4 hover:border-slate-700 transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                  {goal.category}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-950 text-slate-300 border border-slate-800 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-cyan-400" />
                  <span>{goal.targetDate}</span>
                </span>
              </div>

              <h2 className="text-xl font-heading font-bold text-white tracking-tight">
                {goal.title}
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {goal.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">Status: Active Pursuit</span>
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            </div>
          </article>
        ))}
      </div>

    </div>
  );
};
