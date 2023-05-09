import clsx from "clsx";

const SocialLink = ({ icon: Icon, href, isSidebarOpen }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={clsx(
      "group mt-8 flex cursor-default rounded-xl font-SourceCodePro font-bold tracking-widest text-gray-600 transition-all duration-100 hover:bg-dark-50 hover:shadow-lg active:shadow-lg dark:text-ocean-300  hover:dark:bg-dark-800 hover:dark:text-dark-50",
      isSidebarOpen ? "mx-3 hover:underline" : "mx-auto justify-center"
    )}
  >
    <div className="flex items-center justify-center p-4">
      <Icon size={22} />
    </div>
  </a>
);

export default SocialLink;
