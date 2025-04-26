import Card from "./Card";
import CorsaleImageGallery from "/assets/CorsaleImageGallery.png";
import ODOP from "/assets/ODOP.png";
import HMS from "/assets/HMS.png";
import "./Projects.css";

const projects = [
  {
    img: HMS,
    title: "Hostel Management System",
    TryNowlink: "https://amansinghnishad.github.io/Project-HMS/",
    codeLink: "https://github.com/amansinghnishad/Project-HMS",
    description:
      "A Hostel Management System (HMS) is a web application designed to streamline the management of hostel facilities. It provides features for room allocation, student registration, and payment tracking, ensuring efficient communication between students and hostel management. The system enhances the overall experience for both students and administrators.",
  },
  {
    img: ODOP,
    title: "ODOP",
    TryNowlink: "https://amansinghnishad.github.io/SIH-project/",
    codeLink: "https://github.com/amansinghnishad/SIH-project",
    description:
      "One District One Product (ODOP) is a web application that promotes local products from various districts. It connects artisans and manufacturers with potential buyers, showcasing unique products from different regions. The platform aims to boost local economies and preserve traditional crafts by providing a marketplace for these products.",
  },
  {
    img: CorsaleImageGallery,
    title: "Corsale Image Gallery",
    TryNowlink: "https://amansinghnishad.github.io/Corsale-Image-Gallery/",
    codeLink: "https://github.com/amansinghnishad/Corsale-Image-Gallery",
    description:
      "Corsale Image Gallery is a web application that allows users to upload and share images. It features a user-friendly interface, image categorization, and the ability to like and comment on images. The gallery is designed for easy navigation and provides a platform for users to showcase their photography skills.",
  },
];

const Project = () => {
  return (
    <div className="projectDiv">
      {projects.map((project, index) => (
        <Card key={index} project={project} />
      ))}
      <div className="liner-gradient-div"></div>
    </div>
  );
};

export default Project;
