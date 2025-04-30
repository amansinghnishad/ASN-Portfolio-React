import { useState, useEffect } from "react";
import EducationTable from "./subContant/EducationTable";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../../../utils/pixelate.css";
import "./DesktopAboutContent.css";
import Skills from "./subContant/Skills";

const DesktopAboutContent = () => {
  const [animationClass, setAnimationClass] = useState("pixelate-in");

  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      setAnimationClass("pixelate-in");
    } else {
      setAnimationClass("pixelate-out");
    }
  }, [inView]);

  return (
    <div className="desktop-about-content">
      <div className="desktop-about-content-container">
        <motion.div
          ref={ref}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: inView ? 1 : 0.8, opacity: inView ? 1 : 0 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.5, ease: "linear" }}
          className="desktop-about-content-motion"
        >
          <EducationTable />
        </motion.div>
      </div>
      <div className="about-text-container">
        <h1 className="about-heading">
          Forever a student, hungry to master what’s next.
        </h1>
        <h3 className="about-subheading">
          Fresh on paper, ready to prove my potential.
        </h3>
        <Skills />
      </div>
    </div>
  );
};

export default DesktopAboutContent;
