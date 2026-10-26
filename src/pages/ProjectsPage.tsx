import React, { useState } from 'react';
import {
  ShieldCheck,
  Info,
  Bot
} from 'lucide-react';
import { verifiedProjects } from '../data/projects';
import { ProjectCard } from '../components/ui/ProjectCard';

export const ProjectsPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterCategories = [
    { id: 'all', label: 'All Projects (7)' },
    { id: 'cyber', label: 'Cybersecurity & Screening' },
    { id: 'health', label: 'Healthcare & Bed Analytics' },
    { id: 'ai', label: 'AI Chatbots & Prototypes' },
    { id: 'web', label: 'Web Design & Symposiums' },
    { id: 'eco', label: 'Sustainability & Early Science' }
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

  const falcon = verifiedProjects.find(p => p.slug === 'falcon-404')!;
  const arogya = verifiedProjects.find(p => p.slug === 'arogya-ai')!;
  const campus = verifiedProjects.find(p => p.slug === 'campus-copilot')!;
  const others = verifiedProjects.filter(p => !['falcon-404', 'arogya-ai', 'campus-copilot'].includes(p.slug));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

      {/* Editorial Page Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cobalt/10 border border-cobalt/25 text-cobalt text-[11px] font-mono tracking-widest uppercase font-semibold">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>PROJECTS, PROTOTYPES &amp; EXPERIMENTS</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif text-ink tracking-tight font-normal leading-[1.08]">
          &ldquo;Ideas are interesting. <br />
          <span className="italic font-normal bg-gradient-to-r from-cobalt via-violet to-sky-400 bg-clip-text text-transparent">Building them is better.&rdquo;</span>
        </h1>
        <p className="text-muted text-sm sm:text-base leading-relaxed font-sans">
          Every project below represents hands-on technical work, competitive hackathon problem-solving, or early scientific innovation. Each case study documents the problem, architecture, individual contribution, and verified limitations.
        </p>
      </div>

      {/* Scope & Integrity Note */}
      <div className="p-5 rounded-2xl border border-border-hairline bg-subtle/80 flex items-start gap-3.5 text-xs text-muted shadow-2xs">
        <Info className="w-4 h-4 text-cobalt shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="font-semibold text-ink block font-mono text-[11px] uppercase tracking-wide">
            Engineering Scope &amp; Integrity Note
          </span>
          <p className="leading-relaxed">
            Prototypes are distinguished from production services. Datasets used in hackathons (such as Arogya AI) were demonstration datasets and are not claimed as operational hospital records. All links without live URLs remain unpopulated.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-border-hairline pb-4">
        {filterCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedFilter(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
              selectedFilter === cat.id
                ? 'bg-ink text-paper font-semibold shadow-xs'
                : 'bg-surface dark:bg-card text-muted border border-border-hairline hover:border-cobalt/40 hover:text-ink'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Layout Option 1: Filtered Specific View */}
      {selectedFilter !== 'all' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        /* Layout Option 2: Curated Editorial Showcase (All Projects) */
        <div className="space-y-16">

          {/* 1. Flagship Full-Width Editorial Spread: FALCON-404 */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-cobalt font-bold">
              <span>01 // FLAGSHIP CYBERSECURITY CASE STUDY</span>
              <span className="text-muted">SMART INDIA HACKATHON 2026</span>
            </div>
            <ProjectCard project={falcon} featuredLayout={true} />
          </div>

          {/* 2. Asymmetric Dual Spread: Arogya AI & Campus Copilot */}
          <div className="space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-widest text-coral font-bold">
              02 // ADVANCED PROTOTYPING &amp; SYSTEMS
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-7">
                <ProjectCard project={arogya} />
              </div>
              <div className="lg:col-span-5">
                <ProjectCard project={campus} />
              </div>
            </div>
          </div>

          {/* 3. Varied Grid: Web, Creative & Academic Prototypes */}
          <div className="space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-widest text-muted font-bold">
              03 // COMPETITIONS, WEB ARCHITECTURES &amp; EARLY SCIENCE
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {others.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

        </div>
      )}

      {/* Interactive AI Inquiries Bottom Prompt */}
      <div className="p-8 rounded-3xl bg-card border border-border-hairline hover:border-border-medium transition-all text-center space-y-4 shadow-sm tech-card">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-cobalt font-semibold uppercase tracking-wider">
          <Bot className="w-4 h-4" />
          <span>Need a customized technical walkthrough?</span>
        </div>
        <h3 className="font-serif text-2xl font-bold text-ink">
          Ask CURIO — Personal Portfolio Guide
        </h3>
        <p className="text-xs text-muted max-w-md mx-auto leading-relaxed">
          Ask questions like &ldquo;Compare FALCON-404 and Arogya AI&rdquo; or &ldquo;What did Harshad implement in Neuroverse 2K26?&rdquo; for instant grounded answers.
        </p>
      </div>

    </div>
  );
};
