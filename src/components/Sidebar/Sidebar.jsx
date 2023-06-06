import { useState } from "react";
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
  RiMenu2Line,
  RiCloseCircleLine,
} from "react-icons/ri";
import ColorModeToggle from "./ColorModeToggle.jsx";
import NavItem from "./NavItem.jsx";
import SocialLink from "./SocialLink.jsx";
import TrafficLightToggle from "./TrafficLightToggle.jsx";
import image from "../../assets/images/profilePic.png";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [colorMode, setColorMode] = useColorMode();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const SIDEBAR_WIDTH_OPEN = "md:w-60";
  const SIDEBAR_WIDTH_CLOSED = "md:w-20";

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div
        className={clsx(
          "h-screen bg-white text-dark-900 dark:bg-dark-900",
          isSidebarOpen ? SIDEBAR_WIDTH_OPEN : SIDEBAR_WIDTH_CLOSED,
          " hidden md:flex md:flex-col md:p-3"
        )}
      >
        <TrafficLightToggle toggleSidebar={toggleSidebar} />
        <div className=" flex h-full flex-col justify-between">
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

      <button
        className=" p-3 text-dark-900 dark:text-dark-100 md:hidden"
        onClick={toggleNav}
      >
        {isNavOpen ? (
          <RiCloseCircleLine size={32} />
        ) : (
          <RiMenu2Line size={28} />
        )}
      </button>
      <div
        className={clsx(
          "absolute mx-[5vw] my-[5vh] h-[80vh] w-[90vw] rounded-lg bg-dark-100 px-[22.5vw] py-10 text-center text-dark-100 dark:bg-black/90",
          isNavOpen ? "" : "hidden"
        )}
      >
        <div className="flex flex-col">
          {/* Menu */}

          <div
            className="flex-1 pt-4"
            role="button"
            onClick={toggleNav}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                toggleNav();
              }
            }}
            tabIndex="0"
          >
            <ul className="space-y-3">
              <NavItem
                isSidebarOpen={true}
                icon={RiHome3Line}
                text="Home"
                path="/"
              />
              <NavItem
                isSidebarOpen={true}
                icon={RiUser3Line}
                text="About"
                path="/about"
              />
              <NavItem
                isSidebarOpen={true}
                icon={RiBriefcase3Line}
                text="Portfolio"
                path="/portfolio"
              />
              <NavItem
                isSidebarOpen={true}
                icon={RiFilePaper2Line}
                text="Resume"
                path="/resume"
              />
              <NavItem
                isSidebarOpen={true}
                icon={RiLayout3Line}
                text="Blog"
                path="/blog"
                onClick={toggleNav}
              />
              <NavItem
                isSidebarOpen={true}
                icon={RiChat3Line}
                text="Contact"
                path="/contact"
              />
            </ul>
          </div>
          {/* Buttons */}
          <div className="flex flex-row">
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
