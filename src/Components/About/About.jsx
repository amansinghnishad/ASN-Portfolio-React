import Project from "../Projects/Projects";
import style from "./About.module.css";

const About = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center">
        <div className="w-4/5 p-5 border-cyan-200 flex border justify-center items-center">
          <div className="w-3/5 h-full ">
            <div className="h-full w-full flex justify-center items-center text-white bg-white/10  rounded-3xl shadow-lg shadow-gray-400 backdrop-filter backdrop-blur-lg bg-opacity-40">
              <img
                src="card-hello-background.png"
                className={`absolute left-1/2 top-1/3 pointer-events-none  -translate-x-1/2 -translate-y-1/2 h-full w-full z-10 ${style.backgroundImg} `}
              />
              <h1>About Me</h1>
            </div>
          </div>
          <div className="w-2/5 h-full">
            <div className="flex justify-center items-center h-full ">
              <div className="flex justify-center items-center w-3/5 h-96 rounded-2xl shadow-lg bg-white shadow-gray-400">
                <img src="" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Project />
    </>
  );
};

export default About;
