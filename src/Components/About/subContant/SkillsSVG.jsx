import "./SkillsSVG.css";
import "./SkillsSVGMedia.css";
import React from "react";

const ellipses = [
  { className: "ellipse-1", src: "/ellipse-png/Ellipse-1.png" },
  { className: "ellipse-2", src: "/ellipse-png/Ellipse-2.png" },
  { className: "ellipse-3", src: null },
  { className: "ellipse-4", src: "/ellipse-png/Ellipse-4.png" },
  { className: "ellipse-5", src: "/ellipse-png/Ellipse-5.png" },
  { className: "ellipse-6", src: "/ellipse-png/Ellipse-6.png" },
];

const vectors = [
  { className: "vector-1", src: "/vectors/Vector-1.png" },
  { className: "vector-2", src: "/vectors/Vector-2.png" },
  { className: "vector-3", src: "/vectors/Vector-3.png" },
  { className: "vector-4", src: "/vectors/Vector-4.png" },
  { className: "vector-5", src: "/vectors/Vector-5.png" },
  { className: "vector-6", src: "/vectors/Vector-6.png" },
];

const SkillsSVG = () => {
  return (
    <div className="skills-svg-dig">
      <div className="ellipse-div">
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
        {ellipses.map((ellipse, index) => (
          <span key={index} className={ellipse.className}>
            {ellipse.src && <img src={ellipse.src} alt="" />}
          </span>
        ))}
      </div>
      <div className="vector-div">
        {vectors.map((vector, index) => (
          <span key={index} className={vector.className}>
            <img src={vector.src} alt="" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsSVG;
