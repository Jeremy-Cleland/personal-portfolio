import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import useColorMode from "../../hooks/useColorMode.js";
import {
  RiBriefcase3Line,
  RiChat3Line,
  RiHome3Line,
  RiUser3Line,
  RiFilePaper2Line,
  RiLayout3Line,
  RiGithubLine,
  RiLinkedinBoxLine,
} from "react-icons/ri";
import ColorModeToggle from "./ColorModeToggle.jsx";
import NavItem from "./NavItem.jsx";
import SocialLink from "./SocialLink.jsx";
// import SidebarSizeToggle from "./SidebarSizeToggle.jsx";
import TrafficLightToggle from "./TrafficLightToggle.jsx";
import image from "../../assets/images/profilePic.png";

const SIDEBAR_WIDTH_OPEN = "md:w-1/8";
const SIDEBAR_WIDTH_CLOSED = "md:w-20";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [colorMode, setColorMode] = useColorMode();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <TrafficLightToggle toggleSidebar={toggleSidebar} />

      <div
        className={clsx(
          "dropShadow-3xl fixed bottom-0 top-0 bg-gray-200 p-3 font-Quicksand text-sm tracking-wide text-gray-900 transition-all duration-200 dark:bg-darkTheme-300",
          isSidebarOpen ? SIDEBAR_WIDTH_OPEN : SIDEBAR_WIDTH_CLOSED,
          "md:flex md:flex-col md:p-3"
        )}
      >
        <div className="flex h-full flex-col justify-between">
          <div className="pt-16">
            <img
              src={image}
              alt="author"
              className={clsx(
                "mx-auto drop-shadow-sm hover:scale-110",
                isSidebarOpen ? "w-1/2 max-w-[200px]" : "w-full max-w-[100px]"
              )}
            />
          </div>
          <div className="mx-auto flex-1 pt-4">
            <ul className="space-y-6">
              <NavItem
                isSidebarOpen={isSidebarOpen}
                icon={RiHome3Line}
                text="Home"
                path="/"
              />
              <NavItem
                isSidebarOpen={isSidebarOpen}
                icon={RiUser3Line}
                text="About"
                path="/about"
              />
              <NavItem
                isSidebarOpen={isSidebarOpen}
                icon={RiBriefcase3Line}
                text="Portfolio"
                path="/portfolio"
              />
              <NavItem
                isSidebarOpen={isSidebarOpen}
                icon={RiFilePaper2Line}
                text="Resume"
                path="/resume"
              />
              <NavItem
                isSidebarOpen={isSidebarOpen}
                icon={RiLayout3Line}
                text="Blog"
                path="/blog"
              />
              <NavItem
                isSidebarOpen={isSidebarOpen}
                icon={RiChat3Line}
                text="Contact"
                path="/contact"
              />
            </ul>
          </div>

          <div
            className={clsx(
              "mb-0 flex w-full",
              isSidebarOpen ? "flex-row" : "flex-col",
              isSidebarOpen
                ? "mx-auto "
                : "items-center justify-evenly justify-self-end"
            )}
          >
            <SocialLink
              icon={RiLinkedinBoxLine}
              href="https://www.linkedin.com/in/jeremy-cleland/"
              isSidebarOpen={isSidebarOpen}
            />
            <SocialLink
              icon={RiGithubLine}
              href="https://www.github.com/jeremy-cleland"
              isSidebarOpen={isSidebarOpen}
            />
            <ColorModeToggle
              colorMode={colorMode}
              setColorMode={setColorMode}
              isSidebarOpen={isSidebarOpen}
            />
          </div>
        </div>
      </div>
    </>
  );
};

Sidebar.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  setIsSidebarOpen: PropTypes.func.isRequired,
};

export default Sidebar;
