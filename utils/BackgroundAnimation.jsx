import React from "react";
import { motion } from "framer-motion";
import "./BackgroundAnimation.css";

const BackgroundAnimation = ({ children }) => {
  const numLines = Math.floor(window.innerWidth / 40);
  const numLinesVertical = Math.floor(window.innerHeight / 40);

  return (
    <div className="line-container">
      <div className="gradient">
        {Array.from({ length: numLines }).map((_, index) => (
          <motion.div
            key={index}
            className="line vertical-line"
            style={{ left: `${index * 40}px` }}
          ></motion.div>
        ))}
        {Array.from({ length: numLinesVertical }).map((_, index) => (
          <motion.div
            key={index}
            className="line horizontal-line"
            style={{ top: `${index * 40}px` }}
          ></motion.div>
        ))}
        {children}
      </div>
    </div>
  );
};

export default BackgroundAnimation;
