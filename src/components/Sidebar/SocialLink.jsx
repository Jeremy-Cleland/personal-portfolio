import clsx from "clsx";
import PropTypes from "prop-types";

const SocialLink = ({ icon: Icon, href, isSidebarOpen }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Social Link"
    className={clsx(
      "group mt-8 flex cursor-default rounded-lg p-4 font-bold tracking-widest text-dark-900 transition-all duration-100 hover:bg-dark-50 hover:shadow-lg active:shadow-lg dark:text-dark-100  hover:dark:bg-dark-800 hover:dark:text-dark-50",

      isSidebarOpen ? "mx-3 hover:underline" : "mx-auto justify-center"
    )}
  >
    <div className="flex items-center justify-center">
      <Icon className="h-5 w-5" />
    </div>
  </a>
);

SocialLink.propTypes = {
  icon: PropTypes.elementType.isRequired,
  href: PropTypes.string.isRequired,
  isSidebarOpen: PropTypes.bool.isRequired,
};

export default SocialLink;
