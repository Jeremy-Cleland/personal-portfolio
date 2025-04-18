import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import clsx from "clsx";

const NavItem = ({ isSidebarOpen, icon: Icon, text, path }) => {
  return (
    <li
      className={
        "group mt-8 flex cursor-default rounded-lg font-bold  tracking-widest text-dark-900 transition-all duration-100 hover:bg-orange-50 hover:text-dark-900 hover:shadow-lg active:shadow-lg dark:text-dark-100 hover:dark:bg-orange-400/20 hover:dark:text-dark-50"
      }
    >
      <Link
        to={path}
        className="flex items-center justify-center space-x-3 p-4"
        aria-label={text}
      >
        <Icon className={clsx("h-5 w-5", isSidebarOpen ? "mx-2.5" : "")} />
        {isSidebarOpen ? <span className="ml-2">{text}</span> : ""}
      </Link>
    </li>
  );
};

NavItem.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  icon: PropTypes.elementType.isRequired,
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default NavItem;
