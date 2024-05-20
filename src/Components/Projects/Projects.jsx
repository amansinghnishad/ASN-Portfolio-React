import Contact from "../Contact/Contact";
import { Card } from "./Card";
import { BrowserRouter as Router } from "react-router-dom";
import CorsaleImageGallery from "../../assets/CorsaleImageGallery.png";

const Project = () => {
  const projects = [
    {
      img: CorsaleImageGallery,
      heading: "Corsale Image Gallery",
      about:
        "Corsale Image Gallery is a simple and lightweight JavaScript-based project that allows users to create an interactive image gallery",
      TryNowlink: "https://amansinghnishad.github.io/Corsale-Image-Gallery/",
      codeLink: "https://github.com/amansinghnishad/Corsale-Image-Gallery",
    },
    {
      img: "img2",
      heading: "heading 1",
      about: "about2",
      TryNowlink: "",
      codeLink: "",
    },
    {
      img: "img3",
      heading: "heading 1",
      about: "about3",
      TryNowlink: "",
      codeLink: "",
    },
    {
      img: "img4",
      heading: "heading 1",
      about: "about4",
      TryNowlink: "",
      codeLink: "",
    },
    {
      img: "img5",
      heading: "heading 1",
      about: "about5",
      TryNowlink: "",
      codeLink: "",
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
