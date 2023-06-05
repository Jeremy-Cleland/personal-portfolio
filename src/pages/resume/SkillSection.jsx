import React, { useContext } from "react";
import { AboutMeContext } from "../../context/AboutMeContext.jsx";
const SkillsSection = () => {
  const { resume } = useContext(AboutMeContext);

  return (
    <div className="rounded bg-white p-5 shadow">
      <h2 className="mb-4 text-2xl font-bold">Technical Skills</h2>

      <div className="mb-4">
        <h3 className="mb-2 text-xl font-semibold">Languages</h3>
        <ul className="list-inside list-disc">
          {resume.technicalSkills.languages.map((language, index) => (
            <li key={index} className="text-gray-600">
              {language}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="mb-2 text-xl font-semibold">Skills and Tools</h3>
        <ul className="list-inside list-disc">
          {resume.technicalSkills.skillsAndTools.map((skill, index) => (
            <li key={index} className="text-gray-600">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillsSection;
