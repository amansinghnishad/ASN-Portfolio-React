import "./SkillsSVG.css";
import React from "react";

const SkillsSVG = () => {
  return (
    <div className="skills-svg-dig">
      <img src="logo.png" alt="logo" className="logo" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="180"
        height="180"
        viewBox="0 0 180 180"
        fill="none"
        className="circle-svg"
      >
        <circle cx="90" cy="90" r="90" fill="url(#paint0_linear_16_265)" />
        <defs>
          <linearGradient
            id="paint0_linear_16_265"
            x1="90"
            y1="0"
            x2="90"
            y2="180"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#301080" stopOpacity="0.6" />
            <stop offset="1" stopColor="#7840AD" stopOpacity="0.36" />
          </linearGradient>
        </defs>
      </svg>
      <span className="ellipse-1">
        <img src="./src/assets/ellipse-png/Ellipse-1.png"></img>
      </span>
      <span className="ellipse-2">
        <img src="./src/assets/ellipse-png/Ellipse-2.png"></img>
      </span>
      <span className="ellipse-3"></span>
      <span className="ellipse-4">
        <img src="./src/assets/ellipse-png/Ellipse-4.png"></img>
      </span>
      <span className="ellipse-5">
        <img src="./src/assets/ellipse-png/Ellipse-5.png"></img>
      </span>
      <span className="ellipse-6">
        <img src="./src/assets/ellipse-png/Ellipse-6.png"></img>
      </span>
    </div>
  );
};

export default SkillsSVG;
