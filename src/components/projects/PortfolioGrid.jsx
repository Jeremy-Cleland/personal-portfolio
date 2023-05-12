import { useContext } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { PortfolioContext } from "../../context/PortfolioContext.jsx";
import PortfolioFilter from "./PortfolioFilter.jsx";
import Project from "./Project.jsx";

const PortfolioGrid = () => {
  const {
    projects,
    searchProject,
    setSearchProject,
    searchPortfolioByTitle,
    selectFilterProject,
    setSelectFilterProject,
    selectProjectsByCategory,
  } = useContext(PortfolioContext);

  const renderProjects = () => {
    if (selectFilterProject) {
      return selectProjectsByCategory.map((project) => (
        <Project
          title={project.title}
          category={project.category}
          image={project.img}
          key={project.id}
        />
      ));
    }
    if (searchProject) {
      return searchPortfolioByTitle.map((project) => (
        <Project
          title={project.title}
          category={project.category}
          image={project.img}
          key={project.id}
        />
      ));
    }
    return projects.map((project) => (
      <Project
        title={project.title}
        category={project.category}
        image={project.img}
        key={project.id}
      />
    ));
  };

  return (
    <section>
      <div>
        <h3 className="pb-4 mt-10 mb-3 font-black text-center border-b-4 text-md border-violet-400 font-SourceCodePro text-dark-900 dark:text-gray-200 sm:mt-16 sm:text-xl">
          Search Portfolio By Project Title or Filter By Category
        </h3>
      </div>

      <div className="mt-10 sm:mt-16">
        <div className="flex justify-between gap-3 pb-3">
          <div className="flex justify-between gap-2">
            <span className="hidden cursor-pointer rounded-xl bg-gray-200 p-2.5 shadow-sm dark:bg-swell-1400 sm:block">
              <RiSearch2Line className="w-5 h-5 text-violet-400 dark:text-violet-400"></RiSearch2Line>
            </span>
            <input
              onChange={(e) => {
                setSearchProject(e.target.value);
              }}
              className="py-2 pl-3 pr-1 text-sm font-bold border border-gray-200 rounded-lg dark:border-secondary-dark sm:text-md font-SourceCodePro text-dark-900 dark:border-violet-400 dark:bg-darkTheme-300 dark:font-medium dark:text-gray-200 sm:px-4 "
              id="name"
              name="name"
              type="search"
              required=""
              placeholder="Search Projects"
              aria-label="Name"
            />
          </div>

          <PortfolioFilter setSelectFilterProject={setSelectFilterProject} />
        </div>
      </div>

      <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
        {renderProjects()}
      </div>
    </section>
  );
};

export default PortfolioGrid;
