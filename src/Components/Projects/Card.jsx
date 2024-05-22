import { DirectionAwareHover } from "../ui/direction-aware-hover";

function Card({ project }) {
  return (
    <div className=" h-[40rem] relative  flex items-center justify-center mx-5">
      <DirectionAwareHover imageUrl={project.img}>
        <a href={project.TryNowlink} target="_blank">
          <p className="font-bold text-xl">{project.title}</p>
        </a>
        <a
          href={project.codeLink}
          target="_blank"
          className="font-500 text-right text-sm"
        >
          Code
        </a>
      </DirectionAwareHover>
    </div>
  );
}

export default Card;
