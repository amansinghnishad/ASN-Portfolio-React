import "./Skills.css";
import SkillsSVG from "./SkillsSVG";

const icons = [
  { src: "html5.png", alt: "HTML5" },
  { src: "css.png", alt: "CSS" },
  { src: "figma.png", alt: "Figma" },
  { src: "git.png", alt: "Git" },
  { src: "github.png", alt: "Github" },
  { src: "intellij-idea.png", alt: "Intellij-Idea" },
  { src: "java.png", alt: "Java" },
  { src: "javascript.png", alt: "Javascript" },
  { src: "react.png", alt: "React" },
  { src: "vscode.png", alt: "VS-code" },
  { src: "nodejs.png", alt: "NodeJs" },
  { src: "express.png", alt: "ExpressJs" },
  { src: "mongodb.png", alt: "MongoDB" },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-row">
        {icons.slice(0, 7).map((icon, index) => (
          <div
            key={index}
            className="skill-item"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img className="skill-icon" src={icon.src} alt={icon.alt} />
            <span className="tooltip">{icon.alt}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="skills-svg"
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
            >
              <defs>
                {" "}
                <linearGradient
                  id={`skillGradient${index}`}
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="rgba(255, 255, 255, 0.05)" />
                  <stop offset="25%" stopColor="rgba(255, 255, 255, 0.08)" />
                  <stop offset="50%" stopColor="rgba(255, 255, 255, 0.06)" />
                  <stop offset="75%" stopColor="rgba(255, 255, 255, 0.04)" />
                  <stop offset="100%" stopColor="rgba(255, 255, 255, 0.03)" />
                </linearGradient>
              </defs>
              <circle
                cx="26"
                cy="26"
                r="25"
                fill={`url(#skillGradient${index})`}
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth="1"
              />
            </svg>
          </div>
        ))}
      </div>
      <div className="skills-row">
        {icons.slice(7).map((icon, index) => (
          <div
            key={index + 7}
            className="skill-item"
            style={{ animationDelay: `${(index + 7) * 0.1}s` }}
          >
            <img className="skill-icon" src={icon.src} alt={icon.alt} />
            <span className="tooltip">{icon.alt}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="skills-svg"
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
            >
              <defs>
                {" "}
                <linearGradient
                  id={`skillGradient${index + 7}`}
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="rgba(255, 255, 255, 0.05)" />
                  <stop offset="25%" stopColor="rgba(255, 255, 255, 0.08)" />
                  <stop offset="50%" stopColor="rgba(255, 255, 255, 0.06)" />
                  <stop offset="75%" stopColor="rgba(255, 255, 255, 0.04)" />
                  <stop offset="100%" stopColor="rgba(255, 255, 255, 0.03)" />
                </linearGradient>
              </defs>
              <circle
                cx="26"
                cy="26"
                r="25"
                fill={`url(#skillGradient${index + 7})`}
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth="1"
              />
            </svg>
          </div>
        ))}
      </div>
      <SkillsSVG />
    </div>
  );
};

export default Skills;
