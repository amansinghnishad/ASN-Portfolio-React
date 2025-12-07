import PropTypes from "prop-types";

const GlassPanel = ({ as: Component, className, children }) => {
  const baseClass =
    "glass-panel relative overflow-hidden rounded-3xl  px-4 py-3 shadow-glass backdrop-blur-2xl transition-all duration-500 sm:px-6 sm:py-4";
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
