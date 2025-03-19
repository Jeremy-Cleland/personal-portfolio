import { motion as m } from "framer-motion";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProjectCard = ({ title, category, image, name, info }) => {
  // Convert name to kebab-case to match portfolioData format if it's not already
  const projectUrl = name.includes(' ')
    ? name.toLowerCase().replace(/\s+/g, '-')
    : name;

  // Get tags from info if available
  const tags = info?.tags || [];
  const date = info?.date || "";

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
      className="container mx-auto"
    >
      <Link
        to={`/portfolio/${projectUrl}`}
        aria-label={`${title}`}
        className="mt-10 block"
      >
        <div className="group relative mx-auto mt-10 flex transform items-center justify-center transition duration-300 ease-in-out hover:scale-[1.02]">
          {/* Gradient background effect */}
          <div className="absolute -inset-0.5 animate-tilt rounded-lg bg-gradient-to-t from-violet-500 to-violet-300 opacity-40 blur transition duration-300 group-hover:opacity-70 dark:from-violet-600 dark:to-violet-400" />

          {/* Project image with overlay */}
          <div className="relative w-full rounded-lg overflow-hidden">
            <img
              alt={title}
              src={image}
              className="relative h-52 w-full rounded-lg object-cover shadow-lg transition duration-300 group-hover:shadow-xl sm:h-64 lg:h-80"
            />

            {/* Gradient overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
              {/* Tag pills */}
              <div className="flex flex-wrap gap-2 mb-2">
                {tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="bg-violet-500/40 text-white text-xs px-2 py-1 rounded-full font-SourceCodePro"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Date */}
              {date && (
                <p className="text-violet-200 text-xs font-Fira mb-1">
                  {date}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
          <strong className="relative font-SourceCodePro tracking-wide text-dark-900 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-violet-400 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100 dark:text-dark-50">
            {title}
          </strong>

          <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-violet-400" />

          <p className="mt-0.5 font-Fira tracking-tight opacity-60 sm:mt-0">
            {category}
          </p>
        </div>
      </Link>
    </m.div>
  );
};

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
  info: PropTypes.shape({
    date: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string)
  })
};

export default ProjectCard;
