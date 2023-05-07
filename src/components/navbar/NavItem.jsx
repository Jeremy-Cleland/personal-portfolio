const NavItem = ({ icon: Icon, label, href, isNavOpen }) => (
  <li
    className={
      " group flex cursor-default rounded-xl p-2 text-midnight-900 hover:shadow-lg dark:text-ocean-300 hover:dark:bg-swell-1050 hover:dark:text-acccent-100"
    }
  >
    <a
      rel="noopener noreferrer"
      href={href}
      className="flex items-center space-x-3 rounded-md p-2"
    >
      <Icon size={22} />
      {isNavOpen && <span>{label}</span>}
    </a>
  </li>
);

export default NavItem;
