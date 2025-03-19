import { createContext, useState } from "react";
import { portfolioData } from "../data/portfolioData.jsx";

export const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ projectName, initialData, children }) => {
  console.log('Attempting to find project:', projectName);
  console.log('Available projects:', portfolioData.map(p => p.name));

  // Use initialData if provided, otherwise find by name
  let projectData = initialData;

  if (!projectData) {
    const singleIndex = portfolioData.findIndex(
      (project) => project.name === projectName
    );

    console.log('Found project at index:', singleIndex);
    if (singleIndex === -1) {
      console.error('Project not found:', projectName);
      return null;
    }

    projectData = portfolioData[singleIndex];
  } else {
    console.log('Using provided initialData:', initialData.title);
  }

  const [singleProjectData, setSingleProjectData] = useState(projectData);

  return (
    <SingleProjectContext.Provider
      value={{ singleProjectData, setSingleProjectData, portfolioData }}
    >
      {children}
    </SingleProjectContext.Provider>
  );
};

