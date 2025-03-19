import { motion as m } from "framer-motion";
import { useContext } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { BlogContext } from "../../context/BlogContext.jsx";

const BlogHeader = () => {
  const {
    searchTerm,
    setSearchTerm,
    categoryFilter,
    setCategoryFilter,
    allCategories,
  } = useContext(BlogContext);

  return (
    <div className="mb-10">
      <div className="mx-auto my-2 max-w-7xl border-b-[1px] border-orange-400/70 py-5 text-center font-SourceCodePro text-dark-900 dark:text-gray-200 sm:mt-20 md:my-10">
        <h4 className="text-left font-Fira text-sm tracking-tight md:text-lg ">
          <span className="text-base text-orange-400"> {">"} </span> AI & Machine Learning Blog
        </h4>
      </div>

      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mx-auto my-5 grid max-w-7xl grid-rows-2 justify-between gap-5 sm:my-2.5 md:flex"
      >
        {/* Search Input */}
        <div className="group mx-5 flex w-full md:w-72 rounded-lg border-[1px] border-orange-400/30 bg-dark-100 pl-2 dark:border-orange-400/30 dark:bg-dark-600">
          <RiSearch2Line className="my-auto mr-2 h-5 w-5" />
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full appearance-none rounded-lg bg-dark-100 py-2 font-SourceCodePro text-sm text-dark-900 placeholder:text-dark-900 focus:outline-none dark:bg-dark-600 dark:text-gray-100 dark:placeholder:text-dark-100 sm:text-sm"
            id="search"
            name="search"
            type="search"
            placeholder="Search articles..."
            aria-label="Search"
          />
        </div>

        {/* Category Filter */}
        <div>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="mx-5 w-full md:w-72 grow justify-end rounded-lg border-[1px] bg-dark-100 px-8 py-2 font-SourceCodePro text-sm text-dark-900 focus:outline-none dark:border-orange-400/30 dark:bg-dark-600 dark:text-gray-200"
          >
            <option value="">All Categories</option>
            {allCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </m.div>
    </div>
  );
};

export default BlogHeader; 