import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";
import "./Card.css";
import CardContent from "./CardContent";
import CardOverlay from "./CardOverlay";

function Card({
  project: { TryNowlink, img, title, codeLink, description },
  status,
}) {
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
      className="card-container"
      data-status={status}
    >
      <CardOverlay
        TryNowlink={TryNowlink}
        img={img}
        title={title}
        codeLink={codeLink}
        description={description}
      />
      <CardContent
        TryNowlink={TryNowlink}
        title={title}
        codeLink={codeLink}
        description={description}
        status={status}
      />
    </motion.div>
  );
}

const MemoizedCard = React.memo(Card);
export default MemoizedCard;
