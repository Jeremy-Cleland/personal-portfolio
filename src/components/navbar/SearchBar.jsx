import clsx from "clsx";
import { RiSearchLine } from "react-icons/ri";

const SearchBar = () => (
  <div className="relative mt-4">
    <span className="absolute inset-y-0 left-0 flex items-center py-4">
      <button type="submit" className="p-2 focus:outline-none focus:ring">
        <RiSearchLine size={22} />
      </button>
    </span>
    <input
      type="search"
      name="Search"
      placeholder="Search..."
      className={clsx(
        "w-full rounded-md py-2 pl-10 text-sm outline-0 dark:bg-swell-1100 dark:text-ocean-300"
      )}
    />
  </div>
);

export default SearchBar;
