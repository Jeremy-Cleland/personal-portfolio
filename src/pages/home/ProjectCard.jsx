import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";

const ProjectCard = ({ title, category, image }) => {
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
        to="/portfolio/project"
        aria-label="Indvidual Project"
        className="mt-10 block"
      >
        <div className="group relative mx-auto mt-10 flex items-center justify-center">
          <div className="absolute -inset-0.5 animate-tilt rounded-lg bg-gradient-to-t from-black to-dark-900 opacity-40 shadow-lg blur transition duration-200 group-hover:opacity-100 group-hover:duration-200 dark:opacity-70 dark:group-hover:opacity-100 "></div>
          <img
            alt={title}
            src={image}
            className="relative h-52 w-full rounded-lg object-cover sm:h-64 lg:h-96 xl:h-80"
          />
        </div>
        <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
          <strong className="relative font-SourceCodePro tracking-wide text-dark-900 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-violet-400 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100 dark:text-dark-50">
            {title}
          </strong>

          <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-violet-400"></span>

          <p className="mt-0.5 font-Fira tracking-tight opacity-50 sm:mt-0">
            {category}
          </p>
        </div>
      </Link>
    </m.div>
  );
};
export default ProjectCard;
