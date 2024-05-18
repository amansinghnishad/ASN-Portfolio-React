import Project from "../Projects/Projects";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../ui/canvas-reveal-effect";

const About = () => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <>
      <div className="relative w-full h-screen flex justify-cente">
        <div className="w-3/5 h-full flex justify-center items-center p-16 ">
          <div
            className="h-full w-9/10 flex justify-center items-center text-white bg-white/10  rounded-3xl shadow-lg shadow-gray-400 backdrop-filter backdrop-blur-lg bg-opacity-40"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <img
              src="card-hello-background.png"
              className={`absolute left-1/2 top-1/2 pointer-events-none  -translate-x-1/2 -translate-y-1/2 h-full w-full z-10  `}
            />
            <h1>About Me</h1>
            <AnimatePresence>
              {hovered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full w-full absolute inset-0"
                >
                  <CanvasRevealEffect
                    animationSpeed={5}
                    containerClassName="bg-transparent"
                    colors={[
                      [25, 55, 105],
                      [60, 40, 105],
                    ]}
                    opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                    dotSize={2}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="w-2/5 h-full">
          <div className="flex justify-center items-center h-full ">
            <div className="flex justify-center items-center w-1/2 h-3/5 rounded-2xl shadow-lg bg-white shadow-gray-400">
              <img src="" alt="img" />
            </div>
          </div>
        </div>
      </div>
      <Project />
    </>
  );
};

export default About;
