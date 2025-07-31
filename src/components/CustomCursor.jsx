import React, { useEffect, useState } from "react";
// Import your image directly. The build process will give you a usable URL.
import customCursorImage from "../assets/Cursor_web.png"; 

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);

    // Hide the default browser cursor when this component mounts
    document.body.style.cursor = "none";

    // Clean up: remove event listener and restore default cursor when component unmounts
    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.body.style.cursor = "default";
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        // Set the size of your custom cursor. Adjust these values as needed.
        // It's good to make these dimensions match your image's actual dimensions or desired display size.
        width: "48px", // Example size, adjust to fit your Cursor_wd.png
        height: "48px", // Example size, adjust to fit your Cursor_wd.png
        
        // Use backgroundImage and the imported image variable
        backgroundImage: `url(${customCursorImage})`,
        backgroundSize: "contain", // Ensures the entire image fits within the div
        backgroundRepeat: "no-repeat", // Prevents the image from repeating
        backgroundPosition: "center", // Centers the image within the div
        
        // This centers the custom cursor image on the mouse position.
        // You might need to adjust the percentages if the "hotspot" of your
        // Cursor_wd.png is not exactly its center (e.g., if it's a pointer,
        // you might want the tip of the pointer to be at the mouse coordinates).
        transform: "translate(-50%, -50%)", 
        
        pointerEvents: "none", // Crucial: Allows clicks/events to pass through the custom cursor to elements underneath
        zIndex: 9999, // Ensures the cursor is always on top of other elements
      }}
    />
  );
};

export default CustomCursor;