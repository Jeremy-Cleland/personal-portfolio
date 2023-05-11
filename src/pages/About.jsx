import data from "../data/data.jsx";
// import image from "../assets/img/profilePic.png";
import SocialLink from "../components/sidebar/SocialLink.jsx";
import { RiGithubLine, RiLinkedinBoxLine, RiMailLine } from "react-icons/ri";

const About = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center font-SourceCodePro">
      <span className="select-noneflex-col pb-10 font-SourceCodePro text-3xl font-black tracking-widest text-[#7FD6C2]">
        About
      </span>
      <div className="group relative mx-auto flex w-[50%] items-center justify-center">
        <div className="absolute -inset-0.5 animate-tilt rounded-2xl bg-gradient-to-r from-[#5DD9C1] to-[#A986C7] opacity-60 blur transition duration-200 group-hover:opacity-100 group-hover:duration-200"></div>
        <div className="relative flex items-center rounded-2xl bg-gray-200 px-7 py-4 dark:bg-swell-1050">
          <div className="mt-5 text-center">
            <h1 className="text-2xl font-semibold text-indigo-400 sm:text-3xl">
              {data.name}
            </h1>
            <h2 className="text-lg text-gray-600 dark:text-dark-50 sm:text-lg">
              {data.title}
            </h2>
            <p className="mt-2 px-2 text-sm text-gray-600 dark:text-dark-50 sm:text-base">
              From Special Forces Medic to Software Developer, my unique
              background enables me to deliver innovative solutions and tackle
              complex challenges.
            </p>
            <div>
              <h2 className="my-8 text-base font-semibold text-gray-600 dark:text-dark-50">
                Languages & Skills
              </h2>
              <div className="mx-auto grid grid-cols-3 grid-rows-3 justify-center">
                {data.skillbadge.map((skills, index) => (
                  <div
                    key={index}
                    className="mx-auto grid h-20 w-20 flex-col text-gray-600 dark:text-gray-200"
                  >
                    <div className="transition-all duration-100 hover:text-indigo-400">
                      {skills.icon}
                    </div>
                    <p className="text-center text-xs text-gray-600 dark:text-gray-200">
                      {skills.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="align-center mx-auto flex w-32 justify-center text-sm ">
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

export default About;
