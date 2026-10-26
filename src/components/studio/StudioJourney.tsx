import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, School } from 'lucide-react';

type JourneyCategory = 'all' | 'education' | 'milestones' | 'learning';

interface TimelineEvent {
  id: string;
  category: 'education' | 'milestones' | 'learning';
  period: string;
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  description: string;
  highlights: string[];
  link?: string;
  linkLabel?: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 'timeline-adcet',
    category: 'education',
    period: '2026 – 2030 (Current)',
    title: 'B.Tech in Computer Science & Engineering',
    subtitle: 'Annasaheb Dange College of Engineering and Technology (ADCET), Ashta',
    badge: 'First Year Undergraduate',
    badgeColor: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
    description: 'Pursuing foundational computer science curriculum covering algorithmic problem-solving, structured procedural C programming, discrete mathematics, and computational systems.',
    highlights: [
      'National-level PixelCraft web development competition Runner-up',
      'Smart India Hackathon 2026 team lead & sole developer for FALCON-404',
      'Founder\'s Expo software presentation for ArtBook AI',
      'AARAMBH Hackathon participant at WCE Sangli (Arogya AI)'
    ],
    link: '/education',
    linkLabel: 'View Education Details'
  },
  {
    id: 'timeline-falcon-sih',
    category: 'milestones',
    period: 'September – October 2026',
    title: 'FALCON-404: SIH 2026 & Seva First',
    subtitle: 'Sole Application Developer & Team Lead',
    badge: 'National Innovation',
    badgeColor: 'bg-blue-50 dark:bg-blue-950/40 text-cobalt border-blue-200 dark:border-blue-800',
    description: 'Designed and engineered an automated fake identity and document screening system combining browser-side OCR, Error Level Analysis, and privacy masking for Smart India Hackathon 2026.',
    highlights: [
      'Built multi-stage forensic analysis pipeline entirely client-side',
      'Presented live working demonstration at Seva First Innovation Challenge',
      'Evaluation pending for SIH 2026 (Problem Statement ID: 26188)'
    ],
    link: '/projects/falcon-404',
    linkLabel: 'Inspect Case Study'
  },
  {
    id: 'timeline-pixelcraft',
    category: 'milestones',
    period: '2026',
    title: 'PixelCraft Runner-Up (2nd Place)',
    subtitle: 'Neuroverse 2K26 National Technical Symposium',
    badge: '2nd Place Winner',
    badgeColor: 'bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-300 border-amber-200 dark:border-amber-800',
    description: 'Secured 2nd place in a national 2-round web engineering challenge building GADA ELECTRONICS and the official Neuroverse 2K26 symposium website under timed evaluation.',
    highlights: [
      'Round 1: Rapid responsive e-commerce build under strict time constraint',
      'Round 2: Full symposium platform featuring event schedule and registration flows',
      'Evaluated by faculty and external jury on code structure, design, and performance'
    ],
    link: '/achievements',
    linkLabel: 'View Certificate Record'
  },
  {
    id: 'timeline-systems-learning',
    category: 'learning',
    period: 'Daily Practice (2026)',
    title: 'Procedural C & Systems Engineering',
    subtitle: 'Independent Deep-Work Discipline',
    badge: 'Low-Level Focus',
    badgeColor: 'bg-purple-50 dark:bg-purple-950/40 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800',
    description: 'Committed to rigorous daily systems programming in procedural C to master memory safety, pointer arithmetic, data structures, and POSIX system mechanics.',
    highlights: [
      'Writing manual data structures without high-level library abstractions',
      'Benchmarking memory usage across stack vs heap allocations',
      'Bridging low-level systems comprehension with modern web frontend orchestration'
    ],
    link: '/skills',
    linkLabel: 'Inspect Skill Ledger'
  },
  {
    id: 'timeline-junior-college',
    category: 'education',
    period: '2024 – 2026',
    title: 'Junior College Science (HSC)',
    subtitle: 'Swami Vivekanand Junior College of Science (SWJC), Koparkhairane',
    badge: 'Completed HSC',
    badgeColor: 'bg-sky-50 dark:bg-sky-950/40 text-sky-900 dark:text-sky-300 border-sky-200 dark:border-sky-800',
    description: 'Completed higher secondary coursework in Physics, Chemistry, and Mathematics under the Maharashtra State Board, establishing analytical groundwork.',
    highlights: [
      'Built analytical foundations in physics, chemistry, and calculus',
      'Initiated self-directed study of algorithmic reasoning and programming languages',
      'Prepared for engineering entrance and computational systems studies'
    ],
    link: '/education',
    linkLabel: 'View Education Details'
  },
  {
    id: 'timeline-schooling',
    category: 'education',
    period: '2012 – 2024',
    title: 'Foundational Schooling & Student Leadership',
    subtitle: 'Padua High School, Mankhurd, Mumbai',
    badge: 'Leadership & Academic Topper',
    badgeColor: 'bg-coral/10 text-coral border-coral/20',
    description: 'Completed 10 years of foundational schooling with distinguished academic and student leadership records.',
    highlights: [
      'Subject Topper in Class 10 (SSC): Mathematics, Hindi, and Marathi (89.20% overall)',
      'Elected School Head Boy across two consecutive academic years (Classes 9 & 10)',
      'Overall Student Coordinator for School Annual Day celebrations (2 editions)',
      'Two educational delegations to Bhabha Atomic Research Centre (BARC) for Science Day',
      'District-Level participant in National Children\'s Science Congress (Class 8)'
    ]
  }
];

export const StudioJourney: React.FC = () => {
  const [activeTab, setActiveTab] = useState<JourneyCategory>('all');

  const filteredEvents = activeTab === 'all' 
    ? timelineEvents 
    : timelineEvents.filter(e => e.category === activeTab);

  return (
    <section 
      id="chapter-03" 
      className="py-20 sm:py-32 border-b border-border-hairline bg-gradient-to-b from-[#E8F8F1]/60 via-[#EAF3FF]/40 to-[#EDE5FF]/50 dark:from-paper dark:via-paper dark:to-paper text-ink relative overflow-hidden transition-colors duration-250"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-5">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-700 dark:text-emerald-400 uppercase font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
              <span className="text-ink">SECTION 04</span>
              <span className="text-slate-300 dark:text-slate-700">//</span>
              <span>THE CHRONOLOGY OF LEARNING &amp; CAMPUS LIFE</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-ink tracking-tight">
              Foundations, momentum, &amp; <span className="font-bold text-emerald-700 dark:text-emerald-400 italic">continuous learning.</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans max-w-xl font-medium">
              An unvarnished chronological narrative tracking engineering education at ADCET, practical hackathon builds, systems programming, and foundational schooling.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/journey"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-card border border-border-hairline text-xs font-mono font-bold text-ink hover:text-emerald-700 hover:border-emerald-600 transition-colors shadow-2xs"
            >
              <span>Full Journey Narrative</span>
              <ArrowRight className="w-3.5 h-3.5 text-emerald-600" />
            </Link>
          </div>
        </div>

        {/* View Mode Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {[
            { id: 'all', label: 'Complete Chronology', count: timelineEvents.length },
            { id: 'education', label: 'Academic Path', count: timelineEvents.filter(e => e.category === 'education').length },
            { id: 'milestones', label: 'Hackathons & Contests', count: timelineEvents.filter(e => e.category === 'milestones').length },
            { id: 'learning', label: 'Active Systems Focus', count: timelineEvents.filter(e => e.category === 'learning').length }
          ].map(tab => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as JourneyCategory)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-colors shrink-0 flex items-center gap-2 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-ink text-paper font-bold shadow-xs'
                  : 'bg-white dark:bg-card text-muted hover:text-ink border border-border-hairline hover:border-border-medium'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`px-1.5 py-0.2 rounded text-[10px] ${activeTab === tab.id ? 'bg-white/20 text-paper' : 'bg-subtle text-muted'}`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Swiss Architectural Timeline Cards */}
        <div className="space-y-6">
          {filteredEvents.map((event) => (
            <div 
              key={event.id}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-card border border-border-hairline shadow-sm hover:shadow-chromatic transition-all grid grid-cols-1 lg:grid-cols-12 gap-6 items-start tech-card"
            >
              {/* Left Column: Period & Badge (3 cols) */}
              <div className="lg:col-span-3 space-y-2">
                <span className="font-mono text-xs font-bold text-ink block">
                  {event.period}
                </span>
                <span className={`inline-block px-2.5 py-1 rounded-md text-[10px] font-mono font-bold border ${event.badgeColor}`}>
                  {event.badge}
                </span>
              </div>

              {/* Middle Column: Details & Narrative (7 cols) */}
              <div className="lg:col-span-7 space-y-3">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink">
                    {event.title}
                  </h3>
                  <p className="text-xs font-mono text-muted">
                    {event.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                  {event.description}
                </p>

                {event.highlights.length > 0 && (
                  <ul className="space-y-1.5 pt-2">
                    {event.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 font-sans">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:text-emerald-400 shrink-0 mt-1.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Right Column: Direct Jump Link (2 cols) */}
              <div className="lg:col-span-2 flex lg:justify-end pt-2 lg:pt-0">
                {event.link && (
                  <Link
                    to={event.link}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 hover:underline"
                  >
                    <span>{event.linkLabel || 'Details'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Institutional Campus & Scientific Delegations Showcase (Requirement 9) */}
        <div className="p-8 rounded-3xl bg-surface border-2 border-emerald-200/60 dark:border-emerald-900/40 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-white/10 pb-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-800 dark:text-emerald-300 font-bold">
              <School className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>AUTHENTIC ACADEMIC CAMPUSES &amp; RESEARCH EXPOSURE</span>
            </div>
            <span className="text-[11px] font-mono text-muted">
              MAHARASHTRA, INDIA
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Campus 01: ADCET */}
            <div className="p-5 rounded-2xl bg-paper border border-slate-200 dark:border-white/10 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-muted">
                <span className="font-bold text-ink">B.TECH CSE</span>
                <span className="text-emerald-600 font-bold">CURRENT</span>
              </div>
              <h4 className="font-serif text-lg font-bold text-ink">ADCET Ashta</h4>
              <p className="text-[11px] text-muted font-sans leading-relaxed">
                Autonomous engineering college affiliated with Shivaji University. Lead developer for Team Falcon.
              </p>
              <div className="flex items-center gap-1 text-[10px] font-mono text-muted pt-1">
                <MapPin className="w-3 h-3 text-coral" />
                <span>Ashta, Sangli</span>
              </div>
            </div>

            {/* Campus 02: SWJC */}
            <div className="p-5 rounded-2xl bg-paper border border-slate-200 dark:border-white/10 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-muted">
                <span className="font-bold text-ink">JUNIOR COLLEGE</span>
                <span>2024–2026</span>
              </div>
              <h4 className="font-serif text-lg font-bold text-ink">Swami Vivekanand JC</h4>
              <p className="text-[11px] text-muted font-sans leading-relaxed">
                Higher secondary coursework in Physics, Chemistry, and Mathematics under Maharashtra Board.
              </p>
              <div className="flex items-center gap-1 text-[10px] font-mono text-muted pt-1">
                <MapPin className="w-3 h-3 text-coral" />
                <span>Koparkhairane, Navi Mumbai</span>
              </div>
            </div>

            {/* Campus 03: Padua High School */}
            <div className="p-5 rounded-2xl bg-paper border border-slate-200 dark:border-white/10 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-muted">
                <span className="font-bold text-ink">SCHOOLING</span>
                <span className="text-sunny font-bold">89.20%</span>
              </div>
              <h4 className="font-serif text-lg font-bold text-ink">Padua High School</h4>
              <p className="text-[11px] text-muted font-sans leading-relaxed">
                Subject Topper in Class 10 (Math, Hindi, Marathi) and elected 2-term School Head Boy.
              </p>
              <div className="flex items-center gap-1 text-[10px] font-mono text-muted pt-1">
                <MapPin className="w-3 h-3 text-coral" />
                <span>Mankhurd, Mumbai</span>
              </div>
            </div>

            {/* Campus 04: BARC */}
            <div className="p-5 rounded-2xl bg-paper border border-slate-200 dark:border-white/10 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-muted">
                <span className="font-bold text-ink">RESEARCH</span>
                <span className="text-purple-600 font-bold">2 VISITS</span>
              </div>
              <h4 className="font-serif text-lg font-bold text-ink">BARC Science Days</h4>
              <p className="text-[11px] text-muted font-sans leading-relaxed">
                Selected for two educational delegations to Bhabha Atomic Research Centre for National Science Day.
              </p>
              <div className="flex items-center gap-1 text-[10px] font-mono text-muted pt-1">
                <MapPin className="w-3 h-3 text-coral" />
                <span>Trombay, Mumbai</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
