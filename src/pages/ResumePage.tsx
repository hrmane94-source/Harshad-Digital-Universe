import React, { useState } from 'react';
import {
  Download,
  MapPin,
  Mail,
  Info,
  CheckCircle2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/ui/BrandIcons';
import { resumeData } from '../data/resume';
import { generateResumePdf } from '../utils/generateResumePdf';

export const ResumePage: React.FC = () => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    try {
      generateResumePdf();
    } finally {
      setTimeout(() => setDownloading(false), 800);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F4F1FF] via-[#EAF3FF] to-[#EDE5FF]/40 dark:from-paper dark:via-paper dark:to-paper transition-colors duration-250">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">

      {/* Top Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 sm:p-8 rounded-3xl bg-white dark:bg-card border border-border-hairline shadow-chromatic">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_6px_rgba(16,185,129,0.6)]" />
            <h1 className="text-xl sm:text-2xl font-serif font-bold text-ink tracking-tight">
              Official ATS-Friendly Résumé
            </h1>
          </div>
          <p className="text-xs text-muted font-mono">
            Structured single source of truth &bull; High-legibility selectable text PDF
          </p>
        </div>

        <button
          type="button"
          onClick={handleDownload}
          disabled={downloading}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cobalt to-blue-600 text-white font-semibold text-xs uppercase tracking-wider shadow-md hover:shadow-lg hover:shadow-cobalt/25 active:scale-[0.98] transition-all cursor-pointer disabled:opacity-50"
        >
          <Download className="w-4 h-4" />
          <span>{downloading ? 'Compiling PDF...' : 'Download Official PDF'}</span>
        </button>
      </div>

      {/* Honest Scope Disclosure */}
      <div className="p-5 rounded-2xl bg-subtle/80 border border-border-hairline flex items-start gap-3.5 text-xs text-muted shadow-2xs">
        <Info className="w-4 h-4 text-cobalt shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong className="text-ink">Strict Non-Fabrication Standards:</strong> No unearned certifications, fictional client work, inflated independent proficiencies, or unverified grades are listed. This document reflects verified first-year engineering progress, validated hackathon projects, and confirmed leadership roles.
        </p>
      </div>

      {/* Printable / ATS View Container */}
      <div className="p-8 sm:p-12 rounded-3xl bg-surface dark:bg-card border border-border-hairline space-y-10 text-ink shadow-xl">

        {/* Résumé Header */}
        <header className="border-b border-border-hairline pb-6 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ink tracking-tight">
              {resumeData.basics.name}
            </h2>
            <span className="text-xs font-mono text-cobalt bg-subtle px-3 py-1 rounded-full border border-border-hairline self-start sm:self-center font-semibold">
              ADCET CSE (2026–2030)
            </span>
          </div>

          <p className="text-sm text-muted font-medium">
            {resumeData.basics.title}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted pt-1">
            <a href={`mailto:${resumeData.basics.email}`} className="hover:text-cobalt flex items-center gap-1.5 transition-colors">
              <Mail className="w-3.5 h-3.5 text-cobalt" />
              <span>{resumeData.basics.email}</span>
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-coral" />
              <span>{resumeData.basics.location}</span>
            </span>
            <a href={resumeData.basics.profiles.github} target="_blank" rel="noreferrer" className="hover:text-cobalt flex items-center gap-1.5 transition-colors">
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub Profile</span>
            </a>
            <a href={resumeData.basics.profiles.linkedin} target="_blank" rel="noreferrer" className="hover:text-cobalt flex items-center gap-1.5 transition-colors">
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </header>

        {/* Education Section */}
        <section className="space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-widest text-cobalt font-bold">
            Education
          </h3>
          <div className="space-y-4">
            {resumeData.education.map((edu, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                  <span className="font-serif text-lg font-bold text-ink">{edu.institution}</span>
                  <span className="text-xs font-mono text-muted">{edu.period}</span>
                </div>
                <div className="text-xs text-muted font-medium">
                  {edu.degree} {edu.branch ? `— ${edu.branch}` : ''}
                </div>
                {edu.details && edu.details.length > 0 && (
                  <ul className="text-xs text-muted list-disc list-inside space-y-0.5 pt-1">
                    {edu.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Engineering Projects Section */}
        <section className="space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-widest text-cobalt font-bold">
            Featured Engineering Projects
          </h3>
          <div className="space-y-6">
            {resumeData.projects.map((proj, idx) => (
              <div key={idx} className="space-y-2 p-4 rounded-xl bg-subtle/50 border border-border-hairline">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-lg font-bold text-ink">{proj.title}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-subtle text-muted border border-border-hairline">
                      {proj.role}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-muted">{proj.period}</span>
                </div>
                <ul className="text-xs text-muted list-disc list-inside space-y-1 pt-1">
                  {proj.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
                <div className="text-[11px] font-mono text-muted pt-1">
                  <strong className="text-ink">Technologies:</strong> {proj.technologies.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Proficiencies */}
        <section className="space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-widest text-cobalt font-bold">
            Technical Skills &amp; Competencies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-subtle border border-border-hairline space-y-1">
              <span className="font-mono text-[10px] uppercase text-muted font-bold block">Engineering Foundations</span>
              <span className="text-ink font-medium leading-relaxed">{resumeData.skills.foundations.join(' • ')}</span>
            </div>
            <div className="p-4 rounded-xl bg-subtle border border-border-hairline space-y-1">
              <span className="font-mono text-[10px] uppercase text-muted font-bold block">Currently Learning</span>
              <span className="text-ink font-medium leading-relaxed">{resumeData.skills.currentlyLearning.join(' • ')}</span>
            </div>
            <div className="p-4 rounded-xl bg-subtle border border-border-hairline space-y-1">
              <span className="font-mono text-[10px] uppercase text-muted font-bold block">Cybersecurity Foundations</span>
              <span className="text-ink font-medium leading-relaxed">{resumeData.skills.cybersecurityFoundations.join(' • ')}</span>
            </div>
            <div className="p-4 rounded-xl bg-subtle border border-border-hairline space-y-1">
              <span className="font-mono text-[10px] uppercase text-muted font-bold block">AI-Assisted Workflow Ecosystem</span>
              <span className="text-ink font-medium leading-relaxed">{resumeData.skills.aiAssistedTooling.join(' • ')}</span>
            </div>
          </div>
        </section>

        {/* Confirmed Honors & Leadership */}
        <section className="space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-widest text-cobalt font-bold">
            Honors, Awards &amp; Leadership Governance
          </h3>
          <ul className="space-y-2 text-xs text-muted">
            {resumeData.achievements.map((ach, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cobalt shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <strong className="text-ink">{ach.title}:</strong> {ach.description} ({ach.year})
                </span>
              </li>
            ))}
          </ul>
        </section>

      </div>

    </div>
    </div>
  );
};
