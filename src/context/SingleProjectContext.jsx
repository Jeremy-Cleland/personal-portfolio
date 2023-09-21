import { Resty as RestyJson } from "../data/Resty.jsx";
import { ReactNativeTaskManager as ReactNativeTaskManagerJson } from "../data/React-Native-Task-Manager.jsx";
import { ProjectThree as ProjectThreeJson } from "../data/ProjectThree.jsx";
import { ProjectFour as ProjectFourJson } from "../data/ProjectFour.jsx";
import { ProjectFive as ProjectFiveJson } from "../data/ProjectFive.jsx";
import { ProjectSix as ProjectSixJson } from "../data/ProjectSix.jsx";

const projectsDataList = [
  ReactNativeTaskManagerJson,
  ProjectThreeJson,
  ProjectFourJson,
  ProjectFiveJson,
  ProjectSixJson,
  RestyJson,
];

import { useState, createContext } from "react";

export const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ projectName, children }) => {
  const singleIndex = projectsDataList.findIndex(
    (projectData) => projectData.name === projectName
  );

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
