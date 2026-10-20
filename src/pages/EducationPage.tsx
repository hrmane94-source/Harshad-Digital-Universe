import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Calendar, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  Info 
} from 'lucide-react';
import { verifiedEducation } from '../data/education';

export const EducationPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-300 text-xs font-mono">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>VERIFIED ACADEMIC RECORD</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
          Education History
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Structured academic progression from foundational schooling at Padua High School through junior college science to current undergraduate engineering in Computer Science at ADCET Ashta.
        </p>
      </div>

      {/* Verified Academic Integrity Disclosure */}
      <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3 text-xs text-slate-300">
        <Info className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="font-semibold text-white block">Academic Integrity Policy</span>
          <p className="leading-relaxed text-slate-400">
            Per strict verification standards: No Class 10 or Class 12 percentage figures are manufactured. First-year engineering CGPA will be recorded and published once officially declared by the university.
          </p>
        </div>
      </div>

      {/* Education Timeline */}
      <div className="space-y-10">
        {verifiedEducation.map((edu, idx) => (
          <article
            key={edu.id}
            className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-6 relative overflow-hidden"
          >
            {/* Left Accent Bar */}
            <div className={`absolute top-0 left-0 bottom-0 w-2 ${
              idx === 0 ? 'bg-cyan-500' : idx === 1 ? 'bg-blue-600' : 'bg-purple-600'
            }`} />

            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold block mb-1">
                  {edu.level} {edu.currentStatus ? `• ${edu.currentStatus}` : ''}
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                  {edu.institution}
                </h2>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{edu.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-center">
                <span className="px-3.5 py-1.5 rounded-full bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{edu.period}</span>
                </span>
              </div>
            </div>

            {/* Degree & Board */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
              <div>
                <span className="text-slate-400 block mb-0.5">Program / Qualification</span>
                <span className="text-white font-semibold text-sm">
                  {edu.degreeOrCertificate} {edu.branch ? `— ${edu.branch}` : ''}
                </span>
              </div>
              {edu.board && (
                <div>
                  <span className="text-slate-400 block mb-0.5">Examination Board</span>
                  <span className="text-slate-200">{edu.board}</span>
                </div>
              )}
            </div>

            {/* Key Academic & Leadership Highlights */}
            {edu.achievements && edu.achievements.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Confirmed Achievements &amp; Highlights</span>
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {edu.achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* School Leadership Section for Padua */}
            {edu.leadership && edu.leadership.length > 0 && (
              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                  <span>Leadership &amp; Coordination</span>
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {edu.leadership.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-purple-400 font-mono">▪</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Future CGPA Record Field */}
            {edu.cgpaRecord && (
              <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-800/40 space-y-1 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-cyan-300 font-semibold">Undergraduate Academic Record</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-700">
                    Awaiting Semester Results
                  </span>
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  {edu.cgpaRecord.notes}
                </p>
              </div>
            )}

          </article>
        ))}
      </div>

    </div>
  );
};
