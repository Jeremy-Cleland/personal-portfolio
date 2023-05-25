import { motion as m } from "framer-motion";
import { aboutMeData } from "../../data/aboutMeData.jsx";
import { ReactComponent as ExcelsiorUniversity } from "../../assets/logos/ExcelsiorUniversity.svg";
import { ReactComponent as SpecialForces } from "../../assets/logos/SpecialForces.svg";
import { ReactComponent as UnitedStatesArmy } from "../../assets/logos/UnitedStatesArmy.svg";
import { ReactComponent as Group } from "../../assets/logos/7THSFG.svg";

const AboutBio = () => {
  const { bio3 } = aboutMeData;
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
      <div className="group relative mx-auto flex w-full items-center justify-center">
        <div className="absolute -inset-[.05px] mx-auto max-w-4xl animate-tilt rounded-2xl bg-gradient-to-r from-violet-300 to-violet-900 opacity-40 blur transition duration-200 group-hover:opacity-100 group-hover:duration-200 dark:opacity-20"></div>
        <div className="relative flex h-full items-center rounded-2xl bg-dark-100 dark:bg-dark-900">
          <m.div className="text-md max-w-4xl px-16 py-8 leading-6">
            <p className="w-full py-2">{bio3[0]}</p>
            <SpecialForces className="float-right m-3 h-24" />
            <p className="py-2">{bio3[1]}</p>
            <Group className="float-left m-3 h-20 pr-2" />

            <p className="py-2">{bio3[2]}</p>

            <p>{bio3[3]}</p>
            <UnitedStatesArmy className="float-left m-3 h-20 pr-2" />

            <p className="py-2">{bio3[4]}</p>

            <ExcelsiorUniversity className="float-right m-3 h-24" />
            <p className="py-2">{bio3[5]}</p>

            <p className="py-2">{bio3[6]}</p>

            <p className="py-2">{bio3[7]}</p>

            <p className="py-2">{bio3[8]}</p>
          </m.div>
        </div>
      </div>
    </m.div>
  );
};
export default AboutBio;
