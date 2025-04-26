import { motion } from "framer-motion";
import { GrGithub } from "react-icons/gr";
import React from "react";
import "./CardContent.css";

function CardContent({ TryNowlink, title, codeLink, description }) {
  return (
    <div className="card-content-overlay">
      <h6 className="type-heading">Featured Project</h6>
      <motion.a
        href={TryNowlink}
        scale={0.8}
        target="_blank"
        className="card-title"
      >
        <p>{title}</p>
      </motion.a>
      <motion.div className="card-description">
        <p>{description}</p>
      </motion.div>
      <motion.a
        href={codeLink}
        scale={0.8}
        target="_blank"
        className="card-github"
      >
        <GrGithub />
      </motion.a>
    </div>
  );
}

export default CardContent;
