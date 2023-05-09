import React from "react";
import ProjectCard from "./ProjectCard.jsx";

const Projects = ({ projects }) => {
  return (
    <div>
      <h1 className="dark:text-darkAccent mt-8 text-center text-2xl font-extrabold md:text-4xl">
        My projects
        <hr className="dark:border-darkAccent mx-auto mt-4 w-1/2 rounded-full border-2" />
        <hr className="dark:border-darkAccent mx-auto mt-4 w-1/4 rounded-full border-2 border-pink-500" />
      </h1>
      <div className="flex flex-row text-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
