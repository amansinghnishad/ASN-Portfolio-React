import style from "./Projects.module.css";
import Contact from "../Contact/Contact";

const Project = () => {
  const projects = [
    { img: "img1", about: "about1", bgImg: "card-hello-background.png" },
    { img: "img2", about: "about2", bgImg: "card-hello-background.png" },
    { img: "img3", about: "about3", bgImg: "card-hello-background.png" },
    { img: "img4", about: "about4", bgImg: "card-hello-background.png" },
    { img: "img5", about: "about5", bgImg: "card-hello-background.png" },
  ];
  return (
    <>
      <div className=" w-full h-auto flex justify-center flex-wrap p-5">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`w-2/5 h-96 m-5 rounded-3xl relative overflow-hidden shadow-xl shadow-slate-500 bg-slate-900 ${style.projectDiv}`}
          >
            <img
              src={project.bgImg}
              className="absolute left-1/2 top-1/2 pointer-events-none -translate-x-1/2 -translate-y-1/2 h-full w-full z-10 rounded-3xl"
            />
            <div className="text-white flex justify-center">{project.img}</div>

            <div className="text-white flex justify-center">
              {project.about}
            </div>
          </div>
        ))}
      </div>
      <Contact />
    </>
  );
};

export default Project;
