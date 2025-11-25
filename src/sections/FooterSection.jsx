import PropTypes from "prop-types";

const FooterSection = ({ name, technologies }) => {
  const year = new Date().getFullYear();
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
      <span>
        © {year} {name}. Crafted with care.
      </span>
      {technologies && technologies.length > 0 && (
        <span className="tracking-[0.3em] uppercase text-slate-500">
          {technologies.join(" · ")}
        </span>
      )}
    </div>
  );
};

FooterSection.propTypes = {
  name: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string),
};

FooterSection.defaultProps = {
  technologies: [],
};

export default FooterSection;
