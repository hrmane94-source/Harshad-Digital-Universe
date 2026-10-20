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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      
      {/* Page Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-300 text-xs font-mono">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>VERIFIED ENGINEERING CASE STUDIES</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
          Practical Project Portfolio
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Every project below represents hands-on technical work, competitive hackathon problem-solving, or early scientific innovation. Each case study documents the problem, architecture, individual contribution, and verified limitations.
        </p>
      </div>

      {/* Honest Scope Disclosure Note */}
      <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3 text-xs text-slate-300">
        <Info className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="font-semibold text-white block">Engineering Integrity Note</span>
          <p className="leading-relaxed text-slate-400">
            Prototypes are distinguished from production services. Datasets used in hackathons (such as Arogya AI) were demonstration datasets and are not claimed as operational hospital records. All links without live URLs remain unpopulated.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-4">
        {filterCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedFilter(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
              selectedFilter === cat.id
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

    </div>
  );
};
