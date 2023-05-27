import clsx from "clsx";

const SocialLink = ({ icon: Icon, href, isSidebarOpen }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={clsx(
      "group mt-8 flex cursor-default rounded-2xl p-3 font-bold tracking-widest text-dark-900 transition-all duration-100 hover:bg-dark-50 hover:shadow-lg active:shadow-lg dark:text-dark-100  hover:dark:bg-dark-800 hover:dark:text-dark-50",

      isSidebarOpen ? "mx-3 hover:underline" : "mx-auto justify-center"
    )}
  >
    <div className="flex items-center justify-center p-2">
      <Icon className="h-5 w-5" />
    </div>
  </a>
);
export default SocialLink;
