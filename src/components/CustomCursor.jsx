import React, { useEffect, useState } from 'react';
import './CustomCursor.css'; // Import the CSS for your custom cursor

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false); // State to track hover for interactive elements

  useEffect(() => {
    const onMouseMove = (e) => {
      // Update the cursor's position based on mouse coordinates
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Add event listener for mouse movement
    window.addEventListener('mousemove', onMouseMove);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  // You would typically add event listeners to specific elements
  // to toggle 'isHovering' or add/remove the 'mil-accent' class
  // For now, this component just handles the basic movement.

  return (
    // The main cursor element, positioned using inline style
    <div 
      className={`mil-ball ${isHovering ? 'mil-accent' : ''}`} 
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
    >
      {/* These elements are from your CSS, likely for interactive states */}
      <div className="mil-icon-1">
        {/* You can put an SVG icon here, e.g., a small arrow or dot */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
        </svg>
      </div>
      <span className="mil-more-text">More</span>
      <span className="mil-choose-text">Choose</span>
    </div>
  );
};

export default CustomCursor;
