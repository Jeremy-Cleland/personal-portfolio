import { RiSearchLine } from "react-icons/ri";
import BaseButton from "../base/BaseButton.jsx";

const SearchBar = () => (
  <div className="relative mt-8">
    <span className="absolute inset-y-0 left-0 flex items-center py-4">
      <BaseButton type="submit" className="p-2 focus:outline-none focus:ring">
        <RiSearchLine size={22} />
      </BaseButton>
    </span>
    <input
      type="search"
      name="Search"
      placeholder="Search..."
      className={
        "group mt-8 flex cursor-default rounded-xl p-2 text-midnight-900 hover:shadow-lg dark:text-ocean-300 hover:dark:bg-swell-1050 hover:dark:text-acccent-100"
      }
    />
  </div>
);

export default SearchBar;
