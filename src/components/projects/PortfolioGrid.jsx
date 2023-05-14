import { useContext } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { PortfolioContext } from "../../context/PortfolioContext.jsx";
import PortfolioFilter from "./PortfolioFilter.jsx";
import Project from "./Project.jsx";

const PortfolioGrid = () => {
  const {
    portfolioProject,
    searchPortfolioProject,
    setSearchPortfolioProject,
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
    if (searchPortfolioProject) {
      return searchPortfolioByTitle.map((project) => (
        <Project
          title={project.title}
          category={project.category}
          image={project.img}
          key={project.id}
        />
      ));
    }
    return portfolioProject.map((project) => (
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
        <h3 className="text-md mb-3 mt-10 border-b-4 border-violet-400 pb-4 text-center font-SourceCodePro font-black leading-4 text-dark-900 dark:text-gray-200 sm:mt-16 sm:text-xl">
          Search Portfolio By Project Title or Filter By Category
        </h3>
      </div>

      <div className="mt-10 sm:mt-16">
        <div className="flex justify-between gap-3 pb-3">
          <div className="flex justify-between gap-2">
            <span className="group cursor-pointer rounded-xl bg-gray-200 p-4 text-violet-400 shadow-lg dark:bg-[#141414] dark:text-violet-400 hover:dark:bg-violet-400  hover:dark:text-dark-300 sm:block">
              <RiSearch2Line className="group h-5 w-5"></RiSearch2Line>
            </span>
            <input
              onChange={(e) => {
                setSearchPortfolioProject(e.target.value);
              }}
              className="sm:text-md rounded-lg border border-gray-200 py-2 pl-3 pr-1 font-SourceCodePro text-sm font-bold text-dark-900 dark:border-violet-400 dark:bg-darkTheme-100 dark:font-medium dark:text-gray-200 sm:px-4 "
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

      <div className="my-10 grid auto-cols-max grid-cols-1 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
        {renderProjects()}
      </div>
    </section>
  );
};

export default PortfolioGrid;
