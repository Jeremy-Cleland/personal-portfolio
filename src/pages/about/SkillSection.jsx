import Skill from "./Skill.jsx";
import { motion } from "framer-motion";
import { staggerContainerVariant } from "../../utils/variants.js";
import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiHtml5,
  SiReact,
  SiCss3,
  SiNodedotjs,
  SiPostgresql,
  SiMysql,
  SiNextdotjs,
} from "react-icons/si";

const SkillsSection = () => {
  const skills = [
    { name: "React", icon: <SiReact />, delay: 0 },
    { name: "JavaScript", icon: <SiJavascript />, delay: 0.1 },
    { name: "HTML", icon: <SiHtml5 />, delay: 0.1 },
    { name: "CSS", icon: <SiCss3 />, delay: 0.1 },
    { name: "Node.js", icon: <SiNodedotjs />, delay: 0.1 },
    { name: "Express", icon: <SiExpress />, delay: 0.1 },
    { name: "Next.js", icon: <SiNextdotjs />, delay: 0.1 },
    { name: "PostgreSQL", icon: <SiPostgresql />, delay: 0.1 },
    { name: "MySQL", icon: <SiMysql />, delay: 0.1 },
    { name: "MongoDB", icon: <SiMongodb />, delay: 0.1 },
  ];

  return (
    <div className="mx-auto max-w-5xl">
      <div className="my-5 mt-10 max-w-7xl border-b-[1px] border-violet-400/60 py-5 text-center font-SourceCodePro text-dark-900 dark:text-gray-200 sm:mt-20 md:my-10 xl:mt-36 2xl:mt-48">
        <h4 className="text-center font-Fira text-lg tracking-tight md:text-left ">
          <span className="text-base text-violet-400"> {">"} </span> My Skills
        </h4>
      </div>
      <motion.ul
        variants={staggerContainerVariant}
        initial="hidden"
        animate="show"
        className="mx-auto grid grid-cols-2 gap-10 md:grid-cols-5"
      >
        {skills.map((skill, index) => (
          <Skill
            key={index}
            name={skill.name}
            icon={skill.icon}
            delay={skill.delay}
          />
        ))}
      </motion.ul>
    </div>
  );
};

export default SkillsSection;
