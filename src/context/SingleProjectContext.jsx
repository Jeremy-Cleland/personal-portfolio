import { Resty as RestyJson } from "../data/Resty.jsx";
import { ReactNativeTaskManager as ReactNativeTaskManagerJson } from "../data/React-Native-Task-Manager.jsx";
import { ExpenseTrackingApp as ExpenseTrackingAppJson } from "../data/Expense-Tracking-App.jsx";

const projectsDataList = [
  ReactNativeTaskManagerJson,
  ExpenseTrackingAppJson,
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
