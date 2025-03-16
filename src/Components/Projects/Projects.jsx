import Card from "./Card";
import CorsaleImageGallery from "../../assets/CorsaleImageGallery.png";
import ODOP from "../../assets/ODOP.png";
import PortfolioHTML from "../../assets/PortfolioHTML.png";

const projects = [
  {
    img: CorsaleImageGallery,
    title: "Corsale Image Gallery",
    TryNowlink: "https://amansinghnishad.github.io/Corsale-Image-Gallery/",
    codeLink: "https://github.com/amansinghnishad/Corsale-Image-Gallery",
  },
  {
    img: ODOP,
    title: "ODOP",
    TryNowlink: "https://amansinghnishad.github.io/SIH-project/",
    codeLink: "https://github.com/amansinghnishad/SIH-project",
  },
  {
    img: PortfolioHTML,
    title: "Portfolio HTML",
    TryNowlink: "https://amansinghnishad.github.io/ASN-Portfolio/",
    codeLink: "https://github.com/amansinghnishad/ASN-Portfolio",
  },
];

const Project = () => {
  return (
    <div className="w-full h-auto flex justify-center flex-wrap p-5">
      {projects.map((project, index) => (
        <Card key={index} project={project} reverse={true} />
      ))}
    </div>
  );
};

export default Project;
