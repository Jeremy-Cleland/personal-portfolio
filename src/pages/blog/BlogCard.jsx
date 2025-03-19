import { motion as m } from "framer-motion";
import PropTypes from "prop-types";
import { FiClock } from "react-icons/fi";
import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto mb-10"
    >
      <Link
        to={`/blog/${post.slug}`}
        aria-label={post.title}
        className="block group"
      >
        <div className="relative mx-auto flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:border-gray-700 dark:bg-dark-800 md:flex-row">
          {/* Image container with overlay */}
          <div className="relative h-52 w-full overflow-hidden md:h-auto md:w-2/5">
            <img
              src={post.thumbnailImage}
              alt={post.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/70 md:bg-gradient-to-r md:from-transparent md:via-black/20 md:to-black/60"></div>

            {/* Categories - visible only on mobile */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:hidden">
              <div className="flex flex-wrap gap-2">
                {post.categories.map((category, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-violet-600/80 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Content container */}
          <div className="flex flex-1 flex-col justify-between p-6">
            {/* Categories - visible only on desktop */}
            <div className="mb-3 hidden flex-wrap gap-2 md:flex">
              {post.categories.map((category, index) => (
                <span
                  key={index}
                  className="rounded-full bg-violet-100 px-2.5 py-1 text-xs font-medium text-violet-800 dark:bg-violet-900/30 dark:text-violet-300"
                >
                  {category}
                </span>
              ))}
            </div>

            {/* Title */}
            <h2 className="mb-3 font-ChillaxBold text-xl font-bold leading-tight tracking-tight text-dark-900 group-hover:text-violet-600 dark:text-white dark:group-hover:text-violet-400 lg:text-2xl">
              {post.title}
            </h2>

            {/* Description */}
            <p className="mb-5 font-Fira text-sm text-gray-700 line-clamp-3 dark:text-gray-300">
              {post.description}
            </p>

            {/* Metadata */}
            <div className="mt-auto flex items-center justify-between">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {post.date}
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <FiClock className="mr-1" />
                {post.readingTime} min read
              </div>
            </div>

            {/* Read more link */}
            <div className="mt-4 text-right">
              <span className="inline-flex items-center text-sm font-medium text-violet-600 group-hover:text-violet-700 dark:text-violet-400 dark:group-hover:text-violet-300">
                Read more
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </m.div>
  );
};

BlogCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    thumbnailImage: PropTypes.any.isRequired,
    date: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    readingTime: PropTypes.number.isRequired,
  }).isRequired,
};

export default BlogCard; 