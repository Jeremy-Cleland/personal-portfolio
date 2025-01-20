import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Project = ({ name, title, category, image }) => {
  // Convert name to kebab-case to match portfolioData format
  const projectUrl = name.toLowerCase().replace(/\s+/g, '-');
  
  console.log('Project name:', name);
  console.log('Project URL:', projectUrl);

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
      className="container mx-auto "
    >
      <Link
        to={`/portfolio/${projectUrl}`}
        aria-label={`${name}`}
        className="mt-10 block"
      >
        <div className="group relative mx-auto mt-10 flex transform items-center justify-center transition duration-300 ease-in-out hover:scale-[1.02]">
          <div className="absolute -inset-0.5 animate-tilt rounded-lg bg-gradient-to-t from-violet-500 to-violet-300 opacity-40 blur transition duration-300 group-hover:opacity-70 dark:from-violet-600 dark:to-violet-400" />
          <img
          alt={title}
          src={image}
          className="relative h-64 w-full rounded-lg object-cover shadow-lg transition duration-300 group-hover:shadow-xl sm:h-72 lg:h-96 xl:h-80"
          />
        </div>
        <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
          <strong className="relative font-SourceCodePro tracking-wide text-dark-900 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-violet-400 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100 dark:text-dark-50">
            {title}
          </strong>

          <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-violet-400 " />

          <p className="mt-0.5 font-Fira tracking-tight opacity-60 sm:mt-0">
            {category}
          </p>
        </div>
      </Link>
    </m.div>
  );
};

Project.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Project;
