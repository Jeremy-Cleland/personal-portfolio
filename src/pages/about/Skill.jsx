import { motion } from "framer-motion";

const Skill = ({ icon, delay }) => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.li
      variants={textVariants}
      initial="hidden"
      animate="show"
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center"
    >
      <div className="group my-2 text-[2.5rem] text-dark-900 dark:text-dark-100 hover:dark:text-violet-400">
        {icon}
      </div>
    </motion.li>
  );
};

export default Skill;
