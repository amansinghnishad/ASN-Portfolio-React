import React from "react";
import { motion } from "framer-motion";
import "./BackgroundAnimation.css";

const BackgroundAnimation = ({ children }) => {
  const numLines = Math.floor(window.innerWidth / 40);
  const numLinesVertical = Math.floor(window.innerHeight / 40);

  const lineVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, yoyo: Infinity } },
  };

  return (
    <div className="line-container">
      <div className="gradient">
        {Array.from({ length: numLines }).map((_, index) => (
          <motion.div
            key={index}
            className="line vertical-line"
            style={{ left: `${index * 40}px` }}
            initial="hidden"
            animate="visible"
            variants={lineVariants}
          ></motion.div>
        ))}
        {Array.from({ length: numLinesVertical }).map((_, index) => (
          <motion.div
            key={index}
            className="line horizontal-line"
            style={{ top: `${index * 40}px` }}
            initial="hidden"
            animate="visible"
            variants={lineVariants}
          ></motion.div>
        ))}
        {children}
      </div>
    </div>
  );
};

export default BackgroundAnimation;
