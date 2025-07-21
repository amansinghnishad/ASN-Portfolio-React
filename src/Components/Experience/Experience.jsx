import "./Experience.css";

const experienceData = [
  {
    id: 1,
    company: "Vaults of code",
    position: "Web Developer Training",
    duration: "Apr 2025 - Jun 2025",
    location: "Remote",
    description: [
      "Developed and maintained web applications using React.js and Node.js",
      "Collaborated with cross-functional teams to deliver high-quality software solutions",
      "Implemented responsive designs and optimized application performance",
      "Participated in code reviews and mentored junior developers",
    ],
    technologies: ["React", "Node.js", "JavaScript", "MongoDB", "Express.js"],
  },
  {
    id: 2,
    company: "Zoro Innovations",
    position: "Frontend Developer Intern",
    duration: "Jul 2025 - Present",
    location: "Remote",
    description: [
      "Built responsive user interfaces using HTML, CSS, and JavaScript",
      "Worked with design teams to implement pixel-perfect designs",
      "Optimized website performance and improved user experience",
      "Learned industry best practices and modern development workflows",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Git"],
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

        <div className="experience-timeline">
          {experienceData
            .slice()
            .reverse()
            .map((exp, index) => (
              <div key={exp.id} className="experience-card">
                <div className="experience-timeline-marker">
                  <div className="timeline-dot"></div>
                  {index !== experienceData.length - 1 && (
                    <div className="timeline-line"></div>
                  )}
                </div>

                <div className="experience-content">
                  <div className="experience-header">
                    <h3 className="experience-position">{exp.position}</h3>
                    <span className="experience-duration">{exp.duration}</span>
                  </div>

                  <div className="experience-company-info">
                    <h4 className="experience-company">{exp.company}</h4>
                    <span className="experience-location">{exp.location}</span>
                  </div>

                  <ul className="experience-description">
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>

                  <div className="experience-technologies">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="experience-gradient-div"></div>
    </div>
  );
};

export default Experience;
