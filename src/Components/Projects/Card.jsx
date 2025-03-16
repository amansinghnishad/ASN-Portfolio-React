import { GrGithub } from "react-icons/gr";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";
import "./Card.css";

function Card({ project: { TryNowlink, img, title, codeLink }, reverse }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: inView ? 1 : 0.8, opacity: inView ? 1 : 0 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.5, ease: "linear" }}
      className={`card-container ${reverse ? "reverse" : ""}`}
    >
      <div className="card-content">
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
          <div className="card-description">
            <p>Click on the image to try now</p>
          </div>

          <motion.a
            href={codeLink}
            scale={0.8}
            target="_blank"
            className="card-github"
          >
            <GrGithub />
          </motion.a>
        </div>
        <div className="card-overlay">
          <div className="card-bg-linearGradient"></div>
          <div className="card-img-bg"></div>

          <a href={TryNowlink} target="_blank">
            <img
              src={img}
              alt={`Project ${title}`}
              className="card-image"
            ></img>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

const MemoizedCard = React.memo(Card);
export default MemoizedCard;
