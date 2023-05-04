import React, { useState } from "react";

import image from "../../assets/img/profilePic.png";

import useColorMode from "../../hooks/useColorMode.js";
import {
  RiBriefcase3Line,
  RiChat3Line,
  RiHome3Line,
  RiMoonLine,
  RiSunLine,
  RiUser3Line,
  RiFilePaper2Line,
  RiLayout3Line,
  RiGithubLine,
  RiLinkedinBoxLine,
  RiSearchLine,
  RiMenu4Line,
  RiCloseLine,
} from "react-icons/ri";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [colorMode, setColorMode] = useColorMode();

  const toggleColorMode = () => {
    setColorMode(colorMode === "light" ? "dark" : "light");
  };
  return (
    <>
      <button
        className="flex flex-row p-3 text-midnight-900 dark:text-ocean-100 md:hidden"
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        {isNavOpen ? <RiCloseLine size={24} /> : <RiMenu4Line size={30} />}
      </button>
      <div
        className={`${
          isNavOpen || "hidden"
        } w-full p-3 font-mono text-midnight-900 drop-shadow-md dark:bg-ocean-900 dark:text-ocean-300 md:flex md:w-1/4 md:flex-col md:p-2`}
      >
        <div className="h-full space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="text-md text-xl font-bold tracking-widest">
              Jeremy Cleland
            </h2>
            <button className="p-2">
              <RiSearchLine>
                <rect width="352" height="32" x="80" y="96"></rect>
                <rect width="352" height="32" x="80" y="240"></rect>
                <rect width="352" height="32" x="80" y="384"></rect>
              </RiSearchLine>
            </button>
          </div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center py-4">
              <button
                type="submit"
                className="p-2 focus:outline-none focus:ring"
              >
                <RiSearchLine className="h-5 w-5 dark:text-ocean-300" />
              </button>
            </span>
            <input
              type="search"
              name="Search"
              placeholder="Search..."
              className=" w-full rounded-md py-2 pl-10 text-sm focus:outline-none dark:border-midnight-50 dark:bg-deep-900 dark:text-ocean-300"
            />
          </div>

          <div className="flex-1">
            <ul className="space-y-1 pb-4 pt-2 text-sm">
              <li className="hover:bg-darkAccent group flex cursor-default rounded-xl p-2 dark:text-ocean-300">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center space-x-3 rounded-md p-2"
                >
                  <RiHome3Line className="fill-current h-5 w-5 dark:text-ocean-300" />
                  <span>Home</span>
                </a>
              </li>
              <li className="text-textPrimary hover:bg-darkAccent group flex cursor-default rounded-xl p-2 dark:text-ocean-300">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center space-x-3 rounded-md p-2"
                >
                  <RiUser3Line className="fill-current h-5 w-5 dark:text-ocean-300" />
                  <span>Profile</span>
                </a>
              </li>
              <li className="text-textPrimary hover:bg-darkAccent group flex cursor-default rounded-xl p-2 dark:text-ocean-300">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center space-x-3 rounded-md p-2"
                >
                  <RiBriefcase3Line />
                  <span>Projects</span>
                </a>
              </li>
              <li className="text-textPrimary hover:bg-darkAccent group flex cursor-default rounded-xl p-2 dark:text-ocean-300">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center space-x-3 rounded-md p-2"
                >
                  <RiFilePaper2Line className="fill-current h-5 w-5 dark:text-ocean-300" />

                  <span>Resume</span>
                </a>
              </li>
              <li className="text-textPrimary hover:bg-darkAccent group flex cursor-default rounded-xl p-2 dark:text-ocean-300">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center space-x-3 rounded-md p-2"
                >
                  <RiLayout3Line className="fill-current h-5 w-5 dark:text-ocean-300" />
                  <span>Blog</span>
                </a>
              </li>
              <li className="text-textPrimary hover:bg-darkAccent group flex cursor-default rounded-xl p-2 dark:text-ocean-300">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center space-x-3 rounded-md p-2"
                >
                  <RiChat3Line className="fill-current h-5 w-5 dark:text-ocean-300" />
                  <span>Chat</span>
                </a>
              </li>

              <li className="text-textPrimary hover:bg-darkAccent group flex cursor-default items-center space-x-3 rounded-xl p-2 dark:text-ocean-300">
                {colorMode === "light" ? (
                  <RiMoonLine
                    onClick={toggleColorMode}
                    className="fill-current h-5 w-5 dark:text-ocean-300"
                  />
                ) : (
                  <RiSunLine
                    onClick={toggleColorMode}
                    className="fill-current h-5 w-5 dark:text-ocean-300"
                  />
                )}
                <span>Change Theme</span>
              </li>
              <li className="dark:bg-gray-800 dark:text-gray-50 rounded-sm"></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex items-center space-x-4 justify-self-end p-2">
          <img
            src={image}
            alt=""
            className="h-12 w-12 rounded-lg dark:bg-swell-950"
          />
          <div className="flex flex-col">
            <h2 className="text-md mb-3">Jeremy Cleland</h2>
            <span className="flex items-center space-x-1">
              <a
                href="https://www.linkedin.com/in/jeremy-cleland/"
                target="_blank"
                className="text-xs hover:underline dark:text-ocean-300"
                rel="noopener noreferrer"
              >
                <RiLinkedinBoxLine className=" fill-current h-6 w-6 dark:text-ocean-300" />
              </a>
              <a
                href="https://github.com/jeremy-cleland"
                target="_blank"
                className="text-xs hover:underline dark:text-ocean-300"
                rel="noopener noreferrer"
              >
                <RiGithubLine className=" fill-current h-6 w-6 dark:text-ocean-300" />
              </a>
            </span>
          </div>
        </div>
        <hr className="border-white border-y-4" />
      </div>
    </>
  );
};
export default Navbar;
