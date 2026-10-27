import React, { useState } from 'react';
import {
  ShieldCheck,
  Info,
  Bot,
  Sparkles
} from 'lucide-react';
import { verifiedProjects } from '../data/projects';
import { ProjectsConstellation3D } from '../components/projects/ProjectsConstellation3D';
import { ProjectStoryChapter } from '../components/projects/ProjectStoryChapter';

export const ProjectsPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeConstellationSlug, setActiveConstellationSlug] = useState<string | null>(null);

  const filterCategories = [
    { id: 'all', label: 'All Projects (7)', count: 7 },
    { id: 'cyber', label: 'Cybersecurity & Trust', count: 1 },
    { id: 'health', label: 'Healthcare & Bed Analytics', count: 1 },
    { id: 'ai', label: 'AI Assistants & Prototypes', count: 2 },
    { id: 'web', label: 'Web Design & Symposiums', count: 2 },
    { id: 'eco', label: 'Early Science & Sustainability', count: 1 }
  ];

  const filteredProjects = verifiedProjects.filter(p => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'cyber') return p.domain.toLowerCase().includes('cyber') || p.slug === 'falcon-404';
    if (selectedFilter === 'health') return p.slug === 'arogya-ai';
    if (selectedFilter === 'ai') return p.slug === 'campus-copilot' || p.slug === 'artbook-ai';
    if (selectedFilter === 'web') return p.slug === 'neuroverse-2k26-website' || p.slug === 'gada-electronics';
    if (selectedFilter === 'eco') return p.slug === 'eco-friendly-planting-system';
    return true;
  });

  const handleConstellationSelect = (slug: string) => {
    setActiveConstellationSlug(slug);
    setSelectedFilter('all');
    setTimeout(() => {
      const el = document.getElementById(`chapter-${slug}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#EAF3FF] via-[#F4F1FF] to-[#EDE5FF]/40 dark:from-paper dark:via-paper dark:to-paper transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* ============================================================
            1. EDITORIAL HEADER & 3D INTERACTIVE CONSTELLATION
            ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center border-b border-border-hairline pb-14">
          
          {/* Left Column: Expressive Typography & Concept */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cobalt/10 border border-cobalt/25 text-cobalt text-[11px] font-mono tracking-widest uppercase font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>A UNIVERSE OF IDEAS, MADE REAL</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-[4.25rem] font-serif text-ink tracking-tight font-normal leading-[1.04]">
              Ideas are only <br />
              <span className="italic font-normal bg-gradient-to-r from-cobalt via-violet to-sky-400 bg-clip-text text-transparent">
                the beginning.
              </span> <br />
              <span className="font-bold text-ink">What matters is what we build.</span>
            </h1>

            <p className="text-muted text-sm sm:text-base leading-relaxed font-sans max-w-xl">
              A comprehensive chronicle of technical builds, national hackathon entries, applied AI experiments, and foundational science. Each chapter reflects the progression from curiosity to problem formulation, experimental prototyping, system assembly, and unembellished lessons learned.
            </p>

            {/* 5-Stage Storytelling Sequence Banner */}
            <div className="p-4 rounded-2xl bg-white dark:bg-card border border-border-hairline shadow-xs space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted font-bold block">
                STORYTELLING METHODOLOGY:
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
          </div>

          {/* Right Column: 3D Constellation Field */}
          <div className="lg:col-span-5 p-5 rounded-3xl bg-white dark:bg-card border border-border-hairline shadow-chromatic relative overflow-hidden">
            <div className="flex items-center justify-between pb-3 border-b border-border-hairline text-xs font-mono text-muted">
              <span className="font-bold text-ink flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cobalt" />
                <span>INTERACTIVE 3D CONSTELLATION</span>
              </span>
              <span className="text-[10px] text-cobalt font-semibold">CLICK NODE TO JUMP</span>
            </div>
            <ProjectsConstellation3D
              activeProjectSlug={activeConstellationSlug}
              onSelectProject={handleConstellationSelect}
              className="w-full h-[320px] sm:h-[350px]"
            />
          </div>

        </div>

        {/* Scope & Integrity Note (Zero Fabrication) */}
        <div className="p-5 rounded-2xl border border-border-hairline bg-white dark:bg-card flex items-start gap-3.5 text-xs text-muted shadow-xs">
          <Info className="w-4 h-4 text-cobalt shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-semibold text-ink block font-mono text-[11px] uppercase tracking-wide">
              Engineering Scope &amp; Non-Fabrication Standards
            </span>
            <p className="leading-relaxed font-sans">
              Prototypes are strictly distinguished from production systems. Datasets used in hackathons (such as Arogya AI) were synthetic demonstration datasets and are not claimed as operational hospital records. All source code repositories and project links without live deployments are transparently stated.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-border-hairline pb-4 overflow-x-auto scrollbar-none">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer flex items-center gap-2 ${
                selectedFilter === cat.id
                  ? 'bg-ink text-white font-semibold shadow-xs'
                  : 'bg-white dark:bg-card text-muted border border-border-hairline hover:border-cobalt/40 hover:text-ink shadow-2xs hover:shadow-chromatic'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                selectedFilter === cat.id ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-white/5 text-muted'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* ============================================================
            PROJECT CHAPTERS: EDITORIAL SEQUENCE WITH DISTINCT VISUAL SOULS
            ============================================================ */}
        <div className="space-y-14">
          {filteredProjects.map((project, idx) => (
            <div key={project.id} id={`chapter-${project.slug}`}>
              <ProjectStoryChapter
                project={project}
                chapterIndex={idx + 1}
                layoutVariant={project.importance === 'flagship' ? 'flagship' : 'wide-asymmetric'}
                isReversed={idx % 2 === 1}
              />
            </div>
          ))}
        </div>

        {/* Interactive AI Inquiries Bottom Prompt */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-card border border-border-hairline hover:border-cobalt/40 transition-all text-center space-y-4 shadow-chromatic tech-card">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cobalt font-semibold uppercase tracking-wider">
            <Bot className="w-4 h-4" />
            <span>Interactive Technical Inquiries</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
            Consult CURIO for Deep Architectural Comparisons
          </h3>
          <p className="text-xs sm:text-sm text-muted max-w-lg mx-auto leading-relaxed font-sans">
            Ask questions like &ldquo;Compare FALCON-404 and Arogya AI&rdquo; or &ldquo;What did Harshad implement in Neuroverse 2K26?&rdquo; for instant grounded answers derived exclusively from verified technical records.
          </p>
        </div>

      </div>
    </div>
  );
};
