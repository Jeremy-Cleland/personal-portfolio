import React from "react";
import clsx from "clsx";

const SocialLink = ({ icon: Icon, href, isSidebarOpen }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={clsx(
      "group flex items-center space-x-3 rounded-md p-2 transition-all duration-200 hover:dark:text-acccent-100",
      isSidebarOpen
        ? "mx-3 hover:underline"
        : "hover:dark:text-accent-100 my-3 ml-3 text-midnight-900 hover:shadow-lg dark:text-ocean-300 hover:dark:bg-swell-1050"
    )}
  >
    <Icon size={22} />
    {isSidebarOpen && <span className="ml-2" />}
  </a>
);

export default SocialLink;
