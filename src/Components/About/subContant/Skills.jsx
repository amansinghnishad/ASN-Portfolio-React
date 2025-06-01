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
          <div key={index} className="skill-item">
            <img className="skill-icon" src={icon.src} alt={icon.alt} />
            <span className="tooltip">{icon.alt}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="skills-svg"
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
            >
              <circle cx="22" cy="22" r="22" fill="#251C31" />
            </svg>
          </div>
        ))}
      </div>
      <div className="skills-row">
        {icons.slice(7).map((icon, index) => (
          <div key={index} className="skill-item">
            <img className="skill-icon" src={icon.src} alt={icon.alt} />
            <span className="tooltip">{icon.alt}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="skills-svg"
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
            >
              <circle cx="22" cy="22" r="22" fill="#251C31" />
            </svg>
          </div>
        ))}
      </div>
      <SkillsSVG />
    </div>
  );
};

export default Skills;
