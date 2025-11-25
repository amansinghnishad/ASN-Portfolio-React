import PropTypes from "prop-types";

import { projects } from "../data/projects";
import WebBrowser from "../components/webBrowser";

export const ProjectListPanel = ({ selectedProject, onSelect }) => {
  return (
    <section className="flex h-full min-h-0 flex-col gap-4">
      <div className="flex flex-1 min-h-0 flex-col text-sm text-slate-200">
        {projects.map((project, index) => {
          const isActive =
            selectedProject && project.name === selectedProject.name;
          const isLast = index === projects.length - 1;
          return (
            <div key={project.name} className="flex flex-col">
              <button
                type="button"
                onClick={() => onSelect(project)}
                className={[
                  "w-full rounded-2xl px-4 py-4 text-left transition",
                  isActive
                    ? "text-emerald-200"
                    : "text-slate-300 hover:text-white",
                ].join(" ")}
              >
                <p className="text-base font-semibold tracking-tight">
                  {project.name}
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  {project.description}
                </p>
              </button>
              {!isLast && (
                <span className="my-2 w-full border-t border-dashed border-white/10" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

ProjectListPanel.propTypes = {
  selectedProject: PropTypes.shape({
    name: PropTypes.string,
  }),
  onSelect: PropTypes.func.isRequired,
};

ProjectListPanel.defaultProps = {
  selectedProject: projects[0],
};

export const ProjectDetailSection = ({ project }) => {
  if (!project) {
    return (
      <section className="flex h-full flex-col items-center justify-center gap-3 text-center text-slate-300">
        <p className="text-lg font-semibold text-white/80">
          Select a project to view details
        </p>
        <p className="text-sm text-slate-400">
          Pick one from the list to inspect its description, stack, and links.
        </p>
      </section>
    );
  }

  return (
    <section className="flex h-full min-h-0 flex-col gap-5">
      <header className="space-y-1">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
          Case Study
        </p>
        <h2 className="text-3xl font-semibold text-white">{project.name}</h2>
        <p className="text-sm text-slate-300">{project.description}</p>
      </header>

      <div className="space-y-4 text-sm text-slate-300">
        {project.details && project.details.length > 0 && (
          <ul className="space-y-2">
            {project.details.map((detail) => (
              <li key={detail} className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300/80" />
                <span className="leading-6 text-slate-200">{detail}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.3em] text-slate-400">
          <span>Tech</span>
          <div className="flex flex-wrap gap-2 text-[11px] text-emerald-200">
            {project.tech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-emerald-400/40 px-2 py-1"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.3em] text-slate-400">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-3 py-1 text-slate-200 transition hover:border-white/40 hover:text-white"
            >
              Code Repository
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-emerald-400/40 px-3 py-1 text-emerald-200 transition hover:border-emerald-300 hover:text-emerald-100"
            >
              View Live
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

ProjectDetailSection.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    tech: PropTypes.arrayOf(PropTypes.string),
    details: PropTypes.arrayOf(PropTypes.string),
    repoUrl: PropTypes.string,
    liveUrl: PropTypes.string,
  }),
};

ProjectDetailSection.defaultProps = {
  project: null,
};

export const ProjectPreviewPanel = ({ project, isActive }) => {
  if (!project) {
    return (
      <section className="flex h-full flex-col items-center justify-center gap-3 text-center text-slate-300">
        <p className="text-lg font-semibold text-white/80">
          No project selected
        </p>
        <p className="text-sm text-slate-400">
          Choose a project from the list to see its live preview.
        </p>
      </section>
    );
  }

  return (
    <section className="flex h-full min-h-0 flex-col overflow-hidden">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-white/5 px-6 py-3 text-xs text-slate-300">
        <div>
          <p className="font-semibold text-white/90">{project.name}</p>
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
            {isActive ? "Live Preview" : "Preview (Projects tab)"}
          </p>
        </div>
        <div className="flex gap-3 text-[11px] uppercase tracking-[0.3em] text-slate-400">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-3 py-1 text-slate-200 transition hover:border-white/40 hover:text-white"
            >
              Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-emerald-400/40 px-3 py-1 text-emerald-200 transition hover:border-emerald-300 hover:text-emerald-100"
            >
              Open
            </a>
          )}
        </div>
      </div>
      <div className="flex-1 min-h-0 overflow-hidden bg-black/30">
        <WebBrowser url={project.liveUrl} title={project.name} />
      </div>
    </section>
  );
};

ProjectPreviewPanel.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    liveUrl: PropTypes.string,
  }),
  isActive: PropTypes.bool,
};

ProjectPreviewPanel.defaultProps = {
  project: null,
  isActive: true,
};

export default ProjectDetailSection;
