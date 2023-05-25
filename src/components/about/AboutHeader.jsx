import { motion as m } from "framer-motion";

const AboutHeader = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeIn",
        duration: 0.3,
        delay: 0.3,
      }}
      className="container mx-auto"
    >
      <h3 className="my-5 border-b-4 border-violet-400 py-5 text-center text-xl font-black leading-4 tracking-widest text-dark-900 dark:text-gray-200 md:my-10 md:text-2xl">
        ABOUT ME
      </h3>
    </m.div>
  );
};
export default AboutHeader;
