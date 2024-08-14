import { GrGithub } from "react-icons/gr";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

function Card({ project: { TryNowlink, img, title, codeLink } }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: inView ? 1 : 0.8, opacity: inView ? 1 : 0 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.5, ease: "linear" }}
      className=" h-auto w-auto relative grid grid-col-2 items-center justify-center m-5 rounded-2xl	 bg-gradient-to-br from-[#403f40cb] to-[#0e0e0fe3] backdrop-blur-mx shadow-custom-light border-2 border-[#1c1c1c90] hover:drop-shadow-[10px_10px_10px_rgba(190,174,220,0.50)] "
    >
      <div className="pb-2 ">
        <a href={TryNowlink} target="_blank">
          <img
            src={img}
            alt={`Project ${title}`}
            className="w-[35rem] h-[20rem] rounded-t-2xl border-2 border-[#1c1c1c90]  object-cover transition-all duration-500 ease-in-out hover:transform hover:scale-105 hover:rounded-2xl"
          ></img>
        </a>
        <div className="flex justify-between items-center p-4 ">
          <motion.a
            href={TryNowlink}
            scale={0.8}
            target="_blank"
            className="p-2 flex justify-center items-center"
          >
            <p className="font-bold text-white text-xl hover:drop-shadow-[0px_8px_2px_rgba(190,174,220,0.6)]">
              {title}
            </p>
          </motion.a>

          <motion.a
            href={codeLink}
            scale={0.8}
            target="_blank"
            className="font-700 border-2 rounded-md flex p-1 items-end text-white text-right text-3xl drop-shadow-[0px_5px_2px_rgba(255,255,255,0.4)] hover:bg-[#2f2d2d]"
          >
            <GrGithub />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

Card.propTypes = {
  project: PropTypes.shape({
    TryNowlink: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    codeLink: PropTypes.string.isRequired,
  }).isRequired,
};

const MemoizedCard = React.memo(Card);
export default MemoizedCard;
