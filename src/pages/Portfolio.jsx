// import React from "react";
// import data from "../assets/data.jsx";
// import image from "../assets/img/profilePic.png";
// import SocialLink from "../components/Sidebar/SocialLink.jsx";
// import { RiGithubLine, RiLinkedinBoxLine, RiMailLine } from "react-icons/ri";

const Portfolio = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center font-SourceCodePro">
      <div className="group relative mx-auto flex w-4/5 items-center justify-center ">
        <div className="absolute -inset-0.5 animate-tilt rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
        <div className="relative flex items-center rounded-lg bg-gray-200 px-7 py-4 dark:bg-swell-1050">
          <h1 className="text-7xl">Jeremy Cleland</h1>
          <p className="mt-2 px-2 text-sm text-gray-600 sm:text-base">
            From Special Forces Medic to Software Developer, my unique
            background enables me to deliver innovative solutions and tackle
            complex challenges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
