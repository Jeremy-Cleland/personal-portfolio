// import React, { useContext } from "react";
// import { PortfolioContext } from "../../context/PortfolioContext.jsx";

// const ProjectsSection = () => {
//   const { resume } = useContext(PortfolioContext);

//   return (
//     <div className="rounded bg-white p-5 shadow dark:bg-dark-900">
//       <h2 className="mb-4 text-2xl font-bold">Projects</h2>

//       {resume.projects.map((project, index) => (
//         <div key={index} className="mb-4">
//           <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
//           <p className="mb-2 text-gray-600">{project.date}</p>
//           <p className="mb-2 text-gray-600">{project.description}</p>
//           <a href={project.url} className="text-blue-500 underline">
//             GitHub link
//           </a>
//           <h4 className="mb-1 mt-2 text-lg font-semibold">Tech Stack</h4>
//           <ul className="list-inside list-disc text-gray-600">
//             {project.techStack.map((tech, index) => (
//               <li key={index}>{tech}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProjectsSection;
