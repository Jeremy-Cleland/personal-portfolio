import data from "../data/data.jsx";
import ProjectCard from "../components/projects/ProjectCard.jsx";
// import image from "../assets/img/profilePic.png";
import SocialLink from "../components/sidebar/SocialLink.jsx";
import { RiGithubLine, RiLinkedinBoxLine, RiMailLine } from "react-icons/ri";

const Portfolio = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center font-SourceCodePro">
      <h1 className=" mt-10 select-none py-5 font-SourceCodePro text-3xl font-black tracking-widest text-[#7FD6C2]">
        PROJECTS
      </h1>
      <div className="mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 ">
        {data.projects.map((project, index) => (
          <div
            key={index}
            className="group relative mx-2 max-w-sm items-center justify-center sm:mx-4 md:mx-8 md:max-w-md lg:mx-16 lg:max-w-lg"
          >
            <div className="absolute -inset-0.5 animate-tilt rounded-2xl bg-gradient-to-r from-[#5DD9C1] to-[#A986C7] opacity-60 blur transition duration-200 group-hover:opacity-100 group-hover:duration-200"></div>
            <div className="relative items-center rounded-2xl border-transparent bg-gray-200 dark:bg-swell-1050">
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-2xl"
              />
              <div className="px-5 py-5 text-center text-gray-600 dark:text-dark-50 ">
                <h2 className="font-Righteous text-base">{project.title}</h2>
                <p className="text-xs">{project.repositoryDescription}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
