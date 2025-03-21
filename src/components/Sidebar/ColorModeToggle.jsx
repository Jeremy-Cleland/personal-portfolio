import clsx from "clsx";
import PropTypes from "prop-types";
import { useCallback } from "react";
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
        "group mt-8 flex cursor-default rounded-lg p-4 font-bold tracking-widest text-dark-900 transition-all duration-100 hover:bg-dark-50 hover:shadow-lg active:shadow-lg dark:text-dark-100  hover:dark:bg-dark-600 hover:dark:text-dark-50",
        isSidebarOpen ? "mx-3 hover:underline" : "mx-auto justify-center"
      )}
      onClick={toggleColorMode}
      onKeyDown={handleKeyDown}
      aria-label="Toggle Color Mode"
      tabIndex={0}
      role="button"
    >
      <div className="flex items-center justify-center">
        {colorMode === "light" ? (
          <RiMoonLine className="h-5 w-5" />
        ) : (
          <RiSunLine className="h-5 w-5" />
        )}
      </div>
    </div>
  );
};

ColorModeToggle.propTypes = {
  colorMode: PropTypes.string.isRequired,
  setColorMode: PropTypes.func.isRequired,
  isSidebarOpen: PropTypes.bool.isRequired,
};

export default ColorModeToggle;
