import { motion as m } from "framer-motion";
import { useContext } from "react";
import Skill from "../../components/reusable/Skill.jsx";
import { AboutMeContext } from "../../context/AboutMeContext.jsx";
import { staggerContainerVariant } from "../../utils/variants.js";

const SkillsSection = () => {
  const { resume } = useContext(AboutMeContext);

  return (
    <div>
      <div className="mx-auto my-10 max-w-7xl">
        <div className="my-5 border-b-[1px] border-orange-400/60 py-5 text-center font-SourceCodePro text-dark-900 dark:text-gray-200">
          <h4 className="text-center font-Fira text-lg tracking-tight md:text-left">
            <span className="text-base text-orange-400"> {">"} </span> Languages
          </h4>
        </div>

        <m.ul
          variants={staggerContainerVariant}
          initial="hidden"
          animate="show"
          className="mx-auto mb-8 grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {resume.technicalSkills.languages.map((skill, index) => (
            <Skill key={index} icon={skill.icon} name={skill.name} />
          ))}
        </m.ul>

        <div className="my-5 border-b-[1px] border-orange-400/60 py-5 text-center font-SourceCodePro text-dark-900 dark:text-gray-200">
          <h4 className="text-center font-Fira text-lg tracking-tight md:text-left">
            <span className="text-base text-orange-400"> {">"} </span> Tools & Frameworks
          </h4>
        </div>

        <m.ul
          variants={staggerContainerVariant}
          initial="hidden"
          animate="show"
          className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6"
        >
          {resume.technicalSkills.skillsAndTools.map((skill, index) => (
            <Skill key={index} icon={skill.icon} name={skill.name} />
          ))}
        </m.ul>
      </div>
    </div>
  );
};

export default SkillsSection;
