// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavItem = ({ isSidebarOpen, icon: Icon, text, path }) => {
  return (
    <li
      className={
        " group mt-8 flex cursor-default rounded-xl text-midnight-900 dark:text-ocean-300 hover:dark:bg-swell-1000 hover:dark:text-acccent-200"
      }
    >
      <Link
        to={path}
        className="flex items-center justify-center space-x-3 rounded-md p-4 transition-all duration-150 hover:shadow-lg active:-translate-y-1 active:shadow-md"
      >
        <Icon size={22} />
        {isSidebarOpen && <span className="ml-2">{text}</span>}
      </Link>
    </li>
  );
};

// NavItem.propTypes = {
//   isSidebarOpen: PropTypes.bool.isRequired,
//   icon: PropTypes.elementType.isRequired,
//   text: PropTypes.string.isRequired,
//   path: PropTypes.string.isRequired,
// };

export default NavItem;
