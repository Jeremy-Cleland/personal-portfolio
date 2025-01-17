import { portfolioData } from "../data/portfolioData.jsx";
import { useState, createContext } from "react";

export const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ projectName, children }) => {
  const singleIndex = portfolioData.findIndex(
    (project) => project.name === projectName
  );

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

