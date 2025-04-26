import React from "react";
import "./CardOverlay.css";

function CardOverlay({ TryNowlink, img, title }) {
  return (
    <div className="card-overlay">
      <a href={TryNowlink} target="_blank">
        <img src={img} alt={`Project ${title}`} className="card-image"></img>
      </a>
    </div>
  );
}

export default CardOverlay;
