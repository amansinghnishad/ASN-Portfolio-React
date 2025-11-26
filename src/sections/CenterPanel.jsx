import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";

import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import { ProjectDetailSection } from "./ProjectsSection";

const panelVariants = {
  initial: {
    opacity: 0,
    y: 16,
    filter: "blur(6px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.32,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    filter: "blur(4px)",
    transition: {
      duration: 0.22,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const CenterPanel = ({ activeTab, selectedProject }) => {
  const renderActivePanel = () => {
    if (activeTab === "experience") {
      return <ExperienceSection />;
    }

    if (activeTab === "projects") {
      return <ProjectDetailSection project={selectedProject} />;
    }

    return <AboutSection />;
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeTab}
        variants={panelVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex h-full flex-col"
      >
        {renderActivePanel()}
      </motion.div>
    </AnimatePresence>
  );
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
