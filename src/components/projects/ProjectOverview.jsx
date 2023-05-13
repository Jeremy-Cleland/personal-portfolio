import { useContext } from "react";
import { ProjectContext } from "../../context/ProjectContext.jsx";

const ProjectOverview = () => {
  const { projectData } = useContext(ProjectContext);

  return (
    <div className="mt-14 block gap-0 sm:flex sm:gap-10">
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
      <div className="mt-10 w-full text-left sm:mt-0 sm:w-2/3">
        <p className="mb-7 text-2xl">{projectData.ProjectOverview.Overview}</p>
      </div>
    </div>
  );
};

export default ProjectOverview;
