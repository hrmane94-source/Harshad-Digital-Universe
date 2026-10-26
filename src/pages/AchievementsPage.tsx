import React from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  Users,
  FileCheck
} from 'lucide-react';
import { verifiedAchievements, verifiedLeadershipExperience } from '../data/achievements';

export const AchievementsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF5E6] via-[#F4F1FF] to-[#EAF3FF] dark:from-paper dark:via-paper dark:to-paper transition-colors duration-250">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

      {/* Editorial Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cobalt/10 border border-cobalt/25 text-cobalt text-[11px] font-mono tracking-widest uppercase font-semibold">
          <Award className="w-3.5 h-3.5 text-coral" />
          <span>CONFIRMED RECOGNITION</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif text-ink tracking-tight font-normal leading-[1.08]">
          Achievements &amp; <span className="italic font-normal bg-gradient-to-r from-cobalt via-violet to-sky-400 bg-clip-text text-transparent">Honors</span>
        </h1>
        <p className="text-muted text-sm sm:text-base leading-relaxed">
          Accredited competition honors, subject-specific academic achievements, and elected student council leadership. All listings are strictly confirmed without fabrication.
        </p>
      </div>

      {/* Confirmed Awards Section */}
      <section className="space-y-6">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink flex items-center gap-2">
          <Award className="w-5 h-5 text-coral" />
          <span>Competitive &amp; Academic Honors</span>
        </h2>

        <div className="space-y-6">
          {verifiedAchievements.map((ach) => {
            const hasCert = Boolean(ach.certificateAsset && ach.certificateAsset.trim() !== "");

            return (
              <article
                key={ach.id}
                className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-card border border-border-hairline space-y-4 relative overflow-hidden shadow-xs hover:border-amber-400/40 hover:shadow-warm hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-mono text-cobalt uppercase tracking-widest font-bold block mb-1">
                      {ach.category} • {ach.eventOrContext}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink tracking-tight">
                      {ach.title}
                    </h3>
                    <p className="text-xs text-muted font-mono mt-0.5">
                      {ach.institution} {ach.date ? `• ${ach.date}` : ''}
                    </p>
                  </div>

                  <div className="self-start sm:self-center">
                    <span className="px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 text-xs font-mono font-bold tracking-wide">
                      {ach.result}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  {ach.description}
                </p>

                {/* Associated Project Links */}
                {ach.associatedProjects && ach.associatedProjects.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border-hairline">
                    <span className="text-xs font-mono text-muted">Associated Work:</span>
                    <Link
                      to="/projects/neuroverse-2k26-website"
                      className="text-xs font-mono text-cobalt hover:underline"
                    >
                      Neuroverse 2K26 Website
                    </Link>
                    <span className="text-faint">•</span>
                    <Link
                      to="/projects/gada-electronics"
                      className="text-xs font-mono text-cobalt hover:underline"
                    >
                      GADA ELECTRONICS
                    </Link>
                  </div>
                )}

                {/* Certificate Attachment Slot */}
                <div className="pt-3 border-t border-border-hairline">
                  {hasCert ? (
                    <a
                      href={ach.certificateAsset}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-cobalt hover:underline"
                    >
                      <FileCheck className="w-4 h-4" />
                      <span>View Verified Certificate</span>
                    </a>
                  ) : (
                    <div className="text-[11px] font-mono text-faint flex items-center gap-1.5">
                      <FileCheck className="w-3.5 h-3.5" />
                      <span>Certificate verified in academic records</span>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Leadership & Scientific Delegations */}
      <section className="space-y-6">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink flex items-center gap-2">
          <Users className="w-5 h-5 text-cobalt" />
          <span>Leadership Experience &amp; Scientific Visits</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {verifiedLeadershipExperience.map((lead) => (
            <div
              key={lead.id}
              className="p-6 sm:p-8 rounded-2xl bg-card border border-border-hairline hover:border-border-medium transition-all space-y-3 shadow-xs tech-card"
            >
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-coral font-bold uppercase tracking-wider">
                  {lead.timesManaged ? `${lead.timesManaged} Editions Managed` : (lead.level || lead.frequency || 'Leadership')}
                </span>
                <span className="text-muted">{lead.institution}</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-ink tracking-tight">
                {lead.title}
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                {lead.description}
              </p>
              <div className="pt-2 border-t border-border-hairline text-[10px] font-mono text-faint">
                Padua High School / Academic Milestone
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
    </div>
  );
};
