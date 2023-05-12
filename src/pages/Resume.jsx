import data from "../data/data.jsx";
// import image from "../assets/img/profilePic.png";
import SocialLink from "../components/sidebar/SocialLink.jsx";
import { RiGithubLine, RiLinkedinBoxLine, RiMailLine } from "react-icons/ri";

const Resume = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen font-SourceCodePro">
      <div>
        <h3 className="pb-4 mt-10 mb-3 font-black text-center border-b-4 text-md border-violet-400 font-SourceCodePro text-dark-900 dark:text-gray-200 sm:mt-16 sm:text-xl">
          Resume
        </h3>
      </div>
      <div className="group relative mx-auto mt-10 flex w-[50%] items-center justify-center ">
        <div className="absolute -inset-0.5 animate-tilt rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
        <div className="relative flex items-center py-4 bg-gray-200 rounded-lg px-7 dark:bg-swell-1050">
          <div className="mt-5 text-center">
            <h1 className="text-2xl font-semibold text-indigo-400 sm:text-3xl">
              {data.name}
            </h1>
            <h2 className="text-lg text-gray-900 dark:text-dark-50 sm:text-lg">
              {data.title}
            </h2>
            <p className="px-2 mt-2 text-sm text-gray-900 dark:text-dark-50 sm:text-base">
              From Special Forces Medic to Software Developer, my unique
              background enables me to deliver innovative solutions and tackle
              complex challenges.
            </p>
            <div>
              <h2 className="my-8 font-semibold text-md dark:text-dark-50">
                Languages & Skills
              </h2>
              <div className="grid justify-center grid-cols-3 grid-rows-3 mx-auto ">
                {data.skillbadge.map((skills, index) => (
                  <div
                    key={index}
                    className="grid flex-col w-20 h-20 mx-auto dark:text-gray-200"
                  >
                    {skills.icon}
                    <p className="text-xs text-center text-indigo-400">
                      {skills.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center w-32 mx-auto text-sm align-center ">
              <SocialLink
                icon={RiLinkedinBoxLine}
                href={data.social.linkedin}
              />
              <SocialLink
                size="w-8 h-8"
                icon={RiGithubLine}
                href={data.social.github}
              />
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

export default Resume;
