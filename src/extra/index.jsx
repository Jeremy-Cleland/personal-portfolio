import useColorMode from "../hooks/useColorMode.js";
import {
  RiBriefcase3Line,
  RiUser3Line,
  RiHome3Line,
  RiChat3Line,
  RiSunLine,
  RiMoonLine,
} from "react-icons/ri";

const Sidebar = () => {
  const [colorMode, setColorMode] = useColorMode();

  const toggleColorMode = () => {
    setColorMode(colorMode === "light" ? "dark" : "light");
  };

  return (
    <aside className="fixed left-0 top-0 z-10 mx-auto flex h-screen w-16 flex-col justify-between border-r-2 border-black bg-white p-2 dark:border-black dark:bg-gray-900 md:w-36 md:p-6">
      <nav className="flex-grow">
        <ul className="flex h-full flex-col items-center justify-around text-gray-900 dark:text-white">
          <li>
            <a href="#home" className="text-gray-900 dark:text-white">
              <RiHome3Line className="h-5 w-5 md:h-6 md:w-6" />
            </a>
          </li>
          <li>
            <a href="#about">
              <RiUser3Line className="h-5 w-5 md:h-6 md:w-6" />
            </a>
          </li>
          <li>
            <a href="#portfolio">
              <RiBriefcase3Line className="h-5 w-5 md:h-6 md:w-6" />
            </a>
          </li>
          <li>
            <a href="#contact">
              <RiChat3Line className="h-5 w-5 md:h-6 md:w-6" />
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex w-full items-center justify-center">
        {colorMode === "light" ? (
          <RiMoonLine
            className="h-6 w-6 cursor-pointer text-gray-900 dark:text-white"
            onClick={toggleColorMode}
          />
        ) : (
          <RiSunLine
            className="h-6 w-6 cursor-pointer text-gray-900 dark:text-white"
            onClick={toggleColorMode}
          />
        )}
      </div>
    </aside>
  );
};
export default Sidebar;
