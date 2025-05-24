import Card from "./Card";
import CorsaleImageGallery from "/assets/CorsaleImageGallery.png";
import HobiMenia from "/assets/HobiMenia.png";
import HMS from "/assets/HMS.png";
import "./Projects.css";

const projects = [
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

const Project = () => {
  return (
    <div className="projectDiv">
      {projects.map((project, index) => (
        <Card
          key={index}
          project={project}
          status={project.type === "On Progress" ? "On Progress" : "featured"}
        />
      ))}
      <div className="liner-gradient-div"></div>
    </div>
  );
};

export default Project;
