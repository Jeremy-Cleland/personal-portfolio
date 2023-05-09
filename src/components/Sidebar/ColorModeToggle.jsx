import React, { useCallback } from "react";
import clsx from "clsx";
import { RiMoonLine, RiSunLine } from "react-icons/ri";

const ColorModeToggle = ({ colorMode, setColorMode, isSidebarOpen }) => {
  const toggleColorMode = useCallback(() => {
    setColorMode(colorMode === "light" ? "dark" : "light");
  }, [colorMode, setColorMode]);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleColorMode();
      }
    },
    [toggleColorMode]
  );

  return (
    <div
      className={clsx(
        "group mt-2 flex cursor-default rounded-xl p-4 text-midnight-900 transition-all duration-150 hover:scale-110 hover:shadow-lg active:translate-y-1 active:scale-90 active:shadow-md dark:text-ocean-300 hover:dark:bg-dark-700 hover:dark:text-[#fff]",
        isSidebarOpen ? "mx-3 hover:underline" : ""
      )}
      onClick={toggleColorMode}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
    >
      <div className="flex items-center justify-center">
        {colorMode === "light" ? (
          <RiMoonLine
            className={`fill-current h-5 w-5 cursor-pointer transition-all duration-200`}
            size={22}
          />
        ) : (
          <RiSunLine
            className={clsx(
              `fill-current h-5 w-5 cursor-pointer transition-all duration-200`
            )}
            size={22}
          />
        )}
      </div>
    </div>
  );
};

export default ColorModeToggle;
