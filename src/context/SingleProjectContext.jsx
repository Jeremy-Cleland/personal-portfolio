import { portfolioData } from "../data/portfolioData.jsx";
import { useState, createContext } from "react";

export const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ projectName, children }) => {
  console.log('Attempting to find project:', projectName);
  console.log('Available projects:', portfolioData.map(p => p.name));
  
  const singleIndex = portfolioData.findIndex(
    (project) => project.name === projectName
  );
  
  console.log('Found project at index:', singleIndex);
  if (singleIndex === -1) {
    console.error('Project not found:', projectName);
    return null;
  }

  const [singleProjectData, setSingleProjectData] = useState(
    portfolioData[singleIndex]
  );

  return (
    <SingleProjectContext.Provider
      value={{ singleProjectData, setSingleProjectData, portfolioData }}
    >
      {children}
    </SingleProjectContext.Provider>
  );
};

