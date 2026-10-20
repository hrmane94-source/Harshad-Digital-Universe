import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, Award, Medal } from 'lucide-react';

type ArchiveFilter = 'all' | 'achievements' | 'hackathons' | 'leadership';

interface LedgerEntry {
  id: string;
  category: 'achievements' | 'hackathons' | 'leadership';
  tag: string;
  tagColor: string;
  tagBg: string;
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
    tagColor: 'text-amber-800',
    tagBg: 'bg-amber-100 border-amber-300',
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
    tagBg: 'bg-blue-100 border-blue-200',
    context: 'Team Falcon (Lead & Sole Developer)',
    title: 'Smart India Hackathon 2026 — FALCON-404',
    description: 'AI-based fake identity and document screening system for Ministry of Education & AICTE (Problem Statement ID: 26188). Evaluation pending as of October 2026.',
    badge: 'National Hackathon'
  },
  {
    id: 'entry-seva-first',
    category: 'hackathons',
    tag: 'DEMO',
    tagColor: 'text-emerald-800',
    tagBg: 'bg-emerald-100 border-emerald-300',
    context: 'October 2026',
    title: 'Seva First Innovation Challenge — Live Demonstration',
    description: 'Demonstrated live client-side forensic screening pipeline: OCR text parsing, Error Level Analysis, and privacy masking for FALCON-404.',
    badge: 'Innovation Challenge'
  },
  {
    id: 'entry-tantraparv',
    category: 'hackathons',
    tag: 'DEMO',
    tagColor: 'text-purple-800',
    tagBg: 'bg-purple-100 border-purple-300',
    context: 'Sharad Institute of Technology, Yadrav',
    title: 'Tantraparv 2026 — Campus Copilot',
    description: 'Demonstrated campus AI assistant grounded on college curriculum, notices, and facilities with Team Error 404.',
    badge: 'Technical Fest'
  },
  {
    id: 'entry-founders-expo',
    category: 'hackathons',
    tag: 'EXPO',
    tagColor: 'text-sky-800',
    tagBg: 'bg-sky-100 border-sky-300',
    context: 'E-Cell ADCET (7 October 2026)',
    title: 'Founder\'s Expo — ArtBook AI Software Concept',
    description: 'Presented artist discovery and digital booking prototype to entrepreneurial evaluation panel.',
    badge: 'Entrepreneurship Expo'
  },
  {
    id: 'entry-ssc-topper',
    category: 'achievements',
    tag: 'TOPPER',
    tagColor: 'text-teal-800',
    tagBg: 'bg-teal-100 border-teal-300',
    context: 'Padua High School // SSC Board 2024',
    title: 'Subject Topper in Mathematics, Hindi & Marathi',
    description: 'Achieved highest scores in Mathematics, Hindi, and Marathi in the Class 10 SSC board examinations.',
    badge: 'Academic Distinction'
  },
  {
    id: 'entry-head-boy',
    category: 'leadership',
    tag: 'LEADERSHIP',
    tagColor: 'text-orange-800',
    tagBg: 'bg-orange-100 border-orange-300',
    context: 'Padua High School (2022 – 2024)',
    title: 'School Head Boy (Two Consecutive Years)',
    description: 'Elected Head Boy across Classes 9 and 10, leading student body assemblies, discipline, and coordinating Annual Day events twice.',
    badge: 'Student Governance'
  },
  {
    id: 'entry-barc',
    category: 'leadership',
    tag: 'DELEGATION',
    tagColor: 'text-amber-800',
    tagBg: 'bg-amber-100 border-amber-300',
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
      className="py-20 sm:py-32 border-b border-slate-200/80 bg-gradient-to-b from-[#FAF8F5] via-[#FFFDF9] to-[#F8FAFC] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Folio Scene Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-5">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cobalt uppercase font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block animate-pulse" />
              <span>SCENE 06 // ARCHIVE OF MILESTONES</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
              Verified outcomes, competitive builds, &amp; leadership.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-sans max-w-xl font-medium">
              An unembellished record of competitive recognition, hackathon demonstrations, academic subject leadership, and institutional responsibilities.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/achievements"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-xs font-mono font-bold text-slate-800 hover:text-cobalt hover:border-cobalt transition-colors shadow-2xs"
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
                  ? 'bg-slate-900 text-white font-bold shadow-md'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300 shadow-2xs'
              }`}
            >
              <span>{tab.label}</span>
              <span className="text-[10px] opacity-75 px-1.5 py-0.5 rounded-md bg-black/10 dark:bg-white/10">
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Featured Flagship Milestones Grid in Bright Confident Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Milestone 01: PixelCraft Runner-Up */}
          <div className="bg-gradient-to-br from-amber-50 to-white rounded-3xl p-6 sm:p-8 border border-amber-200/90 space-y-4 shadow-sm hover:shadow-md transition-shadow relative group">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1.5">
                <Trophy className="w-3.5 h-3.5 text-amber-600" />
                <span>01 // Web Competition</span>
              </span>
              <span className="px-3 py-1 rounded-full text-[10px] font-mono bg-amber-100 text-amber-900 border border-amber-300 font-bold">
                Runner-Up (2nd Place)
              </span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-slate-900">
              PixelCraft — Neuroverse 2K26
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed font-medium">
              Two-round national web design competition: rapid development of GADA ELECTRONICS cyber store and the official Neuroverse 2K26 symposium website.
            </p>

            <div className="pt-3 border-t border-amber-200/60 text-[11px] font-mono text-slate-500 font-semibold flex items-center justify-between">
              <span>ADCET Ashta</span>
              <span>2026</span>
            </div>
          </div>

          {/* Milestone 02: SSC Subject Topper */}
          <div className="bg-gradient-to-br from-sky-50 to-white rounded-3xl p-6 sm:p-8 border border-sky-200/90 space-y-4 shadow-sm hover:shadow-md transition-shadow relative group">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-800 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-sky-600" />
                <span>02 // Academic Excellence</span>
              </span>
              <span className="px-3 py-1 rounded-full text-[10px] font-mono bg-sky-100 text-sky-900 border border-sky-300 font-bold">
                Class 10 SSC
              </span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-slate-900">
              Subject Topper in Mathematics, Hindi &amp; Marathi
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed font-medium">
              Achieved highest scores in Mathematics, Hindi, and Marathi in the SSC Maharashtra State Board examination at Padua High School.
            </p>

            <div className="pt-3 border-t border-sky-200/60 text-[11px] font-mono text-slate-500 font-semibold flex items-center justify-between">
              <span>Padua High School</span>
              <span>2024</span>
            </div>
          </div>

          {/* Milestone 03: School Head Boy */}
          <div className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-6 sm:p-8 border border-orange-200/90 space-y-4 shadow-sm hover:shadow-md transition-shadow relative group">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-800 flex items-center gap-1.5">
                <Medal className="w-3.5 h-3.5 text-orange-600" />
                <span>03 // Student Governance</span>
              </span>
              <span className="px-3 py-1 rounded-full text-[10px] font-mono bg-orange-100 text-orange-900 border border-orange-300 font-bold">
                Two Consecutive Years
              </span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-slate-900">
              Elected School Head Boy
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed font-medium">
              Represented student body across Classes 9 and 10, led school assemblies, coordinated discipline, and managed two school Annual Day celebrations.
            </p>

            <div className="pt-3 border-t border-orange-200/60 text-[11px] font-mono text-slate-500 font-semibold flex items-center justify-between">
              <span>Padua High School</span>
              <span>2022 – 2024</span>
            </div>
          </div>

        </div>

        {/* Detailed Chronological Archive Table in Clean White */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
          <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cobalt" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
                Archive Ledger // Verified Public Record
              </span>
            </div>
            <span className="text-xs font-mono text-slate-500 font-medium">
              Updated October 2026
            </span>
          </div>

          <div className="divide-y divide-slate-100">
            {filteredEntries.map(entry => (
              <div 
                key={entry.id}
                className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors"
              >
                <div className="space-y-1 sm:max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md border ${entry.tagBg} ${entry.tagColor}`}>
                      {entry.tag}
                    </span>
                    <span className="text-xs text-slate-400">&bull;</span>
                    <span className="text-xs font-mono text-slate-500 font-medium">
                      {entry.context}
                    </span>
                  </div>
                  <h4 className="font-serif text-lg font-bold text-slate-900">
                    {entry.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {entry.description}
                  </p>
                </div>
                <div className="text-right sm:shrink-0">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 font-semibold">
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
