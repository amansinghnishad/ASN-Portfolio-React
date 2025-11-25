import PropTypes from "prop-types";

const HeaderSection = ({ name, summary, availabilityText }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-3xl font-semibold tracking-tight text-white">
          {name}
        </h1>
        {availabilityText && (
          <span className="rounded-full border border-emerald-400/40 px-3 py-1 text-xs uppercase tracking-[0.3em] text-emerald-100">
            {availabilityText}
          </span>
        )}
      </div>
      {summary && <p className="text-base text-slate-300">{summary}</p>}
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
