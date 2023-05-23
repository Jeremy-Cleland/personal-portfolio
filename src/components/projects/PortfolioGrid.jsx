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
    <section className="my-2.5 md:mx-10">
      <div>
        <h3 className="my-5 border-b-4 border-violet-400 py-5 text-center text-xl font-black leading-4 tracking-widest text-dark-900 dark:text-gray-200 md:my-10 md:text-2xl">
          Search Portfolio
        </h3>
      </div>

      <div className="my-2 flex flex-wrap justify-between gap-5 sm:my-2.5 md:my-10 md:gap-20 ">
        <div className="group flex grow rounded-lg border-2 border-gray-200 bg-dark-100 pl-2 dark:border-violet-400 dark:bg-dark-600">
          <RiSearch2Line className="my-auto mr-2 h-5 w-5" />
          <input
            onChange={(e) => {
              setSearchPortfolioProject(e.target.value);
            }}
            className="sm:text-md grow appearance-none rounded-lg bg-dark-100 py-2 text-sm font-bold text-dark-900 placeholder:text-dark-900 focus:outline-none dark:bg-dark-600 dark:font-medium dark:text-gray-100 dark:placeholder:text-dark-100 "
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

      <div className="grid auto-cols-max grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3">
        {renderProjects()}
      </div>
    </section>
  );
};

export default PortfolioGrid;
