import React from 'react';
import { 
  Route, 
  CheckCircle2, 
  Info
} from 'lucide-react';
import { 
  careerRoadmapVision, 
  learningPriorityStages, 
  careerMilestones 
} from '../data/careerRoadmap';

export const CareerRoadmapPage: React.FC = () => {
  const getStageStatusBadge = (status: string) => {
    switch (status) {
      case 'learning':
        return 'bg-cyan-950 text-cyan-300 border-cyan-700 animate-pulse';
      case 'practising':
        return 'bg-blue-950 text-blue-300 border-blue-700';
      case 'building':
        return 'bg-purple-950 text-purple-300 border-purple-700';
      case 'proficient':
        return 'bg-emerald-950 text-emerald-300 border-emerald-700';
      case 'completed':
        return 'bg-slate-800 text-slate-300 border-slate-700';
      default:
        return 'bg-slate-900 text-slate-400 border-slate-800';
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-300 text-xs font-mono">
          <Route className="w-3.5 h-3.5" />
          <span>FOUR-YEAR ENGINEERING ROADMAP &amp; DEVSECOPS VISION</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
          Career Direction &amp; Learning Progression
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Targeting high-impact specialization in Cybersecurity and DevSecOps by 2030, anchored in disciplined programming foundations, practical machine learning, and secure cloud delivery.
        </p>
      </div>

      {/* Vision 2030 Banner */}
      <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-cyan-950/30 via-slate-900 to-blue-950/40 border border-cyan-500/30 space-y-4">
        <div className="flex items-center justify-between gap-4">
          <span className="text-xs font-mono uppercase text-cyan-400 tracking-wider font-semibold">
            Primary Target Direction: {careerRoadmapVision.primaryDirection}
          </span>
          <span className="text-xs font-mono text-slate-400">
            {careerRoadmapVision.currentAcademicPhase}
          </span>
        </div>
        
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
          The 2030 Engineering Vision
        </h2>
        
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-4xl">
          {careerRoadmapVision.vision2030}
        </p>

        <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-2 text-xs font-mono">
          <span className="text-slate-400">Secondary Fields of Interest:</span>
          {careerRoadmapVision.secondaryInterests.map((interest, i) => (
            <span key={i} className="text-cyan-300 bg-slate-950 px-2.5 py-0.5 rounded-md border border-slate-800">
              {interest}
            </span>
          ))}
        </div>
      </section>

      {/* Schedule Flexibility & Exam Disclosure */}
      <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5 text-xs text-slate-300">
        <Info className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="font-semibold text-white block">Flexible Learning Commitment</span>
          <p className="leading-relaxed text-slate-400">
            Study timelines remain adaptive around college examinations, mid-semester deadlines, and hackathons. As planned, structured self-directed certifications and specialized security lab coursework will begin following the conclusion of first-year mid-semester examinations in November 2026.
          </p>
        </div>
      </div>

      {/* Structured Learning Priority Order (Section 12) */}
      <section className="space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase text-cyan-400 tracking-wider font-semibold">
            Systematic Curriculum
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
            Sequential Learning Priority Stages
          </h2>
        </div>

        <div className="space-y-6">
          {learningPriorityStages.map((stage) => (
            <article
              key={stage.id}
              className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-5 hover:border-slate-700 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold block mb-1">
                    {stage.plannedPhase}
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-white">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    Focus: {stage.focus}
                  </p>
                </div>

                <div className="self-start sm:self-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold border capitalize ${getStageStatusBadge(stage.status)}`}>
                    Status: {stage.status}
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {stage.description}
              </p>

              {/* Core Topics Checklist */}
              <div className="space-y-2 pt-2 border-t border-slate-800/80">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                  Core Topic Progression:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {stage.topics.map((t, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reference Resources */}
              <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
                <span>Target Study Material:</span>
                {stage.targetResources.map((res, i) => (
                  <span key={i} className="text-slate-200 bg-slate-950 px-2.5 py-0.5 rounded border border-slate-800">
                    {res}
                  </span>
                ))}
              </div>

            </article>
          ))}
        </div>
      </section>

      {/* Year-by-Year Milestones */}
      <section className="space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase text-cyan-400 tracking-wider font-semibold">
            Progression Timeline
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
            Engineering Milestones (2026 – 2030)
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {careerMilestones.map((m, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800 space-y-3"
            >
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-cyan-400 font-bold">
                  {m.year}
                </span>
                <span className="text-slate-400 capitalize">{m.status}</span>
              </div>
              <h3 className="text-lg font-heading font-bold text-white">{m.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{m.description}</p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {m.focusAreas.map((area, i) => (
                  <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
