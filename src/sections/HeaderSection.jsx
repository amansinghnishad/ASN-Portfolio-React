import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import ThemeToggle from "../components/ThemeToggle";

const resolveCurrentTheme = () => {
  if (typeof document === "undefined") {
    return "light";
  }
  return document.documentElement.getAttribute("data-theme") ?? "light";
};

const HeaderSection = ({
  name,
  title,
  summary,
  resumeUrl,
  logo,
  logoLight,
  logoDark,
}) => {
  const [theme, setTheme] = useState(resolveCurrentTheme);

  useEffect(() => {
    if (typeof document === "undefined") {
      return undefined;
    }

    const root = document.documentElement;
    const updateTheme = () => {
      setTheme(root.getAttribute("data-theme") ?? "light");
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(root, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  const resolvedLogo =
    theme === "dark"
      ? logoDark || logo || logoLight
      : logoLight || logo || logoDark;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-4">
          {title && (
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-accent">
              {title}
            </span>
          )}
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {name}
          </h1>
          {summary && (
            <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {summary}
            </p>
          )}
        </div>

        <div className="flex flex-col items-start gap-4 text-left sm:items-end sm:text-right">
          {resolvedLogo && (
            <img
              src={resolvedLogo}
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
  logoLight: PropTypes.string,
  logoDark: PropTypes.string,
};

HeaderSection.defaultProps = {
  title: "",
  summary: "",
  resumeUrl: "",
  logo: "",
  logoLight: "",
  logoDark: "",
};

export default HeaderSection;
