import SkillIcon from "./SkillIcon.jsx";
import { staggerContainerVariant } from "../../utils/variants.js";
import { useContext } from "react";
import { AboutMeContext } from "../../context/AboutMeContext.jsx";
import { motion as m } from "framer-motion";

const SkillsSection = () => {
  const { resume } = useContext(AboutMeContext);

  return (
    <div>
      <div className="text-center">
        <h2 className="mb-4 text-2xl font-bold">Technical Skills</h2>
      </div>

      {/* <div className="grid grid-cols-2">
        <div className="mb-4">
          <h3 className="mb-2 text-xl font-semibold">Languages</h3>
          <ul className="list-inside list-disc">
            {resume.technicalSkills.languages.map((language, index) => (
              <li key={index} className="text-dark-900 dark:text-dark-100">
                {language}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="mb-2 text-xl font-semibold">Skills and Tools</h3>
          <ul className="">
            {resume.technicalSkills.skillsAndTools.map((skill, index) => (
              <li key={index} className="text-dark-900 dark:text-dark-100">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div> */}
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
          className="mx-auto grid max-w-6xl grid-cols-3 gap-5 md:grid-cols-6"
        >
          {resume.technicalSkills.languages.map((skill, index) => (
            <SkillIcon key={index} icon={skill.icon} name={skill.name} />
          ))}
        </m.ul>
        <m.ul
          variants={staggerContainerVariant}
          initial="hidden"
          animate="show"
          className="mx-auto grid max-w-6xl grid-cols-3 gap-5 md:grid-cols-6"
        >
          {resume.technicalSkills.skillsAndTools.map((skill, index) => (
            <SkillIcon key={index} icon={skill.icon} name={skill.name} />
          ))}
        </m.ul>
      </div>
    </div>
  );
};

export default SkillsSection;
