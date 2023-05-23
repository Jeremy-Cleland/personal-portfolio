import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";

const Project = ({ title, category, image }) => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        delay: 0.2,
        duration: 1,
      }}
    >
      <Link to="/portfolio/project" aria-label="Indvidual Project">
        <div className="rounded-xl py-5 text-center shadow-lg hover:shadow-xl dark:bg-dark-200 dark:text-gray-100 sm:mb-0">
          <m.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <div className="px-4 text-center ">
              <img
                className="h-auto max-w-full rounded-lg"
                src={image}
                alt={title}
              />
              <h2 className="font-bold leading-loose">{title}</h2>
              <span className="text-sm leading-loose">{category}</span>
            </div>
          </m.div>
        </div>
      </Link>
    </m.div>
  );
};

export default Project;
