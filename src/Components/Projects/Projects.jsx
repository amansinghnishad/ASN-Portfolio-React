import "./Projects.css";
import CircularGallery from "./CircularGallery";

const Project = () => {
  return (
    <div className="projects-main-container ">
      <div className="projects-section">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider"></div>
        </div>
      </div>
      <div
        style={{ height: "500px", position: "relative" }}
        className="circular-gallery"
      >
        <CircularGallery
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.02}
          cardScale={1.3}
          onItemClick={(item) => {
            const url = item?.TryNowlink || item?.codeLink;
            if (url) {
              const newWin = window.open(url, "_blank", "noopener,noreferrer");
              try {
                if (newWin) newWin.opener = null;
              } catch (e) {
                // ignore
              }
            } else {
              console.log("No URL available for item:", item);
            }
          }}
        />
      </div>

      <div className="liner-gradient-div"></div>
    </div>
  );
};

export default Project;
