import { useState, useMemo, createContext } from "react";
import { portfolioData } from "../data/portfolioData.js";

export const PortfolioContext = createContext();

export const PortfolioProvider = (props) => {
  const [projects, setProjects] = useState(portfolioData);
  const [searchProject, setSearchProject] = useState("");
  const [selectFilterProject, setSelectFilterProject] = useState("");

  // Memoized filtered projects by project title
  const searchPortfolioByTitle = useMemo(() => {
    return projects.filter((item) => {
      const result = item.title
        .toLowerCase()
        .includes(searchProject.toLowerCase());
      return result || searchProject === "";
    });
  }, [projects, searchProject]);

  const selectProjectsByCategory = useMemo(() => {
    const category =
      selectFilterProject.charAt(0).toUpperCase() +
      selectFilterProject.slice(1);
    return projects.filter((item) => item.category.includes(category));
  }, [projects, selectFilterProject]);

  return (
    <PortfolioContext.Provider
      value={{
        projects,
        setProjects,
        searchProject,
        setSearchProject,
        searchPortfolioByTitle,
        selectFilterProject,
        setSelectFilterProject,
        selectProjectsByCategory,
      }}
    >
      {props.children}
    </PortfolioContext.Provider>
  );
};
