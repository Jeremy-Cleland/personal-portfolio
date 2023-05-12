import { useContext } from "react";
import { ProjectContext } from "../../context/ProjectContext.jsx";

const ProjectOverview = () => {
  const { projectData } = useContext(ProjectContext);

  return (
    <div className="block gap-0 mt-14 sm:flex sm:gap-10">
      <div className="mb-7">
        <p className="mb-2">{projectData.ProjectOverview.Heading}</p>
        <p className="">{projectData.ProjectOverview.Overview}</p>
      </div>
      <div className="mb-7">
        <p className="mb-2 ">
          {projectData.ProjectOverview.Technologies[0].title}
        </p>
        <p className="text-dark-950">
          {projectData.ProjectOverview.Technologies[0].techs.join(", ")}
        </p>
      </div>
      <div className="w-full mt-10 text-left sm:mt-0 sm:w-2/3">
        <p className="text-2xl mb-7">{projectData.ProjectOverview.Overview}</p>
      </div>
    </div>
  );
};

export default ProjectOverview;
