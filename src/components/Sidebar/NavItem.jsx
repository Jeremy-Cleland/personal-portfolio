import { Link } from "react-router-dom";

import clsx from "clsx";

const NavItem = ({ isSidebarOpen, icon: Icon, text, path }) => {
  return (
    <li
      className={
        "group mt-8 flex cursor-default rounded-xl font-SourceCodePro font-bold tracking-widest text-midnight-900 transition-all duration-150 hover:scale-110 hover:shadow-lg active:translate-y-1 active:scale-90 active:shadow-lg dark:text-ocean-300 hover:dark:bg-dark-700 hover:dark:text-[#fff]"
      }
    >
      <Link
        to={path}
        className="flex items-center justify-center space-x-3 p-4"
      >
        <Icon
          size={22}
          className={clsx("h-5 w-5", isSidebarOpen ? "mx-2.5" : "")}
        />
        {isSidebarOpen && <span className="ml-2">{text}</span>}
      </Link>
    </li>
  );
};

export default NavItem;
