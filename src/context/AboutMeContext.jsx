import { useState, createContext } from "react";

import { resumeData as resumeDataJson } from "../data/resumeData.jsx";

import { aboutMeData as aboutMeDataJson } from "../data/aboutMeData.jsx";

export const AboutMeContext = createContext();

export const AboutMeProvider = ({ children }) => {
  const [aboutMe, setAboutMe] = useState(aboutMeDataJson);
  const [resume, setResume] = useState(resumeDataJson);

  return (
    <AboutMeContext.Provider value={{ aboutMe, setAboutMe, resume, setResume }}>
      {children}
    </AboutMeContext.Provider>
  );
};
