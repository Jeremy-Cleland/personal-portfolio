import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useColorMode = () => {
  // Use the useLocalStorage hook to get the stored color mode or set it to "light" if not present
  const [colorMode, setColorMode] = useLocalStorage("color-theme", "dark");

  useEffect(() => {
    const className = "dark";
    const bodyClass = window.document.body.classList;

    // Add or remove the "dark" className to the body depending on the color mode
    colorMode === "dark"
      ? bodyClass.add(className)
      : bodyClass.remove(className);
  }, [colorMode]);

  return [colorMode, setColorMode];
};

export default useColorMode;
