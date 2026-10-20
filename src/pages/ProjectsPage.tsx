import React, { useState } from 'react';
import { ShieldCheck, Info } from 'lucide-react';
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

  const flagship = filteredProjects.find(p => p.slug === 'falcon-404');
  const others = filteredProjects.filter(p => p.slug !== 'falcon-404');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">

      {/* Editorial Page Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-subtle border border-black/[0.08] dark:border-white/[0.08] text-muted text-[11px] font-mono tracking-widest uppercase font-semibold">
          <ShieldCheck className="w-3.5 h-3.5 text-cobalt" />
          <span>PROJECTS, PROTOTYPES &amp; EXPERIMENTS</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif text-ink tracking-tight font-normal leading-[1.08]">
          &ldquo;Ideas are interesting. <br />
          <span className="italic font-normal text-cobalt">Building them is better.&rdquo;</span>
        </h1>
        <p className="text-muted text-sm sm:text-base leading-relaxed">
          Every project below represents hands-on technical work, competitive hackathon problem-solving, or early scientific innovation. Each case study documents the problem, architecture, individual contribution, and verified limitations.
        </p>
      </div>

      {/* Honest Scope Disclosure Note */}
      <div className="p-5 rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-subtle/80 flex items-start gap-3.5 text-xs text-muted">
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
      <div className="flex flex-wrap gap-2 border-b border-black/[0.08] dark:border-white/[0.08] pb-4">
        {filterCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedFilter(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
              selectedFilter === cat.id
                ? 'bg-ink text-paper font-semibold shadow-xs'
                : 'bg-surface text-muted border border-black/[0.08] dark:border-white/[0.08] hover:border-black/[0.2] dark:hover:border-white/[0.2] hover:text-ink'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Flagship Highlight (when All or Cyber filter is selected) */}
      {flagship && (selectedFilter === 'all' || selectedFilter === 'cyber') && (
        <div className="space-y-3">
          <div className="text-[10px] font-mono uppercase tracking-widest text-cobalt font-bold px-1">
            FEATURED FLAGSHIP CASE STUDY
          </div>
          <ProjectCard project={flagship} featuredLayout={true} />
        </div>
      )}

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {(selectedFilter === 'all' || selectedFilter === 'cyber' ? others : filteredProjects).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

    </div>
  );
};
