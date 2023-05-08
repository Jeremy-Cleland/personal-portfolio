import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ isSidebarOpen, icon: Icon, text, path }) => {
  return (
    <li
      className={
        " group mt-8 flex cursor-default rounded-xl p-2 text-midnight-900 hover:shadow-lg dark:text-ocean-300 hover:dark:bg-swell-1050 hover:dark:text-acccent-100"
      }
    >
      <Link to={path} className="flex items-center space-x-3 rounded-md p-4">
        <Icon size={22} />
        {isSidebarOpen && <span className="ml-2">{text}</span>}
      </Link>
    </li>
  );
};

export default NavItem;
