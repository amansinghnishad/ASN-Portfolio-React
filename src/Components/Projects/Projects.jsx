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
      <div className={style.projectContainer}>
        {projects.map((project, index) => (
          <div key={index} className={style.projectCard}>
            <div className={style.projectImg}>{project.img}</div>
            <div className={style.projectAbout}>{project.about}</div>
          </div>
        ))}
      </div>

      <Contact />
    </>
  );
};

export default Project;
