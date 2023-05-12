import { useState, createContext } from "react";

import { projectData as projectDataJson } from "../data/projectData.js";

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projectData, setProjectData] = useState(projectDataJson);

  return (
    <ProjectContext.Provider value={{ projectData, setProjectData }}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContext;
