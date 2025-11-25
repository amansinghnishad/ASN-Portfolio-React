import PropTypes from "prop-types";

import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import { ProjectDetailSection } from "./ProjectsSection";

const CenterPanel = ({ activeTab, selectedProject }) => {
  if (activeTab === "experience") {
    return <ExperienceSection />;
  }

  if (activeTab === "projects") {
    return <ProjectDetailSection project={selectedProject} />;
  }

  return <AboutSection />;
};

CenterPanel.propTypes = {
  activeTab: PropTypes.oneOf(["about", "experience", "projects"]).isRequired,
  selectedProject: PropTypes.shape({
    name: PropTypes.string,
  }),
};

CenterPanel.defaultProps = {
  selectedProject: null,
};

export default CenterPanel;
