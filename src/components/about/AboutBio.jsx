import { motion as m } from "framer-motion";
import { aboutMeData } from "../../data/aboutMeData.jsx";

import { ReactComponent as ExcelsiorUniversity } from "../../assets/logos/ExcelsiorUniversity.svg";
import { ReactComponent as SpecialForcesBadge } from "../../assets/logos/SpecialForcesBadge.svg";
import { ReactComponent as SpecialForces } from "../../assets/logos/SpecialForces.svg";
import { ReactComponent as UnitedStatesArmy } from "../../assets/logos/UnitedStatesArmy.svg";
import { ReactComponent as Group } from "../../assets/logos/7THSFG.svg";
import { ReactComponent as JFKSWCS } from "../../assets/logos/JFKSWCS.svg";

const AboutBio = () => {
  const { bio3, logos } = aboutMeData;
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeIn",
        duration: 1,
        delay: 0.3,
      }}
      className="container mx-auto"
    >
      {/* <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="group relative mx-auto flex w-full items-center justify-center">
          <div className="absolute -inset-[.05px] animate-tilt rounded-2xl bg-gradient-to-r from-violet-300 to-violet-900 opacity-40 blur transition duration-200 group-hover:opacity-100 group-hover:duration-200 dark:opacity-20"></div>
          <div className="relative flex h-full items-center rounded-xl bg-dark-100 p-10 dark:bg-dark-900">
            <div className="flex flex-row">
              <p className="text-md w-4/6 leading-6">{aboutMeData.bio[2]}</p>
              <SpecialForces className="ml-5 h-32" />
            </div>
          </div>
        </div> */}
      <div className="group relative mx-auto flex w-full items-center justify-center">
        <div className="absolute -inset-[.05px] mx-auto max-w-4xl animate-tilt rounded-2xl bg-gradient-to-r from-violet-300 to-violet-900 opacity-40 blur transition duration-200 group-hover:opacity-100 group-hover:duration-200 dark:opacity-20"></div>
        <div className="relative flex h-full items-center rounded-2xl bg-dark-100 dark:bg-dark-900">
          <m.div className="max-w-4xl px-16 py-8">
            <a href={logos.specialForces.link} target="_blank" rel="noreferrer">
              <SpecialForces
                className="float-right m-4 h-32 p-2"
                alt={logos.specialForces.alt}
              />
            </a>
            <p className="text-md leading-6">{bio3[0]}</p>
            <br />

            <p className="text-md max-w-2xl leading-6">{bio3[1]}</p>

            <a href={logos.group.link} target="_blank" rel="noreferrer">
              <Group
                className="float-left m-4 h-44 p-2"
                alt={logos.group.alt}
              />
            </a>

            <br />
            <p className="text-md leading-6">{bio3[2]}</p>
            <br />
            <p className="text-md leading-6">{bio3[3]}</p>
            <a
              href={logos.unitedStatesArmy.link}
              target="_blank"
              rel="noreferrer"
            >
              <UnitedStatesArmy
                className="float-right m-2 h-44 p-2"
                alt={logos.unitedStatesArmy.alt}
              />
            </a>
            <br />
            <p className="text-md leading-6">{bio3[4]}</p>
            <br />
            <a href={logos.excelsior.link} target="_blank" rel="noreferrer">
              <ExcelsiorUniversity
                className="float-left m-2 h-44 p-2"
                alt={logos.excelsior.alt}
              />
            </a>
            <p className="text-md leading-6">{bio3[5]}</p>
            <br />
            <p className="text-md leading-6">{bio3[6]}</p>
            <br />
            <p className="text-md leading-6">{bio3[7]}</p>
            <br />
            <p className="text-md leading-6">{bio3[8]}</p>
          </m.div>
        </div>
      </div>
      {/* </div> */}
    </m.div>
  );
};
export default AboutBio;
