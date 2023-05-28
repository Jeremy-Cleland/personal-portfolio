import TypewriterText from "../components/reusable/TypewriterText.jsx";

import { motion as m } from "framer-motion";

const Resume = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
      className="container mx-auto"
    >
      <div className="mt-10 sm:mt-20 xl:mt-36 2xl:mt-48">
        <m.h1
          animate={{ y: 0 }}
          initial={{ y: "10vh" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center font-SourceCodePro text-4xl font-black tracking-wide md:text-right"
        >
          <TypewriterText text="Jeremy Cleland" tag="h1" />
        </m.h1>
        <m.h2
          animate={{ y: 0 }}
          initial={{ y: "10vh" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center font-Fira text-2xl tracking-wide md:text-right"
        >
          <TypewriterText text="Software Developer" tag="h2" delay={1000} />
        </m.h2>
      </div>
    </m.div>
  );
};
export default Resume;
