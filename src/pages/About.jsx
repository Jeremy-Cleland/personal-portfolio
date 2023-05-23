import data from "../data/data.jsx";

import SocialLink from "../components/sidebar/SocialLink.jsx";
import { RiGithubLine, RiLinkedinBoxLine, RiMailLine } from "react-icons/ri";

const About = () => {
  return (
    <section className="flex min-h-screen w-full flex-col">
      <div>
        <h3 className="my-5 border-b-4 border-violet-400 py-5 text-center text-xl font-black leading-4 tracking-widest text-dark-900 dark:text-gray-200 md:my-10 md:text-2xl">
          About Me
        </h3>
      </div>
      <div className="grid auto-cols-max grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="group relative mx-auto mt-10 flex">
          <div className="absolute -inset-0.5 w-full animate-tilt rounded-2xl bg-gradient-to-r from-[#5DD9C1] to-[#A986C7] opacity-60 blur transition duration-200 group-hover:opacity-100 group-hover:duration-200"></div>
          <div className="relative flex rounded-2xl bg-dark-100 px-7 py-4 dark:bg-dark-900">
            <div className="mt-5 text-center">
              <h2 className="text-lg font-bold text-dark-900 dark:text-dark-50 sm:text-lg">
                {data.title}
              </h2>
              <p className="mt-2 px-2 text-center text-sm text-dark-900 dark:text-dark-50 sm:text-base">
                From Special Forces Medic to Software Developer, my unique
                background enables me to deliver innovative solutions and tackle
                complex challenges.
              </p>
            </div>
          </div>
        </div>
        <div className="group relative mx-auto mt-10 flex">
          <div className="absolute -inset-0.5 w-full animate-tilt rounded-2xl bg-gradient-to-r from-[#5DD9C1] to-[#A986C7] opacity-60 blur transition duration-200 group-hover:opacity-100 group-hover:duration-200"></div>
          <div className="relative flex rounded-2xl bg-dark-100 px-7 py-4 dark:bg-dark-900">
            <div className="mt-5 text-center">
              <p className="mt-2 px-2 text-center text-sm text-dark-900 dark:text-dark-50 sm:text-base">
                {data.about.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
