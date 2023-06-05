import { motion as m } from "framer-motion";

const ResumeHeader = () => {
  return (
    <div className="my-5 mt-10 border-b-4 border-violet-400 py-5 text-center font-SourceCodePro text-dark-900 dark:text-gray-200 sm:mt-20 md:my-10 xl:mt-36 2xl:mt-48">
      <m.h1
        animate={{ y: 0 }}
        initial={{ y: "3vh" }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-right font-ChillaxBold text-4xl font-bold tracking-wide 
          "
      >
        Resume
      </m.h1>
    </div>
  );
};

export default ResumeHeader;
