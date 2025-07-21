import { motion } from "framer-motion";
import { GrGithub } from "react-icons/gr";
import React, { useState } from "react";
import "./CardContent.css";

function CardContent({ TryNowlink, title, codeLink, description, status }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Check if description is long enough to need a read more button
  const shouldShowReadMore = description && description.length > 150;

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="card-content-overlay">
      {" "}
      <h6 className="type-heading">
        {status === "On Progress"
          ? "On Progress"
          : status === "vibe-coding"
          ? "Vibe Coding Project"
          : "Featured Project"}
      </h6>
      <motion.a
        href={TryNowlink}
        scale={0.8}
        target="_blank"
        className="card-title"
      >
        <p>{title}</p>
      </motion.a>
      <motion.div
        className={`card-description ${isExpanded ? "expanded" : ""}`}
      >
        <p>{description}</p>
      </motion.div>
      <div className="card-actions">
        {shouldShowReadMore && (
          <span className="read-more-toggle" onClick={toggleReadMore}>
            {isExpanded ? "Read Less" : "Read More"}
          </span>
        )}
        <motion.a
          href={codeLink}
          scale={0.8}
          target="_blank"
          className="card-github"
        >
          <GrGithub />
        </motion.a>
      </div>
    </div>
  );
}

export default CardContent;
