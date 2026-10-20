import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Terminal, 
  Code2, 
  Cpu
} from 'lucide-react';

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
    badgeColor: 'bg-blue-100 text-cobalt border-blue-200',
    description: 'Pursuing foundational computer science curriculum covering algorithmic problem-solving, structured C programming, discrete mathematics, and computational systems.',
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
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
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
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
    description: 'Secured second place in a high-intensity national front-end competition across two rounds: rapid development of GADA ELECTRONICS cyber store and the official Neuroverse 2K26 event website.',
    highlights: [
      'Timed dual-round sprint testing UX architecture, responsive design, and performance',
      'Demonstrated high-speed component crafting under live evaluation'
    ],
    link: '/achievements',
    linkLabel: 'View Achievement'
  },
  {
    id: 'timeline-c-systems',
    category: 'learning',
    period: 'Active Daily Focus (2026)',
    title: 'Systems Fundamentals: C & Linux Internals',
    subtitle: 'Low-Level Architecture & Operating Systems Foundation',
    badge: 'Deep Study',
    badgeColor: 'bg-purple-100 text-purple-900 border-purple-300',
    description: 'Deliberately mastering memory management, pointers, bitwise operations, data structures in ANSI C, alongside Linux command-line environments and network protocol basics.',
    highlights: [
      'C standard library memory models, structs, and pointer arithmetic',
      'Linux process management, shell tooling, and file permission systems',
      'Grounded computer networking fundamentals (TCP/IP, sockets, HTTP/S)'
    ],
    link: '/skills',
    linkLabel: 'Explore Technical Skills'
  },
  {
    id: 'timeline-svjc',
    category: 'education',
    period: '2024 – 2026',
    title: 'Higher Secondary Certificate (HSC) — Science',
    subtitle: 'Swami Vivekanand Junior College of Science, Koparkhairane',
    badge: 'Completed',
    badgeColor: 'bg-slate-100 text-slate-800 border-slate-300',
    description: 'Rigorous coursework in Physics, Chemistry, and Higher Mathematics, establishing analytical discipline and algorithmic reasoning before entering university.',
    highlights: [
      'Advanced Mathematics, Calculus, and Analytical Physics foundations',
      'Transitioned curiosity into early programming exploration'
    ]
  },
  {
    id: 'timeline-padua',
    category: 'education',
    period: '2014 – 2024',
    title: 'Secondary School (SSC) & Head Boy Leadership',
    subtitle: 'Padua High School, Mankhurd, Mumbai',
    badge: 'Leadership & Academic Topper',
    badgeColor: 'bg-sky-100 text-sky-900 border-sky-300',
    description: 'Completed 10 years of foundational schooling with distinguished academic and student leadership records.',
    highlights: [
      'Subject Topper in Class 10 (SSC): Mathematics, Hindi, and Marathi',
      'Elected School Head Boy across two consecutive academic years (Classes 9 & 10)',
      'Overall Student Coordinator for School Annual Day celebrations (2 editions)',
      'Two educational delegations to Bhabha Atomic Research Centre (BARC) for Science Day',
      'District-Level participant in National Children\'s Science Congress (Class 8)'
    ]
  }
];

export const JourneyChapter: React.FC = () => {
  const [activeTab, setActiveTab] = useState<JourneyCategory>('all');

  const filteredEvents = activeTab === 'all' 
    ? timelineEvents 
    : timelineEvents.filter(e => e.category === activeTab);

  return (
    <section 
      id="chapter-03" 
      className="py-20 sm:py-32 border-b border-slate-200/80 bg-gradient-to-b from-[#FAF8F5] via-[#F8FAFC] to-[#FFFDF9] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Folio Scene Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-5">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cobalt uppercase font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
              <span>SCENE 04 // THE JOURNEY OF LEARNING</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
              Foundations, momentum, &amp; continuous learning.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-sans max-w-xl font-medium">
              An unvarnished chronological narrative tracking engineering education at ADCET, practical hackathon builds, systems programming, and applied AI exploration.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/journey"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-xs font-mono font-bold text-slate-800 hover:text-cobalt hover:border-cobalt transition-colors shadow-2xs"
            >
              <span>Full Journey Narrative</span>
              <ArrowRight className="w-3.5 h-3.5" />
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
              className={`px-3.5 py-2 rounded-xl text-xs font-mono shrink-0 transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === tab.id
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

        {/* Chronological Timeline Grid */}
        <div className="relative">
          {/* Vertical Architectural Connecting Line */}
          <div className="hidden md:block absolute left-[120px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-sky-400 via-cobalt to-emerald-400 pointer-events-none" />

          <div className="space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="space-y-8"
              >
                {filteredEvents.map((evt, idx) => (
                  <div 
                    key={evt.id}
                    className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start relative group"
                  >
                    {/* Date / Milestone Number Column */}
                    <div className="md:col-span-3 flex md:flex-col items-baseline md:items-end justify-between md:justify-start gap-2 text-right pr-0 md:pr-8">
                      <span className="text-2xl sm:text-3xl font-serif font-bold text-slate-400 group-hover:text-cobalt transition-colors">
                        0{idx + 1}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-600">
                        {evt.period}
                      </span>
                    </div>

                    {/* Milestone Pin Icon on Connecting Line (Desktop) */}
                    <div className="hidden md:flex absolute left-[114px] top-3.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-cobalt z-10 items-center justify-center group-hover:scale-125 transition-transform shadow-xs" />

                    {/* Content Editorial Card */}
                    <div className="md:col-span-9 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 hover:border-cobalt/40 transition-all shadow-sm hover:shadow-md space-y-4">
                      
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="space-y-1">
                          <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                            {evt.title}
                          </h3>
                          <p className="text-xs sm:text-sm font-sans font-medium text-slate-600">
                            {evt.subtitle}
                          </p>
                        </div>
                        <span className={`text-[11px] font-mono font-bold px-3 py-1 rounded-full border shadow-2xs ${evt.badgeColor}`}>
                          {evt.badge}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-700 font-sans leading-relaxed">
                        {evt.description}
                      </p>

                      {/* Verified Highlights Bullet Points */}
                      <div className="space-y-2 pt-3 border-t border-slate-100">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">
                          Key Verified Milestones
                        </span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-slate-600 font-medium">
                          {evt.highlights.map((highlight, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-cobalt mt-1.5 shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {evt.link && (
                        <div className="pt-2">
                          <Link
                            to={evt.link}
                            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-cobalt hover:underline"
                          >
                            <span>{evt.linkLabel || 'Read More'}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Technical Development Matrix: Systems vs Modern Web */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-6 border-t border-slate-200">
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cobalt font-bold">
              <Terminal className="w-4 h-4" />
              <span>01 // Low-Level Systems</span>
            </div>
            <h4 className="font-serif text-lg font-bold text-slate-900">
              C Foundations &amp; OS Concepts
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Studying structured systems programming in ANSI C, mastering pointers, manual dynamic memory management, and data structures.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {['ANSI C', 'Pointers', 'Memory Allocation', 'Data Structures', 'Linux Shell'].map(s => (
                <span key={s} className="px-2.5 py-1 rounded-lg bg-slate-50 text-[11px] font-mono text-slate-800 font-semibold border border-slate-200">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold">
              <Code2 className="w-4 h-4" />
              <span>02 // Modern Web Engineering</span>
            </div>
            <h4 className="font-serif text-lg font-bold text-slate-900">
              TypeScript &amp; Architecture
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Crafting fast, accessible client-side applications with React, Vite, Tailwind CSS, Framer Motion, and Supabase integration.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {['TypeScript', 'React 18', 'Tailwind CSS', 'Vite', 'Supabase SQL'].map(s => (
                <span key={s} className="px-2.5 py-1 rounded-lg bg-emerald-50 text-[11px] font-mono text-emerald-800 font-semibold border border-emerald-200">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-700 font-bold">
              <Cpu className="w-4 h-4" />
              <span>03 // Applied AI &amp; Forensics</span>
            </div>
            <h4 className="font-serif text-lg font-bold text-slate-900">
              Grounded Models &amp; OCR
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Building client-side forensics pipelines (Error Level Analysis), privacy-first redaction, and deterministic context-grounded AI guides.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {['Tesseract OCR', 'ELA Forensics', 'Prompt Guardrails', 'Gemini API', 'CURIO Engine'].map(s => (
                <span key={s} className="px-2.5 py-1 rounded-lg bg-purple-50 text-[11px] font-mono text-purple-800 font-semibold border border-purple-200">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
