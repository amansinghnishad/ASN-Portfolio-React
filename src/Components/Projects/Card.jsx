import { GrGithub } from "react-icons/gr";
import PropTypes from "prop-types";

function Card({ project }) {
  return (
    <div className=" h-auto w-auto relative grid grid-col-2 items-center justify-center m-5 rounded-2xl	 bg-inherit backdrop-blur-mx shadow-custom-light  hover:drop-shadow-[15px_15px_15px_rgba(34,34,91,0.56)]">
      <div className="pb-5 ">
        <a href={project.TryNowlink} target="_blank">
          <img
            src={project.img}
            alt={project.title}
            className="w-[35rem] h-[20rem] rounded-t-2xl object-cover transition-all duration-500 ease-in-out hover:transform hover:scale-105 hover:rounded-2xl"
          ></img>
        </a>
        <div className="flex justify-between items-center p-2">
          <a href={project.TryNowlink} target="_blank">
            <p className="font-bold  text-white text-xl ">{project.title}</p>
          </a>
          <a
            href={project.codeLink}
            target="_blank"
            className="font-700 flex p-2 items-end text-white text-right text-3xl transition-all duration-500 ease-in-out hover:text-4xl"
          >
            <GrGithub />
          </a>
        </div>
      </div>
    </div>
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

export default Card;
