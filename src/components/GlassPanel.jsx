import PropTypes from "prop-types";

const GlassPanel = ({ as: Component, className, children }) => {
  const baseClass =
    "rounded-3xl border border-borderSubtle bg-surface backdrop-blur-2xl px-6 py-4 shadow-glass transition-colors duration-500";
  const composedClassName = [baseClass, className].filter(Boolean).join(" ");

  return <Component className={composedClassName}>{children}</Component>;
};

GlassPanel.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  children: PropTypes.node,
};

GlassPanel.defaultProps = {
  as: "section",
  className: "",
  children: null,
};

export default GlassPanel;
