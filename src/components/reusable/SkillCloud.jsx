import Skill from "./Skill.jsx";
import { staggerContainerVariant } from "../../utils/variants.js";
import { resumeData } from "../../data/resumeData.jsx";
import { motion as m } from "framer-motion";

const SkillCloud = () => {
  return (
    <div>
      <div className="mx-auto my-10 max-w-7xl">
        <div className="my-5 border-b-[1px] border-violet-400/60 py-5 text-center font-SourceCodePro text-dark-900 dark:text-gray-200">
          <h4 className="text-center font-Fira text-lg tracking-tight md:text-left ">
            <span className="text-base text-violet-400"> {">"} </span> Languages
            & Tools
          </h4>
        </div>

        <m.ul
          variants={staggerContainerVariant}
          initial="hidden"
          animate="show"
          className="sm-grid-cols-4 mx-auto grid max-w-6xl grid-cols-3 gap-5 md:grid-cols-4"
        >
          {resumeData.techSkills.map((skill, index) => (
            <Skill key={index} icon={skill.icon} name={skill.name} />
          ))}
        </m.ul>
      </div>
    </div>
  );
};

export default SkillCloud;
