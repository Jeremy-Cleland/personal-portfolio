import { Link } from "react-router-dom";

import clsx from "clsx";

const NavItem = ({ isSidebarOpen, icon: Icon, text, path }) => {
  return (
    <li
      className={
        "group mt-8 flex cursor-default rounded-lg font-bold  tracking-widest text-dark-900 transition-all duration-100 hover:bg-dark-50 hover:text-dark-900 hover:shadow-lg active:shadow-lg dark:text-dark-100 hover:dark:bg-dark-800 hover:dark:text-dark-50"
      }
    >
      <Link
        to={path}
        className="flex items-center justify-center space-x-3 p-4"
      >
        <Icon className={clsx("h-5 w-5", isSidebarOpen ? "mx-2.5" : "")} />
        {isSidebarOpen && <span className="ml-2">{text}</span>}
      </Link>
    </li>
  );
};

export default NavItem;
