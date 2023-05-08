# personal-portfolio


## Search bar

``` JSX

import { RiSearchLine } from "react-icons/ri";

const SearchBar = () => (
  <div className="relative mt-4">
    <span className="absolute inset-y-0 left-0 flex items-center py-4">
      <button type="submit" className="p-2 focus:outline-none focus:ring">
        <RiSearchLine size={22} />
      </button>
    </span>
    <input
      type="search"
      name="Search"
      placeholder="Search..."
      className={
        "w-full rounded-md py-2 pl-10 text-sm outline-0 dark:bg-swell-1100 dark:text-ocean-300"
      }
    />
  </div>
);

export default SearchBar;


```

## Social link

``` JSX

import React from "react";

const SocialLink = ({ icon: Icon, href, isNavOpen }) => (
  <a
    href={href}
    target="_blank"
    className="mx-3 hover:underline"
    rel="noopener noreferrer"
    style={{
      display: isNavOpen ? "inline-block" : "block",
      margin: isNavOpen ? "0 3px" : "3px 0",
    }}
  >
    <Icon size={24} />
  </a>
);

export default SocialLink;


```

## NavItem

``` JSX

const NavItem = ({ icon: Icon, label, href, isNavOpen }) => (
  <li
    className={
      " group flex cursor-default rounded-xl p-2 text-midnight-900 hover:shadow-lg dark:text-ocean-300 hover:dark:bg-swell-1050 hover:dark:text-acccent-100"
    }
  >
    <a
      rel="noopener noreferrer"
      href={href}
      className="flex items-center space-x-3 rounded-md p-2"
    >
      <Icon size={22} />
      {isNavOpen && <span>{label}</span>}
    </a>
  </li>
);

export default NavItem;


```
## ColorModeToggle

``` JSX
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

```

## Sidebar

``` jsx

import React, { useState } from "react";
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

import ColorModeToggle from "./ColorModeToggle.jsx";
import SearchBar from "./SearchBar.jsx";
import NavItem from "./NavItem.jsx";
import SocialLink from "./SocialLink.jsx";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [colorMode, setColorMode] = useColorMode();

  return (
    <>
      <button
        className={clsx(
          "fixed left-2 top-2 z-10 flex h-6 flex-row p-1 text-midnight-900",
          isNavOpen ? "left-2" : "left-5"
        )}
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        {isNavOpen ? (
          <img
            src={eclipse1}
            alt=" close button"
            className="sticky top-2 transition-all duration-200"
          />
        ) : (
          <img src={eclipse3} alt="enter full screen button" />
        )}
      </button>
      <div
        className={
          (" fixed bottom-0 top-0 p-3 font-Quicksand text-sm tracking-wide text-midnight-900 transition-all duration-200 dark:bg-swell-1200 dark:text-ocean-300",
          isNavOpen
            ? "md:flex md:w-1/5 md:flex-col md:p-2"
            : "md:flex md:w-20 md:flex-col md:p-3")
        }
      >
        <div className="flex h-full flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              {isNavOpen && (
                <div className="flex flex-row pl-8">
                  <img src={eclipse2} alt=" minimize button" />
                  <img src={eclipse3} alt=" enter full screen button" />
                </div>
              )}
              <ColorModeToggle
                colorMode={colorMode}
                setColorMode={setColorMode}
                isNavOpen={isNavOpen}
              />
            </div>
            {isNavOpen && (
              <h2 className="font-Knewave text-lg tracking-widest">
                Jeremy Cleland
              </h2>
            )}
            <div className={clsx(!isNavOpen && "hidden", "mt-4")}>
              <SearchBar />
            </div>
            <div className="mx-auto mt-4 flex-1">
              <ul className="mx-auto space-y-5 pb-4 pt-2 text-sm">
                <NavItem
                  isNavOpen={isNavOpen}
                  icon={RiHome3Line}
                  label="Home"
                  href="#"
                />
                <NavItem
                  isNavOpen={isNavOpen}
                  icon={RiUser3Line}
                  label="Profile"
                  href="#"
                />
                <NavItem
                  isNavOpen={isNavOpen}
                  icon={RiBriefcase3Line}
                  label="Projects"
                  href="#"
                />
                <NavItem
                  isNavOpen={isNavOpen}
                  icon={RiFilePaper2Line}
                  label="Resume"
                  href="#"
                />
                <NavItem
                  isNavOpen={isNavOpen}
                  icon={RiLayout3Line}
                  label="Blog"
                  href="#"
                />
                <NavItem
                  isNavOpen={isNavOpen}
                  icon={RiChat3Line}
                  label="Contact"
                  href="#"
                />
              </ul>
            </div>
          </div>
          <div className="mb-0 flex w-full flex-row items-center justify-evenly justify-self-end">
            <img src={image} alt="" className="h-1/3 drop-shadow-sm" />
            <div className="flex flex-col">
              {isNavOpen && (
                <h2 className="text-md mb-4 font-Knewave tracking-widest underline underline-offset-4">
                  Jeremy Cleland
                </h2>
              )}
              {/*SocialLink*/}
              <span
                className={clsx(
                  !isNavOpen && "hidden",
                  "mb-0 flex items-center justify-center"
                )}
              >
                <SocialLink
                  icon={RiLinkedinBoxLine}
                  href="https://www.linkedin.com/in/jeremy-cleland/"
                  isNavOpen={isNavOpen}
                />
                <SocialLink
                  icon={RiGithubLine}
                  href="https://www.github.com/jeremy-cleland"
                  isNavOpen={isNavOpen}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

```


## Main

``` JSX
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/globals.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

```

## App

``` JSX
import data from "./assets/data.jsx";
import Navbar from "./components/navbar/index.jsx";
import Projects from "./components/projects/Projects.jsx";

function App() {
  return (
    <div className="fixed flex min-h-screen text-midnight-100 dark:text-ocean-300">
      <Navbar />
      <main className="w-screen bg-deep-100 dark:bg-swell-1200 dark:text-ocean-300">
        <Projects projects={data.projects} />
      </main>
    </div>
  );
}

export default App;


```

## Hooks

``` Jsx

import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useColorMode = () => {
  // Use the useLocalStorage hook to get the stored color mode or set it to "light" if not present
  const [colorMode, setColorMode] = useLocalStorage("theme", "dark");

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

```

## use Local Storage

``` JS

import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // useEffect to update local storage when the state changes
  useEffect(() => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        typeof storedValue === "function"
          ? storedValue(storedValue)
          : storedValue;
      // Save state
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};

export default useLocalStorage;

```
