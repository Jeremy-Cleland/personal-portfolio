import React, { useState } from "react";
import clsx from "clsx";
import image from "../../assets/img/profilePic.png";
import eclipse1 from "../../assets/img/Eclipse-1.png";
import eclipse2 from "../../assets/img/Eclipse-2.png";
import eclipse3 from "../../assets/img/Eclipse-3.png";

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
          "fixed left-2 top-2 z-10 flex h-6 flex-row p-1 text-midnight-900",
          isNavOpen ? "left-2" : "left-5"
        )}
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        {isNavOpen ? (
          <img
            src={eclipse1}
            alt=" close button"
            className="sticky top-2 transition-all duration-200"
          />
        ) : (
          <img src={eclipse3} alt="enter full screen button" />
        )}
      </button>
      <div
        className={
          (" fixed bottom-0 top-0 p-3 font-Quicksand text-sm tracking-wide text-midnight-900 transition-all duration-200 dark:bg-swell-1200 dark:text-ocean-300",
          isNavOpen
            ? "md:flex md:w-1/5 md:flex-col md:p-2"
            : "md:flex md:w-20 md:flex-col md:p-3")
        }
      >
        <div className="flex h-full flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              {isNavOpen && (
                <div className="flex flex-row pl-8">
                  <img src={eclipse2} alt=" minimize button" />
                  <img src={eclipse3} alt=" enter full screen button" />
                </div>
              )}
              <ColorModeToggle
                colorMode={colorMode}
                setColorMode={setColorMode}
                isNavOpen={isNavOpen}
              />
            </div>
            {isNavOpen && (
              <h2 className="font-Knewave text-lg tracking-widest">
                Jeremy Cleland
              </h2>
            )}
            <div className={clsx(!isNavOpen && "hidden", "mt-4")}>
              <SearchBar />
            </div>
            <div className="mx-auto mt-4 flex-1">
              <ul className="mx-auto space-y-5 pb-4 pt-2 text-sm">
                <NavItem
                  isNavOpen={isNavOpen}
                  icon={RiHome3Line}
                  label="Home"
                  href="#"
                />
                <NavItem
                  isNavOpen={isNavOpen}
                  icon={RiUser3Line}
                  label="Profile"
                  href="#"
                />
                <NavItem
                  isNavOpen={isNavOpen}
                  icon={RiBriefcase3Line}
                  label="Projects"
                  href="#"
                />
                <NavItem
                  isNavOpen={isNavOpen}
                  icon={RiFilePaper2Line}
                  label="Resume"
                  href="#"
                />
                <NavItem
                  isNavOpen={isNavOpen}
                  icon={RiLayout3Line}
                  label="Blog"
                  href="#"
                />
                <NavItem
                  isNavOpen={isNavOpen}
                  icon={RiChat3Line}
                  label="Contact"
                  href="#"
                />
              </ul>
            </div>
          </div>
          <div className="mb-0 flex w-full flex-row items-center justify-evenly justify-self-end">
            <img src={image} alt="" className="h-1/3 drop-shadow-sm" />
            <div className="flex flex-col">
              {isNavOpen && (
                <h2 className="text-md mb-4 font-Knewave tracking-widest underline underline-offset-4">
                  Jeremy Cleland
                </h2>
              )}
              {/* SocialLink */}
              <span
                className={clsx(
                  !isNavOpen && "hidden",
                  "mb-0 flex items-center justify-center"
                )}
              >
                <SocialLink
                  icon={RiLinkedinBoxLine}
                  href="https://www.linkedin.com/in/jeremy-cleland/"
                  isNavOpen={isNavOpen}
                />
                <SocialLink
                  icon={RiGithubLine}
                  href="https://www.github.com/jeremy-cleland"
                  isNavOpen={isNavOpen}
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
