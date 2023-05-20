import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Project = ({ title, category, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        delay: 0.2,
        duration: 1,
      }}
    >
      <Link to="/projects/single-project}" aria-label="Single Project">
        <div className="dark:bg-dark--600 rounded-xl py-5 text-center  shadow-xl hover:shadow-xl dark:text-gray-200 sm:mb-0">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 text-center ">
              <img
                className="h-auto max-w-full rounded-lg"
                src={image}
                alt={title}
              />
              <h2 className="font-bold leading-loose">{title}</h2>
              <span className="text-sm leading-loose">{category}</span>
            </div>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Project;
