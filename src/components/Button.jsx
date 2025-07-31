import React from "react"; // Ensure React is imported
import { Link } from "react-router-dom"; // IMPORT Link
import ButtonSvg from "../assets/svg/ButtonSvg";

// Add 'to' to the props destructuring
const Button = ({ className, href, onClick, children, px, white, to }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes} onClick={onClick}> {/* Added onClick here for consistency */}
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  // NEW: Function to render a React Router Link
  const renderRouterLink = () => (
    <Link to={to} className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </Link>
  );

  // MODIFIED RETURN LOGIC: Prioritize 'to' first
  if (to) {
    return renderRouterLink();
  } else if (href) {
    return renderLink();
  } else {
    return renderButton();
  }
};

export default Button;