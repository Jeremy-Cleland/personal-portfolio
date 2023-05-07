import clsx from "clsx";
import { RiMoonLine, RiSunLine } from "react-icons/ri";

const ColorModeToggle = ({ colorMode, setColorMode, isNavOpen }) => {
  const toggleColorMode = () => {
    setColorMode(colorMode === "light" ? "dark" : "light");
  };

  return (
    <div className={clsx(!isNavOpen && "hidden", "p-2")}>
      {colorMode === "light" ? (
        <RiMoonLine
          onClick={toggleColorMode}
          className={
            "fill-current h-5 w-5 cursor-pointer transition-all duration-200 dark:text-ocean-300 dark:hover:text-midnight-100"
          }
        />
      ) : (
        <RiSunLine
          onClick={toggleColorMode}
          className={clsx(
            "fill-current h-5 w-5 cursor-pointer transition-all duration-200 dark:text-ocean-300 dark:hover:text-midnight-100"
          )}
        />
      )}
    </div>
  );
};

export default ColorModeToggle;
