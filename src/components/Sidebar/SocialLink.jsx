// import PropTypes from "prop-types";
import clsx from "clsx";

const SocialLink = ({ icon: Icon, href, isSidebarOpen }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={clsx(
      "group mt-2 flex cursor-default rounded-xl p-4 text-midnight-900 transition-all duration-150 hover:shadow-lg active:-translate-y-1 active:shadow-md dark:text-ocean-300 hover:dark:bg-swell-1000 hover:dark:text-acccent-200",
      isSidebarOpen ? "mx-3 hover:underline" : "mx-auto justify-center"
    )}
  >
    <div className="flex items-center justify-center">
      <Icon size={22} />
    </div>
  </a>
);

// SocialLink.propTypes = {
//   icon: PropTypes.elementType.isRequired,
//   href: PropTypes.string.isRequired,
//   isSidebarOpen: PropTypes.bool.isRequired,
// };

export default SocialLink;
