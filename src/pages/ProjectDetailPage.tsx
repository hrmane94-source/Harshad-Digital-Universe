import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ExternalLink, 
  Video, 
  FileText, 
  ShieldAlert, 
  Award, 
  AlertTriangle, 
  Layers, 
  Cpu, 
  Lightbulb, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';
import { GithubIcon } from '../components/ui/BrandIcons';
import { verifiedProjects } from '../data/projects';
import { ProjectCoverArtwork } from '../components/ui/ProjectCoverArtwork';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const project = verifiedProjects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const currentIndex = verifiedProjects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? verifiedProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < verifiedProjects.length - 1 ? verifiedProjects[currentIndex + 1] : null;

  const hasCoverAsset = Boolean(project.assets.cover && project.assets.cover.trim() !== "");
  const hasScreenshots = project.assets.screenshots && project.assets.screenshots.length > 0;
  const hasArchDiagram = Boolean(project.assets.architectureDiagram && project.assets.architectureDiagram.trim() !== "");
  const hasVideoAsset = Boolean(project.assets.demoVideo && project.assets.demoVideo.trim() !== "");

  // Link checks (Rule 14 & 22)
  const hasRepoLink = Boolean(project.links.repositoryUrl && project.links.repositoryUrl.trim() !== "");
  const hasLiveDemoLink = Boolean(project.links.liveDemoUrl && project.links.liveDemoUrl.trim() !== "");
  const hasWebsiteLink = Boolean(project.links.websiteUrl && project.links.websiteUrl.trim() !== "");
  const hasDocLink = Boolean(project.links.documentationUrl && project.links.documentationUrl.trim() !== "");
  const hasVideoLink = Boolean(project.links.demoVideoUrl && project.links.demoVideoUrl.trim() !== "");
  const hasPresentationLink = Boolean(project.links.presentationUrl && project.links.presentationUrl.trim() !== "");
  const hasCompetitionLink = Boolean(project.links.competitionUrl && project.links.competitionUrl.trim() !== "");

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      
      {/* Back to Projects */}
      <div>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 hover:text-cyan-400 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to All Case Studies</span>
        </Link>
      </div>

      {/* Header Info */}
      <header className="space-y-4">
        
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
            {project.domain}
          </span>

          {project.importance === 'flagship' && (
            <span className="text-xs font-mono uppercase px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-700 font-bold">
              ★ FLAGSHIP PROJECT
            </span>
          )}

          <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-900 text-slate-400 border border-slate-800 capitalize">
            Status: {project.status}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
          {project.displayTitle}
        </h1>

        <p className="text-lg sm:text-xl text-cyan-300 font-medium leading-relaxed">
          {project.tagline}
        </p>

        {/* Roles & Team Context */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-800/80">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <span className="text-xs font-mono text-slate-400 block mb-1">Confirmed Role</span>
            <span className="text-sm font-semibold text-white">{project.role}</span>
          </div>

          {project.teamContext && (
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono text-slate-400 block mb-1">Team & Collaboration Context</span>
              <span className="text-xs text-slate-300 leading-normal">{project.teamContext}</span>
            </div>
          )}
        </div>

      </header>

      {/* Cover Showcase or Procedural Artwork */}
      <section className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
        {hasCoverAsset ? (
          <img
            src={project.assets.cover}
            alt={project.displayTitle}
            className="w-full aspect-video sm:aspect-[21/9] object-cover"
          />
        ) : (
          <ProjectCoverArtwork
            coverArtwork={project.coverArtwork}
            title={project.displayTitle}
            domain={project.domain}
            importance={project.importance}
            aspectRatio="wide"
          />
        )}
      </section>

      {/* External Verified Actions (If any provided) */}
      {(hasRepoLink || hasLiveDemoLink || hasWebsiteLink || hasDocLink || hasVideoLink || hasPresentationLink || hasCompetitionLink) && (
        <section className="flex flex-wrap items-center gap-3 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider mr-2">Verified Links:</span>
          {hasRepoLink && (
            <a href={project.links.repositoryUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-xs text-white hover:bg-slate-700 transition-colors">
              <GithubIcon className="w-4 h-4" />
              <span>Source Repository</span>
            </a>
          )}
          {hasLiveDemoLink && (
            <a href={project.links.liveDemoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-600 text-xs text-white hover:bg-cyan-500 transition-colors">
              <ExternalLink className="w-4 h-4" />
              <span>Live Demonstration</span>
            </a>
          )}
          {hasWebsiteLink && (
            <a href={project.links.websiteUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-xs text-white hover:bg-slate-700 transition-colors">
              <ExternalLink className="w-4 h-4" />
              <span>Website</span>
            </a>
          )}
          {hasDocLink && (
            <a href={project.links.documentationUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-xs text-white hover:bg-slate-700 transition-colors">
              <FileText className="w-4 h-4" />
              <span>Project Documentation</span>
            </a>
          )}
          {hasVideoLink && (
            <a href={project.links.demoVideoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-600 text-xs text-white hover:bg-purple-500 transition-colors">
              <Video className="w-4 h-4" />
              <span>Video Walkthrough</span>
            </a>
          )}
        </section>
      )}

      {/* Competition / Event Context Block */}
      {project.competition && (
        <section className="p-6 sm:p-8 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/40 to-slate-900/60 backdrop-blur-xl space-y-4">
          <div className="flex items-center gap-2 text-cyan-400">
            <Award className="w-5 h-5" />
            <h2 className="text-lg font-heading font-bold text-white">
              Event & Competition Context: {project.competition.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            {project.competition.institution && (
              <div>
                <span className="text-slate-400 block font-mono">Host / Institution:</span>
                <span className="text-slate-200 font-medium">{project.competition.institution}</span>
              </div>
            )}
            {project.competition.problemStatementId && (
              <div>
                <span className="text-slate-400 block font-mono">Problem Statement ID:</span>
                <span className="text-cyan-300 font-mono font-bold">{project.competition.problemStatementId}</span>
              </div>
            )}
            {project.competition.teamName && (
              <div>
                <span className="text-slate-400 block font-mono">Team Name & ID:</span>
                <span className="text-slate-200">{project.competition.teamName} {project.competition.teamId ? `(${project.competition.teamId})` : ''}</span>
              </div>
            )}
            {project.competition.submissionDate && (
              <div>
                <span className="text-slate-400 block font-mono">Submission / Event Period:</span>
                <span className="text-slate-200">{project.competition.submissionDate}</span>
              </div>
            )}
            <div>
              <span className="text-slate-400 block font-mono">Evaluation Status:</span>
              <span className="text-amber-300 font-semibold">{project.competition.status}</span>
            </div>
            {project.competition.result && (
              <div>
                <span className="text-slate-400 block font-mono">Confirmed Outcome:</span>
                <span className="text-emerald-300 font-bold">{project.competition.result}</span>
              </div>
            )}
          </div>

          {project.competition.notes && (
            <p className="text-xs text-slate-300 pt-2 border-t border-slate-800 italic">
              Note: {project.competition.notes}
            </p>
          )}
        </section>
      )}

      {/* Problem & Solution Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-rose-400">
            <AlertTriangle className="w-5 h-5" />
            <h2 className="text-lg font-heading font-bold text-white">The Challenge & Problem</h2>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.problem}
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-cyan-400">
            <Lightbulb className="w-5 h-5" />
            <h2 className="text-lg font-heading font-bold text-white">The Proposed Solution</h2>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.solution}
          </p>
        </div>

      </section>

      {/* Actual Features Implemented */}
      <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-cyan-400">
            <CheckCircle2 className="w-5 h-5" />
            <h2 className="text-xl font-heading font-bold text-white">
              Demonstrated & Implemented Features
            </h2>
          </div>
          <span className="text-[11px] font-mono text-slate-400">
            {project.features.length} core capabilities
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {project.features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-200"
            >
              <span className="w-5 h-5 rounded-md bg-cyan-950 text-cyan-400 border border-cyan-800 flex items-center justify-center shrink-0 font-mono text-[10px] font-bold">
                {idx + 1}
              </span>
              <span className="leading-relaxed">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Critical Technical Limitations (Non-negotiable honesty rule) */}
      <section className="p-6 sm:p-8 rounded-2xl border border-amber-500/30 bg-amber-950/10 space-y-4">
        <div className="flex items-center gap-2 text-amber-400">
          <ShieldAlert className="w-5 h-5" />
          <h2 className="text-lg font-heading font-bold text-white">
            Honest Technical Scope & Stated Limitations
          </h2>
        </div>
        <p className="text-xs text-amber-200/90 leading-relaxed">
          In strict accordance with engineering integrity and realistic evaluation, the following boundaries and current limitations are verified:
        </p>
        <ul className="space-y-2 text-xs text-slate-300">
          {project.limitations.map((lim, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-amber-400 font-mono">▪</span>
              <span>{lim}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Technologies & Tools Used */}
      <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
        <div className="flex items-center gap-2 text-cyan-400">
          <Cpu className="w-5 h-5" />
          <h2 className="text-lg font-heading font-bold text-white">Technology Stack & Tooling</h2>
        </div>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700/80 text-xs font-mono text-cyan-300"
            >
              {tech}
            </span>
          ))}
        </div>
        {project.aiAssisted && (
          <p className="text-xs text-slate-400 italic pt-2">
            * Note: Application developed using AI-assisted development workflows (vibe coding, Google AI Studio, Lovable, Claude/Gemini) to accelerate prototyping and implementation.
          </p>
        )}
      </section>

      {/* Lessons Learned & Future Work */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <h3 className="text-sm font-heading font-bold text-white uppercase tracking-wider text-slate-300">
            Key Lessons Learned
          </h3>
          <ul className="space-y-2 text-xs text-slate-300">
            {project.lessonsLearned.map((lesson, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-cyan-400 font-mono">✔</span>
                <span>{lesson}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <h3 className="text-sm font-heading font-bold text-white uppercase tracking-wider text-slate-300">
            Future Development Roadmap
          </h3>
          <ul className="space-y-2 text-xs text-slate-300">
            {project.futureWork.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-purple-400 font-mono">➜</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </section>

      {/* Media & Screenshots Section (Graceful empty state per Rule 9 & 20) */}
      <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
        <h3 className="text-lg font-heading font-bold text-white">Project Visual Documentation</h3>
        
        {hasScreenshots || hasArchDiagram || hasVideoAsset ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.assets.screenshots.map((shot, idx) => (
              <img key={idx} src={shot} alt={`Screenshot ${idx + 1}`} className="rounded-xl border border-slate-800 w-full aspect-video object-cover" />
            ))}
            {hasArchDiagram && (
              <img src={project.assets.architectureDiagram} alt="Architecture Diagram" className="rounded-xl border border-slate-800 w-full object-contain" />
            )}
          </div>
        ) : (
          <div className="p-8 rounded-xl border border-dashed border-slate-800 text-center space-y-2 bg-slate-950/40">
            <Layers className="w-8 h-8 text-slate-600 mx-auto" />
            <h4 className="text-sm font-semibold text-slate-300">Screenshots & Live Media Registry</h4>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              Real screenshots, architecture diagrams, and video walkthroughs can be attached by adding assets to <code className="text-cyan-400 font-mono">/public/assets/projects/{project.slug}/</code> and updating <code className="text-cyan-400 font-mono">src/data/assets.ts</code>.
            </p>
          </div>
        )}
      </section>

      {/* Pagination Footer */}
      <nav className="flex items-center justify-between pt-8 border-t border-slate-800/80">
        {prevProject ? (
          <Link
            to={`/projects/${prevProject.slug}`}
            className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="hidden sm:inline">Previous: {prevProject.displayTitle}</span>
            <span className="sm:hidden">Previous</span>
          </Link>
        ) : <div />}

        <Link
          to="/projects"
          className="text-xs font-mono text-cyan-400 hover:underline"
        >
          All Projects
        </Link>

        {nextProject ? (
          <Link
            to={`/projects/${nextProject.slug}`}
            className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white group"
          >
            <span className="hidden sm:inline">Next: {nextProject.displayTitle}</span>
            <span className="sm:hidden">Next</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        ) : <div />}
      </nav>

    </div>
  );
};
