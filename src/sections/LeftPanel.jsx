import PropTypes from "prop-types";

import NavigationPanel from "./NavigationPanel";
import { ProjectListPanel } from "./ProjectsSection";

const LeftPanel = ({
  activeTab,
  onTabChange,
  selectedProject,
  onSelectProject,
}) => {
  return (
    <div className="flex h-full min-h-0 flex-col gap-1">
      <NavigationPanel activeTab={activeTab} onChange={onTabChange} />
      <div className="custom-scroll flex-1 min-h-0 overflow-y-auto scroll-smooth pr-1">
        <ProjectListPanel
          selectedProject={selectedProject}
          onSelect={onSelectProject}
        />
      </div>
    </div>
  );
};

LeftPanel.propTypes = {
  activeTab: PropTypes.oneOf(["about", "experience", "projects"]).isRequired,
  onTabChange: PropTypes.func.isRequired,
  selectedProject: PropTypes.shape({
    name: PropTypes.string,
  }),
  onSelectProject: PropTypes.func.isRequired,
};

LeftPanel.defaultProps = {
  selectedProject: null,
};

export default LeftPanel;
