import { Resty as RestyJson } from "../data/Resty.jsx";
import { ProjectTwo as ProjectTwoJson } from "../data/ProjectTwo.jsx";
import { ProjectThree as ProjectThreeJson } from "../data/ProjectThree.jsx";
import { ProjectFour as ProjectFourJson } from "../data/ProjectFour.jsx";
import { ProjectFive as ProjectFiveJson } from "../data/ProjectFive.jsx";
import { ProjectSix as ProjectSixJson } from "../data/ProjectSix.jsx";

export const projectsDataList = [
  ProjectTwoJson,
  ProjectThreeJson,
  ProjectFourJson,
  ProjectFiveJson,
  ProjectSixJson,
  RestyJson,
];

import { useState, createContext } from "react";
import { projectsDataList } from "./projectsData";

export const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ projectName, children }) => {
  const singleIndex = projectsDataList.findIndex(
    (projectData) => projectData.name === projectName
  );
  console.log("singleIndex", singleIndex);

  const [singleProjectData, setSingleProjectData] = useState(
    projectsDataList[singleIndex]
  );

  return (
    <SingleProjectContext.Provider
      value={{ singleProjectData, setSingleProjectData, projectsDataList }}
    >
      {children}
    </SingleProjectContext.Provider>
  );
};
