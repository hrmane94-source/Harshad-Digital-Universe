import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type ArchiveFilter = 'all' | 'achievements' | 'hackathons' | 'leadership';

interface LedgerEntry {
  id: string;
  category: 'achievements' | 'hackathons' | 'leadership';
  tag: string;
  tagColor: string;
  context: string;
  title: string;
  description: string;
  badge: string;
}

const ledgerEntries: LedgerEntry[] = [
  {
    id: 'entry-pixelcraft',
    category: 'achievements',
    tag: 'RUNNER-UP',
    tagColor: 'text-amber-600 dark:text-amber-400',
    context: 'Neuroverse 2K26 // ADCET Ashta',
    title: 'PixelCraft National Web Contest (2nd Place)',
    description: 'Secured 2nd place in a national 2-round web engineering challenge building GADA ELECTRONICS and the official Neuroverse 2K26 symposium website under timed evaluation.',
    badge: 'National Runner-Up'
  },
  {
    id: 'entry-sih',
    category: 'hackathons',
    tag: 'SIH 2026',
    tagColor: 'text-cobalt',
    context: 'Team Falcon (Lead & Sole Developer)',
    title: 'Smart India Hackathon 2026 — FALCON-404',
    description: 'AI-based fake identity and document screening system for Ministry of Education & AICTE (Problem Statement ID: 26188). Evaluation pending as of October 2026.',
    badge: 'National Hackathon'
  },
  {
    id: 'entry-seva-first',
    category: 'hackathons',
    tag: 'DEMO',
    tagColor: 'text-emerald-600 dark:text-emerald-400',
    context: 'October 2026',
    title: 'Seva First Innovation Challenge — Live Demonstration',
    description: 'Demonstrated live client-side forensic screening pipeline: OCR text parsing, Error Level Analysis, and privacy masking for FALCON-404.',
    badge: 'Innovation Challenge'
  },
  {
    id: 'entry-tantraparv',
    category: 'hackathons',
    tag: 'DEMO',
    tagColor: 'text-purple-600 dark:text-purple-400',
    context: 'Sharad Institute of Technology, Yadrav',
    title: 'Tantraparv 2026 — Campus Copilot',
    description: 'Demonstrated campus AI assistant grounded on college curriculum, notices, and facilities with Team Error 404.',
    badge: 'Technical Fest'
  },
  {
    id: 'entry-founders-expo',
    category: 'hackathons',
    tag: 'EXPO',
    tagColor: 'text-cobalt',
    context: 'E-Cell ADCET (7 October 2026)',
    title: 'Founder\'s Expo — ArtBook AI Software Concept',
    description: 'Presented artist discovery and digital booking prototype to entrepreneurial evaluation panel.',
    badge: 'Entrepreneurship Expo'
  },
  {
    id: 'entry-ssc-topper',
    category: 'achievements',
    tag: 'TOPPER',
    tagColor: 'text-sky-600 dark:text-sky-400',
    context: 'Padua High School // SSC Board 2024',
    title: 'Subject Topper in Mathematics, Hindi & Marathi',
    description: 'Achieved highest scores in Mathematics, Hindi, and Marathi in the Class 10 SSC board examinations.',
    badge: 'Academic Distinction'
  },
  {
    id: 'entry-head-boy',
    category: 'leadership',
    tag: 'LEADERSHIP',
    tagColor: 'text-purple-600 dark:text-purple-400',
    context: 'Padua High School (2022 – 2024)',
    title: 'School Head Boy (Two Consecutive Years)',
    description: 'Elected Head Boy across Classes 9 and 10, leading student body assemblies, discipline, and coordinating Annual Day events twice.',
    badge: 'Student Governance'
  },
  {
    id: 'entry-barc',
    category: 'leadership',
    tag: 'DELEGATION',
    tagColor: 'text-amber-600 dark:text-amber-400',
    context: 'Bhabha Atomic Research Centre, Trombay',
    title: 'BARC National Science Day Educational Visits',
    description: 'Selected twice (Classes 9 and 10) for educational science exposure visits to India\'s premier nuclear research establishment.',
    badge: 'National Research'
  }
];

export const AchievementArchiveChapter: React.FC = () => {
  const [filter, setFilter] = useState<ArchiveFilter>('all');

  const filteredEntries = filter === 'all'
    ? ledgerEntries
    : ledgerEntries.filter(e => e.category === filter);

  return (
    <section 
      id="chapter-05" 
      className="py-20 sm:py-32 border-b border-black/[0.08] dark:border-white/[0.08] bg-paper relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Folio Chapter Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-black/[0.08] dark:border-white/[0.08] pb-6">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cobalt uppercase font-bold">
              <span className="w-2 h-2 rounded-full bg-cobalt inline-block" />
              <span>CHAPTER 05 // ARCHIVE OF MILESTONES</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink tracking-tight">
              Verified outcomes, competitive builds, &amp; leadership.
            </h2>
            <p className="text-xs sm:text-sm text-muted font-sans max-w-xl">
              An unembellished record of competitive recognition, hackathon demonstrations, academic subject leadership, and institutional responsibilities.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/achievements"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-subtle border border-black/[0.08] dark:border-white/[0.1] text-xs font-mono font-semibold text-ink hover:text-cobalt transition-colors"
            >
              <span>View All Achievements</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {[
            { id: 'all', label: 'All Records', count: ledgerEntries.length },
            { id: 'achievements', label: 'Competitive Awards', count: ledgerEntries.filter(e => e.category === 'achievements').length },
            { id: 'hackathons', label: 'Hackathons & Symposiums', count: ledgerEntries.filter(e => e.category === 'hackathons').length },
            { id: 'leadership', label: 'Leadership & Delegations', count: ledgerEntries.filter(e => e.category === 'leadership').length }
          ].map(tab => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id as ArchiveFilter)}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono shrink-0 transition-all cursor-pointer flex items-center gap-2 ${
                filter === tab.id
                  ? 'bg-ink text-paper font-semibold shadow-xs'
                  : 'bg-subtle text-muted hover:text-ink border border-black/[0.06] dark:border-white/[0.08]'
              }`}
            >
              <span>{tab.label}</span>
              <span className="text-[10px] opacity-70 px-1.5 py-0.5 rounded-md bg-black/10 dark:bg-white/10">
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Featured Flagship Milestones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Milestone 01: PixelCraft Runner-Up */}
          <div className="bg-surface rounded-2xl p-6 sm:p-8 border border-amber-500/30 bg-gradient-to-br from-amber-500/[0.03] to-transparent space-y-4 relative group">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                01 // Web Competition
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 font-semibold">
                Runner-Up (2nd Place)
              </span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-ink">
              PixelCraft — Neuroverse 2K26
            </h3>

            <p className="text-xs sm:text-sm text-muted font-sans leading-relaxed">
              Two-round national web design competition: rapid development of GADA ELECTRONICS cyber store and the official Neuroverse 2K26 symposium website.
            </p>

            <div className="pt-2 border-t border-black/[0.06] dark:border-white/[0.06] text-[11px] font-mono text-faint flex items-center justify-between">
              <span>ADCET Ashta</span>
              <span>2026</span>
            </div>
          </div>

          {/* Milestone 02: SSC Subject Topper */}
          <div className="bg-surface rounded-2xl p-6 sm:p-8 border border-sky-500/30 bg-gradient-to-br from-sky-500/[0.03] to-transparent space-y-4 relative group">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                02 // Academic Excellence
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 font-semibold">
                Class 10 SSC
              </span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-ink">
              Subject Topper in Mathematics, Hindi &amp; Marathi
            </h3>

            <p className="text-xs sm:text-sm text-muted font-sans leading-relaxed">
              Achieved highest scores in Mathematics, Hindi, and Marathi in the SSC Maharashtra State Board examination at Padua High School.
            </p>

            <div className="pt-2 border-t border-black/[0.06] dark:border-white/[0.06] text-[11px] font-mono text-faint flex items-center justify-between">
              <span>Padua High School</span>
              <span>2024</span>
            </div>
          </div>

          {/* Milestone 03: School Head Boy */}
          <div className="bg-surface rounded-2xl p-6 sm:p-8 border border-purple-500/30 bg-gradient-to-br from-purple-500/[0.03] to-transparent space-y-4 relative group">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                03 // Student Governance
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 font-semibold">
                Two Consecutive Years
              </span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-ink">
              Elected School Head Boy
            </h3>

            <p className="text-xs sm:text-sm text-muted font-sans leading-relaxed">
              Represented student body across Classes 9 and 10, led school assemblies, coordinated discipline, and managed two school Annual Day celebrations.
            </p>

            <div className="pt-2 border-t border-black/[0.06] dark:border-white/[0.06] text-[11px] font-mono text-faint flex items-center justify-between">
              <span>Padua High School</span>
              <span>2022 – 2024</span>
            </div>
          </div>

        </div>

        {/* Detailed Chronological Archive Table */}
        <div className="bg-surface rounded-2xl border border-black/[0.08] dark:border-white/[0.08] overflow-hidden">
          <div className="p-4 sm:p-6 border-b border-black/[0.08] dark:border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cobalt" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-ink">
                Archive Ledger // Verified Public Record
              </span>
            </div>
            <span className="text-xs font-mono text-muted">
              Updated October 2026
            </span>
          </div>

          <div className="divide-y divide-black/[0.06] dark:divide-white/[0.06]">
            {filteredEntries.map(entry => (
              <div 
                key={entry.id}
                className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-subtle/50 transition-colors"
              >
                <div className="space-y-1 sm:max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-mono font-bold ${entry.tagColor}`}>
                      {entry.tag}
                    </span>
                    <span className="text-xs text-muted">•</span>
                    <span className="text-xs font-mono text-faint">
                      {entry.context}
                    </span>
                  </div>
                  <h4 className="font-serif text-lg font-bold text-ink">
                    {entry.title}
                  </h4>
                  <p className="text-xs text-muted leading-relaxed">
                    {entry.description}
                  </p>
                </div>
                <div className="text-right sm:shrink-0">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-subtle text-ink border border-black/[0.08] dark:border-white/[0.08]">
                    {entry.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
