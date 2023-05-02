import React from "react";
import ProjectCard from "./ProjectCard.jsx";

const Projects = ({ projects }) => {
  return (
    <div>
      <h1 className="mt-8 text-center text-2xl font-extrabold dark:text-darkAccent md:text-4xl">
        My projects
        <hr className="mx-auto mt-4 w-1/2 rounded-full border-2 dark:border-darkAccent" />
        <hr className="border-pink-500 mx-auto mt-4 w-1/4 rounded-full border-2 dark:border-darkAccent" />
      </h1>
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </div>
  );
};

export default Projects;
