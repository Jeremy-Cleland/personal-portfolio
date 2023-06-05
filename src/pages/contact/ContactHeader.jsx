import { motion as m } from "framer-motion";

const ContactHeader = () => {
  return (
    <div className="container mx-auto">
      <div className="mb-24 mt-10">
        <div className="my-5 mt-10 border-b-4 border-violet-400 py-5 text-center font-ChillaxSemiBold text-dark-900 dark:text-gray-200 sm:mt-20 md:my-10 xl:mt-36 2xl:mt-48">
          <m.h1
            animate={{ y: 0 }}
            initial={{ y: "3vh" }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-right font-ChillaxBold text-4xl font-bold tracking-wide 
          "
          >
            Contact Me
          </m.h1>
          <m.h2
            animate={{ y: 0 }}
            initial={{ y: "3vh" }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-right font-SourceCodePro text-sm font-bold tracking-wide 
          "
          >
            Open to opportunities and collaborations that foster growth and
            impact
          </m.h2>
        </div>
      </div>
    </div>
  );
};
export default ContactHeader;
