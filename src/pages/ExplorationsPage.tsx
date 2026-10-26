import React from 'react';
import {
  Compass,
  Navigation,
  Info,
  CheckCircle2,
  MapPin,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';
import {
  motorcycleExpeditionVision,
  plannedRouteHighlights,
  expeditionReadiness
} from '../data/explorations';
import { fadeInUp, staggerContainer } from '../lib/motionVariants';

export const ExplorationsPage: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 relative"
    >
      {/* Ambient background glow */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-coral/10 blur-3xl pointer-events-none -z-10" />

      {/* Editorial Header */}
      <motion.div variants={fadeInUp} className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-subtle border border-border-hairline text-muted text-[11px] font-mono tracking-widest uppercase font-semibold">
          <Compass className="w-3.5 h-3.5 text-coral" />
          <span>MOTORCYCLE EXPEDITIONS &amp; DISCOVERIES</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif text-ink tracking-tight font-normal leading-[1.08]">
          Explorations, Nature &amp; The Open Road
        </h1>
        <p className="text-muted text-sm sm:text-base leading-relaxed">
          Curiosity for discovering natural landscapes, future travel ambitions across Maharashtra and India, and preparing for an ambitious long-term motorcycle circuit expedition.
        </p>
      </motion.div>

      {/* Flagship Ambition Feature: The All-India Motorcycle Circuit */}
      <motion.section
        variants={fadeInUp}
        className="p-8 sm:p-12 rounded-3xl bg-card border border-border-hairline hover:border-border-medium transition-all space-y-6 shadow-sm tech-card relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-80 h-40 bg-gradient-to-bl from-coral/10 via-sunny/5 to-transparent pointer-events-none" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative z-10">
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase text-coral tracking-widest font-bold inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-coral" />
              <span>Long-Term Personal Ambition</span>
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-ink tracking-tight">
              {motorcycleExpeditionVision.title}
            </h2>
          </div>
          <div className="px-3.5 py-1.5 rounded-full bg-coral/15 border border-coral/30 text-coral text-xs font-mono font-semibold self-start sm:self-center">
            Future Expedition Goal
          </div>
        </div>

        <p className="text-xs sm:text-base text-muted leading-relaxed max-w-3xl relative z-10">
          {motorcycleExpeditionVision.ambitionNote}
        </p>

        {/* Philosophy quote */}
        <div className="p-5 rounded-2xl bg-subtle border border-border-hairline italic text-xs sm:text-sm text-ink font-serif leading-relaxed relative z-10">
          &ldquo;{motorcycleExpeditionVision.philosophy}&rdquo;
        </div>

        {/* India Geographic Circuit Highlights */}
        <div className="space-y-3 pt-4 border-t border-border-hairline relative z-10">
          <h3 className="text-xs font-mono uppercase text-muted font-bold tracking-wider flex items-center gap-1.5">
            <Navigation className="w-4 h-4 text-cobalt" />
            <span>Target Route Corridors &amp; Terrains</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {plannedRouteHighlights.map((route) => (
              <div
                key={route.id}
                className="p-4 rounded-xl bg-subtle border border-border-hairline hover:border-border-medium transition-colors space-y-1"
              >
                <div className="flex items-center gap-1.5 text-ink font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-coral shrink-0" />
                  <span>{route.name}</span>
                </div>
                <div className="text-[10px] font-mono text-cobalt">{route.region}</div>
                <p className="text-[11px] text-muted">{route.significance}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Preparation & Readiness Steps */}
        <div className="space-y-3 pt-4 border-t border-border-hairline relative z-10">
          <h3 className="text-xs font-mono uppercase text-muted font-bold tracking-wider">
            Disciplined Preparation &amp; Progressive Readiness
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {expeditionReadiness.map((step, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-subtle border border-border-hairline">
                <CheckCircle2 className="w-4 h-4 text-mint shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-ink">{step.title}</span>
                    <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-card text-muted border border-border-hairline">
                      {step.status}
                    </span>
                  </div>
                  <p className="leading-relaxed text-muted text-[11px]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </motion.section>

      {/* Honest Scope Note */}
      <motion.div
        variants={fadeInUp}
        className="p-5 rounded-2xl bg-subtle border border-border-hairline flex items-start gap-3.5 text-xs text-muted"
      >
        <Info className="w-4 h-4 text-cobalt shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="font-semibold text-ink block font-mono text-[11px] uppercase tracking-wide">
            Integrity Disclosure
          </span>
          <p className="leading-relaxed">
            The All-India motorcycle circuit is an aspirational long-term vision being methodically trained for across college semesters. No premature claims of completed world records or completed national circuits are made.
          </p>
        </div>
      </motion.div>

    </motion.div>
  );
};
