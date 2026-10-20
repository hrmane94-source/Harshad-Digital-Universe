import React from 'react';
import { 
  Compass, 
  Navigation, 
  Info
} from 'lucide-react';
import { 
  motorcycleExpeditionVision, 
  plannedRouteHighlights, 
  expeditionReadiness 
} from '../data/explorations';

export const ExplorationsPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-xs font-mono">
          <Compass className="w-3.5 h-3.5" />
          <span>MOTORCYCLE EXPEDITIONS &amp; DISCOVERIES</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
          Explorations, Nature &amp; The Open Road
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Curiosity for discovering natural landscapes, future travel ambitions across Maharashtra and India, and preparing for an ambitious long-term motorcycle circuit expedition.
        </p>
      </div>

      {/* Flagship Ambition Feature: The All-India Motorcycle Circuit */}
      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-emerald-950/30 via-slate-900 to-slate-950 border border-emerald-500/30 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase text-emerald-400 tracking-wider font-semibold">
              Long-Term Personal Ambition
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white">
              {motorcycleExpeditionVision.title}
            </h2>
          </div>
          <div className="px-4 py-1.5 rounded-full bg-emerald-950 border border-emerald-700 text-emerald-300 text-xs font-mono font-semibold self-start sm:self-center">
            Future Expedition Goal
          </div>
        </div>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
          {motorcycleExpeditionVision.ambitionNote}
        </p>

        {/* Philosophy quote */}
        <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 italic text-xs text-slate-300">
          &ldquo;{motorcycleExpeditionVision.philosophy}&rdquo;
        </div>

        {/* India Geographic Circuit Highlights */}
        <div className="space-y-3 pt-4 border-t border-slate-800">
          <h3 className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider flex items-center gap-1.5">
            <Navigation className="w-4 h-4 text-emerald-400" />
            <span>Target Route Corridors &amp; Terrains</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {plannedRouteHighlights.map((dest) => (
              <div key={dest.id} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                <span className="text-xs font-mono text-emerald-400 font-bold block">{dest.region}</span>
                <h4 className="text-sm font-semibold text-white">{dest.name}</h4>
                <p className="text-[11px] text-slate-400 leading-normal">{dest.significance}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preparation & Readiness Milestones */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase text-emerald-400 tracking-wider font-semibold">
            Preparation Matrix
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
            Expedition Conditioning &amp; Research Milestones
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {expeditionReadiness.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400 uppercase">{item.category}</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                  {item.status}
                </span>
              </div>
              <h3 className="text-base font-heading font-bold text-white">{item.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Exploration Integrity Disclosure */}
      <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5 text-xs text-slate-300">
        <Info className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="font-semibold text-white block">Verification Transparency</span>
          <p className="leading-relaxed text-slate-400">
            No completed nationwide records, fabricated sponsors, or completed kilometres are claimed. This expedition represents an earnest long-term personal ambition, athletic conditioning goal, and creative documentary project.
          </p>
        </div>
      </div>

    </div>
  );
};
