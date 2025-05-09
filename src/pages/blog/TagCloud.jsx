import { motion as m } from "framer-motion";
import { useContext } from "react";
import { BlogContext } from "../../context/BlogContext.jsx";

const TagCloud = () => {
  const { allTags, tagFilter, setTagFilter } = useContext(BlogContext);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="mx-auto mb-10 max-w-7xl">
      <h3 className="mb-4 font-ChillaxBold text-lg text-dark-900 dark:text-white">Popular Tags</h3>

      <m.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-wrap gap-2"
      >
        <m.button
          variants={item}
          onClick={() => setTagFilter("")}
          className={`rounded-full px-3 py-1 text-sm ${tagFilter === ""
            ? "bg-orange-200 text-white"
            : "bg-gray-100 text-gray-800 hover:bg-orange-400/20 dark:bg-orange-400 dark:text-gray-200 dark:hover:bg-orange-400/20"
            }`}
        >
          All
        </m.button>

        {allTags.map((tag) => (
          <m.button
            key={tag}
            variants={item}
            onClick={() => setTagFilter(tag)}
            className={`rounded-full px-3 py-1 text-sm ${tagFilter === tag
              ? "bg-orange-200 text-white"
              : "bg-gray-100 text-gray-800 hover:bg-orange-400/20 dark:bg-orange-400 dark:text-gray-200 dark:hover:bg-orange-400/20"
              }`}
          >
            {tag}
          </m.button>
        ))}
      </m.div>
    </div>
  );
};

export default TagCloud; 