import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Trophy, ArrowRight, Calendar, ExternalLink } from 'lucide-react';
import { verifiedEvents } from '../../data/events';

export const CreativeExpeditionDispatch: React.FC = () => {
  // Filter events that have verified event photo assets
  const documentedEvents = verifiedEvents.filter(e => Boolean(e.eventPhotoAsset));

  return (
    <section className="space-y-10 pt-8 border-t border-border-hairline">
      {/* Chapter Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border-hairline pb-4">
        <div className="space-y-1.5 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-coral font-bold tracking-widest">
            <span className="w-2 h-2 rounded-full bg-coral inline-block" />
            <span>EXPEDITIONS &amp; FIELD DISPATCHES</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink font-normal tracking-tight">
            Documenting the road, campus, and builder arenas.
          </h2>
          <p className="text-xs sm:text-sm text-muted leading-relaxed font-sans">
            Beyond landscape photography, the camera records the places where ideas are forged: hackathon competition floors, college campuses, and long mountain ride horizons.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-[#141D35] border border-border-hairline hover:border-coral/45 text-xs font-mono font-bold text-ink hover:text-coral transition-all shadow-xs hover:shadow-warm"
          >
            <span>View All Verified Events</span>
            <ArrowRight className="w-3.5 h-3.5 text-coral" />
          </Link>
        </div>
      </div>

      {/* Grid of Verified Event Documentation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {documentedEvents.slice(0, 3).map((event) => (
          <div
            key={event.id}
            className="group rounded-2xl bg-white dark:bg-[#141D35] border border-border-hairline hover:border-coral/40 p-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              {/* Event Asset Viewport */}
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-950 border border-border-hairline">
                <img
                  src={event.eventPhotoAsset}
                  alt={`${event.name} demonstration`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  loading="lazy"
                />
                <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-black/75 backdrop-blur-xs text-[10px] font-mono text-white flex items-center gap-1.5 shadow">
                  <Trophy className="w-3 h-3 text-sunny" />
                  <span className="font-bold uppercase">{event.status}</span>
                </div>
              </div>

              {/* Event Metadata */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-[10px] font-mono text-muted">
                  <Calendar className="w-3 h-3 text-coral" />
                  <span>{event.dates || '2026'}</span>
                  <span>&bull;</span>
                  <span className="truncate max-w-[150px]">{event.role}</span>
                </div>

                <h3 className="font-serif text-lg font-bold text-ink group-hover:text-coral transition-colors line-clamp-1">
                  {event.name}
                </h3>

                <p className="text-xs text-muted font-sans line-clamp-2 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-border-hairline flex items-center justify-between text-[11px] font-mono">
              <span className="text-muted truncate max-w-[70%]">
                {event.hostInstitution}
              </span>
              <Link
                to="/events"
                className="text-coral hover:underline inline-flex items-center gap-1 font-bold shrink-0"
              >
                <span>Details</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Long-Term Motorcycle Circuit Ambition Dispatch */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#FFF5E6] via-[#FFECEA]/60 to-[#EDE5FF]/60 dark:from-[#182038] dark:via-[#141A2E] dark:to-[#101525] border border-amber-300/60 dark:border-amber-900/40 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-2 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-amber-700 dark:text-amber-400 font-bold tracking-wider">
            <Compass className="w-4 h-4" />
            <span>2027&ndash;2030 EXPEDITION PREPARATION</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-ink">
            All-India Motorcycle Circuit &bull; Documenting Every Border &amp; Pass
          </h3>

          <p className="text-xs sm:text-sm text-muted font-sans leading-relaxed">
            A long-term personal journey to complete a solo high-altitude and coastal motorcycle circuit across all states of India, capturing vertical motovlogs, dawn timelapses, and regional human narratives.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/explorations"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-ink text-white dark:bg-white dark:text-slate-900 text-xs font-mono font-bold hover:bg-coral dark:hover:bg-coral dark:hover:text-white transition-all shadow-sm active:scale-95"
          >
            <span>Read Expedition Plan</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
