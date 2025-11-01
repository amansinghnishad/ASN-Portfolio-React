import "./Experience.css";
import ExpCard from "./ExpCard";
const experienceData = [
  {
    id: 2,
    glb: "/assets/VaultOfCodecard.glb",
  },
  {
    id: 1,
    glb: "/assets/ZoroCard.glb",
  },
];

const Experience = () => {
  return (
    <div className="experience-main-container">
      <div className="experience-section">
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <div className="section-divider"></div>
        </div>

        <div className="cards-grid">
          {experienceData.map((exp) => (
            <ExpCard
              key={exp.id}
              position={[0, 0, 10]}
              gravity={[0, -40, 0]}
              cardScale={2}
              bandRepeat={[-1, 1]}
              containerHeight={420}
              glb={exp.glb}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
