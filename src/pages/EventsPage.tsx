import React from 'react';
import {
  Calendar,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { verifiedEvents } from '../data/events';

export const EventsPage: React.FC = () => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Runner-up':
        return 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20 font-bold';
      case 'Online selection pending':
        return 'bg-cobalt/10 text-cobalt border-cobalt/20 font-semibold';
      case 'Demonstrated':
        return 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20';
      case 'Participated':
        return 'bg-black/[0.04] dark:bg-white/[0.06] text-muted border-black/[0.06] dark:border-white/[0.08]';
      default:
        return 'bg-subtle text-muted border-black/[0.06] dark:border-white/[0.08]';
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

      {/* Editorial Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-subtle border border-black/[0.08] dark:border-white/[0.08] text-muted text-[11px] font-mono tracking-widest uppercase font-semibold">
          <Calendar className="w-3.5 h-3.5 text-cobalt" />
          <span>COMPETITIONS &amp; SYMPOSIUMS</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif text-ink tracking-tight font-normal leading-[1.08]">
          Events &amp; Hackathons
        </h1>
        <p className="text-muted text-sm sm:text-base leading-relaxed">
          Comprehensive record of competitive hackathons, innovation challenges, entrepreneurial expos, and institutional symposiums with verified evaluation statuses.
        </p>
      </div>

      {/* Events List */}
      <div className="space-y-8">
        {verifiedEvents.map((evt) => (
          <article
            key={evt.id}
            className="p-8 sm:p-10 rounded-3xl bg-surface border border-black/[0.08] dark:border-white/[0.1] space-y-5 hover:border-black/[0.2] dark:hover:border-white/[0.2] transition-colors shadow-xs"
          >
            {/* Header row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[11px] font-mono text-cobalt uppercase tracking-widest font-bold block mb-1">
                  {evt.hostInstitution}
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ink tracking-tight">
                  {evt.name}
                </h2>
                {evt.dates && (
                  <p className="text-xs text-muted font-mono mt-0.5 flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-coral" />
                    <span>{evt.dates}</span>
                  </p>
                )}
              </div>

              <div className="self-start sm:self-center">
                <span className={`px-3 py-1 rounded-full text-xs font-mono border ${getStatusBadge(evt.status)}`}>
                  Status: {evt.status}
                </span>
              </div>
            </div>

            {/* Role & Project */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono p-4 rounded-xl bg-subtle border border-black/[0.04] dark:border-white/[0.06]">
              <div>
                <span className="text-muted block text-[10px] uppercase tracking-wider mb-0.5">Role</span>
                <span className="text-ink font-semibold">{evt.role}</span>
              </div>
              {evt.projectPresented && (
                <div>
                  <span className="text-muted block text-[10px] uppercase tracking-wider mb-0.5">Project Presented</span>
                  <span className="text-cobalt font-semibold">{evt.projectPresented}</span>
                </div>
              )}
            </div>

            {/* Event Photo / Presented Dashboard Asset */}
            {evt.eventPhotoAsset && (
              <div className="rounded-2xl overflow-hidden border border-black/[0.08] dark:border-white/[0.1] bg-slate-950 shadow-md">
                <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-rose-500/80" />
                      <div className="w-2 h-2 rounded-full bg-amber-500/80" />
                      <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
                    </div>
                    <span>{evt.projectPresented ? `Presented Artifact: ${evt.projectPresented}` : 'Event Artifact'}</span>
                  </div>
                  <span className="text-emerald-400 text-[10px] flex items-center gap-1 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Verified Exhibition Asset
                  </span>
                </div>
                <div className="p-2 sm:p-4 bg-slate-950 flex items-center justify-center">
                  <img
                    src={evt.eventPhotoAsset}
                    alt={evt.name}
                    className="w-full max-h-[360px] object-contain rounded-lg"
                    loading="lazy"
                  />
                </div>
              </div>
            )}

            {/* Description */}
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              {evt.description}
            </p>

            {/* Highlights */}
            {evt.highlights && evt.highlights.length > 0 && (
              <div className="space-y-2 pt-2 border-t border-black/[0.06] dark:border-white/[0.08]">
                <span className="text-[11px] font-mono uppercase tracking-wider text-muted block">
                  Event Highlights &amp; Scope
                </span>
                <ul className="space-y-1.5 text-xs text-ink/90">
                  {evt.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cobalt shrink-0 mt-0.5" />
                      <span>{h}</span>
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
