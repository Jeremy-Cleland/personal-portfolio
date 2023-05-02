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
  RiArrowLeftSFill,
  RiArrowRightSFill,
} from "react-icons/ri";

const Sidebar = () => {
  const [sidebarShow, setSidebarShow] = useState(true);
  const [colorMode, setColorMode] = useColorMode();

  const toggleColorMode = () => {
    setColorMode(colorMode === "light" ? "dark" : "light");
  };

  const toggleSidebar = () => {
    setSidebarShow(!sidebarShow);
  };

  const colapsedSidebarDefault =
    "absolute px-0.5 py-3 bg-primary dark:bg-darkTertiary dark:text-darkAccent cursor-pointer ";

  const fullSidebarDefault =
    "text-textPrimary group-hover:textPrimary dark:group-hover:text-darkPrimary dark:text-darkTextPrimary ml-4 font-josefinRegular";
  const renderListItem = (Icon, text) => (
    <div className=" group flex cursor-default items-center rounded-xl p-2 font-josefinRegular text-base hover:bg-[#A161D2] ">
      <Icon className="dark:group-hover:primary group-hover:textPrimary text-2xl text-textPrimary dark:text-darkAccent" />
      <h1 className={sidebarShow ? fullSidebarDefault : "hidden"}>{text}</h1>
    </div>
  );
  return (
    <>
      <div
        className={
          sidebarShow
            ? "shadow-gray-900 shadow-2xl h-screen w-[12rem] rounded-xl bg-[#e2e2e2] text-textPrimary drop-shadow-xl selection:duration-200 dark:bg-darkSecondary dark:text-darkAccent"
            : "h-screen w-24 rounded-xl bg-[#e2e2e2] text-textPrimary shadow-lg drop-shadow-xl duration-200 dark:bg-darkSecondary dark:text-darkTextPrimary"
        }
      >
        <div className="flex items-center space-x-2 p-2">
          <span className="h-2 w-2 rounded-full bg-[#ee6a5e]" />
          <span className="h-2 w-2 rounded-full bg-[#f4bd4f]" />
          <span className="h-2 w-2 rounded-full bg-[#60c455]" />
        </div>
        <div className="space-y-6 p-5">
          <div className="relative flex items-center">
            <div className="bg-transparentflex w-fit items-center justify-center rounded-xl border-2 border-borderPrimary p-1  dark:border-darkAccent dark:bg-darkPrimary">
              <img
                className="h-12 w-12 rounded-full object-contain"
                alt="avatar img"
              />
            </div>
            <div className={sidebarShow ? "relative ml-4" : "hidden"}>
              <h2 className="font-LeagueSpartanBold text-base text-textPrimary dark:text-darkTextPrimary">
                Jeremy
              </h2>
            </div>
            <div
              onClick={toggleSidebar}
              className={
                sidebarShow
                  ? colapsedSidebarDefault + "  -right-5 rounded-l-lg"
                  : colapsedSidebarDefault + "-right-10  rounded-r-lg"
              }
            >
              {sidebarShow ? <RiArrowLeftSFill /> : <RiArrowRightSFill />}
            </div>
          </div>
          <div className="px-1">
            <div>
              <hr className="my-4 md:min-w-full" />
              {renderListItem(RiHome3Line, "Home")}
              {renderListItem(RiUser3Line, "About Me")}
              {renderListItem(RiBriefcase3Line, "Projects")}
              {renderListItem(RiFilePaper2Line, "Resume")}
              {renderListItem(RiLayout3Line, "Blog")}
              {renderListItem(RiChat3Line, "Contact")}
            </div>
          </div>
          <div className="group flex cursor-default items-center rounded-xl p-3 text-textPrimary hover:bg-[#A161D2] dark:text-darkTextPrimary">
            {colorMode === "dark" ? (
              <RiMoonLine
                className="group-hover:text-white text-center text-2xl text-textPrimary dark:text-darkTextPrimary"
                onClick={toggleColorMode}
              />
            ) : (
              <RiSunLine
                className="group-hover:text-white text-center text-2xl text-textPrimary dark:text-darkTextPrimary"
                onClick={toggleColorMode}
              />
            )}
          </div>
          <hr className="my-1 md:min-w-full" />
          <div
            className={
              sidebarShow
                ? "container bottom-0 mx-auto flex flex-row items-center justify-center "
                : "absolute bottom-0 flex flex-col items-center  justify-center"
            }
          >
            <div className="rounded-xl p-2 hover:bg-[#A161D2]  dark:text-darkTextPrimary">
              <a
                href="https://www.linkedin.com/in/jeremy-cleland/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiLinkedinBoxLine className="text-gray-600 hover:text-white text-2xl  dark:text-darkTextPrimary" />
              </a>
            </div>
            <div className="rounded-xl p-2 hover:bg-[#A161D2]  dark:text-darkTextPrimary">
              <a
                href="https://github.com/jeremy-cleland"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiGithubLine className="hover:text-white text-2xl text-textPrimary dark:text-darkTextPrimary" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
