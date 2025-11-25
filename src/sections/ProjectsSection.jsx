import PropTypes from "prop-types";

import { projects } from "../data/projects";
import WebBrowser from "../components/WebBrowser";

export const ProjectListPanel = ({ selectedProject, onSelect }) => {
  return (
    <section className="flex h-full min-h-0 flex-col gap-4">
      <div className="flex flex-1 min-h-0 flex-col text-sm text-muted">
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
                  "w-full rounded-2xl px-4 py-4 text-left transition-colors duration-300",
                  isActive
                    ? "bg-surfaceStrong text-accent shadow-glass"
                    : "text-subtle hover:bg-surface hover:text-foreground",
                ].join(" ")}
                aria-pressed={isActive}
              >
                <p className="text-base font-semibold tracking-tight transition-colors">
                  {project.name}
                </p>
                <p className="mt-1 text-sm text-muted transition-colors">
                  {project.description}
                </p>
              </button>
              {!isLast && (
                <span className="my-2 w-full border-t border-dashed border-borderSubtle" />
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
      <section className="flex h-full flex-col items-center justify-center gap-3 text-center text-muted">
        <p className="text-lg font-semibold text-foreground opacity-80">
          Select a project to view details
        </p>
        <p className="text-sm text-subtle">
          Pick one from the list to inspect its description, stack, and links.
        </p>
      </section>
    );
  }

  return (
    <section className="flex h-full min-h-0 flex-col gap-5">
      <header className="space-y-1">
        <p className="text-sm uppercase tracking-[0.3em] text-subtle">
          Case Study
        </p>
        <h2 className="text-3xl font-semibold text-foreground">
          {project.name}
        </h2>
        <p className="text-sm text-muted">{project.description}</p>
      </header>

      <div className="space-y-4 text-sm text-muted">
        {project.details && project.details.length > 0 && (
          <ul className="space-y-2">
            {project.details.map((detail) => (
              <li key={detail} className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                <span className="leading-6 text-foreground">{detail}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.3em] text-subtle">
          <span>Tech</span>
          <div className="flex flex-wrap gap-2 text-[11px] text-accent">
            {project.tech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-accent bg-accent-soft px-2 py-1"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.3em] text-subtle">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-borderSubtle px-3 py-1 text-subtle transition-colors hover:border-accent hover:text-accent"
            >
              Code Repository
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-accent px-3 py-1 text-accent transition-colors hover:bg-accent-soft"
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
      <section className="flex h-full flex-col items-center justify-center gap-3 text-center text-muted">
        <p className="text-lg font-semibold text-foreground opacity-80">
          No project selected
        </p>
        <p className="text-sm text-subtle">
          Choose a project from the list to see its live preview.
        </p>
      </section>
    );
  }

  return (
    <section className="flex h-full min-h-0 flex-col overflow-hidden">
      <div className="flex items-center justify-between gap-3 border-b border-borderSubtle bg-surfaceStrong px-6 py-3 text-xs text-muted">
        <div>
          <p className="font-semibold text-foreground">{project.name}</p>
          <p className="text-[11px] uppercase tracking-[0.3em] text-subtle">
            {isActive ? "Live Preview" : "Preview (Projects tab)"}
          </p>
        </div>
        <div className="flex gap-3 text-[11px] uppercase tracking-[0.3em] text-subtle">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-borderSubtle px-3 py-1 text-subtle transition-colors hover:border-accent hover:text-accent"
            >
              Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-accent px-3 py-1 text-accent transition-colors hover:bg-accent-soft"
            >
              Open
            </a>
          )}
        </div>
      </div>
      <div className="flex-1 min-h-0 overflow-hidden bg-surface">
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
