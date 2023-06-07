import { useState } from "react";
import { motion as m } from "framer-motion";
import Card from "../../components/reusable/Card.jsx";

const Skill = ({ icon, name, delay }) => {
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
    <m.div whileHover={{ scale: 0.9 }}>
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
          <m.div className="my-5 text-4xl duration-200 hover:dark:text-violet-400 ">
            {icon}
            {showTooltip && (
              <m.p
                variants={textVariants}
                className="absolute bottom-full left-1/2 w-24 -translate-x-1/2 transform rounded-lg bg-dark-100 p-2 text-center font-Fira text-sm text-dark-900 shadow-lg dark:bg-violet-400"
              >
                {name}
              </m.p>
            )}
          </m.div>
        </m.li>
      </Card>
    </m.div>
  );
};

export default Skill;
