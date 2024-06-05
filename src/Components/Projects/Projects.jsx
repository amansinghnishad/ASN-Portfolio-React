import Contact from "../Contact/Contact";
import Card from "./Card";
import { BrowserRouter as Router } from "react-router-dom";
import CorsaleImageGallery from "../../assets/CorsaleImageGallery.png";
import ODOP from "../../assets/ODOP.png";
import PortfolioHTML from "../../assets/PortfolioHTML.png";

const Project = () => {
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
      TryNowlink: "https://github.com/amansinghnishad/ASN-Portfolio",
      codeLink: "https://amansinghnishad.github.io/ASN-Portfolio/",
    },
  ];
  return (
    <>
      <div className=" w-full h-auto flex justify-center flex-wrap p-5">
        <Router>
          {projects.map((project, index) => (
            <Card key={index} project={project} />
          ))}
        </Router>
      </div>
      <Contact />
    </>
  );
};

export default Project;
