import PropTypes from "prop-types";

const GlassPanel = ({ as: Component, className, children }) => {
  const baseClass =
    "rounded-2xl border border-white/20 bg-white/10 backdrop-blur-2xl px-6 py-4 shadow-lg shadow-white/10";
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
