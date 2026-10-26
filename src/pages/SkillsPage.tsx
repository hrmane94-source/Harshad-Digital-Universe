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
        return 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/25 font-bold';
      case 'Fundamentals Known':
        return 'bg-cobalt/10 text-cobalt border-cobalt/25 font-semibold';
      case 'Learning':
        return 'bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/25 font-semibold';
      case 'Used via AI-Assisted Dev':
        return 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/25 font-medium';
      case 'Demonstrated in Project':
        return 'bg-coral/10 text-coral border-coral/25 font-medium';
      default:
        return 'bg-subtle text-muted border-border-hairline';
    }
  };

  const filteredSkills = verifiedSkills.filter(s => {
    if (selectedCategory === 'all') return true;
    return s.category === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E8F8F1] via-[#EAF3FF] to-[#D8F6F0] dark:from-paper dark:via-paper dark:to-paper transition-colors duration-250">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* Editorial Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cobalt/10 border border-cobalt/25 text-cobalt text-[11px] font-mono tracking-widest uppercase font-semibold">
            <Wrench className="w-3.5 h-3.5 text-mint" />
            <span>TECHNICAL COMPETENCIES &amp; HONEST PROFICIENCIES</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif text-ink tracking-tight font-normal leading-[1.08]">
            Technical Skills &amp; <span className="italic font-normal bg-gradient-to-r from-cobalt via-violet to-sky-400 bg-clip-text text-transparent">Tooling</span>
          </h1>
          <p className="text-muted text-sm sm:text-base leading-relaxed">
            Transparent technical capabilities categorized by depth of knowledge. No arbitrary percentage bars or exaggerated claims—clear distinctions between independent fundamentals, active study, and AI-assisted engineering implementations.
          </p>
        </div>

        {/* Honest Attribution Policy */}
        <div className="p-5 rounded-2xl bg-white dark:bg-card border border-border-hairline flex items-start gap-3.5 text-xs text-muted shadow-xs">
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
        <div className="flex flex-wrap gap-2 border-b border-border-hairline pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-ink text-white font-semibold shadow-xs'
                  : 'bg-white dark:bg-card text-muted border border-border-hairline hover:border-cobalt/40 hover:text-ink shadow-2xs hover:shadow-mint'
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
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-card border border-border-hairline space-y-3.5 shadow-xs hover:border-mint/50 hover:shadow-mint hover:-translate-y-0.5 transition-all duration-200"
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
                <div className="pt-2 border-t border-border-hairline text-[10px] font-mono text-muted flex items-center gap-1.5">
                  <span className="text-faint">Referenced In:</span>
                  <span className="text-cobalt font-medium">{skill.projectsReferenced.join(', ')}</span>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Tools & Ecosystem */}
        <section className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-card border border-border-hairline hover:border-cobalt/30 transition-all space-y-5 shadow-mint tech-card">
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
                className="px-3.5 py-1.5 rounded-xl bg-subtle border border-border-hairline text-xs font-mono text-ink font-medium hover:border-border-medium hover:text-cobalt transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
