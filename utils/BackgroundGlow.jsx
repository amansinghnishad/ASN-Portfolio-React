import React, { useState, useEffect } from "react";
import "./BackgroundGlow.css";
import { motion } from "framer-motion";

const BackgroundBeams = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="background-beams"
      style={{
        "--mouse-x": mousePosition.x + "px",
        "--mouse-y": mousePosition.y + "px",
      }}
    />
  );
};

export default BackgroundBeams;
