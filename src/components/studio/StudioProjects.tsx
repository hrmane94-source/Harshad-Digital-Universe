import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ExternalLink, 
  ShieldAlert, 
  CheckCircle2, 
  AlertCircle,
  Sparkles,
  Layers
} from 'lucide-react';
import { verifiedProjects } from '../../data/projects';
import { ProjectsConstellation3D } from '../projects/ProjectsConstellation3D';
import { ProjectStoryChapter } from '../projects/ProjectStoryChapter';
import { GithubIcon } from '../ui/BrandIcons';

export const StudioProjects: React.FC = () => {
  const [flagshipView, setFlagshipView] = useState<'screenshot' | 'forensics'>('screenshot');
  const [activeForensicTab, setActiveForensicTab] = useState<'ela' | 'ocr' | 'meta'>('ela');
  const [selectedConstellationProject, setSelectedConstellationProject] = useState<string | null>('falcon-404');

  const falconProject = verifiedProjects.find(p => p.slug === 'falcon-404') || verifiedProjects[0];
  const arogyaProject = verifiedProjects.find(p => p.slug === 'arogya-ai')!;
  const campusProject = verifiedProjects.find(p => p.slug === 'campus-copilot')!;
  const neuroverseProject = verifiedProjects.find(p => p.slug === 'neuroverse-2k26-website')!;
  const gadaProject = verifiedProjects.find(p => p.slug === 'gada-electronics')!;
  const artbookProject = verifiedProjects.find(p => p.slug === 'artbook-ai')!;
  const ecoProject = verifiedProjects.find(p => p.slug === 'eco-friendly-planting-system')!;

  const handleConstellationSelect = (slug: string) => {
    setSelectedConstellationProject(slug);
    const element = document.getElementById(`project-${slug}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section 
      id="chapter-02" 
      className="py-20 sm:py-32 bg-gradient-to-b from-[#EAF3FF] via-[#EDE5FF]/50 to-[#EAF3FF] dark:from-paper dark:via-paper dark:to-paper border-b border-border-hairline relative overflow-hidden transition-colors duration-250"
    >
      {/* Background Architectural Ambient Lighting */}
      <div className="absolute top-1/4 left-1/4 w-[650px] h-[650px] rounded-full bg-cobalt/10 dark:bg-cobalt/15 blur-3xl pointer-events-none" />
      <div className="absolute top-2/3 right-10 w-[500px] h-[500px] rounded-full bg-violet/10 dark:bg-violet/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 relative z-10">
        
        {/* ============================================================
            1. UNFORGETTABLE PROJECTS INTRODUCTION
            "A UNIVERSE OF IDEAS, MADE REAL"
            ============================================================ */}
        <div className="space-y-10 border-b border-border-hairline pb-12">
          
          {/* Top Folio Label Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono uppercase tracking-widest text-muted">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-cobalt inline-block animate-pulse shadow-[0_0_8px_rgba(49,94,235,0.6)]" />
              <span className="text-ink font-bold">SECTION 03</span>
              <span className="text-muted/40">//</span>
              <span className="text-cobalt font-semibold">A UNIVERSE OF IDEAS, MADE REAL</span>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-surface dark:bg-card border border-border-hairline text-ink font-bold">
                07 VERIFIED BUILDS
              </span>
              <span className="text-muted/40 hidden sm:inline">&bull;</span>
              <span className="text-muted hidden sm:inline">PROCEED BY CHAPTER</span>
            </div>
          </div>

          {/* Intro Hero Grid: Editorial Typography (7 Cols) + 3D Constellation Field (5 Cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Expressive Editorial Headline */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-4xl sm:text-6xl lg:text-[4.25rem] font-normal text-ink tracking-tight leading-[1.04]">
                Ideas are only <br />
                <span className="italic font-normal bg-gradient-to-r from-cobalt via-violet to-sky-400 bg-clip-text text-transparent">
                  the beginning.
                </span> <br />
                <span className="font-bold text-ink">What matters is what we build.</span>
              </h2>

              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 font-sans leading-relaxed max-w-2xl">
                Every project below was conceived from genuine curiosity, forged in the friction of competitive hackathons, and shaped by human purpose. Explore the complete sequence of chapters from forensic document trust to hospital operations, campus AI, and creative digital expression.
              </p>

              {/* 5-Stage Storytelling Progression Indicator */}
              <div className="p-4 rounded-2xl bg-white/80 dark:bg-card/80 border border-border-hairline shadow-xs space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted font-bold block">
                  ARCHITECTURAL STORYTELLING SEQUENCE:
                </span>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-bold text-ink">
                  <span className="px-2.5 py-1 rounded-md bg-cobalt/10 text-cobalt border border-cobalt/25">01. Curiosity</span>
                  <span className="text-muted/40">&rarr;</span>
                  <span className="px-2.5 py-1 rounded-md bg-coral/10 text-coral border border-coral/25">02. The Problem</span>
                  <span className="text-muted/40">&rarr;</span>
                  <span className="px-2.5 py-1 rounded-md bg-violet/10 text-violet border border-violet/25">03. The Experiment</span>
                  <span className="text-muted/40">&rarr;</span>
                  <span className="px-2.5 py-1 rounded-md bg-mint/10 text-mint border border-mint/25">04. The Build</span>
                  <span className="text-muted/40">&rarr;</span>
                  <span className="px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/25">05. What I Learned</span>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#project-falcon-404"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cobalt text-white font-mono text-xs uppercase font-bold tracking-wider hover:opacity-95 transition-all shadow-md hover:shadow-cobalt/30 active:scale-95"
                >
                  <span>Experience Flagship FALCON-404</span>
                  <ArrowRight className="w-3.5 h-3.5 text-sunny" />
                </a>

                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white dark:bg-card border border-border-hairline text-xs font-mono font-bold text-ink hover:text-cobalt hover:border-cobalt/40 transition-colors shadow-2xs hover:shadow-chromatic active:scale-95"
                >
                  <span>All Projects Directory</span>
                  <ArrowRight className="w-3.5 h-3.5 text-muted" />
                </Link>
              </div>
            </div>

            {/* Right Column: 3D Constellation of 7 Builds */}
            <div className="lg:col-span-5 p-4 rounded-3xl bg-white dark:bg-card border border-border-hairline shadow-chromatic relative overflow-hidden">
              <div className="flex items-center justify-between pb-2 border-b border-border-hairline text-[11px] font-mono text-muted">
                <span className="font-bold text-ink flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cobalt" />
                  <span>PROJECT CONSTELLATION</span>
                </span>
                <span className="text-[10px] text-cobalt font-semibold">CLICK NODE TO JUMP</span>
              </div>
              <ProjectsConstellation3D 
                activeProjectSlug={selectedConstellationProject}
                onSelectProject={handleConstellationSelect}
                className="w-full h-[320px] sm:h-[360px]"
              />
            </div>

          </div>

        </div>

        {/* ============================================================
            2. SIGNATURE FLAGSHIP EXPERIENCE: FALCON-404 — THE TRUST ENGINE
            ============================================================ */}
        <div id="project-falcon-404" className="space-y-4">
          <div className="flex items-center justify-between text-xs font-mono text-cobalt font-bold uppercase tracking-wider">
            <span>SIGNATURE FLAGSHIP BUILD // CYBERSECURITY &amp; DIGITAL TRUST</span>
            <span className="text-muted hidden sm:inline">SMART INDIA HACKATHON 2026</span>
          </div>

          <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-white dark:bg-card border-2 border-cobalt/40 dark:border-cobalt/50 shadow-chromatic relative overflow-hidden space-y-10">
            
            {/* Flagship Header Banner */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border-hairline">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-cobalt text-white text-xs font-mono font-bold tracking-wide uppercase flex items-center gap-1.5 shadow-xs">
                  <ShieldAlert className="w-3.5 h-3.5 text-sunny" />
                  <span>★ FLAGSHIP CASE STUDY // SMART INDIA HACKATHON 2026</span>
                </span>
                <span className="text-xs font-mono text-muted hidden md:inline">
                  PROBLEM ID: 26188 (MINISTRY OF EDUCATION &amp; AICTE)
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>EXPLAINABLE TRUST ENGINE</span>
              </div>
            </div>

            {/* Asymmetric Flagship Layout: Operational Inspection Frame (7 cols) + Architectural Dossier (5 cols) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left: Operational Inspection Workstation (7 Cols) */}
              <div className="lg:col-span-7 space-y-4">
                
                {/* View Mode Switcher */}
                <div className="flex items-center justify-between pb-1">
                  <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 text-xs font-mono">
                    <button
                      type="button"
                      onClick={() => setFlagshipView('screenshot')}
                      className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                        flagshipView === 'screenshot'
                          ? 'bg-cobalt text-white font-bold shadow-xs'
                          : 'text-slate-600 dark:text-slate-300 hover:text-ink'
                      }`}
                    >
                      ★ Operational Dashboard
                    </button>
                    <button
                      type="button"
                      onClick={() => setFlagshipView('forensics')}
                      className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                        flagshipView === 'forensics'
                          ? 'bg-cobalt text-white font-bold shadow-xs'
                          : 'text-slate-600 dark:text-slate-300 hover:text-ink'
                      }`}
                    >
                      Forensic Heuristics Lab
                    </button>
                  </div>
                  <span className="text-[11px] font-mono text-muted hidden sm:inline">
                    {flagshipView === 'screenshot' ? 'Full UI Screenshot' : 'Diagnostic Pipeline'}
                  </span>
                </div>

                {flagshipView === 'screenshot' ? (
                  /* Workstation Frame with Real Image */
                  <div className="rounded-2xl overflow-hidden border border-border-hairline bg-slate-950 shadow-2xl relative group/workstation">
                    {/* Top Terminal Chrome Bar */}
                    <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        </div>
                        <span className="text-slate-300 font-bold ml-2">falcon-404-dashboard.local</span>
                      </div>
                      <div className="flex items-center gap-2 text-[10px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-emerald-400 font-bold uppercase">CLIENT WORKER ACTIVE</span>
                      </div>
                    </div>

                    {/* Screenshot Display */}
                    <div className="relative overflow-hidden aspect-video sm:aspect-[16/10] bg-slate-950 p-2 flex items-center justify-center">
                      <img
                        src={falconProject.assets.cover}
                        alt="FALCON-404 — AI-Based Fake Identity Screening Dashboard"
                        className="w-full h-full object-contain rounded transition-transform duration-500 group-hover/workstation:scale-[1.02]"
                        loading="lazy"
                      />

                      {/* Diagnostic Overlay HUD */}
                      <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/90 border border-slate-700/80 backdrop-blur-md flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-300">
                        <div className="flex items-center gap-2">
                          <span className="text-cobalt font-bold">[TESSERACT.JS OCR]</span>
                          <span className="text-slate-400">Browser-Local Parsing</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-emerald-400 font-bold">100% Client-Side Privacy</span>
                          <span className="text-slate-500">&bull;</span>
                          <span className="text-amber-400 font-bold">Explainable ELA</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Interactive Forensic Diagnostic Pipeline */
                  <div className="p-6 rounded-2xl bg-slate-950 border border-border-hairline space-y-4 text-xs font-mono shadow-2xl">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-cobalt font-bold">[DIAGNOSTIC WORKBENCH]</span>
                        <span className="text-slate-400">3-Stage Screening Pipeline</span>
                      </div>
                      <span className="text-[10px] text-emerald-400 font-bold">NO SERVER TRANSMISSION</span>
                    </div>

                    {/* Tab Selectors */}
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setActiveForensicTab('ela')}
                        className={`p-2 rounded-lg text-center transition-colors cursor-pointer ${
                          activeForensicTab === 'ela'
                            ? 'bg-cobalt text-white font-bold'
                            : 'bg-slate-900 text-slate-400 hover:text-white'
                        }`}
                      >
                        1. Error Level Analysis
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveForensicTab('ocr')}
                        className={`p-2 rounded-lg text-center transition-colors cursor-pointer ${
                          activeForensicTab === 'ocr'
                            ? 'bg-cobalt text-white font-bold'
                            : 'bg-slate-900 text-slate-400 hover:text-white'
                        }`}
                      >
                        2. OCR Field Parsing
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveForensicTab('meta')}
                        className={`p-2 rounded-lg text-center transition-colors cursor-pointer ${
                          activeForensicTab === 'meta'
                            ? 'bg-cobalt text-white font-bold'
                            : 'bg-slate-900 text-slate-400 hover:text-white'
                        }`}
                      >
                        3. Container Metadata
                      </button>
                    </div>

                    {/* Tab Details */}
                    <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 text-slate-300 leading-relaxed font-sans text-xs">
                      {activeForensicTab === 'ela' && (
                        <div className="space-y-2 font-mono text-[11px]">
                          <div className="flex justify-between items-center text-amber-400 font-bold">
                            <span>[ELA] Compression Discrepancy Map</span>
                            <span className="text-emerald-400">READY</span>
                          </div>
                          <p className="text-slate-400 font-sans text-xs">
                            Re-saves image at fixed 95% JPEG quality to compute per-pixel error magnitude. Spliced text or manipulated photo regions stand out as elevated brightness bands against the uniform compression floor.
                          </p>
                        </div>
                      )}
                      {activeForensicTab === 'ocr' && (
                        <div className="space-y-2 font-mono text-[11px]">
                          <div className="flex justify-between items-center text-sky-400 font-bold">
                            <span>[OCR] Client-Side Tesseract.js Worker</span>
                            <span className="text-emerald-400">ISOLATED THREAD</span>
                          </div>
                          <p className="text-slate-400 font-sans text-xs">
                            Extracts candidate identity strings (name tokens, ID pattern regex, date stamps) inside client WebWorkers. Raw identity documents never leave the browser, satisfying personal data privacy mandates.
                          </p>
                        </div>
                      )}
                      {activeForensicTab === 'meta' && (
                        <div className="space-y-2 font-mono text-[11px]">
                          <div className="flex justify-between items-center text-purple-400 font-bold">
                            <span>[META] Container Signature Inspection</span>
                            <span className="text-emerald-400">HASH COMPUTED</span>
                          </div>
                          <p className="text-slate-400 font-sans text-xs">
                            Inspects binary container headers for known photo-editing software signatures (Photoshop, GIMP) and evaluates timestamp and color profile anomalies.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Right: Architectural Case Study Narrative (5 Cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-mono text-cobalt uppercase font-bold tracking-wider block">
                    PROJECT LEAD &bull; SOLE APPLICATION DEVELOPER
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-ink tracking-tight leading-[1.05]">
                    {falconProject.title}
                  </h3>
                  <p className="text-xs font-mono text-muted">
                    Team Falcon (ID: ISIH26106) &bull; Seva First Demonstration
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                  {falconProject.summary}
                </p>

                {/* Verified Capabilities */}
                <div className="space-y-2 pt-1">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-muted font-bold">
                    CORE IMPLEMENTED CAPABILITIES
                  </div>
                  <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 font-sans">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>Browser-local OCR with Tesseract.js eliminates server leak risks.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>Error Level Analysis (ELA) visualizes resaved compression discrepancies.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>Transparent explainability indicators instead of opaque black-box AI scores.</span>
                    </div>
                  </div>
                </div>

                {/* Engineering Truth & Non-Fabrication Box */}
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/25 text-xs font-sans text-amber-900 dark:text-amber-200 space-y-1">
                  <div className="flex items-center gap-1.5 font-mono font-bold text-[10px] uppercase text-amber-800 dark:text-amber-300">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>ENGINEERING TRUTH &bull; LIMITATIONS</span>
                  </div>
                  <p className="leading-relaxed">
                    Performs explainable heuristic screening. Does not claim legal authenticity certification or direct connection to government databases.
                  </p>
                </div>

                {/* Action Links */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    to="/projects/falcon-404"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cobalt text-white font-mono text-xs uppercase font-bold tracking-wider hover:opacity-95 transition-all shadow-md active:scale-95"
                  >
                    <span>Inspect Deep Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  {falconProject.links.repositoryUrl && (
                    <a
                      href={falconProject.links.repositoryUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-white dark:bg-card border border-border-hairline text-xs font-mono font-bold text-ink hover:text-cobalt hover:border-cobalt/40 transition-colors shadow-2xs"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                      <ExternalLink className="w-3 h-3 text-muted" />
                    </a>
                  )}
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* ============================================================
            3. CHAPTER SEQUENCE: EACH PROJECT WITH ITS DISTINCT VISUAL SOUL
            ============================================================ */}
        <div className="space-y-12">
          
          <div className="flex items-center justify-between border-b border-border-hairline pb-4 text-xs font-mono">
            <span className="font-bold text-ink uppercase tracking-wider">
              CONTINUING CHAPTERS &bull; HACKATHONS, REASONING &amp; EARLY ROOTS
            </span>
            <span className="text-muted">
              6 DISTINCT BUILDS
            </span>
          </div>

          {/* Chapter 02: Arogya AI — Healthcare Capacity & Human Purpose */}
          <div id="project-arogya-ai">
            <ProjectStoryChapter
              project={arogyaProject}
              chapterIndex={2}
              layoutVariant="wide-asymmetric"
              isReversed={false}
            />
          </div>

          {/* Chapter 03: Campus Copilot — Accessible Knowledge Network */}
          <div id="project-campus-copilot">
            <ProjectStoryChapter
              project={campusProject}
              chapterIndex={3}
              layoutVariant="wide-asymmetric"
              isReversed={true}
            />
          </div>

          {/* Chapter 04: Neuroverse 2K26 Website — Dynamic Web Architecture */}
          <div id="project-neuroverse-2k26-website">
            <ProjectStoryChapter
              project={neuroverseProject}
              chapterIndex={4}
              layoutVariant="editorial"
              isReversed={false}
            />
          </div>

          {/* Chapter 05: GADA Electronics — Cyber Commerce Concept */}
          <div id="project-gada-electronics">
            <ProjectStoryChapter
              project={gadaProject}
              chapterIndex={5}
              layoutVariant="editorial"
              isReversed={true}
            />
          </div>

          {/* Chapter 06: ArtBook AI — Creative Talent Discovery */}
          <div id="project-artbook-ai">
            <ProjectStoryChapter
              project={artbookProject}
              chapterIndex={6}
              layoutVariant="editorial"
              isReversed={false}
            />
          </div>

          {/* Chapter 07: Eco-Friendly Planting System — Foundational Origin */}
          <div id="project-eco-friendly-planting-system">
            <ProjectStoryChapter
              project={ecoProject}
              chapterIndex={7}
              layoutVariant="editorial"
              isReversed={true}
            />
          </div>

        </div>

        {/* Bottom Call to Action for Complete Projects Page */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-card border border-border-hairline text-center space-y-4 shadow-chromatic">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cobalt font-bold uppercase tracking-wider">
            <Layers className="w-4 h-4" />
            <span>FULL TECHNICAL ARCHIVE</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
            Explore All Project Case Studies &amp; Architectural Schematics
          </h3>
          <p className="text-xs sm:text-sm text-muted max-w-xl mx-auto leading-relaxed font-sans">
            Filter projects by domain, inspect source code repositories, compare technical stacks, or consult CURIO for custom architectural inquiries.
          </p>
          <div className="pt-2">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cobalt text-white font-mono text-xs uppercase font-bold tracking-wider hover:opacity-95 transition-all shadow-md active:scale-95"
            >
              <span>View Filterable Projects Directory</span>
              <ArrowRight className="w-3.5 h-3.5 text-sunny" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
