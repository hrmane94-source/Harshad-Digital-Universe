import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';

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
    tagColor: 'text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800',
    context: 'Neuroverse 2K26 // ADCET Ashta',
    title: 'PixelCraft National Web Contest (2nd Place)',
    description: 'Secured 2nd place in a national 2-round web engineering challenge building GADA ELECTRONICS and the official Neuroverse 2K26 symposium website under timed evaluation.',
    badge: 'National Runner-Up'
  },
  {
    id: 'entry-sih',
    category: 'hackathons',
    tag: 'SIH 2026',
    tagColor: 'text-cobalt bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800',
    context: 'Team Falcon (Lead & Sole Developer)',
    title: 'Smart India Hackathon 2026 — FALCON-404',
    description: 'AI-based fake identity and document screening system for Ministry of Education & AICTE (Problem Statement ID: 26188). Evaluation pending as of October 2026.',
    badge: 'National Hackathon'
  },
  {
    id: 'entry-seva-first',
    category: 'hackathons',
    tag: 'DEMO',
    tagColor: 'text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800',
    context: 'October 2026',
    title: 'Seva First Innovation Challenge — Live Demonstration',
    description: 'Demonstrated live client-side forensic screening pipeline: OCR text parsing, Error Level Analysis, and privacy masking for FALCON-404.',
    badge: 'Innovation Challenge'
  },
  {
    id: 'entry-tantraparv',
    category: 'hackathons',
    tag: 'DEMO',
    tagColor: 'text-purple-800 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-800',
    context: 'Sharad Institute of Technology, Yadrav',
    title: 'Tantraparv 2026 — Campus Copilot',
    description: 'Presented an autonomous campus academic assistant capable of timetable parsing and semantic curriculum retrieval.',
    badge: 'State Hackathon'
  },
  {
    id: 'entry-ssc-topper',
    category: 'achievements',
    tag: 'ACADEMIC TOPPER',
    tagColor: 'text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800',
    context: 'Class 10 SSC Board',
    title: 'SSC Board Subject Topper (89.20% Overall)',
    description: 'Subject topper in Mathematics, Hindi, and Marathi across the school with 97/100 top mark in mathematics.',
    badge: 'Subject Honors'
  },
  {
    id: 'entry-head-boy',
    category: 'leadership',
    tag: 'LEADERSHIP',
    tagColor: 'text-sky-800 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/40 border-sky-200 dark:border-sky-800',
    context: 'Padua High School, Mumbai',
    title: 'School Head Boy (Two Consecutive Terms)',
    description: 'Elected Head Boy for two consecutive academic years (Classes 9 and 10), representing 1,200+ students and coordinating school events.',
    badge: 'Institutional Head'
  },
  {
    id: 'entry-barc-delegations',
    category: 'leadership',
    tag: 'SCIENTIFIC STUDY',
    tagColor: 'text-indigo-800 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-800',
    context: 'Bhabha Atomic Research Centre (BARC)',
    title: 'Science Day Delegations to BARC (Two Editions)',
    description: 'Selected to represent Padua High School in educational delegations to India\'s premier nuclear research facility on National Science Day.',
    badge: 'Scientific Delegation'
  },
  {
    id: 'entry-ncsc',
    category: 'achievements',
    tag: 'FINALIST',
    tagColor: 'text-lime-800 dark:text-lime-300 bg-lime-50 dark:bg-lime-950/40 border-lime-200 dark:border-lime-800',
    context: 'National Children\'s Science Congress (Class 8)',
    title: 'NCSC District Level Science Finalist',
    description: 'Researched and built a functional eco-friendly seed planting mechanism using accessible agricultural mechanical principles.',
    badge: 'District Finalist'
  }
];

export const StudioArchive: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ArchiveFilter>('all');

  const filteredEntries = activeFilter === 'all'
    ? ledgerEntries
    : ledgerEntries.filter(e => e.category === activeFilter);

  return (
    <section 
      id="chapter-05" 
      className="py-20 sm:py-32 border-b border-slate-200/90 dark:border-white/10 bg-surface text-ink relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-5">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cobalt uppercase font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block animate-pulse" />
              <span className="text-ink">SECTION 06</span>
              <span className="text-slate-300 dark:text-slate-700">//</span>
              <span>ARCHIVE OF MILESTONES &amp; RECOGNITION</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-ink tracking-tight">
              Verified outcomes, <span className="font-bold text-cobalt italic">competitive builds,</span> &amp; leadership.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans max-w-xl font-medium">
              An unembellished record of competitive recognition, hackathon demonstrations, academic subject leadership, and institutional responsibilities.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/achievements"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-paper border border-slate-300 dark:border-white/15 text-xs font-mono font-bold text-ink hover:text-cobalt hover:border-cobalt transition-colors shadow-2xs"
            >
              <span>View All Achievements</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {[
            { id: 'all', label: 'Complete Ledger', count: ledgerEntries.length },
            { id: 'achievements', label: 'Awards & Contests', count: ledgerEntries.filter(e => e.category === 'achievements').length },
            { id: 'hackathons', label: 'Hackathons', count: ledgerEntries.filter(e => e.category === 'hackathons').length },
            { id: 'leadership', label: 'Leadership', count: ledgerEntries.filter(e => e.category === 'leadership').length }
          ].map(f => (
            <button
              key={f.id}
              type="button"
              onClick={() => setActiveFilter(f.id as ArchiveFilter)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-colors shrink-0 flex items-center gap-2 cursor-pointer ${
                activeFilter === f.id
                  ? 'bg-ink text-paper font-bold shadow-xs'
                  : 'bg-paper text-muted hover:text-ink border border-slate-200 dark:border-white/10'
              }`}
            >
              <span>{f.label}</span>
              <span className={`px-1.5 py-0.2 rounded text-[10px] ${activeFilter === f.id ? 'bg-white/20 text-paper' : 'bg-slate-100 dark:bg-white/5 text-muted'}`}>
                {f.count}
              </span>
            </button>
          ))}
        </div>

        {/* High-Clarity Archival Ledger Table */}
        <div className="border border-slate-200 dark:border-white/10 rounded-2xl bg-paper overflow-hidden shadow-xs">
          <div className="divide-y divide-slate-100 dark:divide-white/5">
            {filteredEntries.map((entry, index) => (
              <div 
                key={entry.id}
                className="p-5 sm:p-6 hover:bg-slate-50/60 dark:hover:bg-white/[0.02] transition-colors grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
              >
                {/* Index & Tag (3 cols) */}
                <div className="md:col-span-3 flex items-center gap-3">
                  <span className="font-mono text-xs text-muted font-bold">
                    #{String(index + 1).padStart(2, '0')}
                  </span>
                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold border ${entry.tagColor}`}>
                    {entry.tag}
                  </span>
                </div>

                {/* Title & Context (6 cols) */}
                <div className="md:col-span-6 space-y-1">
                  <span className="text-[11px] font-mono text-muted block">
                    {entry.context}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-ink">
                    {entry.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                    {entry.description}
                  </p>
                </div>

                {/* Badge & Verification Status (3 cols) */}
                <div className="md:col-span-3 flex md:justify-end items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono text-muted">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>{entry.badge}</span>
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
