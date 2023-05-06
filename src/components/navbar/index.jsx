import React, { useState } from "react";
import clsx from "clsx";
import image from "../../assets/img/profilePic.png";
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
  RiMenu4Line,
  RiCloseLine,
} from "react-icons/ri";

import ColorModeToggle from "./ColorModeToggle.jsx";
import SearchBar from "./SearchBar.jsx";
import NavItem from "./NavItem.jsx";
import SocialLink from "./SocialLink.jsx";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [colorMode, setColorMode] = useColorMode();

  return (
    <>
      <button
        className={clsx(
          "flex flex-row p-3 text-midnight-900 dark:text-ocean-100 md:hidden"
        )}
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        {isNavOpen ? (
          <RiCloseLine size={24} className="transition-all duration-200" />
        ) : (
          <RiMenu4Line size={30} className="transition-all duration-200" />
        )}
      </button>
      <div
        className={clsx(
          isNavOpen || "hidden",
          "p-3 font-Quicksand text-sm tracking-wide text-midnight-900 dark:bg-swell-1100 dark:text-ocean-300 md:flex md:w-1/4 md:flex-col md:p-2"
        )}
      >
        <div className="flex h-full flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <h2 className="font-Knewave text-lg tracking-widest">
                Jeremy Cleland
              </h2>
              <ColorModeToggle
                colorMode={colorMode}
                setColorMode={setColorMode}
              />
            </div>
            <SearchBar />
            <div className="mt-4 flex-1">
              <ul className="space-y-1 pb-4 pt-2 text-sm">
                <NavItem icon={RiHome3Line} label="Home" href="#" />
                <NavItem icon={RiUser3Line} label="Profile" href="#" />
                <NavItem icon={RiBriefcase3Line} label="Projects" href="#" />
                <NavItem icon={RiFilePaper2Line} label="Resume" href="#" />
                <NavItem icon={RiLayout3Line} label="Blog" href="#" />
                <NavItem icon={RiChat3Line} label="Contact" href="#" />
              </ul>
            </div>
          </div>
          <div className="mb-0 flex w-full flex-row items-center justify-evenly justify-self-end">
            <img src={image} alt="" className="h-1/3 drop-shadow-sm" />
            <div className="flex flex-col">
              <h2 className="text-md mb-4 font-Knewave tracking-widest underline underline-offset-4">
                Jeremy Cleland
              </h2>
              <span className="mb-0 flex items-center justify-center">
                <SocialLink
                  icon={RiLinkedinBoxLine}
                  href="https://www.linkedin.com/in/jeremy-cleland/"
                />
                <SocialLink
                  icon={RiGithubLine}
                  href="https://www.github.com/jeremy-cleland"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
