import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { 
  ArrowRight, 
  ExternalLink, 
  AlertCircle,
  ShieldAlert,
  Activity,
  Bot,
  Globe,
  Palette,
  Leaf,
  Layers
} from 'lucide-react';
import { verifiedProjects } from '../../data/projects';
import { ProjectCoverArtwork } from '../ui/ProjectCoverArtwork';

// Dynamic cinematic scene styles for each project
const projectSceneThemes = [
  {
    // 01: FALCON-404
    bgGradient: 'from-blue-50/90 via-sky-50/80 to-indigo-50/70',
    border: 'border-blue-200',
    accentText: 'text-cobalt',
    badgeBg: 'bg-cobalt text-white',
    badgeText: '★ FLAGSHIP CYBER FORENSICS // SIH 2026',
    icon: ShieldAlert,
    themePill: 'Cybersecurity & Screening'
  },
  {
    // 02: Arogya AI
    bgGradient: 'from-emerald-50/90 via-teal-50/80 to-green-50/70',
    border: 'border-emerald-200',
    accentText: 'text-emerald-700',
    badgeBg: 'bg-emerald-600 text-white',
    badgeText: 'HEALTHCARE ANALYTICS // WCE SANGLI',
    icon: Activity,
    themePill: 'Hospital Bed Optimization'
  },
  {
    // 03: Campus Copilot
    bgGradient: 'from-sky-50/90 via-cyan-50/80 to-blue-50/70',
    border: 'border-sky-200',
    accentText: 'text-sky-700',
    badgeBg: 'bg-sky-600 text-white',
    badgeText: 'CAMPUS AI AGENT // TANTRAPARV',
    icon: Bot,
    themePill: 'Curriculum & Student Bot'
  },
  {
    // 04: Neuroverse 2K26 Website
    bgGradient: 'from-orange-50/90 via-amber-50/80 to-rose-50/70',
    border: 'border-orange-200',
    accentText: 'text-orange-700',
    badgeBg: 'bg-orange-600 text-white',
    badgeText: 'PIXELCRAFT 2ND PLACE // ROUND 2',
    icon: Globe,
    themePill: 'National Symposium Portal'
  },
  {
    // 05: GADA ELECTRONICS
    bgGradient: 'from-amber-50/90 via-yellow-50/80 to-stone-50/70',
    border: 'border-amber-200',
    accentText: 'text-amber-800',
    badgeBg: 'bg-amber-600 text-white',
    badgeText: 'PIXELCRAFT 2ND PLACE // ROUND 1',
    icon: Layers,
    themePill: 'Interactive Storefront'
  },
  {
    // 06: ArtBook AI
    bgGradient: 'from-purple-50/90 via-fuchsia-50/80 to-pink-50/70',
    border: 'border-purple-200',
    accentText: 'text-purple-700',
    badgeBg: 'bg-purple-600 text-white',
    badgeText: "FOUNDER'S EXPO // E-CELL ADCET",
    icon: Palette,
    themePill: 'Creative Booking Platform'
  },
  {
    // 07: Eco-Friendly Planting System
    bgGradient: 'from-lime-50/90 via-emerald-50/80 to-amber-50/70',
    border: 'border-lime-200',
    accentText: 'text-lime-800',
    badgeBg: 'bg-emerald-700 text-white',
    badgeText: 'NATIONAL CHILDREN SCIENCE CONGRESS',
    icon: Leaf,
    themePill: 'District-Level Innovation'
  }
];

export const ProjectExhibitionChapter: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Divide scroll track into 7 equal slices for the 7 projects
      const index = Math.min(
        verifiedProjects.length - 1,
        Math.floor(latest * verifiedProjects.length)
      );
      setActiveProjectIndex(index);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const activeProject = verifiedProjects[activeProjectIndex] || verifiedProjects[0];
  const activeTheme = projectSceneThemes[activeProjectIndex] || projectSceneThemes[0];
  const ThemeIcon = activeTheme.icon;

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
      className="border-b border-slate-200/80 bg-[#FFFDF9] relative transition-colors duration-500"
    >
      {/* ============================================================
          DESKTOP SCROLL-DRIVEN STICKY CINEMATIC STAGE (lg:block)
          ============================================================ */}
      <div 
        ref={containerRef}
        className="hidden lg:block relative min-h-[440vh]"
      >
        <div className="sticky top-20 h-[calc(100vh-5rem)] flex flex-col justify-between py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
          
          {/* Top Folio Scene Slate Bar */}
          <div className="flex items-end justify-between border-b border-slate-200 pb-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cobalt uppercase font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-coral inline-block animate-pulse" />
                <span>SCENE 03 // THE PROJECT JOURNEY</span>
              </div>
              <h2 className="font-serif text-3xl xl:text-4xl font-bold text-slate-900 tracking-tight">
                Ideas are interesting. Building them is better.
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xs font-mono text-slate-600 font-medium">
                SCROLL TO PROGRESS: <strong className="text-slate-900 text-sm">0{activeProjectIndex + 1} / 07</strong>
              </span>
              <Link
                to="/projects"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-300 text-xs font-mono font-bold text-slate-800 hover:text-cobalt hover:border-cobalt transition-colors shadow-2xs"
              >
                <span>Full Directory</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Interactive Project Filmstrip Selector */}
          <div className="flex items-center gap-2 py-2">
            {verifiedProjects.map((proj, idx) => (
              <button
                key={proj.id}
                type="button"
                onClick={() => handleJumpToProject(idx)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono shrink-0 transition-all cursor-pointer flex items-center gap-2 ${
                  activeProjectIndex === idx
                    ? 'bg-slate-900 text-white font-bold shadow-md scale-105'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300 shadow-2xs'
                }`}
              >
                <span className="text-[10px] opacity-75">0{idx + 1}</span>
                <span>{proj.displayTitle}</span>
                {proj.importance === 'flagship' && (
                  <span className="w-2 h-2 rounded-full bg-coral animate-pulse" />
                )}
              </button>
            ))}
          </div>

          {/* Main Cinematic Stage Canvas with Dynamic Scene Aura */}
          <div className={`flex-1 rounded-3xl bg-gradient-to-br ${activeTheme.bgGradient} border ${activeTheme.border} p-6 sm:p-8 flex items-center shadow-lg transition-all duration-500 overflow-hidden relative`}>
            
            {/* Luminous Glow Orb */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-white/60 blur-2xl pointer-events-none" />

            <div className="w-full grid grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left 5 Cols: Visual Artwork Plate */}
              <div className="col-span-5 space-y-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`artwork-${activeProject.id}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-3xl border border-white/80 bg-white overflow-hidden shadow-xl"
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

                {/* Telemetry Capsule */}
                <div className="p-4 rounded-2xl bg-white/90 border border-white shadow-xs grid grid-cols-2 gap-3 text-xs font-mono">
                  <div>
                    <span className="text-[10px] uppercase text-slate-500 block">Scene Entry</span>
                    <span className="font-bold text-slate-900">EXHIBIT // 0{activeProjectIndex + 1}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-slate-500 block">Domain</span>
                    <span className="text-slate-900 font-bold truncate block">{activeProject.domain}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-slate-500 block">Confirmed Role</span>
                    <span className={`font-bold truncate block ${activeTheme.accentText}`}>{activeProject.role}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-slate-500 block">Verified Status</span>
                    <span className="text-slate-900 capitalize font-bold block">{activeProject.status}</span>
                  </div>
                </div>
              </div>

              {/* Right 7 Cols: Project Narrative & Deep Case Study */}
              <div className="col-span-7">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`info-${activeProject.id}`}
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -25 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-xs font-mono">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${activeTheme.badgeBg}`}>
                          <ThemeIcon className="w-3.5 h-3.5" />
                          <span>{activeTheme.badgeText}</span>
                        </span>
                      </div>

                      <h3 className="font-serif text-3xl xl:text-5xl font-bold text-slate-900 tracking-tight leading-[1.05]">
                        {activeProject.displayTitle}
                      </h3>

                      <p className="text-sm font-sans text-slate-700 leading-relaxed font-medium">
                        {activeProject.tagline}
                      </p>
                    </div>

                    {/* Problem vs Solution Comparison in Bright Cards */}
                    <div className="grid grid-cols-2 gap-3.5">
                      <div className="p-4 rounded-2xl bg-white/90 border border-white shadow-2xs space-y-1 text-xs">
                        <span className="text-[10px] font-mono uppercase text-slate-500 font-bold block">
                          Problem Addressed
                        </span>
                        <p className="text-slate-800 leading-relaxed font-sans line-clamp-3">
                          {activeProject.problem}
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-white/90 border border-white shadow-2xs space-y-1 text-xs">
                        <span className={`text-[10px] font-mono uppercase font-bold block ${activeTheme.accentText}`}>
                          Technical Solution
                        </span>
                        <p className="text-slate-800 leading-relaxed font-sans line-clamp-3">
                          {activeProject.solution}
                        </p>
                      </div>
                    </div>

                    {/* Individual Role & Context */}
                    <div className="p-3.5 rounded-2xl bg-white/95 border border-white shadow-2xs space-y-0.5 text-xs">
                      <span className="text-[10px] font-mono uppercase text-coral font-bold block">
                        Harshad&apos;s Confirmed Individual Contribution
                      </span>
                      <p className="text-slate-900 font-sans leading-relaxed font-medium">
                        <strong>{activeProject.role}</strong>
                        {activeProject.teamContext && ` — ${activeProject.teamContext}`}
                      </p>
                    </div>

                    {/* Limitations Notice */}
                    {activeProject.limitations.length > 0 && (
                      <div className="p-3 rounded-2xl bg-amber-100/70 border border-amber-200/80 space-y-0.5 text-xs">
                        <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-amber-900 font-bold">
                          <AlertCircle className="w-3.5 h-3.5 text-amber-700" />
                          <span>Verified Scope &amp; Limitations</span>
                        </div>
                        <p className="text-amber-900/90 text-[11px] font-sans line-clamp-2">
                          {activeProject.limitations[0]}
                        </p>
                      </div>
                    )}

                    {/* Action Links */}
                    <div className="pt-2 flex items-center gap-3">
                      <Link
                        to={`/projects/${activeProject.slug}`}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-cobalt transition-all shadow-md hover:shadow-lg"
                      >
                        <span>Inspect Case Study</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      {activeProject.links.liveDemoUrl && (
                        <a
                          href={activeProject.links.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-3 rounded-2xl bg-white border border-slate-300 text-xs font-mono font-semibold text-slate-800 hover:text-cobalt hover:border-cobalt transition-colors shadow-xs"
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

          </div>

          {/* Bottom Hairline Film Progress Indicator */}
          <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden mt-3">
            <div 
              className="h-full bg-gradient-to-r from-amber-400 via-coral to-cobalt transition-all duration-200"
              style={{ width: `${((activeProjectIndex + 1) / verifiedProjects.length) * 100}%` }}
            />
          </div>

        </div>
      </div>

      {/* ============================================================
          MOBILE VERTICAL EXHIBITION (lg:hidden)
          Vibrant, optimistic film scenes for mobile screens
          ============================================================ */}
      <div className="lg:hidden py-14 px-4 sm:px-6 space-y-10">
        
        {/* Mobile Section Header */}
        <div className="space-y-2 border-b border-slate-200 pb-5">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cobalt uppercase font-bold">
            <span className="w-2.5 h-2.5 rounded-full bg-coral inline-block" />
            <span>SCENE 03 // THE PROJECT JOURNEY</span>
          </div>
          <h2 className="font-serif text-3xl font-bold text-slate-900 tracking-tight">
            Ideas are interesting. Building them is better.
          </h2>
          <p className="text-xs text-slate-600 font-sans">
            Seven verified engineering projects, forensic prototypes, and competition builds.
          </p>
        </div>

        {/* Mobile Vertical Project Stack with Bright Color Themes */}
        <div className="space-y-8">
          {verifiedProjects.map((proj, idx) => {
            const theme = projectSceneThemes[idx] || projectSceneThemes[0];
            return (
              <div 
                key={proj.id}
                className={`rounded-3xl p-6 border ${theme.border} bg-gradient-to-br ${theme.bgGradient} space-y-5 shadow-sm`}
              >
                {/* Top Tag & Number */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-slate-700">SCENE 0{idx + 1} / 07</span>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${theme.badgeBg}`}>
                    {proj.importance === 'flagship' ? '★ Flagship' : theme.themePill}
                  </span>
                </div>

                {/* Cover Artwork */}
                <div className="rounded-2xl overflow-hidden border border-white/80 shadow-md">
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
                  <h3 className="font-serif text-2xl font-bold text-slate-900">
                    {proj.displayTitle}
                  </h3>
                  <p className="text-xs text-slate-700 font-sans leading-relaxed">
                    {proj.tagline}
                  </p>
                </div>

                {/* Role & Context */}
                <div className="p-3.5 rounded-xl bg-white/90 border border-white text-xs font-mono text-slate-600 space-y-0.5 shadow-2xs">
                  <span className="text-[10px] uppercase text-slate-400 block font-bold">Confirmed Role:</span>
                  <span className="text-slate-900 font-bold block">{proj.role}</span>
                </div>

                {/* Links */}
                <div className="pt-2 flex flex-wrap gap-2">
                  <Link
                    to={`/projects/${proj.slug}`}
                    className="flex-1 text-center py-3 px-4 rounded-xl bg-slate-900 text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-cobalt transition-colors shadow-xs"
                  >
                    Inspect Case Study →
                  </Link>
                  {proj.links.liveDemoUrl && (
                    <a
                      href={proj.links.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-white border border-slate-200 text-slate-800 hover:text-cobalt shadow-2xs"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
