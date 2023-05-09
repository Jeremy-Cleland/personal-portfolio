import React from "react";
import data from "../data/data.jsx";
import image from "../assets/img/profilePic.png";
import SocialLink from "../components/sidebar/SocialLink.jsx";
import { RiGithubLine, RiLinkedinBoxLine, RiMailLine } from "react-icons/ri";

const Home = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center font-SourceCodePro">
      <div className="group relative mx-auto flex w-4/5 items-center justify-center ">
        <div className="absolute -inset-0.5 animate-tilt rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
        <div className="relative flex items-center rounded-lg bg-gray-200 px-7 py-4 dark:bg-swell-1050">
          <div className="mt-5 text-center">
            <img
              className="mx-auto w-32 rounded-full"
              src={image}
              alt="Profile face"
            />
            <h1 className="text-2xl font-semibold text-indigo-400 sm:text-3xl">
              {data.name}
            </h1>
            <h2 className="text-lgtext-gray-600 sm:text-xl">{data.title}</h2>
            <p className="mt-2 px-2 text-sm text-gray-600 dark:text-dark-50 sm:text-base">
              From Special Forces Medic to Software Developer, my unique
              background enables me to deliver innovative solutions and tackle
              complex challenges.
            </p>
            <div className="align-center mt-4 flex justify-center">
              <SocialLink
                icon={RiLinkedinBoxLine}
                href={data.social.linkedin}
              />
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
    </div>
  );
};

export default Home;
