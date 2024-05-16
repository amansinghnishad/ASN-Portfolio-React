import style from "./Projects.module.css";
import Contact from "../Contact/Contact";

const Project = () => {
  const projects = [
    { img: "img1", about: "about1" },
    { img: "img2", about: "about2" },
    { img: "img3", about: "about3" },
    { img: "img4", about: "about4" },
    { img: "img5", about: "about5" },
  ];
  return (
    <>
      <div className=" w-full h-auto flex justify-center flex-wrap p-5">
        {projects.map((project, index) => (
          <div key={index} className="border w-2/5 h-96 m-5 rounded-3xl">
            <div className="">{project.img}</div>
            <div className="">{project.about}</div>
          </div>
        ))}
      </div>

      <Contact />
    </>
  );
};

export default Project;
