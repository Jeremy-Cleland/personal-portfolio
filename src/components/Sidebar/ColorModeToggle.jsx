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
        "group mt-8 flex cursor-default rounded-xl font-SourceCodePro font-bold tracking-widest text-gray-600 transition-all duration-100 hover:bg-dark-50 hover:text-dark-900 hover:shadow-lg active:shadow-lg dark:text-ocean-300 hover:dark:bg-dark-800 hover:dark:text-dark-50",
        isSidebarOpen ? "mx-3 hover:underline" : "mx-auto justify-center"
      )}
      onClick={toggleColorMode}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
    >
      <div className="flex items-center justify-center">
        {colorMode === "light" ? (
          <RiMoonLine size={22} />
        ) : (
          <RiSunLine size={22} />
        )}
      </div>
    </div>
  );
};

export default ColorModeToggle;
