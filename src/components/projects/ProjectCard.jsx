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
      className="container mx-auto"
    >
      <Link
        to="/portfolio/project"
        aria-label="Indvidual Project"
        className="mt-10 block"
      >
        <div className="group relative mx-auto mt-10 flex items-center justify-center">
          <div className="absolute -inset-0.5 animate-tilt rounded-xl bg-gradient-to-t from-neutral-200 to-neutral-500 opacity-40 blur transition duration-200 group-hover:opacity-100 group-hover:duration-200 dark:opacity-10 dark:group-hover:opacity-20 "></div>
          <img
            alt={title}
            src={image}
            className="relative h-52 w-full rounded-xl object-cover sm:h-64 lg:h-96 xl:h-80"
          />
        </div>
        <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
          <strong className="font-SourceCodePro tracking-tight text-dark-900 dark:text-dark-50">
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
