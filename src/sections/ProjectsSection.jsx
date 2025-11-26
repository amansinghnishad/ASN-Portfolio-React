import PropTypes from "prop-types";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

import { projects } from "../data/projects";
import WebBrowser from "../components/WebBrowser";

export const ProjectListPanel = ({ selectedProject, onSelect }) => {
  return (
    <section className="flex h-full min-h-0 flex-col gap-4 text-foreground">
      <div className="flex flex-1 min-h-0 flex-col text-sm">
        <LayoutGroup id="project-cards">
          {projects.map((project, index) => {
            const isActive =
              selectedProject && project.name === selectedProject.name;
            const isLast = index === projects.length - 1;
            return (
              <div key={project.name} className="flex flex-col">
                <motion.button
                  type="button"
                  onClick={() => onSelect(project)}
                  className={[
                    "relative w-full overflow-hidden rounded-2xl px-4 py-4 text-left",
                    "transition-colors duration-300",
                    isActive
                      ? "text-foreground shadow-glass"
                      : "text-foreground/80 hover:bg-surface hover:text-foreground",
                  ].join(" ")}
                  aria-pressed={isActive}
                  aria-current={isActive ? "true" : undefined}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="project-list-highlight"
                      className="absolute inset-0 rounded-2xl bg-accent-soft"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 32,
                      }}
                    />
                  )}

                  <div className="relative z-10 space-y-2">
                    <p className="text-base font-semibold tracking-tight text-foreground transition-colors">
                      {project.name}
                    </p>
                    <p className="text-sm text-foreground/75 transition-colors">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 text-[11px] font-medium uppercase tracking-[0.3em] text-foreground">
                      {project.tech.slice(0, 3).map((stack) => (
                        <span
                          key={stack}
                          className="rounded-full border border-borderSubtle/60 bg-surface/60 px-2 py-0.5"
                        >
                          {stack}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.button>
                {!isLast && (
                  <span className="my-3 w-full border-t border-dashed border-borderSubtle" />
                )}
              </div>
            );
          })}
        </LayoutGroup>
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
    <section className="flex h-full min-h-0 flex-col gap-6">
      <header className="space-y-2">
        <h2 className="text-3xl font-semibold text-foreground">
          {project.name}
        </h2>
        <p className="text-sm text-muted">{project.description}</p>
      </header>

      <div className="grid gap-4 text-sm text-muted">
        {project.details && project.details.length > 0 && (
          <motion.ul
            className="space-y-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.05, ease: "easeOut" }}
          >
            {project.details.map((detail) => (
              <li key={detail} className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                <span className="leading-6 text-foreground">{detail}</span>
              </li>
            ))}
          </motion.ul>
        )}

        <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-borderSubtle/60 bg-surface/60 px-4 py-3 text-xs uppercase tracking-[0.3em] text-subtle">
          <span className="text-[11px] font-semibold text-foreground/80">
            Tech
          </span>
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
      <AnimatePresence mode="wait">
        <motion.div
          key={project.name}
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -12, scale: 0.98 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex h-full flex-col overflow-hidden"
        >
          <div className="flex flex-col gap-3 border-b border-borderSubtle/70 bg-surfaceStrong/80 px-6 py-4 text-xs text-muted">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="font-semibold text-foreground">{project.name}</p>
                <p className="text-[11px] uppercase tracking-[0.3em] text-subtle">
                  {isActive ? "Live Preview" : "Preview (Projects tab)"}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.3em] text-subtle">
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
            <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.3em] text-subtle">
              {project.tech.map((stack) => (
                <span
                  key={`${project.name}-${stack}`}
                  className="rounded-full border border-borderSubtle/70 bg-surface px-2 py-1 text-foreground/80"
                >
                  {stack}
                </span>
              ))}
            </div>
          </div>

          <motion.div
            className="flex-1 min-h-0 overflow-hidden bg-surface"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.35,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.08,
            }}
          >
            <WebBrowser url={project.liveUrl} title={project.name} />
          </motion.div>
        </motion.div>
      </AnimatePresence>
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
