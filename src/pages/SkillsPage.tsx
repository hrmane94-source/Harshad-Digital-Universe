import React, { useState } from 'react';
import {
  Wrench,
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
        return 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20 font-bold';
      case 'Fundamentals Known':
        return 'bg-cobalt/10 text-cobalt border-cobalt/20 font-semibold';
      case 'Learning':
        return 'bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20 font-semibold';
      case 'Used via AI-Assisted Dev':
        return 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20 font-medium';
      case 'Demonstrated in Project':
        return 'bg-coral/10 text-coral border-coral/20 font-medium';
      default:
        return 'bg-subtle text-muted border-black/[0.06] dark:border-white/[0.08]';
    }
  };

  const filteredSkills = verifiedSkills.filter(s => {
    if (selectedCategory === 'all') return true;
    return s.category === selectedCategory;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

      {/* Editorial Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-subtle border border-black/[0.08] dark:border-white/[0.08] text-muted text-[11px] font-mono tracking-widest uppercase font-semibold">
          <Wrench className="w-3.5 h-3.5 text-cobalt" />
          <span>TECHNICAL COMPETENCIES &amp; HONEST PROFICIENCIES</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif text-ink tracking-tight font-normal leading-[1.08]">
          Technical Skills &amp; Tooling
        </h1>
        <p className="text-muted text-sm sm:text-base leading-relaxed">
          Transparent technical capabilities categorized by depth of knowledge. No arbitrary percentage bars or exaggerated claims—clear distinctions between independent fundamentals, active study, and AI-assisted engineering implementations.
        </p>
      </div>

      {/* Honest Attribution Policy */}
      <div className="p-5 rounded-2xl bg-subtle/80 border border-black/[0.08] dark:border-white/[0.08] flex items-start gap-3.5 text-xs text-muted">
        <Info className="w-4 h-4 text-cobalt shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="font-semibold text-ink block font-mono text-[11px] uppercase tracking-wide">
            Honest Proficiency Philosophy
          </span>
          <p className="leading-relaxed">
            Harshad builds functional full-stack applications with high velocity using modern AI assistance (vibe coding, Google AI Studio, Lovable, Claude). However, he does not claim independent master-level expertise in languages he is still learning (such as C through the college curriculum or complex backend architecture). This page reflects that exact truth.
          </p>
        </div>
      </div>

      {/* Category Filter Chips */}
      <div className="flex flex-wrap gap-2 border-b border-black/[0.08] dark:border-white/[0.08] pb-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-ink text-paper font-semibold shadow-xs'
                : 'bg-surface text-muted border border-black/[0.08] dark:border-white/[0.08] hover:border-black/[0.2] dark:hover:border-white/[0.2] hover:text-ink'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredSkills.map((skill) => (
          <article
            key={skill.id}
            className="p-6 sm:p-7 rounded-2xl bg-surface border border-black/[0.08] dark:border-white/[0.1] space-y-3.5 shadow-xs hover:border-black/[0.2] dark:hover:border-white/[0.2] transition-colors"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <span className="text-[10px] font-mono text-muted uppercase tracking-wider block mb-0.5">
                  {skill.category}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink tracking-tight">
                  {skill.name}
                </h3>
              </div>

              <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono border ${getProficiencyBadge(skill.proficiencyLevel)} shrink-0`}>
                {skill.proficiencyLevel}
              </span>
            </div>

            <p className="text-xs text-muted leading-relaxed">
              {skill.description}
            </p>

            {skill.projectsReferenced && skill.projectsReferenced.length > 0 && (
              <div className="pt-2 border-t border-black/[0.06] dark:border-white/[0.08] text-[10px] font-mono text-muted flex items-center gap-1.5">
                <span className="text-faint">Referenced In:</span>
                <span className="text-cobalt font-medium">{skill.projectsReferenced.join(', ')}</span>
              </div>
            )}
          </article>
        ))}
      </div>

      {/* Tools & Ecosystem */}
      <section className="p-8 sm:p-10 rounded-3xl bg-surface border border-black/[0.08] dark:border-white/[0.1] space-y-5 shadow-xs">
        <div className="space-y-1">
          <span className="text-[11px] font-mono uppercase tracking-widest text-cobalt font-bold">
            TOOLING &amp; WORKFLOW ECOSYSTEM
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink tracking-tight">
            Software, Development Environments &amp; Utility Stack
          </h2>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {toolsUsedList.map((tool) => (
            <span
              key={tool}
              className="px-3.5 py-1.5 rounded-xl bg-subtle border border-black/[0.06] dark:border-white/[0.08] text-xs font-mono text-ink font-medium hover:border-black/[0.2] transition-colors"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

    </div>
  );
};
