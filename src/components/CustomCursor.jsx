import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useLocation } from "react-router-dom";
import "./CustomCursor.css";

const CustomCursor = () => {
  const bigBallRef = useRef(null);
  const smallBallRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const bigBall = bigBallRef.current;
    const smallBall = smallBallRef.current;

    function onMouseMove(e) {
      gsap.to(bigBall, {
        duration: 0.4,
        x: e.clientX - 15,
        y: e.clientY - 15,
        ease: "power3.out",
      });
      gsap.to(smallBall, {
        duration: 0.1,
        x: e.clientX - 5,
        y: e.clientY - 7,
        ease: "power3.out",
      });
    }

    function onMouseHover() {
      gsap.to(bigBall, { duration: 0.3, scale: 4, ease: "power3.out" });
    }
    function onMouseHoverOut() {
      gsap.to(bigBall, { duration: 0.3, scale: 1, ease: "power3.out" });
    }

    document.body.style.cursor = "none";
    window.addEventListener("mousemove", onMouseMove);

    // Function to attach hover effects
    const bindHoverables = () => {
      const hoverables = document.querySelectorAll(".hoverable");
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseHover); // avoid duplicates
        el.removeEventListener("mouseleave", onMouseHoverOut);
        el.addEventListener("mouseenter", onMouseHover);
        el.addEventListener("mouseleave", onMouseHoverOut);
      });
    };

    bindHoverables(); // run on mount

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.body.style.cursor = "auto";
    };
  }, [location.pathname]); // ✅ re-run when route changes

  return (
    <div className="cursor">
      <div ref={bigBallRef} className="cursor__ball cursor__ball--big">
        <svg height="30" width="30">
          <circle cx="15" cy="15" r="12" strokeWidth="0" />
        </svg>
      </div>
      <div ref={smallBallRef} className="cursor__ball cursor__ball--small">
        <svg height="10" width="10">
          <circle cx="5" cy="5" r="4" strokeWidth="0" />
        </svg>
      </div>
    </div>
  );
};

export default CustomCursor;
