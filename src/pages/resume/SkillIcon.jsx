import { motion as m } from "framer-motion";
import Card from "../../components/reusable/Card.jsx";
import { useState } from "react";

const SkillIcon = ({ icon, name, delay }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <Card shadow>
      <m.li
        variants={textVariants}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.5, delay }}
        className="relative flex flex-col items-center"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <div className="p-3 text-[2rem] text-dark-900 dark:text-dark-100 hover:dark:text-violet-400 ">
          {icon}
          {showTooltip && (
            <div className="absolute bottom-full left-1/2 w-24 -translate-x-1/2 transform rounded-lg bg-dark-100 p-2 text-center text-sm text-dark-900 dark:bg-dark-700 dark:text-dark-100">
              {name}
            </div>
          )}
        </div>
      </m.li>
    </Card>
  );
};

export default SkillIcon;
