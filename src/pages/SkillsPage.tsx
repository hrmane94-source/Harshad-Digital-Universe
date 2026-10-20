import React, { useState } from 'react';
import { 
  Wrench, 
  Sparkles, 
  Info
} from 'lucide-react';
import { verifiedSkills, toolsUsedList } from '../data/skills';
import type { SkillProficiency } from '../types/portfolio';

export const SkillsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'Foundations', label: 'Foundations' },
    { id: 'Currently Learning', label: 'Currently Learning' },
    { id: 'Cybersecurity Foundations', label: 'Cybersecurity Foundations' },
    { id: 'AI-Assisted Development Tools', label: 'AI Tooling & Vibe Coding' },
    { id: 'Languages & Frameworks Explored', label: 'Frameworks Explored' },
  ];

  const getProficiencyBadge = (level: SkillProficiency) => {
    switch (level) {
      case 'Proficient':
        return 'bg-emerald-950 text-emerald-300 border-emerald-700';
      case 'Fundamentals Known':
        return 'bg-blue-950 text-blue-300 border-blue-700';
      case 'Learning':
        return 'bg-purple-950 text-purple-300 border-purple-700 animate-pulse';
      case 'Used via AI-Assisted Dev':
        return 'bg-cyan-950 text-cyan-300 border-cyan-700';
      case 'Demonstrated in Project':
        return 'bg-amber-950 text-amber-300 border-amber-700';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  const filteredSkills = verifiedSkills.filter(s => {
    if (selectedCategory === 'all') return true;
    return s.category === selectedCategory;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-300 text-xs font-mono">
          <Wrench className="w-3.5 h-3.5" />
          <span>TECHNICAL COMPETENCIES &amp; HONEST PROFICIENCIES</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
          Technical Skills &amp; Tooling
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Transparent technical capabilities categorized by depth of knowledge. No arbitrary percentage bars or exaggerated claims—clear distinctions between independent fundamentals, active study, and AI-assisted engineering implementations.
        </p>
      </div>

      {/* Honest Attribution Policy */}
      <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5 text-xs text-slate-300">
        <Info className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
        <div className="space-y-1.5">
          <span className="font-semibold text-white block">Honest Proficiency Philosophy</span>
          <p className="leading-relaxed text-slate-400">
            Harshad builds functional full-stack applications with high velocity using modern AI assistance (vibe coding, Google AI Studio, Lovable, Claude). However, he does not claim independent master-level expertise in languages he is still learning (such as C through the college curriculum or complex backend architecture). This page reflects that exact truth.
          </p>
        </div>
      </div>

      {/* Category Filter Chips */}
      <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredSkills.map((skill) => (
          <div
            key={skill.id}
            className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3 hover:border-slate-700 transition-colors"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="text-lg font-heading font-bold text-white">
                  {skill.name}
                </h3>
                <span className="text-xs font-mono text-slate-400">
                  {skill.category}
                </span>
              </div>

              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold border ${getProficiencyBadge(skill.proficiencyLevel)}`}>
                {skill.proficiencyLevel}
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {skill.description}
            </p>

            {skill.projectsReferenced && skill.projectsReferenced.length > 0 && (
              <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center gap-1.5 text-[11px] font-mono">
                <span className="text-slate-400">Referenced in:</span>
                {skill.projectsReferenced.map((p, idx) => (
                  <span key={idx} className="text-cyan-300 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                    {p}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* AI Developer Tooling Ecosystem */}
      <section className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-cyan-400">
            <Sparkles className="w-5 h-5" />
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-white">
              Tools &amp; Environments Used in Development
            </h2>
          </div>
          <p className="text-xs text-slate-400 font-mono">
            * Platforms and utilities utilized during hackathon sprints and project prototyping.
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {toolsUsedList.map((tool) => (
            <span
              key={tool}
              className="px-3.5 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-200 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

    </div>
  );
};
