import Card from "./Card";
// import CorsaleImageGallery from "/assets/CorsaleImageGallery.png";
import HobiMenia from "/assets/HobiMenia.png";
import HMS from "/assets/HMS.png";
import "./Projects.css";

const featuredProjects = [
  {
    img: HMS,
    type: "Featured Project",
    title: "Hostel Management System",
    TryNowlink: "https://project-hms-frontend-l3vz.onrender.com",
    codeLink: "https://github.com/amansinghnishad/Project-HMS",
    description:
      "A Hostel Management System (HMS) is a web application designed to streamline the management of hostel facilities. It provides features for room allocation, student registration, and payment tracking, ensuring efficient communication between students and hostel management. The system enhances the overall experience for both students and administrators.",
  },
  {
    img: HobiMenia,
    type: "Featured Project",
    title: "HobiMenia",
    TryNowlink: "https://hobimenia.vercel.app",
    codeLink: "https://github.com/amansinghnishad/Hobimenia",
    description:
      "HobiMenia is a dynamic social media app that connects people through shared interests, enabling users to build communities, post pictures, and write blogs. Its standout AI-powered feature helps craft engaging blogs and suggests trending hashtags for maximum reach. With a seamless interface, users can connect, share, and inspire effortlessly.",
  },
  // {
  //   img: CorsaleImageGallery,
  //   type: "Featured Project",
  //   title: "Corsale Image Gallery",
  //   TryNowlink: "https://amansinghnishad.github.io/Corsale-Image-Gallery/",
  //   codeLink: "https://github.com/amansinghnishad/Corsale-Image-Gallery",
  //   description:
  //     "Corsale Image Gallery is a web application that allows users to upload and share images. It features a user-friendly interface, image categorization, and the ability to like and comment on images. The gallery is designed for easy navigation and provides a platform for users to showcase their photography skills.",
  // },
];

const vibeCodingProjects = [
  {
    img: "/assets/DashPoint.png",
    type: "Vibe Coding Project",
    title: "DashPoint",
    TryNowlink: "https://dash-point.vercel.app/",
    codeLink: "https://github.com/amansinghnishad/DashPoint",
    description:
      "DashPoint is a custom personalized dashboard designed to streamline your digital workspace. It features an intuitive collection system, integrated YouTube watch functionality, advanced content extractor, sticky notes for quick reminders, and a comprehensive todo management system. Built to enhance productivity and keep all your essential tools in one seamless interface.",
  },
  {
    img: "/assets/Arya.png",
    type: "Vibe Coding Project",
    title: "Arya",
    TryNowlink: "https://proagent.onrender.com/",
    codeLink: "https://github.com/amansinghnishad/PROAGENT",
    description:
      "Arya is an intelligent AI agent designed to revolutionize file management and processing. It offers powerful features including file compression, PDF conversion, audio-to-text transcription, text-to-audio synthesis, and various other file manipulation tools. With its smart automation capabilities, Arya simplifies complex file operations and enhances workflow efficiency.",
  },
];

const Project = () => {
  return (
    <div className="projects-main-container">
      {/* Featured Projects Section */}
      <div className="projects-section">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider"></div>
        </div>
        <div className="projectDiv">
          {featuredProjects.map((project, index) => (
            <Card
              key={`featured-${index}`}
              project={project}
              status={
                project.type === "On Progress" ? "On Progress" : "featured"
              }
            />
          ))}
        </div>
      </div>

      {/* Vibe Coding Projects Section */}
      <div className="projects-section">
        <div className="section-header">
          <h2 className="section-title">Vibe Coding</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Innovative projects that blend creativity with functionality,
            designed to enhance digital experiences and streamline workflows.
          </p>
        </div>
        <div className="projectDiv">
          {vibeCodingProjects.map((project, index) => (
            <Card
              key={`vibe-${index}`}
              project={project}
              status="vibe-coding"
            />
          ))}
        </div>
      </div>

      <div className="liner-gradient-div"></div>
    </div>
  );
};

export default Project;
