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
        <div className="mb-10 shadow-lg shadow-xl text-cener rounded-xl font-SourceCodePro hover:shadow-xl dark:bg-darkTheme-300 dark:text-gray-200 sm:mb-0">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 text-center">
              <img src={image} alt={title} />
              <h2 className="p-4">{title}</h2>
              <span className="p-4 ">{category}</span>
            </div>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Project;
