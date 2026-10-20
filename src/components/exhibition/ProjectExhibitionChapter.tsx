import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { 
  ArrowRight, 
  ExternalLink, 
  AlertCircle
} from 'lucide-react';
import { verifiedProjects } from '../../data/projects';
import { ProjectCoverArtwork } from '../ui/ProjectCoverArtwork';

export const ProjectExhibitionChapter: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Divide scroll into 7 equal slices for the 7 projects
      const index = Math.min(
        verifiedProjects.length - 1,
        Math.floor(latest * verifiedProjects.length)
      );
      setActiveProjectIndex(index);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const activeProject = verifiedProjects[activeProjectIndex] || verifiedProjects[0];

  const handleJumpToProject = (idx: number) => {
    setActiveProjectIndex(idx);
    if (!containerRef.current) return;

    const containerTop = containerRef.current.offsetTop;
    const containerHeight = containerRef.current.offsetHeight;
    const targetScroll = containerTop + (idx / verifiedProjects.length) * (containerHeight - window.innerHeight);

    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  };

  return (
    <section 
      id="chapter-02"
      className="border-b border-black/[0.08] dark:border-white/[0.08] bg-surface relative"
    >
      {/* ============================================================
          DESKTOP SCROLL-DRIVEN STICKY EXHIBITION (lg:block)
          ============================================================ */}
      <div 
        ref={containerRef}
        className="hidden lg:block relative min-h-[420vh]"
      >
        <div className="sticky top-20 h-[calc(100vh-5rem)] flex flex-col justify-between py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
          
          {/* Top Folio Header Bar */}
          <div className="flex items-end justify-between border-b border-black/[0.08] dark:border-white/[0.08] pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cobalt uppercase font-bold">
                <span className="w-2 h-2 rounded-full bg-cobalt inline-block animate-pulse" />
                <span>CHAPTER 02 // SCROLL-DRIVEN PROJECT EXHIBITION</span>
              </div>
              <h2 className="font-serif text-3xl xl:text-4xl font-bold text-ink tracking-tight">
                Ideas are interesting. Building them is better.
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xs font-mono text-muted">
                SCROLL TO ADVANCE: <strong className="text-ink">0{activeProjectIndex + 1} / 07</strong>
              </span>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-subtle border border-black/[0.08] dark:border-white/[0.1] text-xs font-mono font-semibold text-ink hover:text-cobalt transition-colors"
              >
                <span>Full Directory</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Interactive Project Jump Strip */}
          <div className="flex items-center gap-2 py-3">
            {verifiedProjects.map((proj, idx) => (
              <button
                key={proj.id}
                type="button"
                onClick={() => handleJumpToProject(idx)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono shrink-0 transition-all cursor-pointer flex items-center gap-2 ${
                  activeProjectIndex === idx
                    ? 'bg-ink text-paper font-semibold shadow-xs scale-105'
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

          {/* Main Stage Canvas with Animated Transition */}
          <div className="flex-1 grid grid-cols-12 gap-8 items-center min-h-0 py-2">
            
            {/* Left 5 Cols: Visual Artwork & Specimen Badge */}
            <div className="col-span-5 h-full flex flex-col justify-center space-y-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`artwork-${activeProject.id}`}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-3xl border border-black/[0.08] dark:border-white/[0.1] bg-paper overflow-hidden shadow-md"
                >
                  <ProjectCoverArtwork 
                    coverArtwork={activeProject.coverArtwork}
                    title={activeProject.displayTitle}
                    domain={activeProject.domain}
                    importance={activeProject.importance}
                    className="w-full aspect-16/10"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Specimen Telemetry Box */}
              <div className="p-4 rounded-2xl bg-subtle border border-black/[0.06] dark:border-white/[0.08] grid grid-cols-2 gap-3 text-xs font-mono">
                <div>
                  <span className="text-[10px] uppercase text-muted block">Project Index</span>
                  <span className="font-bold text-ink">EXHIBIT // 0{activeProjectIndex + 1}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-muted block">System Domain</span>
                  <span className="text-ink font-semibold truncate block">{activeProject.domain}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-muted block">Engineering Role</span>
                  <span className="text-cobalt font-semibold truncate block">{activeProject.role}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-muted block">Verified Status</span>
                  <span className="text-ink capitalize block">{activeProject.status}</span>
                </div>
              </div>
            </div>

            {/* Right 7 Cols: Project Narrative & Deep Case Study */}
            <div className="col-span-7 h-full flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`info-${activeProject.id}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-mono">
                      <span className="px-2.5 py-0.5 rounded-full bg-subtle border border-black/[0.08] dark:border-white/[0.08] text-muted font-semibold">
                        {activeProject.domain}
                      </span>
                      {activeProject.importance === 'flagship' && (
                        <span className="px-2.5 py-0.5 rounded-full bg-cobalt text-white font-bold uppercase tracking-wider text-[10px]">
                          ★ FLAGSHIP SYSTEM // SIH 2026
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif text-3xl xl:text-4xl font-bold text-ink tracking-tight">
                      {activeProject.displayTitle}
                    </h3>

                    <p className="text-sm font-sans text-muted leading-relaxed">
                      {activeProject.tagline}
                    </p>
                  </div>

                  {/* Problem vs Solution Comparison */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3.5 rounded-xl bg-subtle/80 border border-black/[0.06] dark:border-white/[0.08] space-y-1 text-xs">
                      <span className="text-[10px] font-mono uppercase text-muted font-bold block">
                        Problem Addressed
                      </span>
                      <p className="text-ink/90 leading-relaxed font-sans line-clamp-3">
                        {activeProject.problem}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-subtle/80 border border-black/[0.06] dark:border-white/[0.08] space-y-1 text-xs">
                      <span className="text-[10px] font-mono uppercase text-cobalt font-bold block">
                        Technical Solution
                      </span>
                      <p className="text-ink/90 leading-relaxed font-sans line-clamp-3">
                        {activeProject.solution}
                      </p>
                    </div>
                  </div>

                  {/* Individual Role & Context */}
                  <div className="p-3.5 rounded-xl bg-paper border border-black/[0.08] dark:border-white/[0.1] space-y-1 text-xs">
                    <span className="text-[10px] font-mono uppercase text-coral font-bold block">
                      Confirmed Individual Contribution
                    </span>
                    <p className="text-ink font-sans leading-relaxed">
                      <strong>{activeProject.role}</strong>
                      {activeProject.teamContext && ` — ${activeProject.teamContext}`}
                    </p>
                  </div>

                  {/* Limitations Notice */}
                  {activeProject.limitations.length > 0 && (
                    <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 space-y-1 text-xs">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-amber-800 dark:text-amber-400 font-bold">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>Verified Scope &amp; Limitations</span>
                      </div>
                      <p className="text-muted text-[11px] font-sans line-clamp-2">
                        {activeProject.limitations[0]}
                      </p>
                    </div>
                  )}

                  {/* Action Link to Case Study */}
                  <div className="pt-2 flex items-center gap-3">
                    <Link
                      to={`/projects/${activeProject.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-ink text-paper text-xs font-mono font-semibold hover:bg-cobalt hover:text-white transition-all shadow-xs"
                    >
                      <span>Inspect Deep Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    {activeProject.links.liveDemoUrl && (
                      <a
                        href={activeProject.links.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-subtle border border-black/[0.08] dark:border-white/[0.1] text-xs font-mono text-ink hover:text-cobalt transition-colors"
                      >
                        <span>Live Prototype</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

          {/* Bottom Hairline Progress Indicator */}
          <div className="w-full h-1 bg-black/[0.06] dark:bg-white/[0.08] rounded-full overflow-hidden">
            <div 
              className="h-full bg-cobalt transition-all duration-200"
              style={{ width: `${((activeProjectIndex + 1) / verifiedProjects.length) * 100}%` }}
            />
          </div>

        </div>
      </div>

      {/* ============================================================
          MOBILE VERTICAL EXHIBITION (lg:hidden)
          Varied, responsive compositions for each project
          ============================================================ */}
      <div className="lg:hidden py-16 px-4 sm:px-6 space-y-12">
        
        {/* Mobile Section Header */}
        <div className="space-y-2 border-b border-black/[0.08] dark:border-white/[0.08] pb-6">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cobalt uppercase font-bold">
            <span className="w-2 h-2 rounded-full bg-cobalt inline-block" />
            <span>CHAPTER 02 // THE PROJECT EXHIBITION</span>
          </div>
          <h2 className="font-serif text-3xl font-bold text-ink tracking-tight">
            Ideas are interesting. Building them is better.
          </h2>
          <p className="text-xs text-muted font-sans">
            Seven verified engineering projects, forensic prototypes, and competition builds.
          </p>
        </div>

        {/* Mobile Vertical Project Stack */}
        <div className="space-y-10">
          {verifiedProjects.map((proj, idx) => (
            <div 
              key={proj.id}
              className={`rounded-3xl p-6 border space-y-5 ${
                proj.importance === 'flagship'
                  ? 'bg-gradient-to-b from-cobalt/[0.04] to-surface border-cobalt/30 shadow-md'
                  : 'bg-surface border-black/[0.08] dark:border-white/[0.08]'
              }`}
            >
              {/* Top Tag & Number */}
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-muted">0{idx + 1} / 07</span>
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase ${
                  proj.importance === 'flagship'
                    ? 'bg-cobalt text-white'
                    : 'bg-subtle text-muted border border-black/[0.08] dark:border-white/[0.08]'
                }`}>
                  {proj.importance === 'flagship' ? '★ Flagship' : proj.domain}
                </span>
              </div>

              {/* Cover Artwork */}
              <div className="rounded-2xl overflow-hidden border border-black/[0.08] dark:border-white/[0.08]">
                <ProjectCoverArtwork 
                  coverArtwork={proj.coverArtwork}
                  title={proj.displayTitle}
                  domain={proj.domain}
                  importance={proj.importance}
                  className="w-full aspect-16/10"
                />
              </div>

              {/* Title & Tagline */}
              <div className="space-y-1">
                <h3 className="font-serif text-2xl font-bold text-ink">
                  {proj.displayTitle}
                </h3>
                <p className="text-xs text-muted font-sans leading-relaxed">
                  {proj.tagline}
                </p>
              </div>

              {/* Role & Context */}
              <div className="p-3 rounded-xl bg-subtle/80 border border-black/[0.06] dark:border-white/[0.06] text-xs font-mono text-muted space-y-0.5">
                <span className="text-[10px] uppercase text-faint block">Confirmed Role:</span>
                <span className="text-ink font-semibold block">{proj.role}</span>
              </div>

              {/* Links */}
              <div className="pt-2 flex flex-wrap gap-2">
                <Link
                  to={`/projects/${proj.slug}`}
                  className="flex-1 text-center py-2.5 px-4 rounded-xl bg-ink text-paper text-xs font-mono font-semibold hover:bg-cobalt transition-colors"
                >
                  Case Study →
                </Link>
                {proj.links.liveDemoUrl && (
                  <a
                    href={proj.links.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-subtle border border-black/[0.08] dark:border-white/[0.1] text-ink hover:text-cobalt"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
