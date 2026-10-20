import React, { useState } from 'react';
import { 
  Download, 
  MapPin, 
  Mail, 
  Info
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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      
      {/* Top Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <h1 className="text-xl sm:text-2xl font-heading font-bold text-white">
              Official ATS-Friendly Résumé
            </h1>
          </div>
          <p className="text-xs text-slate-400 font-mono">
            Structured single source of truth • Real selectable text PDF
          </p>
        </div>

        <button
          type="button"
          onClick={handleDownload}
          disabled={downloading}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer disabled:opacity-50"
        >
          <Download className="w-4 h-4" />
          <span>{downloading ? 'Generating PDF...' : 'Download Official PDF Résumé'}</span>
        </button>
      </div>

      {/* Honest Scope Disclosure */}
      <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-3 text-xs text-slate-400">
        <Info className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong className="text-white">Strict Non-Fabrication Standards:</strong> No unearned certifications, fictional client work, inflated independent proficiencies, or unverified grades are listed. This document reflects verified first-year engineering progress, validated hackathon projects, and confirmed leadership roles.
        </p>
      </div>

      {/* Printable / ATS View Container */}
      <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-10 text-slate-200 shadow-2xl">
        
        {/* Résumé Header */}
        <header className="border-b border-slate-800 pb-6 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h2 className="text-3xl font-heading font-extrabold text-white tracking-tight">
              {resumeData.basics.name}
            </h2>
            <span className="text-xs font-mono text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800 self-start sm:self-center">
              ADCET CSE (2026–2030)
            </span>
          </div>

          <p className="text-sm text-cyan-300 font-medium">
            {resumeData.basics.title}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-1">
            <a href={`mailto:${resumeData.basics.email}`} className="hover:text-cyan-300 flex items-center gap-1">
              <Mail className="w-3.5 h-3.5" />
              <span>{resumeData.basics.email}</span>
            </a>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{resumeData.basics.location}</span>
            </span>
            <a href={resumeData.basics.profiles.github} target="_blank" rel="noreferrer" className="hover:text-cyan-300 flex items-center gap-1">
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a href={resumeData.basics.profiles.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-300 flex items-center gap-1">
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-slate-800 pb-1">
            Professional Summary
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            {resumeData.basics.summary}
          </p>
        </section>

        {/* Education */}
        <section className="space-y-6">
          <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-slate-800 pb-1">
            Education History
          </h3>
          <div className="space-y-5">
            {resumeData.education.map((edu, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                  <span className="font-bold text-white text-sm">{edu.institution}</span>
                  <span className="text-slate-400 font-mono">{edu.period}</span>
                </div>
                <div className="text-xs text-cyan-300 font-medium">
                  {edu.degree} {edu.branch ? `— ${edu.branch}` : ''} • {edu.location}
                </div>
                <ul className="space-y-1 text-xs text-slate-300 pt-1">
                  {edu.details.map((d, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-cyan-400 font-mono">▪</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Projects */}
        <section className="space-y-6">
          <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-slate-800 pb-1">
            Selected Technical Projects &amp; Screening Pipelines
          </h3>
          <div className="space-y-6">
            {resumeData.projects.map((proj, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                  <span className="font-bold text-white text-sm">{proj.title}</span>
                  <span className="text-slate-400 font-mono">{proj.period}</span>
                </div>
                <div className="text-xs text-cyan-400 font-mono">
                  <span>Role: {proj.role}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-slate-400">
                  <span>Stack:</span>
                  {proj.technologies.map((t, i) => (
                    <span key={i} className="text-slate-300 bg-slate-950 px-1.5 py-0.2 rounded border border-slate-800">
                      {t}
                    </span>
                  ))}
                </div>
                <ul className="space-y-1 text-xs text-slate-300 pt-1">
                  {proj.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-cyan-400 font-mono">▪</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Verified Honors & Achievements */}
        <section className="space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-slate-800 pb-1">
            Verified Honors &amp; Awards
          </h3>
          <div className="space-y-3">
            {resumeData.achievements.map((ach, idx) => (
              <div key={idx} className="space-y-0.5 text-xs">
                <div className="flex items-center justify-between font-semibold text-white">
                  <span>{ach.title}</span>
                  <span className="text-slate-400 font-mono">{ach.year}</span>
                </div>
                <div className="text-slate-400">{ach.context} — <span className="text-amber-300">{ach.result}</span></div>
                <p className="text-slate-300">{ach.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership */}
        <section className="space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-slate-800 pb-1">
            Leadership &amp; Institutional Governance
          </h3>
          <div className="space-y-4">
            {resumeData.leadership.map((lead, idx) => (
              <div key={idx} className="space-y-1.5 text-xs">
                <div className="flex items-center justify-between font-semibold text-white">
                  <span>{lead.role} — {lead.organization}</span>
                  <span className="text-slate-400 font-mono">{lead.period}</span>
                </div>
                <ul className="space-y-1 text-slate-300">
                  {lead.contributions.map((c, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-purple-400 font-mono">▪</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Honest Technical Skills Matrix */}
        <section className="space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-slate-800 pb-1">
            Technical Skills &amp; Proficiency Matrix
          </h3>
          <div className="space-y-2.5 text-xs">
            <div>
              <span className="font-bold text-white mr-2">Foundations:</span>
              <span className="text-slate-300">{resumeData.skills.foundations.join(', ')}</span>
            </div>
            <div>
              <span className="font-bold text-white mr-2">Currently Learning:</span>
              <span className="text-slate-300">{resumeData.skills.currentlyLearning.join(', ')}</span>
            </div>
            <div>
              <span className="font-bold text-white mr-2">Cybersecurity Foundations:</span>
              <span className="text-slate-300">{resumeData.skills.cybersecurityFoundations.join(', ')}</span>
            </div>
            <div>
              <span className="font-bold text-white mr-2">AI Developer Tooling &amp; Vibe Coding:</span>
              <span className="text-slate-300">{resumeData.skills.aiAssistedTooling.join(', ')}</span>
            </div>
            <div>
              <span className="font-bold text-white mr-2">Frameworks Explored via AI:</span>
              <span className="text-slate-300">{resumeData.skills.frameworksExplored.join(', ')}</span>
            </div>
          </div>
        </section>

      </div>

    </div>
  );
};
