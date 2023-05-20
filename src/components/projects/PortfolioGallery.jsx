import { useContext } from "react";

import { ProjectContext } from "../../context/ProjectContext.jsx";

const PortfolioGallery = () => {
  const { projectData } = useContext(ProjectContext);
  return (
    <div className="grid grid-cols-2 gap-12 md:grid-cols-3">
      {projectData.ProjectImages.map((project) => (
        <div className="h-[100px]" key={project.id}>
          <img
            className="h-full max-w-full rounded-lg "
            src={project.image}
            alt={project.title}
          />
        </div>
      ))}
    </div>
  );
};

export default PortfolioGallery;
