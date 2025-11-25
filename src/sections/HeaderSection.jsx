import PropTypes from "prop-types";

import ThemeToggle from "../components/ThemeToggle";

const HeaderSection = ({ name, summary, availabilityText }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          {name}
        </h1>
        <div className="flex items-center gap-3">
          {availabilityText && (
            <span className="rounded-full border border-accent bg-accent-soft px-3 py-1 text-xs uppercase tracking-[0.3em] text-accent">
              {availabilityText}
            </span>
          )}
          <ThemeToggle />
        </div>
      </div>
      {summary && <p className="text-base text-muted">{summary}</p>}
    </div>
  );
};

HeaderSection.propTypes = {
  name: PropTypes.string.isRequired,
  summary: PropTypes.string,
  availabilityText: PropTypes.string,
};

HeaderSection.defaultProps = {
  summary: "",
  availabilityText: "",
};

export default HeaderSection;
