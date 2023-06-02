import { motion as m } from "framer-motion";
import { slideInVariant } from "../../utils/variants";

const ContactHeader = () => {
  return (
    <m.div
      variants={slideInVariant("right")}
      initial="hidden"
      animate="show"
      className="container mx-auto"
    >
      <div className="mb-24 mt-10">
        <div className="my-5 mt-10 border-b-4 border-violet-400 py-5 text-center font-SourceCodePro text-dark-900 dark:text-gray-200 sm:mt-20 md:my-10 xl:mt-36 2xl:mt-48">
          <h2 className="text-center font-SourceCodePro text-4xl font-bold tracking-wide md:text-right">
            Contact Me
          </h2>
          <p className="text center pt-3 font-SourceCodePro text-xs tracking-wide md:text-right md:text-sm">
            Open to opportunities and collaborations that foster growth and
            impact
          </p>
        </div>
      </div>
    </m.div>
  );
};
export default ContactHeader;
