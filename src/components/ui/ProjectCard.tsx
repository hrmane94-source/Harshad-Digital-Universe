import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ExternalLink, 
  Award
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import type { ProjectItem } from '../../types/portfolio';
import { ProjectCoverArtwork } from './ProjectCoverArtwork';

interface ProjectCardProps {
  project: ProjectItem;
  featuredLayout?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  featuredLayout = false
}) => {
  const hasCoverAsset = Boolean(project.assets.cover && project.assets.cover.trim() !== "");
  const hasRepoLink = Boolean(project.links.repositoryUrl && project.links.repositoryUrl.trim() !== "");
  const hasLiveDemoLink = Boolean(project.links.liveDemoUrl && project.links.liveDemoUrl.trim() !== "");

  return (
    <article className={`rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-slate-700 hover:shadow-2xl hover:shadow-cyan-500/5 flex flex-col ${
      featuredLayout ? 'lg:grid lg:grid-cols-12 lg:gap-8 items-center' : ''
    }`}>
      
      {/* Cover Media Section */}
      <div className={`${featuredLayout ? 'lg:col-span-7 p-4 sm:p-6' : 'p-4'}`}>
        <Link to={`/projects/${project.slug}`} className="block overflow-hidden rounded-xl group">
          {hasCoverAsset ? (
            <img
              src={project.assets.cover}
              alt={project.title}
              className="w-full aspect-video object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <ProjectCoverArtwork
              coverArtwork={project.coverArtwork}
              title={project.displayTitle}
              domain={project.domain}
              importance={project.importance}
            />
          )}
        </Link>
      </div>

      {/* Content Section */}
      <div className={`p-6 sm:p-8 flex flex-col flex-1 justify-between ${
        featuredLayout ? 'lg:col-span-5 lg:pl-0' : ''
      }`}>
        <div className="space-y-4">
          
          {/* Header Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
              {project.domain.split(',')[0]}
            </span>

            {project.importance === 'flagship' && (
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-700 font-bold">
                Flagship Case Study
              </span>
            )}

            {project.competition?.result && (
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-amber-950/80 text-amber-300 border border-amber-700 flex items-center gap-1 font-semibold">
                <Award className="w-3 h-3" />
                <span>{project.competition.result}</span>
              </span>
            )}
          </div>

          {/* Title & Tagline */}
          <div>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-white tracking-tight">
              <Link to={`/projects/${project.slug}`} className="hover:text-cyan-300 transition-colors">
                {project.displayTitle}
              </Link>
            </h3>
            <p className="text-xs sm:text-sm text-cyan-400 font-medium mt-1">
              {project.tagline}
            </p>
          </div>

          {/* Role badge */}
          <div className="text-xs text-slate-300 font-mono bg-slate-950/70 px-3 py-1.5 rounded-lg border border-slate-800/80">
            <span className="text-slate-400">Role: </span>
            <span className="text-slate-200 font-medium">{project.role}</span>
          </div>

          {/* Summary */}
          <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
            {project.summary}
          </p>

          {/* Key Tech Chips */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-[11px] font-mono px-1.5 py-0.5 text-slate-400">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>

        </div>

        {/* Footer Actions */}
        <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between gap-3">
          
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group"
          >
            <span>Explore Full Case Study</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          {/* Only render external buttons if real valid URLs are supplied (Rule 14 & 22) */}
          <div className="flex items-center gap-2">
            {hasRepoLink && (
              <a
                href={project.links.repositoryUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg border border-slate-700 bg-slate-800 text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
                title="View Source Repository"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}

            {hasLiveDemoLink && (
              <a
                href={project.links.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg border border-cyan-800/80 bg-cyan-950/60 text-cyan-300 hover:bg-cyan-900/60 transition-colors"
                title="Open Live Demonstration"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

        </div>

      </div>

    </article>
  );
};
