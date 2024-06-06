import { GrGithub } from "react-icons/gr";

function Card({ project }) {
  return (
    <div className=" h-auto w-auto relative grid grid-col-2 items-center justify-center m-5 rounded-2xl	 bg-zinc-900 shadow-custom-light">
      <div className="p-5 ">
        <a href={project.TryNowlink} target="_blank">
          <img
            src={project.img}
            alt={project.title}
            className="w-[35rem] h-[20rem] rounded-2xl	 object-cover"
          ></img>
        </a>
        <div className="flex justify-between items-center p-2">
          <a href={project.TryNowlink} target="_blank">
            <p className="font-bold  text-white text-xl">{project.title}</p>
          </a>
          <a
            href={project.codeLink}
            target="_blank"
            className="font-700 flex p-2 items-end text-white text-right text-3xl"
          >
            <GrGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
