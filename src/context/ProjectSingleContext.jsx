import { useState, createContext } from "react";
import { projectData as projectDataJson } from "../data/projectData.jsx";

export const ProjectContext = createContext();

const ProjectContextProvider = ({ children }) => {
  const [projectData, setProjectData] = useState(projectDataJson);
  return (
    <ProjectContext.Provider value={{ projectData, setProjectData }}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContextProvider;
