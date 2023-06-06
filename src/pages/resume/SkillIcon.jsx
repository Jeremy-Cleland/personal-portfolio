import { useState } from "react";
import { motion as m } from "framer-motion";
import Card from "../../components/reusable/Card.jsx";

const SkillIcon = ({ icon, name, delay }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const textVariants = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  return (
    <Card shadow>
      <m.li
        variants={textVariants}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.5, delay }}
        className="group relative flex flex-col items-center"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <m.div
          className=" group text-[3rem] text-dark-900 dark:text-dark-100 hover:dark:text-violet-400 "
          whileHover={{ scale: 0.8 }}
        >
          {icon}
          {showTooltip && (
            <m.p
              variants={textVariants}
              className="absolute bottom-full left-1/2 w-24 -translate-x-1/2 transform rounded-lg bg-dark-100 p-2 text-center text-sm text-dark-900 shadow-lg dark:bg-violet-400 "
            >
              {name}
            </m.p>
          )}
        </m.div>
      </m.li>
    </Card>
  );
};

export default SkillIcon;
