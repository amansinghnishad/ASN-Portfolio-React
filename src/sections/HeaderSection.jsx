import PropTypes from "prop-types";

import ThemeToggle from "../components/ThemeToggle";

const HeaderSection = ({ name, title, summary, resumeUrl, logo }) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-4">
          {title && (
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-foreground">
              {title}
            </span>
          )}
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {name}
          </h1>
          {summary && (
            <p className="max-w-2xl text-base leading-relaxed text-foreground sm:text-lg">
              {summary}
            </p>
          )}
        </div>

        <div className="flex flex-col items-start gap-4 text-left sm:items-end sm:text-right">
          {logo && (
            <img
              src={logo}
              alt={`${name} logo`}
              className="h-16 w-16 rounded-2xl border border-borderSubtle bg-surface object-cover shadow-glass sm:h-20 sm:w-20"
            />
          )}

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
