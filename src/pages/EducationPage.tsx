import React from 'react';
import {
  GraduationCap,
  MapPin,
  Calendar,
  Award,
  CheckCircle2,
  Info
} from 'lucide-react';
import { verifiedEducation } from '../data/education';

export const EducationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F4F1FF] via-[#EAF3FF] to-[#EDE5FF]/40 dark:from-paper dark:via-paper dark:to-paper transition-colors duration-250">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cobalt/10 border border-cobalt/25 text-cobalt text-[11px] font-mono tracking-widest uppercase font-semibold">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>VERIFIED ACADEMIC RECORD</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif text-ink tracking-tight font-normal leading-[1.08]">
          Education <span className="italic font-normal bg-gradient-to-r from-cobalt via-violet to-sky-400 bg-clip-text text-transparent">History</span>
        </h1>
        <p className="text-muted text-sm sm:text-base leading-relaxed">
          Structured academic progression from foundational schooling at Padua High School through junior college science to current undergraduate engineering in Computer Science at ADCET Ashta.
        </p>
      </div>

      {/* Verified Academic Integrity Disclosure */}
      <div className="p-5 rounded-2xl bg-subtle/80 border border-border-hairline flex items-start gap-3.5 text-xs text-muted shadow-2xs">
        <Info className="w-4 h-4 text-cobalt shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="font-semibold text-ink block font-mono text-[11px] uppercase tracking-wide">
            Academic Integrity Policy
          </span>
          <p className="leading-relaxed">
            Per strict verification standards: No Class 10 or Class 12 percentage figures are manufactured. First-year engineering CGPA will be recorded and published once officially declared by the university.
          </p>
        </div>
      </div>

      {/* Education Timeline */}
      <div className="space-y-10">
        {verifiedEducation.map((edu, idx) => (
          <article
            key={edu.id}
            className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-card border border-border-hairline space-y-6 relative overflow-hidden shadow-xs hover:border-cobalt/40 hover:shadow-chromatic hover:-translate-y-0.5 transition-all duration-200"
          >
            {/* Top Accent Bar */}
            <div className={`absolute top-0 left-0 right-0 h-1.5 ${
              idx === 0 ? 'bg-cobalt' : idx === 1 ? 'bg-coral' : 'bg-purple-600'
            }`} />

            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
              <div>
                <span className="text-[11px] font-mono text-cobalt uppercase tracking-widest font-bold block mb-1">
                  {edu.level} {edu.currentStatus ? `• ${edu.currentStatus}` : ''}
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ink tracking-tight">
                  {edu.institution}
                </h2>
                <div className="flex items-center gap-1.5 text-xs text-muted font-mono mt-1">
                  <MapPin className="w-3.5 h-3.5 text-coral" />
                  <span>{edu.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-center">
                <span className="px-3.5 py-1.5 rounded-full bg-subtle border border-border-hairline text-xs font-mono text-ink flex items-center gap-1.5 font-semibold">
                  <Calendar className="w-3.5 h-3.5 text-cobalt" />
                  <span>{edu.period}</span>
                </span>
              </div>
            </div>

            {/* Degree & Board */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono p-4 rounded-2xl bg-subtle border border-border-hairline">
              <div>
                <span className="text-muted block text-[10px] uppercase tracking-wider mb-0.5">Program / Qualification</span>
                <span className="text-ink font-semibold text-sm">
                  {edu.degreeOrCertificate} {edu.branch ? `— ${edu.branch}` : ''}
                </span>
              </div>
              {edu.board && (
                <div>
                  <span className="text-muted block text-[10px] uppercase tracking-wider mb-0.5">Examination Board</span>
                  <span className="text-ink font-medium">{edu.board}</span>
                </div>
              )}
            </div>

            {/* Key Academic & Leadership Highlights */}
            {edu.achievements && edu.achievements.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-wider text-muted font-semibold flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-coral" />
                  <span>Confirmed Achievements &amp; Highlights</span>
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-ink/90">
                  {edu.achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cobalt shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Leadership Record */}
            {edu.leadership && edu.leadership.length > 0 && (
              <div className="space-y-2 pt-2 border-t border-border-hairline">
                <span className="text-[11px] font-mono uppercase tracking-wider text-muted block">
                  Leadership Responsibility
                </span>
                <div className="flex flex-wrap gap-2">
                  {edu.leadership.map((l, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-black/[0.03] dark:bg-white/[0.04] text-xs font-medium text-ink border border-border-hairline"
                    >
                      {l}
                    </span>
                  ))}
                </div>
              </div>
            )}

          </article>
        ))}
      </div>

    </div>
    </div>
  );
};
