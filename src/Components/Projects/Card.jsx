"use client";

import { DirectionAwareHover } from "../ui/direction-aware-hover";

function Card({ project }) {
  return (
    <div className="h-[40rem] relative  flex items-center justify-center">
      <DirectionAwareHover imageUrl={project.img}>
        <p className="font-bold text-xl">{project.title}</p>
        <p className="font-normal text-sm">$1299 / night</p>
      </DirectionAwareHover>
    </div>
  );
}

export default Card;
