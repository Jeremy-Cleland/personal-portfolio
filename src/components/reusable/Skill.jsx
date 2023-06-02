import { motion } from "framer-motion";
import Card from "./Card.jsx";

const Skill = ({ icon, delay }) => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <Card shadow>
      <motion.li
        variants={textVariants}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.5, delay }}
        className="flex flex-col items-center"
      >
        <div className="my-2 p-5 text-[2.5rem] text-dark-900 dark:text-dark-100 hover:dark:text-violet-400 lg:p-10 ">
          {icon}
        </div>
      </motion.li>
    </Card>
  );
};

export default Skill;
