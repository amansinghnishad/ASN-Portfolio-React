import Project from "../Projects/Projects";
import style from "./About.module.css";
import { useRef, useEffect } from "react";

const About = () => {
  const imgRef2 = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientY } = e;
      const centerY = window.innerWidth / 2;

      const posX = (clientY - centerY) / centerY;

      imgRef2.current.style.transform = `translate(-50%, -50%) rotate(${
        posX * 5
      }deg)`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="w-full h-screen flex justify-center ">
        <img
          src="card-skills-background.png"
          className="absolute left-1/2 top-1/2 pointer-events-none -translate-x-1/2 -translate-y-1/2 h-full w-full z-10"
        />
        <img
          ref={imgRef2}
          src="file.png"
          className="absolute left-1/2 top-1/2 pointer-events-none -translate-x-1/2 -translate-y-1/2 h-full w-full z-10 blur-sm"
        />
        <div className="w-full p-16 m-8 rounded-2xl border-cyan-200 flex border justify-center items-center bg-opacity-30 bg-white/10 backdrop-filter backdrop-blur-lg">
          <div className="w-3/5 h-full ">
            <div className="h-full w-4/5 flex justify-center items-center text-white bg-white/10  rounded-3xl shadow-lg shadow-gray-400 backdrop-filter backdrop-blur-lg bg-opacity-40">
              <img
                src="card-hello-background.png"
                className={`absolute left-1/2 top-1/2 pointer-events-none  -translate-x-1/2 -translate-y-1/2 h-full w-full z-10  `}
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
