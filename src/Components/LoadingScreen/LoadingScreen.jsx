import React, { useEffect, useRef, useState } from "react";
import "./LoadingScreen.css";
import LightRays from "../../../utils/LightRays";

function LoadingScreen({ isActive = true, duration = 4200, onComplete }) {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(null);
  const calledRef = useRef(false);

  // animate numeric progress from 0 -> 100 over `duration` ms
  useEffect(() => {
    let mounted = true;

    function step(timestamp) {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      if (mounted) setProgress(pct);
      if (elapsed < duration && mounted) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        if (mounted) setProgress(100);
      }
    }

    if (isActive) {
      startRef.current = null;
      rafRef.current = requestAnimationFrame(step);
    } else {
      // if parent deactivates early, snap to 100
      setProgress(100);
    }

    return () => {
      mounted = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isActive, duration]);

  // call onComplete once when progress reaches 100
  useEffect(() => {
    if (progress >= 100 && onComplete && !calledRef.current) {
      calledRef.current = true;
      try {
        onComplete();
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error("LoadingScreen onComplete callback error:", e);
      }
    }
  }, [progress, onComplete]);

  return (
    <div className="loading-screen-wrapper">
      <div
        className={`loading-screen ${
          isActive ? "" : "loading-screen--fade-out"
        }`}
        role="status"
        aria-live="polite"
      >
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />

        <img
          className="loading-screen__logo"
          src="/logo.png"
          alt="ASN Portfolio logo"
        />

        <div className="loading-screen__counter" aria-hidden="true">
          <span className="loading-screen__counter-number">{progress}</span>
          <span className="loading-screen__counter-percent">%</span>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
