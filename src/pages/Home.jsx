import React from "react";
import data from "../assets/data.jsx";
import image from "../assets/img/profilePic.png";
import SocialLink from "../components/Sidebar/SocialLink.jsx";
import { RiGithubLine, RiLinkedinBoxLine, RiMailLine } from "react-icons/ri";

const Home = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="bg-white mx-auto flex w-4/6 flex-col items-center justify-center rounded-xl p-5 font-SourceCodePro text-sm shadow-2xl dark:bg-darkTheme-700 dark:text-ocean-200">
        <div>
          <img
            className="mx-auto w-32 rounded-full"
            src={image}
            alt="Profile face"
          />
          s
        </div>
        <div className="mt-5 text-center">
          <h1 className="text-gray-900 text-2xl font-semibold sm:text-3xl ">
            {data.name}
          </h1>
          <h2 className="text-gray-600 text-lg sm:text-xl">{data.title}</h2>
          <p className="text-gray-500 mt-2 px-2 text-sm sm:text-base">
            From Special Forces Medic to Software Developer, my unique
            background enables me to deliver innovative solutions and tackle
            complex challenges.
          </p>
          <div className="align-center mt-4 flex justify-center">
            <SocialLink icon={RiLinkedinBoxLine} href={data.social.linkedin} />
            <SocialLink icon={RiGithubLine} href={data.social.github} />
            <SocialLink
              icon={RiMailLine}
              href={`"https://mail.google.com/mail/?view=cm&fs=1&to=" + ${data.social.email}`}
            />
            <span className="sr-only">Email</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
