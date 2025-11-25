import PropTypes from "prop-types";

import ThemeToggle from "../components/ThemeToggle";

const HeaderSection = ({ name, title, summary, resumeUrl, logo }) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div className="space-y-3">
          {title && (
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-subtle">
              {title}
            </span>
          )}
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {name}
          </h1>
          {summary && (
            <p className="max-w-2xl text-base leading-relaxed text-muted">
              {summary}
            </p>
          )}
        </div>
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex flex-col items-center justify-end gap-3">
            {resumeUrl && (
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-accent bg-accent-soft px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-accent transition-colors hover:bg-accent hover:text-foreground"
              >
                View Résumé
              </a>
            )}
          </div>
          <div className="flex justify-center">
            {logo && (
              <img
                src={logo}
                alt={`${name} logo`}
                className="h-24 w-24 object-cover shadow-glass"
              />
            )}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

HeaderSection.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  summary: PropTypes.string,
  resumeUrl: PropTypes.string,
  logo: PropTypes.string,
};

HeaderSection.defaultProps = {
  title: "",
  summary: "",
  resumeUrl: "",
  logo: "",
};

export default HeaderSection;
