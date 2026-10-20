import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ExternalLink, 
  AlertCircle
} from 'lucide-react';
import { verifiedProjects } from '../../data/projects';
import { ProjectCoverArtwork } from '../ui/ProjectCoverArtwork';

export const ProjectExhibitionChapter: React.FC = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const activeProject = verifiedProjects[activeProjectIndex] || verifiedProjects[0];

  return (
    <section 
      id="chapter-02"
      className="py-20 sm:py-32 border-b border-black/[0.08] dark:border-white/[0.08] bg-surface relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Chapter Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-black/[0.08] dark:border-white/[0.08] pb-6">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cobalt uppercase font-bold">
              <span className="w-2 h-2 rounded-full bg-cobalt inline-block" />
              <span>CHAPTER 02 // THE PROJECT EXHIBITION</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink tracking-tight">
              Ideas are interesting. Building them is better.
            </h2>
            <p className="text-xs sm:text-sm text-muted font-sans max-w-xl">
              An interactive exhibition of seven verified engineering prototypes, hackathon solutions, and competition systems.
            </p>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-subtle border border-black/[0.08] dark:border-white/[0.1] text-xs font-mono font-semibold text-ink hover:text-cobalt transition-colors"
          >
            <span>View Complete Project Directory</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Project Selector Navigation Strip */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {verifiedProjects.map((proj, idx) => (
            <button
              key={proj.id}
              type="button"
              onClick={() => setActiveProjectIndex(idx)}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono shrink-0 transition-all cursor-pointer flex items-center gap-2 ${
                activeProjectIndex === idx
                  ? 'bg-ink text-paper font-semibold shadow-xs'
                  : 'bg-subtle text-muted hover:text-ink border border-black/[0.06] dark:border-white/[0.08]'
              }`}
            >
              <span className="text-[10px] opacity-70">0{idx + 1}</span>
              <span>{proj.displayTitle}</span>
              {proj.importance === 'flagship' && (
                <span className="w-1.5 h-1.5 rounded-full bg-cobalt" />
              )}
            </button>
          ))}
        </div>

        {/* Main Exhibition Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column (5 Cols): Artwork & Metadata Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-3xl border border-black/[0.08] dark:border-white/[0.1] bg-paper overflow-hidden shadow-sm">
              <ProjectCoverArtwork 
                coverArtwork={activeProject.coverArtwork}
                title={activeProject.displayTitle}
                domain={activeProject.domain}
                importance={activeProject.importance}
                className="w-full"
              />
            </div>

            {/* Micro Details Box */}
            <div className="p-5 rounded-2xl bg-subtle border border-black/[0.06] dark:border-white/[0.08] space-y-3 text-xs font-mono">
              <div className="flex items-center justify-between text-muted">
                <span className="uppercase">Project Number</span>
                <span className="font-bold text-ink text-sm">0{activeProjectIndex + 1} / 07</span>
              </div>
              <div className="flex items-center justify-between text-muted">
                <span className="uppercase">Domain</span>
                <span className="text-ink font-semibold">{activeProject.domain}</span>
              </div>
              <div className="flex items-center justify-between text-muted">
                <span className="uppercase">Confirmed Role</span>
                <span className="text-cobalt font-semibold">{activeProject.role}</span>
              </div>
              <div className="flex items-center justify-between text-muted">
                <span className="uppercase">Status</span>
                <span className="text-ink capitalize">{activeProject.status}</span>
              </div>
            </div>
          </div>

          {/* Right Column (7 Cols): Deep Case Study Narrative */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                {/* Header Information */}
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                    <span className="px-2.5 py-0.5 rounded-full bg-subtle border border-black/[0.08] dark:border-white/[0.08] text-muted">
                      {activeProject.domain}
                    </span>
                    {activeProject.importance === 'flagship' && (
                      <span className="px-2.5 py-0.5 rounded-full bg-cobalt text-white font-bold uppercase tracking-wider text-[10px]">
                        ★ FLAGSHIP CASE STUDY
                      </span>
                    )}
                  </div>
                  
                  <h3 className="font-serif text-3xl sm:text-5xl font-bold text-ink tracking-tight">
                    {activeProject.displayTitle}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-muted font-sans leading-relaxed">
                    {activeProject.tagline}
                  </p>
                </div>

                {/* Problem vs Solution Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-subtle/70 border border-black/[0.06] dark:border-white/[0.08] space-y-1.5 text-xs">
                    <span className="text-[10px] font-mono uppercase text-muted font-bold block">
                      Problem Addressed
                    </span>
                    <p className="text-ink/90 leading-relaxed font-sans">
                      {activeProject.problem}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-subtle/70 border border-black/[0.06] dark:border-white/[0.08] space-y-1.5 text-xs">
                    <span className="text-[10px] font-mono uppercase text-cobalt font-bold block">
                      Technical Solution
                    </span>
                    <p className="text-ink/90 leading-relaxed font-sans">
                      {activeProject.solution}
                    </p>
                  </div>
                </div>

                {/* Individual Contribution */}
                <div className="p-4 rounded-2xl bg-surface border border-black/[0.08] dark:border-white/[0.1] space-y-1 text-xs">
                  <span className="text-[10px] font-mono uppercase text-coral font-bold block">
                    Harshad&apos;s Confirmed Project Role &amp; Context
                  </span>
                  <p className="text-ink leading-relaxed font-sans font-medium">
                    {activeProject.role}
                    {activeProject.teamContext && (
                      <span className="text-muted block pt-1 font-normal">
                        {activeProject.teamContext}
                      </span>
                    )}
                  </p>
                </div>

                {/* Limitations & Integrity Notice */}
                {activeProject.limitations.length > 0 && (
                  <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-1.5 text-xs">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-amber-800 dark:text-amber-400 font-bold">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>Verified Scope &amp; Limitations</span>
                    </div>
                    <ul className="text-muted space-y-1 font-sans">
                      {activeProject.limitations.map((lim, lIdx) => (
                        <li key={lIdx}>&bull; {lim}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack Pills */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase text-muted font-bold block">
                    Technologies Deployed
                  </span>
                  <div className="flex flex-wrap gap-1.5 text-xs font-mono">
                    {activeProject.technologies.map((t, idx) => (
                      <span 
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-subtle border border-black/[0.06] dark:border-white/[0.08] text-ink"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-black/[0.08] dark:border-white/[0.1] flex flex-wrap items-center gap-4">
                  <Link
                    to={`/projects/${activeProject.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-ink text-paper text-xs font-mono font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity shadow-xs"
                  >
                    <span>Read Architectural Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  {activeProject.links.repositoryUrl && (
                    <a
                      href={activeProject.links.repositoryUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-subtle border border-black/[0.08] dark:border-white/[0.1] text-xs font-mono font-medium text-ink hover:text-cobalt transition-colors"
                    >
                      <span>GitHub Source</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
