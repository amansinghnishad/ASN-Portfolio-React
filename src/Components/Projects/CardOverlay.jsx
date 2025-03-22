import React from "react";
import "./CardOverlay.css";

function CardOverlay({ TryNowlink, img, title, reverse }) {
  return (
    <div className={`card-overlay ${reverse ? "reverse" : ""}`}>
      <div className="card-bg-linearGradient"></div>
      <div className="card-img-bg"></div>
      <a href={TryNowlink} target="_blank">
        <img src={img} alt={`Project ${title}`} className="card-image"></img>
      </a>
    </div>
  );
}

export default CardOverlay;
