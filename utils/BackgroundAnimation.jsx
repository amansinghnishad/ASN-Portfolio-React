import React from "react";
import { motion } from "framer-motion";
import "./BackgroundAnimation.css";

const BackgroundAnimation = ({ children }) => {
  const numLines = Math.floor(window.innerWidth / 40);
  const documentHeight = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  );
  const numLinesVertical = Math.floor(documentHeight / 40);

  return (
    <div className="line-container">
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
      {Array.from({ length: numLines }).map((_, index) => (
        <motion.div
          key={index}
          className="dot"
          initial={{ x: 0, y: index * 40, scale: 1 }}
          animate={{ x: window.innerWidth, scale: [1, 1.2, 1] }}
          transition={{
            repeat: Infinity,
            duration: 5,
            delay: Math.random() * 6,
          }}
        ></motion.div>
      ))}
      {Array.from({ length: numLinesVertical }).map((_, index) => (
        <motion.div
          key={index + numLines}
          className="dot"
          initial={{ x: index * 40, y: 0, scale: 1 }}
          animate={{ y: documentHeight, scale: [1, 1.2, 1] }}
          transition={{
            repeat: Infinity,
            duration: 5,
            delay: Math.random() * 6,
          }}
        ></motion.div>
      ))}
      {children}
    </div>
  );
};

export default BackgroundAnimation;
