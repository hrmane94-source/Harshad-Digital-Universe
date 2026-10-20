import React from 'react';
import { 
  Calendar, 
  CheckCircle2
} from 'lucide-react';
import { verifiedEvents } from '../data/events';

export const EventsPage: React.FC = () => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Runner-up':
        return 'bg-amber-950 text-amber-300 border-amber-700';
      case 'Online selection pending':
        return 'bg-cyan-950 text-cyan-300 border-cyan-700 animate-pulse';
      case 'Demonstrated':
        return 'bg-blue-950 text-blue-300 border-blue-700';
      case 'Participated':
        return 'bg-slate-800 text-slate-300 border-slate-700';
      default:
        return 'bg-slate-900 text-slate-400 border-slate-800';
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-300 text-xs font-mono">
          <Calendar className="w-3.5 h-3.5" />
          <span>COMPETITIONS &amp; SYMPOSIUMS</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
          Events &amp; Hackathon Participation
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Comprehensive record of competitive hackathons, innovation challenges, entrepreneurial expos, and institutional symposiums with verified evaluation statuses.
        </p>
      </div>

      {/* Events List */}
      <div className="space-y-8">
        {verifiedEvents.map((evt) => (
          <article
            key={evt.id}
            className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-5 hover:border-slate-700 transition-all"
          >
            {/* Header row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold block mb-1">
                  {evt.hostInstitution}
                </span>
                <h2 className="text-2xl font-heading font-bold text-white">
                  {evt.name}
                </h2>
                {evt.dates && (
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    {evt.dates}
                  </p>
                )}
              </div>

              <div className="self-start sm:self-center">
                <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold border ${getStatusBadge(evt.status)}`}>
                  Status: {evt.status}
                </span>
              </div>
            </div>

            {/* Role & Project Presented */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
              <div>
                <span className="text-slate-400 block mb-0.5">Role / Participation Context</span>
                <span className="text-white font-medium">{evt.role}</span>
              </div>
              {evt.projectPresented && (
                <div>
                  <span className="text-slate-400 block mb-0.5">Project Presented</span>
                  <span className="text-cyan-300 font-medium">{evt.projectPresented}</span>
                </div>
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-slate-300 leading-relaxed">
              {evt.description}
            </p>

            {/* Highlights */}
            {evt.highlights && evt.highlights.length > 0 && (
              <div className="space-y-2 pt-2 border-t border-slate-800/80">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                  Event Highlights &amp; Scope:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {evt.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </article>
        ))}
      </div>

    </div>
  );
};
