import { portfolioData } from "../data/portfolioData.jsx";
import { useState, createContext } from "react";

export const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ projectName, children }) => {
  console.log('Project Name:', projectName);
  console.log('Portfolio Data:', portfolioData);
  
  const singleIndex = portfolioData.findIndex(
    (project) => project.name === projectName
  );
  
  console.log('Found Index:', singleIndex);
  console.log('Found Project:', portfolioData[singleIndex]);

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

