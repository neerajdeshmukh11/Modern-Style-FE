import { Link, useLocation } from "react-router-dom"; // IMPORT Link HERE
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import Encegen from "../assets/Encegen.png";
import { navigation } from "../constants"; // Assuming this path is correct
import Button from "./Button"; // Assuming this is your custom Button component
import MenuSvg from "../assets/svg/MenuSvg"; // Assuming this is your MenuSvg component
import { HamburgerMenu } from "./design/Header"; // Assuming this is your HamburgerMenu component
import { useState } from "react"; // Already imported, just for clarity

const Header = () => {
  // Use 'location' to get the current route information
  const location = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    // This function closes the mobile navigation and enables scrolling
    // after a link is clicked.
    if (!openNavigation) return; // Only do something if nav is open

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        {/* Logo Link: Changed from <a> href="#hero" to <Link to="/"> */}
        <Link className="block w-[12rem] xl:mr-8" to="/">
          <img src={Encegen} width={190} height={40} alt="Encegen" />
        </Link>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <Link // CHANGED from <a> to <Link>
                key={item.id}
                to={item.url} // CHANGED from href to to
                onClick={handleClick} // Keep your existing handleClick
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  // Logic for active link styling: Compare item.url with location.pathname
                  // If you still have *some* in-page links (like #features) that you want to highlight
                  // when on the home page, you might need more complex logic here.
                  // For now, this assumes all main nav links are full routes.
                  item.url === location.pathname
                    ? "z-2 lg:text-n-1" // Active state
                    : "lg:text-n-1/50" // Inactive state
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </Link>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        {/* "Contact Us" Button: Changed from href="#login" to to="/contact" */}
        <Button className="hidden lg:flex" to="/contact"> {/* Changed href to to */}
          Contact Us
        </Button>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;