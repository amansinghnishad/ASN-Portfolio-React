import { useState } from "react";

import Layout from "./layout";
import HeaderSection from "./sections/HeaderSection";
import FooterSection from "./sections/FooterSection";
import LeftPanel from "./sections/LeftPanel";
import CenterPanel from "./sections/CenterPanel";
import { ProjectPreviewPanel } from "./sections/ProjectsSection";
import { about } from "./data/about";
import { projects } from "./data/projects";

function App() {
  const [activeTab, setActiveTab] = useState("about");
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <Layout
      header={
        <HeaderSection
          name={about.name}
          title={about.title}
          summary={about.summary}
          resumeUrl={about.resumeUrl}
          highlights={about.highlights.slice(0, 3)}
          logo={about.logo}
        />
      }
      leftPanel={
        <LeftPanel
          activeTab={activeTab}
          onTabChange={setActiveTab}
          selectedProject={selectedProject}
          onSelectProject={setSelectedProject}
        />
      }
      centerPanel={
        <CenterPanel activeTab={activeTab} selectedProject={selectedProject} />
      }
      rightPanel={
        <ProjectPreviewPanel
          project={selectedProject}
          isActive={activeTab === "projects"}
        />
      }
      footer={
        <FooterSection
          name={about.name}
          technologies={["React", "Vite", "Tailwind"]}
        />
      }
    />
  );
}

export default App;
