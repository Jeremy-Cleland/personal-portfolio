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

import BaseButton from "../base/BaseButton.jsx";
import ColorModeToggle from "./ColorModeToggle.jsx";
import NavItem from "./NavItem.jsx";
import SocialLink from "./SocialLink.jsx";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <>
      <BaseButton
        className="fixed left-2 top-0 z-10 flex h-6 flex-row p-1 text-midnight-900"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? (
          <img
            src={eclipse1}
            alt=" close button"
            className="sticky left-5 top-0 transition-all duration-200"
          />
        ) : (
          <img
            src={eclipse3}
            alt="enter full screen button"
            className="top-0 pl-2 transition-all duration-200"
          />
        )}
      </BaseButton>
      <div
        className={clsx(
          "dropShadow-3xl fixed bottom-0 top-0 bg-[#F5F5F5] p-3 font-Quicksand text-sm tracking-wide text-midnight-900 transition-all duration-200 dark:bg-darkTheme-600",
          isSidebarOpen
            ? "md:w-1/8 md:flex md:flex-col md:p-2"
            : "md:flex md:w-20 md:flex-col md:p-3"
        )}
      >
        <div className="flex h-full flex-col justify-between">
          <div>
            <div className="items-center justify-between">
              {isSidebarOpen && (
                <div className="flex flex-row pl-8">
                  <img src={eclipse2} alt=" minimize button" />
                  <img src={eclipse3} alt=" enter full screen button" />
                </div>
              )}
            </div>
            <div className="pt-16">
              <img
                src={image}
                alt="author"
                className={clsx(
                  "mx-auto drop-shadow-sm hover:scale-110",
                  isSidebarOpen ? "w-1/2 max-w-[200px]" : "w-full"
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

export default Sidebar;
