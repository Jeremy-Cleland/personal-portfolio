import React, { useState } from "react";
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
} from "react-icons/ri";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Sidebar = () => {
  const [sidebarShow, setSidebarShow] = useState(true);
  const [colorMode, setColorMode] = useColorMode();

  const toggleColorMode = () => {
    setColorMode(colorMode === "light" ? "dark" : "light");
  };

  const toggleSidebar = () => {
    setSidebarShow(!sidebarShow);
  };

  const openDefaultClass =
    "absolute px-0.5 py-3 bg-[#C5C4C0] dark:bg-[#121212] text-[#161925] dark:text-white cursor-pointer ";

  const openShowTextClass =
    "text-gray-700 group-hover:text-white dark:text-white font-semibold ml-4 ";
  const renderListItem = (Icon, text) => (
    <div className="group flex cursor-default items-center rounded-xl p-3 hover:bg-[#A161D2] dark:text-white">
      <Icon className="text-2xl text-gray-300 group-hover:text-[#121212]" />
      <h1 className={sidebarShow ? openShowTextClass : "hidden"}>{text}</h1>
    </div>
  );

  return (
    <>
      <div
        className={
          sidebarShow
            ? "h-screen w-[20rem] rounded-lg bg-gray-200 shadow-xl duration-200 dark:bg-[#1d1f20]"
            : " h-screen w-24 rounded-lg bg-gray-200 shadow-xl  drop-shadow-2xl duration-200 dark:bg-[#1d1f20]"
        }
      >
        <div className="flex items-center space-x-2 p-2">
          <span className="h-2 w-2 rounded-full bg-[#ee6a5e]" />
          <span className="h-2 w-2 rounded-full bg-[#f4bd4f]" />
          <span className="h-2 w-2 rounded-full bg-[#60c455]" />
        </div>
        <div className="space-y-6 p-5">
          <div className="relative flex items-center">
            <div className="flex w-fit items-center justify-center rounded-2xl border-2 border-[#121212] bg-transparent p-1 dark:border-transparent dark:bg-[#121212]">
              <img
                className="h-10 w-10 rounded-full object-contain"
                alt="avatar img"
              />
            </div>
            <div className={sidebarShow ? "relative ml-4" : "hidden"}>
              <h2 className="text-lg font-semibold text-[#242627] dark:text-white">
                Jeremy
              </h2>
            </div>
            <div
              onClick={toggleSidebar}
              className={
                sidebarShow
                  ? openDefaultClass + "-right-5  rounded-l-lg"
                  : openDefaultClass + "-right-10  rounded-r-lg"
              }
            >
              {sidebarShow ? <IoIosArrowBack /> : <IoIosArrowForward />}
            </div>
          </div>
          <div className="px-1">
            <div>
              {renderListItem(RiHome3Line, "Home")}
              {renderListItem(RiUser3Line, "About Me")}
              {renderListItem(RiBriefcase3Line, "Projects")}
              {renderListItem(RiFilePaper2Line, "Resume")}
              {renderListItem(RiLayout3Line, "Blog")}
              {renderListItem(RiChat3Line, "Contact")}
            </div>

            <div className="group flex cursor-default items-center rounded-xl p-3 hover:bg-[#3f8dfd] dark:text-white">
              {colorMode === "light" ? (
                <RiMoonLine
                  className="text-center text-2xl text-gray-300 group-hover:text-white"
                  onClick={toggleColorMode}
                />
              ) : (
                <RiSunLine
                  className="text-center text-2xl text-gray-300 group-hover:text-white"
                  onClick={toggleColorMode}
                />
              )}
            </div>
            <div className="group absolute bottom-10 flex cursor-default items-center rounded-xl hover:bg-[#3f8dfd] dark:text-white">
              <div className="mx-auto flex justify-center">
                <a
                  href="https://github.com/jeremy-cleland"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiGithubLine className="text-2xl text-gray-500 group-hover:text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/jeremy-cleland/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiLinkedinBoxLine className="text-2xl text-gray-500 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
