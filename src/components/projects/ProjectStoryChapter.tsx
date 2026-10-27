import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Cpu,
  Sparkles,
  Compass,
  ChevronDown,
  ChevronUp,
  Maximize2
} from 'lucide-react';
import type { ProjectItem } from '../../types/portfolio';
import { GithubIcon } from '../ui/BrandIcons';

interface ProjectStoryChapterProps {
  project: ProjectItem;
  chapterIndex?: number;
  layoutVariant?: 'flagship' | 'wide-asymmetric' | 'editorial' | 'compact';
  isReversed?: boolean;
}

export const ProjectStoryChapter: React.FC<ProjectStoryChapterProps> = ({
  project,
  chapterIndex = 1,
  layoutVariant = 'editorial',
  isReversed = false
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [activeStoryStage, setActiveStoryStage] = useState<'problem' | 'build' | 'learned'>('problem');

  // Project-specific identity configuration
  const getProjectIdentity = () => {
    switch (project.slug) {
      case 'falcon-404':
        return {
          supertitle: `CHAPTER 0${chapterIndex} // DIGITAL TRUST & SCREENING ENGINE`,
          themeBorder: 'border-cobalt/40 hover:border-cobalt/70',
          themeShadow: 'shadow-chromatic',
          badgeBg: 'bg-cobalt text-white shadow-xs',
          accentColor: '#315EEB',
          canvasGradient: 'from-blue-500/5 via-indigo-500/5 to-transparent',
          tagIcon: ShieldCheck,
          statusLabel: 'SIH 2026 Problem 26188'
        };
      case 'arogya-ai':
        return {
          supertitle: `CHAPTER 0${chapterIndex} // HEALTHCARE CAPACITY & HUMAN PURPOSE`,
          themeBorder: 'border-emerald-500/40 hover:border-emerald-500/70',
          themeShadow: 'shadow-mint',
          badgeBg: 'bg-emerald-600 text-white shadow-xs',
          accentColor: '#087F82',
          canvasGradient: 'from-teal-500/5 via-emerald-500/5 to-transparent',
          tagIcon: Sparkles,
          statusLabel: 'Aarambh Hackathon Demo'
        };
      case 'campus-copilot':
        return {
          supertitle: `CHAPTER 0${chapterIndex} // ACCESSIBLE CAMPUS KNOWLEDGE NETWORK`,
          themeBorder: 'border-blue-400/40 hover:border-blue-500/70',
          themeShadow: 'shadow-chromatic',
          badgeBg: 'bg-blue-600 text-white shadow-xs',
          accentColor: '#3B82F6',
          canvasGradient: 'from-blue-500/5 via-sky-500/5 to-transparent',
          tagIcon: Compass,
          statusLabel: 'Tantraparv 2026 Prototype'
        };
      case 'neuroverse-2k26-website':
        return {
          supertitle: `CHAPTER 0${chapterIndex} // DYNAMIC WEB ARCHITECTURE & SYMPOSIUM STAGE`,
          themeBorder: 'border-purple-500/40 hover:border-purple-500/70',
          themeShadow: 'shadow-chromatic',
          badgeBg: 'bg-purple-600 text-white shadow-xs',
          accentColor: '#7953D6',
          canvasGradient: 'from-purple-500/5 via-violet-500/5 to-transparent',
          tagIcon: Sparkles,
          statusLabel: 'PixelCraft Runner-Up'
        };
      case 'gada-electronics':
        return {
          supertitle: `CHAPTER 0${chapterIndex} // CYBER DIGITAL COMMERCE STOREFRONT CONCEPT`,
          themeBorder: 'border-amber-500/40 hover:border-amber-500/70',
          themeShadow: 'shadow-warm',
          badgeBg: 'bg-amber-600 text-white shadow-xs',
          accentColor: '#E77936',
          canvasGradient: 'from-amber-500/5 via-orange-500/5 to-transparent',
          tagIcon: Cpu,
          statusLabel: 'PixelCraft Round 1 Sprint'
        };
      case 'artbook-ai':
        return {
          supertitle: `CHAPTER 0${chapterIndex} // CREATIVE TALENT DISCOVERY & BOOKING MARKETPLACE`,
          themeBorder: 'border-rose-400/40 hover:border-rose-500/70',
          themeShadow: 'shadow-warm',
          badgeBg: 'bg-rose-500 text-white shadow-xs',
          accentColor: '#E65D59',
          canvasGradient: 'from-rose-500/5 via-pink-500/5 to-transparent',
          tagIcon: Sparkles,
          statusLabel: 'Founders Expo Prototype'
        };
      case 'eco-friendly-planting-system':
      default:
        return {
          supertitle: `CHAPTER 0${chapterIndex} // FOUNDATIONAL ORIGIN & SCIENTIFIC METHOD`,
          themeBorder: 'border-lime-500/40 hover:border-lime-600/70',
          themeShadow: 'shadow-mint',
          badgeBg: 'bg-emerald-700 text-white shadow-xs',
          accentColor: '#15866B',
          canvasGradient: 'from-emerald-500/5 via-lime-500/5 to-transparent',
          tagIcon: Lightbulb,
          statusLabel: 'NCSC District Level'
        };
    }
  };

  const identity = getProjectIdentity();
  const TagIcon = identity.tagIcon;

  return (
    <article
      className={`rounded-3xl bg-white dark:bg-card border ${identity.themeBorder} ${identity.themeShadow} transition-all duration-300 relative overflow-hidden group tech-card`}
    >
      {/* Ambient Canvas Lighting */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${identity.canvasGradient} pointer-events-none opacity-50 dark:opacity-30`} 
      />

      {/* Main Visual Chapter Content */}
      <div className="p-6 sm:p-8 lg:p-10 relative z-10 space-y-8">
        
        {/* Chapter Header Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-border-hairline text-xs font-mono">
          <div className="flex items-center gap-2.5">
            <span 
              className="w-2.5 h-2.5 rounded-full inline-block animate-pulse" 
              style={{ backgroundColor: identity.accentColor }} 
            />
            <span className="font-bold text-ink tracking-wider">{identity.supertitle}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider ${identity.badgeBg}`}>
              {identity.statusLabel}
            </span>
            <span className="text-muted/40 hidden sm:inline">&bull;</span>
            <span className="text-muted hidden sm:inline">Role: {project.role}</span>
          </div>
        </div>

        {/* Dynamic Composition: Workstation Visual vs Technical Storytelling */}
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
          isReversed ? 'lg:flex-row-reverse' : ''
        }`}>
          
          {/* Project Screenshot Workstation Frame (7 cols or 6 cols depending on variant) */}
          <div className={`${
            layoutVariant === 'flagship' ? 'lg:col-span-7' : 'lg:col-span-6'
          } ${isReversed ? 'lg:order-2' : ''} space-y-3`}>
            
            <div className="rounded-2xl overflow-hidden border border-border-hairline bg-slate-950 shadow-md relative group/viewport">
              
              {/* Workstation Top Bar */}
              <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-slate-300 font-bold ml-1.5">{project.displayTitle}</span>
                </div>
                <div className="flex items-center gap-2 text-[10px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 font-semibold uppercase">Verified System View</span>
                </div>
              </div>

              {/* The Real Project Screenshot */}
              <Link 
                to={`/projects/${project.slug}`}
                className="block relative overflow-hidden aspect-video sm:aspect-[16/10] bg-slate-950 p-2 cursor-pointer"
                title={`Open ${project.displayTitle} case study`}
              >
                <img
                  src={project.assets.cover}
                  alt={`${project.displayTitle} — Primary Operational Interface`}
                  className="w-full h-full object-contain rounded transition-transform duration-500 group-hover/viewport:scale-[1.025]"
                  loading="lazy"
                />

                {/* Hover Discovery Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/viewport:opacity-100 transition-opacity flex items-center justify-center p-4">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/90 text-ink text-xs font-mono font-bold shadow-lg backdrop-blur-xs">
                    <Maximize2 className="w-3.5 h-3.5 text-cobalt" />
                    <span>Enter Deep Case Study</span>
                  </span>
                </div>
              </Link>

              {/* Quick Tech Tag Strip on Workstation Bottom */}
              <div className="px-4 py-2 bg-slate-900/90 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-slate-400">
                <span>Domain: {project.domain.split(',')[0]}</span>
                <span className="text-slate-300 font-semibold">{project.technologies.slice(0, 3).join(' • ')}</span>
              </div>

            </div>

          </div>

          {/* Editorial Narrative & Technical Case Story (5 cols or 6 cols) */}
          <div className={`${
            layoutVariant === 'flagship' ? 'lg:col-span-5' : 'lg:col-span-6'
          } ${isReversed ? 'lg:order-1' : ''} space-y-6`}>
            
            <div className="space-y-2">
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-ink tracking-tight leading-[1.08]">
                {project.displayTitle}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-muted font-semibold tracking-wide">
                &mdash; {project.tagline}
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
              {project.summary}
            </p>

            {/* Implemented Highlights List */}
            <div className="space-y-2 pt-1">
              <div className="text-[11px] font-mono uppercase tracking-wider text-muted font-bold flex items-center gap-1.5">
                <TagIcon className="w-3.5 h-3.5" style={{ color: identity.accentColor }} />
                <span>CONFIRMED TECHNICAL CAPABILITIES</span>
              </div>
              <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 font-sans">
                {project.features.slice(0, 3).map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Badges */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg bg-surface dark:bg-card-elevated border border-border-hairline text-xs font-mono text-ink font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Bar & Explore Discovery Toggle */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <Link
                to={`/projects/${project.slug}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-ink text-white font-mono text-xs uppercase font-bold tracking-wider hover:opacity-95 transition-all shadow-xs active:scale-95"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {project.links.repositoryUrl && (
                <a
                  href={project.links.repositoryUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-surface dark:bg-card border border-border-hairline text-xs font-mono font-bold text-ink hover:text-cobalt hover:border-cobalt/40 transition-colors shadow-2xs"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Code</span>
                  <ExternalLink className="w-3 h-3 text-muted" />
                </a>
              )}

              {/* Interactive Discovery Toggle */}
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-surface dark:bg-card border border-border-hairline text-xs font-mono font-bold text-muted hover:text-ink hover:border-border-strong transition-colors cursor-pointer shadow-2xs"
              >
                <span>{isExpanded ? 'Hide Story' : 'Explore Story'}</span>
                {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            </div>

          </div>

        </div>

        {/* ============================================================
            SIGNATURE INTERACTION: EXPLORE THE PROJECT STORY
            Progression: CURIOSITY -> THE PROBLEM -> THE BUILD -> WHAT I LEARNED
            ============================================================ */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="pt-6 border-t border-border-hairline space-y-6 overflow-hidden"
            >
              {/* Story Stage Nav Tabs */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className="text-muted uppercase tracking-wider font-bold mr-2">
                  STORYLINE ARCHITECTURE:
                </span>
                
                <button
                  type="button"
                  onClick={() => setActiveStoryStage('problem')}
                  className={`px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                    activeStoryStage === 'problem'
                      ? 'bg-ink text-white font-bold'
                      : 'bg-surface dark:bg-card text-muted hover:text-ink border border-border-hairline'
                  }`}
                >
                  01. The Problem &amp; Curiosity
                </button>

                <button
                  type="button"
                  onClick={() => setActiveStoryStage('build')}
                  className={`px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                    activeStoryStage === 'build'
                      ? 'bg-ink text-white font-bold'
                      : 'bg-surface dark:bg-card text-muted hover:text-ink border border-border-hairline'
                  }`}
                >
                  02. The Proposed Solution &amp; Build
                </button>

                <button
                  type="button"
                  onClick={() => setActiveStoryStage('learned')}
                  className={`px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                    activeStoryStage === 'learned'
                      ? 'bg-ink text-white font-bold'
                      : 'bg-surface dark:bg-card text-muted hover:text-ink border border-border-hairline'
                  }`}
                >
                  03. Lessons &amp; Honest Limitations
                </button>
              </div>

              {/* Story Stage Panels */}
              <div className="p-6 rounded-2xl bg-surface/70 dark:bg-card-elevated/70 border border-border-hairline space-y-4">
                {activeStoryStage === 'problem' && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-coral uppercase">
                      <AlertTriangle className="w-4 h-4" />
                      <span>THE FRICTION THAT SPARKED THE PROJECT</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
                      {project.problem}
                    </p>
                    {project.teamContext && (
                      <div className="text-[11px] font-mono text-muted pt-2 border-t border-border-hairline">
                        <span className="font-semibold text-ink">Collaboration Context: </span>
                        <span>{project.teamContext}</span>
                      </div>
                    )}
                  </div>
                )}

                {activeStoryStage === 'build' && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-cobalt uppercase">
                      <Cpu className="w-4 h-4" />
                      <span>HOW THE APPLICATION WAS DESIGNED &amp; ASSEMBLED</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
                      {project.solution}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-border-hairline">
                      <div>
                        <span className="text-[10px] font-mono uppercase text-muted block mb-1">Architecture &amp; Stack</span>
                        <span className="text-xs font-mono text-ink font-semibold">{project.technologies.join(', ')}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase text-muted block mb-1">Status &amp; Verification</span>
                        <span className="text-xs font-mono text-ink font-semibold capitalize">{project.status} &bull; {project.competition?.name || 'Academic'}</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeStoryStage === 'learned' && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 uppercase">
                        <Lightbulb className="w-4 h-4" />
                        <span>ENGINEERING LESSONS LEARNED</span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 font-sans">
                        {project.lessonsLearned.map((lesson, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-emerald-600 dark:text-emerald-400 font-mono font-bold">✔</span>
                            <span>{lesson}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/25 space-y-1">
                      <span className="text-[10px] font-mono uppercase text-amber-800 dark:text-amber-300 font-bold block">
                        HONEST SCOPE &amp; BOUNDARIES (ZERO FABRICATION)
                      </span>
                      <p className="text-xs text-amber-900 dark:text-amber-200 leading-relaxed font-sans">
                        {project.limitations[0] || 'This project was constructed as a functional demonstration and case study.'}
                      </p>
                    </div>
                  </div>
                )}
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </article>
  );
};
