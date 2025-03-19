import { motion as m } from "framer-motion";
import { resumeData } from "../../data/resumeData.jsx";
import { staggerContainerVariant } from "../../utils/variants.js";
import Skill from "./Skill.jsx";

const SkillCloud = () => {
  return (
    <div>
      <div className="mx-auto my-10  max-w-7xl">
        <div className="my-5 border-b-[1px] border-orange-100/60 py-5 text-center font-SourceCodePro text-dark-900 dark:text-gray-200">
          <h4 className="text-center font-Fira text-lg tracking-tight md:text-left ">
            <span className="text-base text-orange-400"> {">"} </span> Languages
            & Tools
          </h4>
        </div>

        <m.ul
          variants={staggerContainerVariant}
          initial="hidden"
          animate="show"
          className="mx-auto grid max-w-7xl grid-cols-3 gap-5 sm:grid-cols-4"
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
