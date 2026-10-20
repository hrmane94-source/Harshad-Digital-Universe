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
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-300 text-xs font-mono">
          <Award className="w-3.5 h-3.5" />
          <span>VERIFIED RECOGNITION</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
          Confirmed Achievements &amp; Awards
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Accredited competition honors, subject-specific academic achievements, and elected student council leadership. All listings are strictly confirmed without fabrication.
        </p>
      </div>

      {/* Confirmed Awards Section */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-heading font-bold text-white flex items-center gap-2">
          <Award className="w-5 h-5 text-amber-400" />
          <span>Competitive &amp; Academic Honors</span>
        </h2>

        <div className="space-y-6">
          {verifiedAchievements.map((ach) => {
            const hasCert = Boolean(ach.certificateAsset && ach.certificateAsset.trim() !== "");

            return (
              <article
                key={ach.id}
                className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4 relative overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold block mb-1">
                      {ach.category} • {ach.eventOrContext}
                    </span>
                    <h3 className="text-2xl font-heading font-bold text-white">
                      {ach.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">
                      {ach.institution} {ach.date ? `• ${ach.date}` : ''}
                    </p>
                  </div>

                  <div className="self-start sm:self-center">
                    <span className="px-3 py-1 rounded-full bg-amber-950 text-amber-300 border border-amber-700 text-xs font-mono font-bold">
                      {ach.result}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {ach.description}
                </p>

                {/* Associated Project Links */}
                {ach.associatedProjects && ach.associatedProjects.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    <span className="text-xs font-mono text-slate-400">Associated Case Studies:</span>
                    <Link
                      to="/projects/neuroverse-2k26-website"
                      className="text-xs font-mono text-cyan-400 hover:underline bg-cyan-950/40 px-2.5 py-1 rounded border border-cyan-800"
                    >
                      Neuroverse 2K26 Website
                    </Link>
                    <Link
                      to="/projects/gada-electronics"
                      className="text-xs font-mono text-cyan-400 hover:underline bg-cyan-950/40 px-2.5 py-1 rounded border border-cyan-800"
                    >
                      GADA ELECTRONICS
                    </Link>
                  </div>
                )}

                {/* Certificate Attachment Slot (Rule 20) */}
                <div className="pt-4 border-t border-slate-800/80">
                  {hasCert ? (
                    <a
                      href={ach.certificateAsset}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:underline"
                    >
                      <FileCheck className="w-4 h-4" />
                      <span>View Verified Certificate</span>
                    </a>
                  ) : (
                    <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                      <FileCheck className="w-3.5 h-3.5" />
                      <span>Certificate asset location: /public/assets/certificates/</span>
                    </div>
                  )}
                </div>

              </article>
            );
          })}
        </div>
      </section>

      {/* Leadership & Scientific Experience (Rule 10: Not converted into awards) */}
      <section className="space-y-6 pt-6 border-t border-slate-800">
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-white flex items-center gap-2">
            <Users className="w-5 h-5 text-purple-400" />
            <span>Leadership &amp; Scientific Experiences</span>
          </h2>
          <p className="text-xs text-slate-400 font-mono">
            * Distinct from competitive awards; documented as verified institutional responsibilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {verifiedLeadershipExperience.map((exp) => (
            <div
              key={exp.id}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3"
            >
              <span className="text-xs font-mono text-purple-400 uppercase font-semibold">
                {exp.institution}
              </span>
              <h3 className="text-base font-heading font-bold text-white">
                {exp.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Cross link to Events */}
      <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-semibold text-white">Interested in Competition Participations &amp; Hackathons?</h3>
          <p className="text-xs text-slate-400">View complete details of SIH 2026, Tantraparv, AARAMBH, and technical symposiums.</p>
        </div>
        <Link
          to="/events"
          className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold shrink-0"
        >
          View Events &amp; Hackathons →
        </Link>
      </div>

    </div>
  );
};
